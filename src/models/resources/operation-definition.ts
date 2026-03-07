import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { OperationKind } from '../enums/operation-kind.js';
import { PublicationStatus } from '../enums/publication-status.js';
import { SearchParamType } from '../enums/search-param-type.js';

/** Backbone element for OperationDefinition. */
export class OperationDefinitionParameterBinding extends BackboneElement {

  /** Indicates the degree of conformance expectations associated with this binding. */
  @IsOptional()
  @IsString()
  strength?: string;

  /** Points to the value set or external definition that identifies the set of codes to be used. */
  @IsOptional()
  @IsString()
  valueSet?: string;

  /** Creates a new OperationDefinitionParameterBinding. @param props - Initial values. */
  constructor(props?: Partial<OperationDefinitionParameterBinding>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for OperationDefinition. */
export class OperationDefinitionParameterReferencedFrom extends BackboneElement {

  /** The name of the parameter or dot-separated path of parameter names. */
  @IsOptional()
  @IsString()
  source?: string;

  /** Element id of the referenced element within the source. */
  @IsOptional()
  @IsString()
  sourceId?: string;

  /** Creates a new OperationDefinitionParameterReferencedFrom. @param props - Initial values. */
  constructor(props?: Partial<OperationDefinitionParameterReferencedFrom>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for OperationDefinition. */
export class OperationDefinitionParameter extends BackboneElement {

  /** The name of used to identify the parameter. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Whether this is an input or an output parameter. */
  @IsOptional()
  @IsString()
  use?: string;

  /** The minimum number of times this parameter SHALL appear in the request or response. */
  @IsOptional()
  @IsNumber()
  min?: number;

  /** The maximum number of times this element is permitted to appear in the request or response. */
  @IsOptional()
  @IsString()
  max?: string;

  /** Describes the meaning or use of this parameter. */
  @IsOptional()
  @IsString()
  documentation?: string;

  /** The type for this parameter. */
  @IsOptional()
  @IsString()
  type?: string;

  /** Used when the type is Reference or canonical, to identify allowed profile targets. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  targetProfile?: string[];

  /** How the parameter is understood as a search parameter. */
  @IsOptional()
  @IsEnum(SearchParamType)
  searchType?: SearchParamType;

  /** Binds to a value set if this parameter is coded. */
  @IsOptional()
  @ValidateNested()
  @Type(() => OperationDefinitionParameterBinding)
  binding?: OperationDefinitionParameterBinding;

  /** Identifies other resource parameters within the operation invocation that are expected to resolve. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OperationDefinitionParameterReferencedFrom)
  referencedFrom?: OperationDefinitionParameterReferencedFrom[];

  /** The parts of a nested parameter. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OperationDefinitionParameter)
  part?: OperationDefinitionParameter[];

  /** Creates a new OperationDefinitionParameter. @param props - Initial values. */
  constructor(props?: Partial<OperationDefinitionParameter>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the targetProfile array. @returns This instance for chaining. */
  addTargetProfile(item: string): this {
    if (!this.targetProfile) {
      this.targetProfile = [];
    }

    this.targetProfile.push(item);

    return this;
  }

  /** Adds an item to the referencedFrom array. @returns This instance for chaining. */
  addReferencedFrom(item: OperationDefinitionParameterReferencedFrom): this {
    if (!this.referencedFrom) {
      this.referencedFrom = [];
    }

    this.referencedFrom.push(item);

    return this;
  }

  /** Adds an item to the part array. @returns This instance for chaining. */
  addPart(item: OperationDefinitionParameter): this {
    if (!this.part) {
      this.part = [];
    }

    this.part.push(item);

    return this;
  }
}

/** Backbone element for OperationDefinition. */
export class OperationDefinitionOverload extends BackboneElement {

  /** Name of parameter to include in overload. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  parameterName?: string[];

  /** Comments to go on overload. */
  @IsOptional()
  @IsString()
  comment?: string;

  /** Creates a new OperationDefinitionOverload. @param props - Initial values. */
  constructor(props?: Partial<OperationDefinitionOverload>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the parameterName array. @returns This instance for chaining. */
  addParameterName(item: string): this {
    if (!this.parameterName) {
      this.parameterName = [];
    }

    this.parameterName.push(item);

    return this;
  }
}

/** FHIR R4 OperationDefinition — a formal computable definition of an operation or named query. */
export class OperationDefinition extends DomainResource {

  readonly resourceType = 'OperationDefinition';

  /** An absolute URI that is used to identify this operation definition. */
  @IsOptional()
  @IsString()
  url?: string;

  /** The identifier that is used to identify this version of the operation definition. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the operation definition. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short, descriptive, user-friendly title for the operation definition. */
  @IsOptional()
  @IsString()
  title?: string;

  /** The status of this operation definition (draft, active, retired, unknown). */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** Whether this is an operation or a named query. */
  @IsOptional()
  @IsEnum(OperationKind)
  kind?: OperationKind;

  /** Whether this operation definition is for testing purposes. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** The date this resource was last changed. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization that published the operation definition. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details for the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the operation definition. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The content was developed with a focus and intent of supporting the specified contexts. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the operation definition applies. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Explanation of why this operation definition is needed. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** Whether the operation affects state. */
  @IsOptional()
  @IsBoolean()
  affectsState?: boolean;

  /** The name used to invoke the operation. */
  @IsOptional()
  @IsString()
  code?: string;

  /** Additional information about how to use this operation or named query. */
  @IsOptional()
  @IsString()
  comment?: string;

  /** Indicates that this operation definition is a constraining profile on the base. */
  @IsOptional()
  @IsString()
  base?: string;

  /** The types on which this operation can be executed. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  resource?: string[];

  /** Indicates whether this operation or named query can be invoked at the system level. */
  @IsOptional()
  @IsBoolean()
  system?: boolean;

  /** Indicates whether this operation or named query can be invoked at the resource type level. */
  @IsOptional()
  @IsBoolean()
  type?: boolean;

  /** Indicates whether this operation can be invoked on a particular instance of one of the given types. */
  @IsOptional()
  @IsBoolean()
  instance?: boolean;

  /** Additional validation information for the in parameters. */
  @IsOptional()
  @IsString()
  inputProfile?: string;

  /** Additional validation information for the out parameters. */
  @IsOptional()
  @IsString()
  outputProfile?: string;

  /** The parameters for the operation/query. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OperationDefinitionParameter)
  parameter?: OperationDefinitionParameter[];

  /** Defines an appropriate combination of parameters to use when invoking this operation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OperationDefinitionOverload)
  overload?: OperationDefinitionOverload[];

  /** Creates a new OperationDefinition. @param props - Initial values. */
  constructor(props?: Partial<OperationDefinition>) {
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

  /** Adds an item to the resource array. @returns This instance for chaining. */
  addResource(item: string): this {
    if (!this.resource) {
      this.resource = [];
    }

    this.resource.push(item);

    return this;
  }

  /** Adds an item to the parameter array. @returns This instance for chaining. */
  addParameter(item: OperationDefinitionParameter): this {
    if (!this.parameter) {
      this.parameter = [];
    }

    this.parameter.push(item);

    return this;
  }

  /** Adds an item to the overload array. @returns This instance for chaining. */
  addOverload(item: OperationDefinitionOverload): this {
    if (!this.overload) {
      this.overload = [];
    }

    this.overload.push(item);

    return this;
  }
}
