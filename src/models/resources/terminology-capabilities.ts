import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for TerminologyCapabilities. */
export class TerminologyCapabilitiesSoftware extends BackboneElement {

  /** Name the software is known by. */
  @IsOptional()
  @IsString()
  name?: string;

  /** The version identifier for the software covered by this statement. */
  @IsOptional()
  @IsString()
  version?: string;

  /** Creates a new TerminologyCapabilitiesSoftware. @param props - Initial values. */
  constructor(props?: Partial<TerminologyCapabilitiesSoftware>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TerminologyCapabilities. */
export class TerminologyCapabilitiesImplementation extends BackboneElement {

  /** Information about the specific installation that this terminology capability statement relates to. */
  @IsOptional()
  @IsString()
  description?: string;

  /** An absolute base URL for the implementation. */
  @IsOptional()
  @IsString()
  url?: string;

  /** Creates a new TerminologyCapabilitiesImplementation. @param props - Initial values. */
  constructor(props?: Partial<TerminologyCapabilitiesImplementation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TerminologyCapabilities. */
export class TerminologyCapabilitiesCodeSystemVersionFilter extends BackboneElement {

  /** Code of the property supported. */
  @IsOptional()
  @IsString()
  code?: string;

  /** Operations supported for the property. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  op?: string[];

  /** Creates a new TerminologyCapabilitiesCodeSystemVersionFilter. @param props - Initial values. */
  constructor(props?: Partial<TerminologyCapabilitiesCodeSystemVersionFilter>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the op array. @returns This instance for chaining. */
  addOp(item: string): this {
    if (!this.op) {
      this.op = [];
    }

    this.op.push(item);

    return this;
  }
}

/** Backbone element for TerminologyCapabilities. */
export class TerminologyCapabilitiesCodeSystemVersion extends BackboneElement {

  /** For version-less code systems, there should be a single version with no identifier. */
  @IsOptional()
  @IsString()
  code?: string;

  /** If this is the default version for this code system. */
  @IsOptional()
  @IsBoolean()
  isDefault?: boolean;

  /** If the compositional grammar defined by the code system is supported. */
  @IsOptional()
  @IsBoolean()
  compositional?: boolean;

  /** Language Displays supported. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  language?: string[];

  /** Filter Properties supported. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TerminologyCapabilitiesCodeSystemVersionFilter)
  filter?: TerminologyCapabilitiesCodeSystemVersionFilter[];

  /** Properties supported for $lookup. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  property?: string[];

  /** Creates a new TerminologyCapabilitiesCodeSystemVersion. @param props - Initial values. */
  constructor(props?: Partial<TerminologyCapabilitiesCodeSystemVersion>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the language array. @returns This instance for chaining. */
  addLanguage(item: string): this {
    if (!this.language) {
      this.language = [];
    }

    this.language.push(item);

    return this;
  }

  /** Adds an item to the filter array. @returns This instance for chaining. */
  addFilter(item: TerminologyCapabilitiesCodeSystemVersionFilter): this {
    if (!this.filter) {
      this.filter = [];
    }

    this.filter.push(item);

    return this;
  }

  /** Adds an item to the property array. @returns This instance for chaining. */
  addProperty(item: string): this {
    if (!this.property) {
      this.property = [];
    }

    this.property.push(item);

    return this;
  }
}

/** Backbone element for TerminologyCapabilities. */
export class TerminologyCapabilitiesCodeSystem extends BackboneElement {

  /** URI for the Code System. */
  @IsOptional()
  @IsString()
  uri?: string;

  /** Version of Code System supported. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TerminologyCapabilitiesCodeSystemVersion)
  version?: TerminologyCapabilitiesCodeSystemVersion[];

  /** True if subsumption is supported for this version of the code system. */
  @IsOptional()
  @IsBoolean()
  subsumption?: boolean;

  /** Creates a new TerminologyCapabilitiesCodeSystem. @param props - Initial values. */
  constructor(props?: Partial<TerminologyCapabilitiesCodeSystem>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the version array. @returns This instance for chaining. */
  addVersion(item: TerminologyCapabilitiesCodeSystemVersion): this {
    if (!this.version) {
      this.version = [];
    }

    this.version.push(item);

    return this;
  }
}

/** Backbone element for TerminologyCapabilities. */
export class TerminologyCapabilitiesExpansionParameter extends BackboneElement {

  /** Expansion Parameter name. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Description of support for parameter. */
  @IsOptional()
  @IsString()
  documentation?: string;

  /** Creates a new TerminologyCapabilitiesExpansionParameter. @param props - Initial values. */
  constructor(props?: Partial<TerminologyCapabilitiesExpansionParameter>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TerminologyCapabilities. */
export class TerminologyCapabilitiesExpansion extends BackboneElement {

  /** Whether the server can return nested value sets. */
  @IsOptional()
  @IsBoolean()
  hierarchical?: boolean;

  /** Whether the server supports paging on expansion. */
  @IsOptional()
  @IsBoolean()
  paging?: boolean;

  /** Allow request for incomplete expansions. */
  @IsOptional()
  @IsBoolean()
  incomplete?: boolean;

  /** Supported expansion parameter. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TerminologyCapabilitiesExpansionParameter)
  parameter?: TerminologyCapabilitiesExpansionParameter[];

  /** Documentation about text searching works. */
  @IsOptional()
  @IsString()
  textFilter?: string;

  /** Creates a new TerminologyCapabilitiesExpansion. @param props - Initial values. */
  constructor(props?: Partial<TerminologyCapabilitiesExpansion>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the parameter array. @returns This instance for chaining. */
  addParameter(item: TerminologyCapabilitiesExpansionParameter): this {
    if (!this.parameter) {
      this.parameter = [];
    }

    this.parameter.push(item);

    return this;
  }
}

/** Backbone element for TerminologyCapabilities. */
export class TerminologyCapabilitiesValidateCode extends BackboneElement {

  /** Whether translations are validated. */
  @IsOptional()
  @IsBoolean()
  translations?: boolean;

  /** Creates a new TerminologyCapabilitiesValidateCode. @param props - Initial values. */
  constructor(props?: Partial<TerminologyCapabilitiesValidateCode>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TerminologyCapabilities. */
export class TerminologyCapabilitiesTranslation extends BackboneElement {

  /** Whether the client must identify the map. */
  @IsOptional()
  @IsBoolean()
  needsMap?: boolean;

  /** Creates a new TerminologyCapabilitiesTranslation. @param props - Initial values. */
  constructor(props?: Partial<TerminologyCapabilitiesTranslation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TerminologyCapabilities. */
export class TerminologyCapabilitiesClosure extends BackboneElement {

  /** If cross-system closure is supported. */
  @IsOptional()
  @IsBoolean()
  translation?: boolean;

  /** Creates a new TerminologyCapabilitiesClosure. @param props - Initial values. */
  constructor(props?: Partial<TerminologyCapabilitiesClosure>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 TerminologyCapabilities — a statement about the terminology capabilities of a FHIR server. */
export class TerminologyCapabilities extends DomainResource {

  readonly resourceType = 'TerminologyCapabilities';

  /** An absolute URI that is used to identify this terminology capabilities when it is referenced. */
  @IsOptional()
  @IsString()
  url?: string;

  /** The identifier that is used to identify this version of the terminology capabilities. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the terminology capabilities. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short, descriptive, user-friendly title for the terminology capabilities. */
  @IsOptional()
  @IsString()
  title?: string;

  /** The status of this terminology capabilities (draft | active | retired | unknown). */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** A Boolean value to indicate that this terminology capabilities is authored for testing purposes. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** The date (and optionally time) when the terminology capabilities was published. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization or individual that published the terminology capabilities. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details to assist a user in finding and communicating with the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the terminology capabilities from a consumer's perspective. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The content was developed with a focus and intent of supporting the contexts that are listed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the terminology capabilities is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Explanation of why this terminology capabilities is needed and why it has been designed as it has. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** A copyright statement relating to the terminology capabilities. */
  @IsOptional()
  @IsString()
  copyright?: string;

  /** The way that this statement is intended to be used (instance | capability | requirements). */
  @IsOptional()
  @IsString()
  kind?: string;

  /** Software that is covered by this terminology capability statement. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TerminologyCapabilitiesSoftware)
  software?: TerminologyCapabilitiesSoftware;

  /** Identifies a specific implementation instance that is described by the terminology capability statement. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TerminologyCapabilitiesImplementation)
  implementation?: TerminologyCapabilitiesImplementation;

  /** Whether the server supports lockedDate. */
  @IsOptional()
  @IsBoolean()
  lockedDate?: boolean;

  /** Identifies a code system that is supported by the server. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TerminologyCapabilitiesCodeSystem)
  codeSystem?: TerminologyCapabilitiesCodeSystem[];

  /** Information about the $expansion operation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TerminologyCapabilitiesExpansion)
  expansion?: TerminologyCapabilitiesExpansion;

  /** The degree to which the server supports the code search parameter on ValueSet. */
  @IsOptional()
  @IsString()
  codeSearch?: string;

  /** Information about the $validate-code operation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TerminologyCapabilitiesValidateCode)
  validateCode?: TerminologyCapabilitiesValidateCode;

  /** Information about the $translate operation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TerminologyCapabilitiesTranslation)
  translation?: TerminologyCapabilitiesTranslation;

  /** Whether the $closure operation is supported. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TerminologyCapabilitiesClosure)
  closure?: TerminologyCapabilitiesClosure;

  /** Creates a new TerminologyCapabilities. @param props - Initial values. */
  constructor(props?: Partial<TerminologyCapabilities>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
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

  /** Adds an item to the codeSystem array. @returns This instance for chaining. */
  addCodeSystem(item: TerminologyCapabilitiesCodeSystem): this {
    if (!this.codeSystem) {
      this.codeSystem = [];
    }

    this.codeSystem.push(item);

    return this;
  }
}
