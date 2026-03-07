import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Identifier } from '../datatypes/identifier.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for ValueSet. */
export class ValueSetComposeIncludeConceptDesignation extends BackboneElement {

  /** The language this designation is defined for. */
  @IsOptional()
  @IsString()
  language?: string;

  /** A code that details how this designation would be used. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  use?: Coding;

  /** The text value for this designation. */
  @IsOptional()
  @IsString()
  value?: string;

  /** Creates a new ValueSetComposeIncludeConceptDesignation. @param props - Initial values. */
  constructor(props?: Partial<ValueSetComposeIncludeConceptDesignation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ValueSet. */
export class ValueSetComposeIncludeConcept extends BackboneElement {

  /** Specifies a code for the concept to be included or excluded. */
  @IsOptional()
  @IsString()
  code?: string;

  /** The text to display to the user for this concept in the context of this valueset. */
  @IsOptional()
  @IsString()
  display?: string;

  /** Additional representations for this concept when used in this value set. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetComposeIncludeConceptDesignation)
  designation?: ValueSetComposeIncludeConceptDesignation[];

  /** Creates a new ValueSetComposeIncludeConcept. @param props - Initial values. */
  constructor(props?: Partial<ValueSetComposeIncludeConcept>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the designation array. @returns This instance for chaining. */
  addDesignation(item: ValueSetComposeIncludeConceptDesignation): this {
    if (!this.designation) {
      this.designation = [];
    }

    this.designation.push(item);

    return this;
  }
}

/** Backbone element for ValueSet. */
export class ValueSetComposeIncludeFilter extends BackboneElement {

  /** A code that identifies a property or a filter defined in the code system. */
  @IsOptional()
  @IsString()
  property?: string;

  /** The kind of operation to perform as a part of the filter criteria. */
  @IsOptional()
  @IsString()
  op?: string;

  /** The match value may be either a code defined by the system, or a string value, which is a regex match on the literal string of the property value. */
  @IsOptional()
  @IsString()
  value?: string;

  /** Creates a new ValueSetComposeIncludeFilter. @param props - Initial values. */
  constructor(props?: Partial<ValueSetComposeIncludeFilter>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ValueSet. */
export class ValueSetComposeInclude extends BackboneElement {

  /** An absolute URI which is the code system from which the selected codes come from. */
  @IsOptional()
  @IsString()
  system?: string;

  /** The version of the code system that the codes are selected from, or the special version '*' for all versions. */
  @IsOptional()
  @IsString()
  version?: string;

  /** Specifies a concept to be included or excluded. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetComposeIncludeConcept)
  concept?: ValueSetComposeIncludeConcept[];

  /** Select concepts by specify a matching criterion based on the properties defined by the system, or on filters defined by the system. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetComposeIncludeFilter)
  filter?: ValueSetComposeIncludeFilter[];

  /** Selects the concepts found in this value set (based on its value set definition). */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  valueSet?: string[];

  /** Creates a new ValueSetComposeInclude. @param props - Initial values. */
  constructor(props?: Partial<ValueSetComposeInclude>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the concept array. @returns This instance for chaining. */
  addConcept(item: ValueSetComposeIncludeConcept): this {
    if (!this.concept) {
      this.concept = [];
    }

    this.concept.push(item);

    return this;
  }

  /** Adds an item to the filter array. @returns This instance for chaining. */
  addFilter(item: ValueSetComposeIncludeFilter): this {
    if (!this.filter) {
      this.filter = [];
    }

    this.filter.push(item);

    return this;
  }

  /** Adds an item to the valueSet array. @returns This instance for chaining. */
  addValueSet(item: string): this {
    if (!this.valueSet) {
      this.valueSet = [];
    }

    this.valueSet.push(item);

    return this;
  }
}

/** Backbone element for ValueSet. */
export class ValueSetCompose extends BackboneElement {

  /** The Locked Date is the effective date that is used to determine the version of all referenced Code Systems and ValueSet Definitions. */
  @IsOptional()
  @IsString()
  lockedDate?: string;

  /** Whether inactive codes - codes that are not approved for current use - are in the value set. */
  @IsOptional()
  @IsBoolean()
  inactive?: boolean;

  /** Include one or more codes from a code system or other value set(s). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetComposeInclude)
  include?: ValueSetComposeInclude[];

  /** Exclude one or more codes from the value set based on code system filters and/or other value sets. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetComposeInclude)
  exclude?: ValueSetComposeInclude[];

  /** Creates a new ValueSetCompose. @param props - Initial values. */
  constructor(props?: Partial<ValueSetCompose>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the include array. @returns This instance for chaining. */
  addInclude(item: ValueSetComposeInclude): this {
    if (!this.include) {
      this.include = [];
    }

    this.include.push(item);

    return this;
  }

  /** Adds an item to the exclude array. @returns This instance for chaining. */
  addExclude(item: ValueSetComposeInclude): this {
    if (!this.exclude) {
      this.exclude = [];
    }

    this.exclude.push(item);

    return this;
  }
}

/** Backbone element for ValueSet. */
export class ValueSetExpansionParameter extends BackboneElement {

  /** The name of the parameter. */
  @IsOptional()
  @IsString()
  name?: string;

  /** The value of the parameter as a string. */
  @IsOptional()
  @IsString()
  valueString?: string;

  /** The value of the parameter as a boolean. */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  /** The value of the parameter as an integer. */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /** The value of the parameter as a decimal. */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /** The value of the parameter as a URI. */
  @IsOptional()
  @IsString()
  valueUri?: string;

  /** The value of the parameter as a code. */
  @IsOptional()
  @IsString()
  valueCode?: string;

  /** The value of the parameter as a dateTime. */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  /** Creates a new ValueSetExpansionParameter. @param props - Initial values. */
  constructor(props?: Partial<ValueSetExpansionParameter>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ValueSet. */
export class ValueSetExpansionContains extends BackboneElement {

  /** An absolute URI which is the code system in which the code for this item in the expansion is defined. */
  @IsOptional()
  @IsString()
  system?: string;

  /** If true, this entry is included in the expansion for navigational purposes, and the user cannot select the code directly as a proper value. */
  @IsOptional()
  @IsBoolean()
  abstract?: boolean;

  /** If the concept is inactive in the code system that defines it. */
  @IsOptional()
  @IsBoolean()
  inactive?: boolean;

  /** The version of the code system from this code was taken. */
  @IsOptional()
  @IsString()
  version?: string;

  /** The code for this item in the expansion hierarchy. */
  @IsOptional()
  @IsString()
  code?: string;

  /** The recommended display for this item in the expansion. */
  @IsOptional()
  @IsString()
  display?: string;

  /** Additional representations for this item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetComposeIncludeConceptDesignation)
  designation?: ValueSetComposeIncludeConceptDesignation[];

  /** Other codes and entries contained under this entry in the hierarchy. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetExpansionContains)
  contains?: ValueSetExpansionContains[];

  /** Creates a new ValueSetExpansionContains. @param props - Initial values. */
  constructor(props?: Partial<ValueSetExpansionContains>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the designation array. @returns This instance for chaining. */
  addDesignation(item: ValueSetComposeIncludeConceptDesignation): this {
    if (!this.designation) {
      this.designation = [];
    }

    this.designation.push(item);

    return this;
  }

  /** Adds an item to the contains array. @returns This instance for chaining. */
  addContains(item: ValueSetExpansionContains): this {
    if (!this.contains) {
      this.contains = [];
    }

    this.contains.push(item);

    return this;
  }
}

/** Backbone element for ValueSet. */
export class ValueSetExpansion extends BackboneElement {

  /** An identifier that uniquely identifies this expansion of the valueset. */
  @IsOptional()
  @IsString()
  identifier?: string;

  /** The time at which the expansion was produced by the expanding system. */
  @IsOptional()
  @IsString()
  timestamp?: string;

  /** The total number of concepts in the expansion. */
  @IsOptional()
  @IsNumber()
  total?: number;

  /** If paging is being used, the offset at which this resource starts. */
  @IsOptional()
  @IsNumber()
  offset?: number;

  /** A parameter that controlled the expansion process. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetExpansionParameter)
  parameter?: ValueSetExpansionParameter[];

  /** The codes that are contained in the value set expansion. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetExpansionContains)
  contains?: ValueSetExpansionContains[];

  /** Creates a new ValueSetExpansion. @param props - Initial values. */
  constructor(props?: Partial<ValueSetExpansion>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the parameter array. @returns This instance for chaining. */
  addParameter(item: ValueSetExpansionParameter): this {
    if (!this.parameter) {
      this.parameter = [];
    }

    this.parameter.push(item);

    return this;
  }

  /** Adds an item to the contains array. @returns This instance for chaining. */
  addContains(item: ValueSetExpansionContains): this {
    if (!this.contains) {
      this.contains = [];
    }

    this.contains.push(item);

    return this;
  }
}

/** FHIR R4 ValueSet — a ValueSet specifies a set of codes drawn from one or more code systems. */
export class ValueSet extends DomainResource {

  readonly resourceType = 'ValueSet';

  /** An absolute URI that is used to identify this value set when it is referenced. */
  @IsOptional()
  @IsString()
  url?: string;

  /** A formal identifier that is used to identify this value set when it is represented in other formats. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The identifier that is used to identify this version of the value set. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the value set. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short, descriptive, user-friendly title for the value set. */
  @IsOptional()
  @IsString()
  title?: string;

  /** The status of this value set (draft | active | retired | unknown). */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** A Boolean value to indicate that this value set is authored for testing purposes. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** The date (and optionally time) when the value set was published. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization or individual that published the value set. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details to assist a user in finding and communicating with the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the value set from a consumer's perspective. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The content was developed with a focus and intent of supporting the contexts that are listed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the value set is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** If this is set to 'true', then no new versions of the content logical definition can be created. */
  @IsOptional()
  @IsBoolean()
  immutable?: boolean;

  /** Explanation of why this value set is needed and why it has been designed as it has. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** A copyright statement relating to the value set. */
  @IsOptional()
  @IsString()
  copyright?: string;

  /** A set of criteria that define the contents of the value set by including or excluding codes from one or more code systems. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ValueSetCompose)
  compose?: ValueSetCompose;

  /** A value set can also be "expanded", where the value set is turned into a simple collection of enumerated codes. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ValueSetExpansion)
  expansion?: ValueSetExpansion;

  /** Creates a new ValueSet. @param props - Initial values. */
  constructor(props?: Partial<ValueSet>) {
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
}
