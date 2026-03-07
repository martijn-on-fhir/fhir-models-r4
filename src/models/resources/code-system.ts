import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Identifier } from '../datatypes/identifier.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { CodeSystemContentMode } from '../enums/code-system-content-mode.js';
import { CodeSystemHierarchyMeaning } from '../enums/code-system-hierarchy-meaning.js';
import { FilterOperator } from '../enums/filter-operator.js';
import { PropertyType } from '../enums/property-type.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for CodeSystem — filter that can be used in a value set compose statement. */
export class CodeSystemFilter extends BackboneElement {

  /** Code that identifies the filter. */
  @IsOptional()
  @IsString()
  code?: string;

  /** How or why the filter is used. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Operators that can be used with the filter. */
  @IsOptional()
  @IsArray()
  @IsEnum(FilterOperator, { each: true })
  operator?: FilterOperator[];

  /** What to use for the value. */
  @IsOptional()
  @IsString()
  value?: string;

  /** Creates a new CodeSystemFilter. @param props - Initial values. */
  constructor(props?: Partial<CodeSystemFilter>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the operator array. @returns This instance for chaining. */
  addOperator(item: FilterOperator): this {
    if (!this.operator) {
      this.operator = [];
    }

    this.operator.push(item);

    return this;
  }
}

/** Backbone element for CodeSystem — additional property of the concept. */
export class CodeSystemProperty extends BackboneElement {

  /** Identifies the property on the concepts. */
  @IsOptional()
  @IsString()
  code?: string;

  /** Formal identifier for the property. */
  @IsOptional()
  @IsString()
  uri?: string;

  /** Why the property is defined and how it is used. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The type of the property value (code | Coding | string | integer | boolean | dateTime | decimal). */
  @IsOptional()
  @IsEnum(PropertyType)
  type?: PropertyType;

