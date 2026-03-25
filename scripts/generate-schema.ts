import { Project, ClassDeclaration, EnumDeclaration, PropertyDeclaration, SyntaxKind, Node } from 'ts-morph';
import { resolve, dirname } from 'path';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ── Config ──────────────────────────────────────────────────────────
const ROOT = resolve(__dirname, '..');
const MODELS_GLOB = 'src/models/**/*.ts';
const OUT_FILE = resolve(ROOT, 'fhir-schemas.json');

// ── ts-morph project (read-only, no emit) ───────────────────────────
const project = new Project({
  tsConfigFilePath: resolve(ROOT, 'tsconfig.json'),
  skipAddingFilesFromTsConfig: true,
});

const files = glob.sync(MODELS_GLOB, { cwd: ROOT, absolute: true });
project.addSourceFilesAtPaths(files);

// ── Collect all enums ───────────────────────────────────────────────
const enumMap = new Map<string, string[]>();

for (const sf of project.getSourceFiles()) {
  for (const enumDecl of sf.getEnums()) {
    const name = enumDecl.getName();
    const values = enumDecl.getMembers().map(m => {
      const init = m.getInitializer();
      return init ? init.getText().replace(/^['"]|['"]$/g, '') : m.getName();
    });
    enumMap.set(name, values);
  }
}

// ── Collect all classes ─────────────────────────────────────────────
const classMap = new Map<string, ClassDeclaration>();

for (const sf of project.getSourceFiles()) {
  for (const cls of sf.getClasses()) {
    classMap.set(cls.getName()!, cls);
  }
}

// ── Helpers ─────────────────────────────────────────────────────────

/** Get the first argument text of a decorator call, e.g. @IsEnum(Foo) → "Foo" */
function getDecoratorArg(prop: PropertyDeclaration, decoratorName: string): string | undefined {
  const dec = prop.getDecorator(decoratorName);
  if (!dec) return undefined;
  const args = dec.getArguments();
  return args.length > 0 ? args[0]!.getText() : undefined;
}

/** Check if a decorator is present */
function hasDec(prop: PropertyDeclaration, name: string): boolean {
  return prop.getDecorator(name) !== undefined;
}

/** Check if decorator has { each: true } option */
function hasEachTrue(prop: PropertyDeclaration, decoratorName: string): boolean {
  const dec = prop.getDecorator(decoratorName);
  if (!dec) return false;
  const args = dec.getArguments();
  return args.some(a => a.getText().includes('each'));
}

/** Extract the class name from @Type(() => ClassName) */
function getTypeRef(prop: PropertyDeclaration): string | undefined {
  const dec = prop.getDecorator('Type');
  if (!dec) return undefined;
  const argText = dec.getArguments()[0]?.getText() ?? '';
  const match = argText.match(/=>\s*(\w+)/);
  return match ? match[1] : undefined;
}

/** Get JSDoc description for a property */
function getDescription(prop: PropertyDeclaration): string | undefined {
  const jsDocs = prop.getJsDocs();
  if (jsDocs.length === 0) return undefined;
  const text = jsDocs[0]!.getDescription().trim();
  return text || undefined;
}

/** Get JSDoc description for a class */
function getClassDescription(cls: ClassDeclaration): string | undefined {
  const jsDocs = cls.getJsDocs();
  if (jsDocs.length === 0) return undefined;
  const text = jsDocs[0]!.getDescription().trim();
  return text || undefined;
}

/** Resolve the readonly initializer value, e.g. readonly resourceType = 'Patient' → 'Patient' */
function getConstValue(prop: PropertyDeclaration): string | undefined {
  if (!prop.isReadonly()) return undefined;
  const init = prop.getInitializer();
  if (!init) return undefined;
  const text = init.getText().replace(/^['"]|['"]$/g, '');
  return text;
}

// ── Build JSON Schema per property ──────────────────────────────────

function propertyToSchema(prop: PropertyDeclaration): Record<string, any> | null {
  const name = prop.getName();

  // Skip methods, constructor params, private members
  if (prop.getScope && (prop as any).getScope?.() === 'private') return null;

  const schema: Record<string, any> = {};

  // Description from JSDoc
  const desc = getDescription(prop);
  if (desc) schema.description = desc;

  // Const value (readonly resourceType = 'Patient')
  const constVal = getConstValue(prop);
  if (constVal) {
    schema.const = constVal;
    return schema;
  }

  // Determine if this is an array property (from decorators or TS type)
  const typeText = prop.getType().getText(prop);
  const typeNode = prop.getTypeNode()?.getText() ?? '';
  const isArray = hasDec(prop, 'IsArray') || hasEachTrue(prop, 'IsString') || hasEachTrue(prop, 'ValidateNested') || typeNode.endsWith('[]');

  // Determine the item schema
  let itemSchema: Record<string, any> = {};

  if (hasDec(prop, 'IsEnum')) {
    const enumName = getDecoratorArg(prop, 'IsEnum');
    if (enumName && enumMap.has(enumName)) {
      itemSchema = { enum: enumMap.get(enumName)! };
    } else {
      itemSchema = { type: 'string' };
    }
  } else if (hasDec(prop, 'ValidateNested')) {
    const ref = getTypeRef(prop);
    if (ref) {
      itemSchema = { $ref: `#/$defs/${ref}` };
    } else {
      itemSchema = { type: 'object' };
    }
  } else if (hasDec(prop, 'IsString')) {
    itemSchema = { type: 'string' };
  } else if (hasDec(prop, 'IsBoolean')) {
    itemSchema = { type: 'boolean' };
  } else if (hasDec(prop, 'IsNumber')) {
    itemSchema = { type: 'number' };
  } else {
    // Fallback: infer from TypeScript type annotation (strip [] suffix for array element type)
    const baseType = typeNode.replace(/\[\]$/, '');
    if (baseType === 'string') itemSchema = { type: 'string' };
    else if (baseType === 'boolean') itemSchema = { type: 'boolean' };
    else if (baseType === 'number') itemSchema = { type: 'number' };
    else if (classMap.has(baseType)) itemSchema = { $ref: `#/$defs/${baseType}` };
    else itemSchema = { type: 'object' };
  }

  if (isArray) {
    schema.type = 'array';
    schema.items = itemSchema;
  } else {
    Object.assign(schema, itemSchema);
  }

  return schema;
}

// ── Collect all properties including inherited ones ──────────────────

function getAllProperties(cls: ClassDeclaration): PropertyDeclaration[] {
  const props: PropertyDeclaration[] = [];
  const seen = new Set<string>();

  let current: ClassDeclaration | undefined = cls;
  while (current) {
    for (const prop of current.getProperties()) {
      if (!seen.has(prop.getName())) {
        seen.add(prop.getName());
        props.push(prop);
      }
    }
    // Resolve parent class
    const baseExpr = current.getExtends();
    if (baseExpr) {
      const baseName = baseExpr.getExpression().getText();
      current = classMap.get(baseName);
    } else {
      current = undefined;
    }
  }

  return props;
}

// ── Build the full schema ───────────────────────────────────────────

interface JsonSchema {
  $schema: string;
  title: string;
  description: string;
  $defs: Record<string, any>;
}

const schema: JsonSchema = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  title: 'FHIR R4 Models',
  description: 'JSON Schema generated from FHIR R4 TypeScript models with class-validator decorators.',
  $defs: {},
};

// Base/infrastructure classes to skip in top-level output
const SKIP_CLASSES = new Set(['IResource']);

// Categorize classes
const categories: Record<string, string[]> = {
  base: [],
  datatypes: [],
  resources: [],
  backbone: [],
};

for (const [name, cls] of classMap) {
  if (SKIP_CLASSES.has(name)) continue;

  const filePath = cls.getSourceFile().getFilePath();
  const allProps = getAllProperties(cls);
  const required: string[] = [];
  const properties: Record<string, any> = {};

  for (const prop of allProps) {
    const propName = prop.getName();
    const propSchema = propertyToSchema(prop);
    if (!propSchema) continue;

    properties[propName] = propSchema;

    // If a property is NOT decorated with @IsOptional(), it's required
    if (!hasDec(prop, 'IsOptional')) {
      required.push(propName);
    }
  }

  const def: Record<string, any> = { type: 'object', properties };

  // Class description
  const classDesc = getClassDescription(cls);
  if (classDesc) def.description = classDesc;

  // Inheritance info
  const baseExpr = cls.getExtends();
  if (baseExpr) {
    const baseName = baseExpr.getExpression().getText();
    def['x-fhir-extends'] = baseName;
  }

  if (required.length > 0) {
    def.required = required;
  }

  // Categorize
  if (filePath.includes('/base/')) categories.base!.push(name);
  else if (filePath.includes('/datatypes/')) categories.datatypes!.push(name);
  else if (filePath.includes('/resources/')) categories.resources!.push(name);
  else categories.backbone!.push(name);

  schema.$defs[name] = def;
}

// ── Write output ────────────────────────────────────────────────────
writeFileSync(OUT_FILE, JSON.stringify(schema, null, 2), 'utf-8');

// ── Summary ─────────────────────────────────────────────────────────
const total = Object.keys(schema.$defs).length;
console.log(`\n✅ Generated ${OUT_FILE}`);
console.log(`   ${total} definitions total:`);
console.log(`   - Base classes:    ${categories.base!.length}`);
console.log(`   - Data types:      ${categories.datatypes!.length}`);
console.log(`   - Resources:       ${categories.resources!.length}`);
console.log(`   - Backbone types:  ${categories.backbone!.length}`);
console.log(`   - Enums:           ${enumMap.size}`);