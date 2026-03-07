import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Identifier } from '../datatypes/identifier.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { ExtensionContextType } from '../enums/extension-context-type.js';
import { PublicationStatus } from '../enums/publication-status.js';
import { StructureDefinitionKind } from '../enums/structure-definition-kind.js';
import { TypeDerivationRule } from '../enums/type-derivation-rule.js';

/** Backbone element for StructureDefinition. */
export class StructureDefinitionMapping extends BackboneElement {

  /** An internal id that is used to identify this mapping set. */
  @IsOptional()
  @IsString()
  identity?: string;

  /** An absolute URI that identifies the specification that this mapping is expressed to. */
  @IsOptional()
  @IsString()
  uri?: string;

  /** A name for the specification that is being mapped to. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Comments about this mapping, including version notes and other issues. */
  @IsOptional()
  @IsString()
  comment?: string;

  /** Creates a new StructureDefinitionMapping. @param props - Initial values. */
  constructor(props?: Partial<StructureDefinitionMapping>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for StructureDefinition. */
export class StructureDefinitionContext extends BackboneElement {

  /** Defines how to interpret the expression that defines what the context of the extension is. */
  @IsOptional()
  @IsEnum(ExtensionContextType)
  type?: ExtensionContextType;

  /** An expression that defines where an extension can be used in resources. */
  @IsOptional()
  @IsString()
  expression?: string;

  /** Creates a new StructureDefinitionContext. @param props - Initial values. */
  constructor(props?: Partial<StructureDefinitionContext>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for StructureDefinition. */
export class StructureDefinitionSnapshot extends BackboneElement {

  /** Captures constraints on each element within the resource. */
  @IsOptional()
  @IsArray()
  element?: any[];

  /** Creates a new StructureDefinitionSnapshot. @param props - Initial values. */
  constructor(props?: Partial<StructureDefinitionSnapshot>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the element array. @returns This instance for chaining. */
  addElement(item: any): this {
    if (!this.element) {
      this.element = [];
    }

    this.element.push(item);

    return this;
  }
}

/** Backbone element for StructureDefinition. */
export class StructureDefinitionDifferential extends BackboneElement {

  /** Captures constraints on each element within the resource, profile, or extension. */
  @IsOptional()
  @IsArray()
  element?: any[];

  /** Creates a new StructureDefinitionDifferential. @param props - Initial values. */
  constructor(props?: Partial<StructureDefinitionDifferential>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the element array. @returns This instance for chaining. */
  addElement(item: any): this {
    if (!this.element) {
      this.element = [];
    }

    this.element.push(item);

    return this;
  }
}

/** FHIR R4 StructureDefinition — a definition of a FHIR structure including data elements and constraints. */
export class StructureDefinition extends DomainResource {

  readonly resourceType = 'StructureDefinition';

  /** An absolute URI that identifies this structure definition uniquely. */
  @IsOptional()
  @IsString()
  url?: string;

  /** A formal identifier for this structure definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The business version of the structure definition. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the structure definition. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short human-readable label for the structure definition. */
  @IsOptional()
  @IsString()
  title?: string;

  /** The publication status of the structure definition. */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** Whether this structure definition is for testing purposes rather than real usage. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** The date the structure definition was last changed. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization or individual that published the structure definition. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details for the publisher of the structure definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the structure definition. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The context in which the structure definition content is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the structure definition is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Explanation of why this structure definition is needed. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** A copyright statement for the structure definition. */
  @IsOptional()
  @IsString()
  copyright?: string;

  /** A set of key words or terms from external terminologies that may assist with indexing. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  keyword?: Coding[];

  /** The version of the FHIR specification on which this structure definition is based. */
  @IsOptional()
  @IsString()
  fhirVersion?: string;

  /** An external specification that the content is mapped to. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureDefinitionMapping)
  mapping?: StructureDefinitionMapping[];

  /** Defines the kind of structure that this definition is describing. */
  @IsOptional()
  @IsEnum(StructureDefinitionKind)
  kind?: StructureDefinitionKind;

  /** Whether the structure is abstract and cannot be used directly. */
  @IsOptional()
  @IsBoolean()
  abstract?: boolean;

  /** Identifies the types of resource or data type elements to which the extension can be applied. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureDefinitionContext)
  context?: StructureDefinitionContext[];

  /** A set of rules as FHIRPath invariants about when the extension can be used. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  contextInvariant?: string[];

  /** The type this structure describes. */
  @IsOptional()
  @IsString()
  type?: string;

  /** An absolute URI that is the base structure from which this type is derived. */
  @IsOptional()
  @IsString()
  baseDefinition?: string;

  /** How the type relates to the baseDefinition (specialization or constraint). */
  @IsOptional()
  @IsEnum(TypeDerivationRule)
  derivation?: TypeDerivationRule;

  /** A snapshot view of the structure. */
  @IsOptional()
  @ValidateNested()
  @Type(() => StructureDefinitionSnapshot)
  snapshot?: StructureDefinitionSnapshot;

  /** A differential view of the structure. */
  @IsOptional()
  @ValidateNested()
  @Type(() => StructureDefinitionDifferential)
  differential?: StructureDefinitionDifferential;

  /** Creates a new StructureDefinition. @param props - Initial values. */
  constructor(props?: Partial<StructureDefinition>) {
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

  /** Adds an item to the keyword array. @returns This instance for chaining. */
  addKeyword(item: Coding): this {
    if (!this.keyword) {
      this.keyword = [];
    }

    this.keyword.push(item);

    return this;
  }

  /** Adds an item to the mapping array. @returns This instance for chaining. */
  addMapping(item: StructureDefinitionMapping): this {
    if (!this.mapping) {
      this.mapping = [];
    }

    this.mapping.push(item);

    return this;
  }

  /** Adds an item to the context array. @returns This instance for chaining. */
  addContext(item: StructureDefinitionContext): this {
    if (!this.context) {
      this.context = [];
    }

    this.context.push(item);

    return this;
  }

  /** Adds an item to the contextInvariant array. @returns This instance for chaining. */
  addContextInvariant(item: string): this {
    if (!this.contextInvariant) {
      this.contextInvariant = [];
    }

    this.contextInvariant.push(item);

    return this;
  }
}