  /** Creates a new CodeSystemProperty. @param props - Initial values. */
  constructor(props?: Partial<CodeSystemProperty>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for CodeSystem — additional representation for the concept. */
export class CodeSystemConceptDesignation extends BackboneElement {

  /** Human language of the designation. */
  @IsOptional()
  @IsString()
  language?: string;

  /** Details how the designation is used. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  use?: Coding;

  /** The text value for this designation. */
  @IsOptional()
  @IsString()
  value?: string;

  /** Creates a new CodeSystemConceptDesignation. @param props - Initial values. */
  constructor(props?: Partial<CodeSystemConceptDesignation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for CodeSystem — property value for a concept. */
export class CodeSystemConceptProperty extends BackboneElement {

  /** Reference to CodeSystem.property.code. */
  @IsOptional()
  @IsString()
  code?: string;

  /** Value of the property for this concept, as a code. */
  @IsOptional()
  @IsString()
  valueCode?: string;

  /** Value of the property for this concept, as a Coding. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  valueCoding?: Coding;

  /** Value of the property for this concept, as a string. */
  @IsOptional()
  @IsString()
  valueString?: string;

  /** Value of the property for this concept, as an integer. */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /** Value of the property for this concept, as a boolean. */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  /** Value of the property for this concept, as a dateTime. */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  /** Value of the property for this concept, as a decimal. */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /** Creates a new CodeSystemConceptProperty. @param props - Initial values. */
  constructor(props?: Partial<CodeSystemConceptProperty>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for CodeSystem — concepts in the code system. */
export class CodeSystemConcept extends BackboneElement {

  /** Code that identifies the concept. */
  @IsOptional()
  @IsString()
  code?: string;

  /** Text to display to the user. */
  @IsOptional()
  @IsString()
  display?: string;

  /** Formal definition of the concept. */
  @IsOptional()
  @IsString()
  definition?: string;

  /** Additional representations for the concept. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeSystemConceptDesignation)
  designation?: CodeSystemConceptDesignation[];

  /** Property values for this concept. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeSystemConceptProperty)
  property?: CodeSystemConceptProperty[];

  /** Child concepts. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeSystemConcept)
  concept?: CodeSystemConcept[];

  /** Creates a new CodeSystemConcept. @param props - Initial values. */
  constructor(props?: Partial<CodeSystemConcept>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the designation array. @returns This instance for chaining. */
  addDesignation(item: CodeSystemConceptDesignation): this {
    if (!this.designation) {
      this.designation = [];
    }

    this.designation.push(item);

    return this;
  }

  /** Adds an item to the property array. @returns This instance for chaining. */
  addProperty(item: CodeSystemConceptProperty): this {
    if (!this.property) {
      this.property = [];
    }

    this.property.push(item);

    return this;
  }

  /** Adds an item to the concept array. @returns This instance for chaining. */
  addConcept(item: CodeSystemConcept): this {
    if (!this.concept) {
      this.concept = [];
    }

    this.concept.push(item);

    return this;
  }
}

/** FHIR R4 CodeSystem — a set of codes drawn from one or more code systems. */
export class CodeSystem extends DomainResource {

  /** The FHIR resource type string. */
  readonly resourceType = 'CodeSystem';

  /** Canonical identifier for this code system. */
  @IsOptional()
  @IsString()
  url?: string;

  /** Additional business identifiers for the code system. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Business version of the code system. */
  @IsOptional()
  @IsString()
  version?: string;

  /** Computer-friendly name for the code system. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Human-friendly name for the code system. */
  @IsOptional()
  @IsString()
  title?: string;

  /** Publication status (draft | active | retired | unknown). */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** For testing purposes, not real usage. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** Date last changed. */
  @IsOptional()
  @IsString()
  date?: string;

  /** Name of the publisher. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details for the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** Natural language description of the code system. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Context the content is intended to support. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** Intended jurisdiction for the code system. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Why this code system is defined. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** Use and/or publishing restrictions. */
  @IsOptional()
  @IsString()
  copyright?: string;

  /** If code comparison is case sensitive. */
  @IsOptional()
  @IsBoolean()
  caseSensitive?: boolean;

  /** Canonical reference to the value set with the entire code system. */
  @IsOptional()
  @IsString()
  valueSet?: string;

  /** The meaning of the hierarchy of concepts (grouped-by | is-a | part-of | classified-with). */
  @IsOptional()
  @IsEnum(CodeSystemHierarchyMeaning)
  hierarchyMeaning?: CodeSystemHierarchyMeaning;

  /** If the code system defines a compositional grammar. */
  @IsOptional()
  @IsBoolean()
  compositional?: boolean;

  /** If definitions are not stable. */
  @IsOptional()
  @IsBoolean()
  versionNeeded?: boolean;

  /** How much of the content of the code system is represented in this resource. */
  @IsOptional()
  @IsEnum(CodeSystemContentMode)
  content?: CodeSystemContentMode;

  /** Canonical URL of the code system this supplements. */
  @IsOptional()
  @IsString()
  supplements?: string;

  /** Total concepts in the code system. */
  @IsOptional()
  @IsNumber()
  count?: number;

  /** Filter that can be used in a value set compose statement. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeSystemFilter)
  filter?: CodeSystemFilter[];

  /** Additional properties for concepts. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeSystemProperty)
  property?: CodeSystemProperty[];

  /** Concepts in the code system. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeSystemConcept)
  concept?: CodeSystemConcept[];

  /** Creates a new CodeSystem. @param props - Initial values. */
  constructor(props?: Partial<CodeSystem>) {
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

  /** Adds an item to the filter array. @returns This instance for chaining. */
  addFilter(item: CodeSystemFilter): this {
    if (!this.filter) {
      this.filter = [];
    }

    this.filter.push(item);

    return this;
  }

  /** Adds an item to the property array. @returns This instance for chaining. */
  addProperty(item: CodeSystemProperty): this {
    if (!this.property) {
      this.property = [];
    }

    this.property.push(item);

    return this;
  }

  /** Adds an item to the concept array. @returns This instance for chaining. */
  addConcept(item: CodeSystemConcept): this {
    if (!this.concept) {
      this.concept = [];
    }

    this.concept.push(item);

    return this;
  }
}
