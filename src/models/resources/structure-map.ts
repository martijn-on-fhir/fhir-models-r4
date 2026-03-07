import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Identifier } from '../datatypes/identifier.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for StructureMap. */
export class StructureMapStructure extends BackboneElement {

  /** The canonical reference to the structure definition. */
  @IsOptional()
  @IsString()
  url?: string;

  /** How the referenced structure is used (source or target). */
  @IsOptional()
  @IsString()
  mode?: string;

  /** The name used for this type in the map. */
  @IsOptional()
  @IsString()
  alias?: string;

  /** Documentation that describes how the structure is used in the mapping. */
  @IsOptional()
  @IsString()
  documentation?: string;

  /** Creates a new StructureMapStructure. @param props - Initial values. */
  constructor(props?: Partial<StructureMapStructure>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for StructureMap. */
export class StructureMapGroupInput extends BackboneElement {

  /** Name for this instance of data. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Type for this instance of data. */
  @IsOptional()
  @IsString()
  type?: string;

  /** Mode for this instance of data (source or target). */
  @IsOptional()
  @IsString()
  mode?: string;

  /** Documentation for this instance of data. */
  @IsOptional()
  @IsString()
  documentation?: string;

  /** Creates a new StructureMapGroupInput. @param props - Initial values. */
  constructor(props?: Partial<StructureMapGroupInput>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for StructureMap. */
export class StructureMapGroupRuleTargetParameter extends BackboneElement {

  /** Parameter value as an id. */
  @IsOptional()
  @IsString()
  valueId?: string;

  /** Parameter value as a string. */
  @IsOptional()
  @IsString()
  valueString?: string;

  /** Parameter value as a boolean. */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  /** Parameter value as an integer. */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /** Parameter value as a decimal. */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /** Creates a new StructureMapGroupRuleTargetParameter. @param props - Initial values. */
  constructor(props?: Partial<StructureMapGroupRuleTargetParameter>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for StructureMap. */
export class StructureMapGroupRuleTarget extends BackboneElement {

  /** Type or variable this rule applies to. */
  @IsOptional()
  @IsString()
  context?: string;

  /** How to interpret the context. */
  @IsOptional()
  @IsString()
  contextType?: string;

  /** Field to create in the context. */
  @IsOptional()
  @IsString()
  element?: string;

  /** Named context for field, if desired, and a field is specified. */
  @IsOptional()
  @IsString()
  variable?: string;

  /** If field is a list, how to manage the list (e.g., first, share, last). */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  listMode?: string[];

  /** Internal rule reference for shared list items. */
  @IsOptional()
  @IsString()
  listRuleId?: string;

  /** How the data is copied or created. */
  @IsOptional()
  @IsString()
  transform?: string;

  /** Parameters to the transform. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapGroupRuleTargetParameter)
  parameter?: StructureMapGroupRuleTargetParameter[];

  /** Creates a new StructureMapGroupRuleTarget. @param props - Initial values. */
  constructor(props?: Partial<StructureMapGroupRuleTarget>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the listMode array. @returns This instance for chaining. */
  addListMode(item: string): this {
    if (!this.listMode) {
      this.listMode = [];
    }

    this.listMode.push(item);

    return this;
  }

  /** Adds an item to the parameter array. @returns This instance for chaining. */
  addParameter(item: StructureMapGroupRuleTargetParameter): this {
    if (!this.parameter) {
      this.parameter = [];
    }

    this.parameter.push(item);

    return this;
  }
}

/** Backbone element for StructureMap. */
export class StructureMapGroupRuleSource extends BackboneElement {

  /** Type or variable this rule applies to. */
  @IsOptional()
  @IsString()
  context?: string;

  /** Specified minimum cardinality for the element. */
  @IsOptional()
  @IsNumber()
  min?: number;

  /** Specified maximum cardinality for the element. */
  @IsOptional()
  @IsString()
  max?: string;

  /** Specified type for the element. */
  @IsOptional()
  @IsString()
  type?: string;

  /** A default value to use if there is no source value, as a string. */
  @IsOptional()
  @IsString()
  defaultValueString?: string;

  /** Optional field for this source. */
  @IsOptional()
  @IsString()
  element?: string;

  /** How to handle the list mode for this element. */
  @IsOptional()
  @IsString()
  listMode?: string;

  /** Named context for field, if a field is specified. */
  @IsOptional()
  @IsString()
  variable?: string;

  /** FHIRPath expression - must be true or the rule does not apply. */
  @IsOptional()
  @IsString()
  condition?: string;

  /** FHIRPath expression - must be true or the mapping engine throws an error. */
  @IsOptional()
  @IsString()
  check?: string;

  /** A FHIRPath expression which specifies a message to put in the transform log when content matches. */
  @IsOptional()
  @IsString()
  logMessage?: string;

  /** Creates a new StructureMapGroupRuleSource. @param props - Initial values. */
  constructor(props?: Partial<StructureMapGroupRuleSource>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for StructureMap. */
export class StructureMapGroupRuleDependent extends BackboneElement {

  /** Name of a rule or group to apply. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Variable to pass to the rule or group. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  variable?: string[];

  /** Creates a new StructureMapGroupRuleDependent. @param props - Initial values. */
  constructor(props?: Partial<StructureMapGroupRuleDependent>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the variable array. @returns This instance for chaining. */
  addVariable(item: string): this {
    if (!this.variable) {
      this.variable = [];
    }

    this.variable.push(item);

    return this;
  }
}

/** Backbone element for StructureMap. */
export class StructureMapGroupRule extends BackboneElement {

  /** Name of the rule for internal references. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Source inputs to the mapping. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapGroupRuleSource)
  source?: StructureMapGroupRuleSource[];

  /** Content to create because of this mapping rule. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapGroupRuleTarget)
  target?: StructureMapGroupRuleTarget[];

  /** Rules contained in this rule. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapGroupRule)
  rule?: StructureMapGroupRule[];

  /** Which other rules to apply in the context of this rule. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapGroupRuleDependent)
  dependent?: StructureMapGroupRuleDependent[];

  /** Documentation for this instance of data. */
  @IsOptional()
  @IsString()
  documentation?: string;

  /** Creates a new StructureMapGroupRule. @param props - Initial values. */
  constructor(props?: Partial<StructureMapGroupRule>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the source array. @returns This instance for chaining. */
  addSource(item: StructureMapGroupRuleSource): this {
    if (!this.source) {
      this.source = [];
    }

    this.source.push(item);

    return this;
  }

  /** Adds an item to the target array. @returns This instance for chaining. */
  addTarget(item: StructureMapGroupRuleTarget): this {
    if (!this.target) {
      this.target = [];
    }

    this.target.push(item);

    return this;
  }

  /** Adds an item to the rule array. @returns This instance for chaining. */
  addRule(item: StructureMapGroupRule): this {
    if (!this.rule) {
      this.rule = [];
    }

    this.rule.push(item);

    return this;
  }

  /** Adds an item to the dependent array. @returns This instance for chaining. */
  addDependent(item: StructureMapGroupRuleDependent): this {
    if (!this.dependent) {
      this.dependent = [];
    }

    this.dependent.push(item);

    return this;
  }
}

/** Backbone element for StructureMap. */
export class StructureMapGroup extends BackboneElement {

  /** A unique name for the group for the convenience of human readers. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Another group that this group adds rules to. */
  @IsOptional()
  @IsString()
  extends?: string;

  /** If this is the default rule set to apply for the source type or this combination of types. */
  @IsOptional()
  @IsString()
  typeMode?: string;

  /** Additional supporting documentation that explains the purpose of the group. */
  @IsOptional()
  @IsString()
  documentation?: string;

  /** A name assigned to an instance of data. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapGroupInput)
  input?: StructureMapGroupInput[];

  /** Transform rules from source to target. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapGroupRule)
  rule?: StructureMapGroupRule[];

  /** Creates a new StructureMapGroup. @param props - Initial values. */
  constructor(props?: Partial<StructureMapGroup>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the input array. @returns This instance for chaining. */
  addInput(item: StructureMapGroupInput): this {
    if (!this.input) {
      this.input = [];
    }

    this.input.push(item);

    return this;
  }

  /** Adds an item to the rule array. @returns This instance for chaining. */
  addRule(item: StructureMapGroupRule): this {
    if (!this.rule) {
      this.rule = [];
    }

    this.rule.push(item);

    return this;
  }
}

/** FHIR R4 StructureMap — a Map of relationships between two structures that can be used to transform data. */
export class StructureMap extends DomainResource {

  readonly resourceType = 'StructureMap';

  /** An absolute URI that identifies this structure map uniquely. */
  @IsOptional()
  @IsString()
  url?: string;

  /** A formal identifier for this structure map. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The business version of the structure map. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the structure map. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short human-readable label for the structure map. */
  @IsOptional()
  @IsString()
  title?: string;

  /** The publication status of the structure map. */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** Whether this structure map is for testing purposes rather than real usage. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** The date the structure map was last changed. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization or individual that published the structure map. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details for the publisher of the structure map. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the structure map. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The context in which the structure map content is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the structure map is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Explanation of why this structure map is needed. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** A copyright statement for the structure map. */
  @IsOptional()
  @IsString()
  copyright?: string;

  /** A structure definition used by this map. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapStructure)
  structure?: StructureMapStructure[];

  /** Other maps used by this map (canonical URLs). */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  import?: string[];

  /** Organizes the mapping into manageable chunks for human review/ease of maintenance. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapGroup)
  group?: StructureMapGroup[];

  /** Creates a new StructureMap. @param props - Initial values. */
  constructor(props?: Partial<StructureMap>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the identifier array. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds an item to the contact array. @returns This instance for chaining. */
  addContact(item: ContactDetail): this {
    if (!this.contact) {
      this.contact = [];
    }

    this.contact.push(item);

    return this;
  }

  /** Adds an item to the useContext array. @returns This instance for chaining. */
  addUseContext(item: UsageContext): this {
    if (!this.useContext) {
      this.useContext = [];
    }

    this.useContext.push(item);

    return this;
  }

  /** Adds an item to the jurisdiction array. @returns This instance for chaining. */
  addJurisdiction(item: CodeableConcept): this {
    if (!this.jurisdiction) {
      this.jurisdiction = [];
    }

    this.jurisdiction.push(item);

    return this;
  }

  /** Adds an item to the structure array. @returns This instance for chaining. */
  addStructure(item: StructureMapStructure): this {
    if (!this.structure) {
      this.structure = [];
    }

    this.structure.push(item);

    return this;
  }

  /** Adds an item to the import array. @returns This instance for chaining. */
  addImport(item: string): this {
    if (!this.import) {
      this.import = [];
    }

    this.import.push(item);

    return this;
  }

  /** Adds an item to the group array. @returns This instance for chaining. */
  addGroup(item: StructureMapGroup): this {
    if (!this.group) {
      this.group = [];
    }

    this.group.push(item);

    return this;
  }
}
