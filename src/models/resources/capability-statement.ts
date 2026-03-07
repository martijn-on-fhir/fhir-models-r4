import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Reference } from '../datatypes/reference.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { CapabilityStatementKind } from '../enums/capability-statement-kind.js';
import { PublicationStatus } from '../enums/publication-status.js';
import { RestfulCapabilityMode } from '../enums/restful-capability-mode.js';

/** Backbone element for CapabilityStatement — software that implements this statement. */
export class CapabilityStatementSoftware extends BackboneElement {

  /** A name the software is known by. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Version covered by this statement. */
  @IsOptional()
  @IsString()
  version?: string;

  /** Date this version of the software was released. */
  @IsOptional()
  @IsString()
  releaseDate?: string;

  /** Creates a new CapabilityStatementSoftware. @param props - Initial values. */
  constructor(props?: Partial<CapabilityStatementSoftware>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for CapabilityStatement — implementation description. */
export class CapabilityStatementImplementation extends BackboneElement {

  /** Describes this specific instance. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Base URL for the installation. */
  @IsOptional()
  @IsString()
  url?: string;

  /** Organization that manages the data. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  custodian?: Reference;

  /** Creates a new CapabilityStatementImplementation. @param props - Initial values. */
  constructor(props?: Partial<CapabilityStatementImplementation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for CapabilityStatement — resource-level interaction supported. */
export class CapabilityStatementRestResourceInteraction extends BackboneElement {

  /** Coded identifier of the operation (read | vread | update | etc.). */
  @IsOptional()
  @IsString()
  code?: string;

  /** Anything special about operation behavior. */
  @IsOptional()
  @IsString()
  documentation?: string;

  /** Creates a new CapabilityStatementRestResourceInteraction. @param props - Initial values. */
  constructor(props?: Partial<CapabilityStatementRestResourceInteraction>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for CapabilityStatement — search parameter definition. */
export class CapabilityStatementRestResourceSearchParam extends BackboneElement {

  /** Name of the search parameter. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Source of the definition for the parameter. */
  @IsOptional()
  @IsString()
  definition?: string;

  /** The type of value a search parameter refers to (number | date | string | etc.). */
  @IsOptional()
  @IsString()
  type?: string;

  /** Server-specific usage details. */
  @IsOptional()
  @IsString()
  documentation?: string;

  /** Creates a new CapabilityStatementRestResourceSearchParam. @param props - Initial values. */
  constructor(props?: Partial<CapabilityStatementRestResourceSearchParam>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for CapabilityStatement — operation definition. */
export class CapabilityStatementRestResourceOperation extends BackboneElement {

  /** Name by which the operation/query is invoked. */
  @IsOptional()
  @IsString()
  name?: string;

  /** The defined operation/query. */
  @IsOptional()
  @IsString()
  definition?: string;

  /** Specific details about operation behavior. */
  @IsOptional()
  @IsString()
  documentation?: string;

  /** Creates a new CapabilityStatementRestResourceOperation. @param props - Initial values. */
  constructor(props?: Partial<CapabilityStatementRestResourceOperation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for CapabilityStatement — resource type and profile support. */
export class CapabilityStatementRestResource extends BackboneElement {

  /** A type of resource exposed via the RESTful interface. */
  @IsOptional()
  @IsString()
  type?: string;

  /** Base system profile for all uses of resource. */
  @IsOptional()
  @IsString()
  profile?: string;

  /** Profiles for use cases supported. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  supportedProfile?: string[];

  /** Additional information about the use of the resource type. */
  @IsOptional()
  @IsString()
  documentation?: string;

  /** What operations are supported for this resource type. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestResourceInteraction)
  interaction?: CapabilityStatementRestResourceInteraction[];

  /** Versioning policy for the resource type. */
  @IsOptional()
  @IsString()
  versioning?: string;

  /** Whether vRead can return past versions. */
  @IsOptional()
  @IsBoolean()
  readHistory?: boolean;

  /** Whether update can auto-create resources. */
  @IsOptional()
  @IsBoolean()
  updateCreate?: boolean;

  /** Whether conditional create is supported. */
  @IsOptional()
  @IsBoolean()
  conditionalCreate?: boolean;

  /** Conditional read policy for the resource type. */
  @IsOptional()
  @IsString()
  conditionalRead?: string;

  /** Whether conditional update is supported. */
  @IsOptional()
  @IsBoolean()
  conditionalUpdate?: boolean;

  /** Conditional delete policy for the resource type. */
  @IsOptional()
  @IsString()
  conditionalDelete?: string;

  /** Policies for handling references. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  referencePolicy?: string[];

  /** _include values supported by the server. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  searchInclude?: string[];

  /** _revinclude values supported by the server. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  searchRevInclude?: string[];

  /** Search parameters supported by the implementation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestResourceSearchParam)
  searchParam?: CapabilityStatementRestResourceSearchParam[];

  /** Definition of operations supported by the resource type. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestResourceOperation)
  operation?: CapabilityStatementRestResourceOperation[];

  /** Creates a new CapabilityStatementRestResource. @param props - Initial values. */
  constructor(props?: Partial<CapabilityStatementRestResource>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the supportedProfile array. @returns This instance for chaining. */
  addSupportedProfile(item: string): this {
    if (!this.supportedProfile) {
      this.supportedProfile = [];
    }

    this.supportedProfile.push(item);

    return this;
  }

  /** Adds an item to the interaction array. @returns This instance for chaining. */
  addInteraction(item: CapabilityStatementRestResourceInteraction): this {
    if (!this.interaction) {
      this.interaction = [];
    }

    this.interaction.push(item);

    return this;
  }

  /** Adds an item to the referencePolicy array. @returns This instance for chaining. */
  addReferencePolicy(item: string): this {
    if (!this.referencePolicy) {
      this.referencePolicy = [];
    }

    this.referencePolicy.push(item);

    return this;
  }

  /** Adds an item to the searchInclude array. @returns This instance for chaining. */
  addSearchInclude(item: string): this {
    if (!this.searchInclude) {
      this.searchInclude = [];
    }

    this.searchInclude.push(item);

    return this;
  }

  /** Adds an item to the searchRevInclude array. @returns This instance for chaining. */
  addSearchRevInclude(item: string): this {
    if (!this.searchRevInclude) {
      this.searchRevInclude = [];
    }

    this.searchRevInclude.push(item);

    return this;
  }

  /** Adds an item to the searchParam array. @returns This instance for chaining. */
  addSearchParam(item: CapabilityStatementRestResourceSearchParam): this {
    if (!this.searchParam) {
      this.searchParam = [];
    }

    this.searchParam.push(item);

    return this;
  }

  /** Adds an item to the operation array. @returns This instance for chaining. */
  addOperation(item: CapabilityStatementRestResourceOperation): this {
    if (!this.operation) {
      this.operation = [];
    }

    this.operation.push(item);

    return this;
  }
}

/** Backbone element for CapabilityStatement — system-level interaction supported. */
export class CapabilityStatementRestInteraction extends BackboneElement {

  /** Coded identifier of the operation (transaction | batch | search-system | history-system). */
  @IsOptional()
  @IsString()
  code?: string;

  /** Anything special about operation behavior. */
  @IsOptional()
  @IsString()
  documentation?: string;

  /** Creates a new CapabilityStatementRestInteraction. @param props - Initial values. */
  constructor(props?: Partial<CapabilityStatementRestInteraction>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for CapabilityStatement — security information for the REST endpoint. */
export class CapabilityStatementRestSecurity extends BackboneElement {

  /** Whether the server supports CORS. */
  @IsOptional()
  @IsBoolean()
  cors?: boolean;

  /** OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  service?: CodeableConcept[];

  /** General description of how security works. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Creates a new CapabilityStatementRestSecurity. @param props - Initial values. */
  constructor(props?: Partial<CapabilityStatementRestSecurity>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the service array. @returns This instance for chaining. */
  addService(item: CodeableConcept): this {
    if (!this.service) {
      this.service = [];
    }

    this.service.push(item);

    return this;
  }
}

/** Backbone element for CapabilityStatement — messaging transport endpoint. */
export class CapabilityStatementRestMessagingEndpoint extends BackboneElement {

  /** Protocol or messaging system identifier. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  protocol?: Coding;

  /** Network address or identifier of the endpoint. */
  @IsOptional()
  @IsString()
  address?: string;

  /** Creates a new CapabilityStatementRestMessagingEndpoint. @param props - Initial values. */
  constructor(props?: Partial<CapabilityStatementRestMessagingEndpoint>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for CapabilityStatement — supported message definition. */
export class CapabilityStatementRestMessagingSupportedMessage extends BackboneElement {

  /** The mode of this event declaration (sender | receiver). */
  @IsOptional()
  @IsString()
  mode?: string;

  /** Message supported by this system. */
  @IsOptional()
  @IsString()
  definition?: string;

  /** Creates a new CapabilityStatementRestMessagingSupportedMessage. @param props - Initial values. */
  constructor(props?: Partial<CapabilityStatementRestMessagingSupportedMessage>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for CapabilityStatement — messaging capabilities. */
export class CapabilityStatementRestMessaging extends BackboneElement {

  /** Where messages should be sent. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestMessagingEndpoint)
  endpoint?: CapabilityStatementRestMessagingEndpoint[];

  /** Reliable message cache length in minutes. */
  @IsOptional()
  @IsNumber()
  reliableCache?: number;

  /** Messaging interface behavior details. */
  @IsOptional()
  @IsString()
  documentation?: string;

  /** Messages supported by this system. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestMessagingSupportedMessage)
  supportedMessage?: CapabilityStatementRestMessagingSupportedMessage[];

  /** Creates a new CapabilityStatementRestMessaging. @param props - Initial values. */
  constructor(props?: Partial<CapabilityStatementRestMessaging>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the endpoint array. @returns This instance for chaining. */
  addEndpoint(item: CapabilityStatementRestMessagingEndpoint): this {
    if (!this.endpoint) {
      this.endpoint = [];
    }

    this.endpoint.push(item);

    return this;
  }

  /** Adds an item to the supportedMessage array. @returns This instance for chaining. */
  addSupportedMessage(item: CapabilityStatementRestMessagingSupportedMessage): this {
    if (!this.supportedMessage) {
      this.supportedMessage = [];
    }

    this.supportedMessage.push(item);

    return this;
  }
}

/** Backbone element for CapabilityStatement — RESTful capability details. */
export class CapabilityStatementRest extends BackboneElement {

  /** Identifies whether this portion of the statement is describing client or server capabilities. */
  @IsOptional()
  @IsEnum(RestfulCapabilityMode)
  mode?: RestfulCapabilityMode;

  /** General description of the implementation. */
  @IsOptional()
  @IsString()
  documentation?: string;

  /** Information about security of implementation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CapabilityStatementRestSecurity)
  security?: CapabilityStatementRestSecurity;

  /** Resource types supported by this REST endpoint. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestResource)
  resource?: CapabilityStatementRestResource[];

  /** System-level interactions supported. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestInteraction)
  interaction?: CapabilityStatementRestInteraction[];

  /** Search parameters for searching all resources. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestResourceSearchParam)
  searchParam?: CapabilityStatementRestResourceSearchParam[];

  /** Operations supported at the system level. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestResourceOperation)
  operation?: CapabilityStatementRestResourceOperation[];

  /** Compartments served/used by the system. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  compartment?: string[];

  /** Messaging capabilities of the REST endpoint. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestMessaging)
  messaging?: CapabilityStatementRestMessaging[];

  /** Creates a new CapabilityStatementRest. @param props - Initial values. */
  constructor(props?: Partial<CapabilityStatementRest>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the resource array. @returns This instance for chaining. */
  addResource(item: CapabilityStatementRestResource): this {
    if (!this.resource) {
      this.resource = [];
    }

    this.resource.push(item);

    return this;
  }

  /** Adds an item to the interaction array. @returns This instance for chaining. */
  addInteraction(item: CapabilityStatementRestInteraction): this {
    if (!this.interaction) {
      this.interaction = [];
    }

    this.interaction.push(item);

    return this;
  }

  /** Adds an item to the searchParam array. @returns This instance for chaining. */
  addSearchParam(item: CapabilityStatementRestResourceSearchParam): this {
    if (!this.searchParam) {
      this.searchParam = [];
    }

    this.searchParam.push(item);

    return this;
  }

  /** Adds an item to the operation array. @returns This instance for chaining. */
  addOperation(item: CapabilityStatementRestResourceOperation): this {
    if (!this.operation) {
      this.operation = [];
    }

    this.operation.push(item);

    return this;
  }

  /** Adds an item to the compartment array. @returns This instance for chaining. */
  addCompartment(item: string): this {
    if (!this.compartment) {
      this.compartment = [];
    }

    this.compartment.push(item);

    return this;
  }

  /** Adds an item to the messaging array. @returns This instance for chaining. */
  addMessaging(item: CapabilityStatementRestMessaging): this {
    if (!this.messaging) {
      this.messaging = [];
    }

    this.messaging.push(item);

    return this;
  }
}

/** Backbone element for CapabilityStatement — document definition. */
export class CapabilityStatementDocument extends BackboneElement {

  /** Mode of this document declaration (producer | consumer). */
  @IsOptional()
  @IsString()
  mode?: string;

  /** Description of document support. */
  @IsOptional()
  @IsString()
  documentation?: string;

  /** Constraint on the resources used in the document. */
  @IsOptional()
  @IsString()
  profile?: string;

  /** Creates a new CapabilityStatementDocument. @param props - Initial values. */
  constructor(props?: Partial<CapabilityStatementDocument>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 CapabilityStatement — a set of capabilities of a FHIR server or client. */
export class CapabilityStatement extends DomainResource {

  /** The FHIR resource type string. */
  readonly resourceType = 'CapabilityStatement';

  /** Canonical identifier for this capability statement. */
  @IsOptional()
  @IsString()
  url?: string;

  /** Business version of the capability statement. */
  @IsOptional()
  @IsString()
  version?: string;

  /** Computer-friendly name for this capability statement. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Human-friendly name for this capability statement. */
  @IsOptional()
  @IsString()
  title?: string;

  /** The publication status (draft | active | retired | unknown). */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** Whether this capability statement is for testing purposes. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** Date this was last changed. */
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

  /** Natural language description of the capability statement. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The context that the content is intended to support. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** Intended jurisdiction for this capability statement. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Why this capability statement is defined. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** Use and/or publishing restrictions. */
  @IsOptional()
  @IsString()
  copyright?: string;

  /** The way this capability statement is intended to be used (instance | capability | requirements). */
  @IsOptional()
  @IsEnum(CapabilityStatementKind)
  kind?: CapabilityStatementKind;

  /** Canonical URL of another capability statement this implements. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiates?: string[];

  /** Canonical URL of another capability statement this imports. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  imports?: string[];

  /** Software that implements this capability statement. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CapabilityStatementSoftware)
  software?: CapabilityStatementSoftware;

  /** If this describes a specific instance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CapabilityStatementImplementation)
  implementation?: CapabilityStatementImplementation;

  /** FHIR Version this capability statement is for. */
  @IsOptional()
  @IsString()
  fhirVersion?: string;

  /** Formats supported (xml, json, etc.). */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  format?: string[];

  /** Patch document formats supported. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  patchFormat?: string[];

  /** Implementation guides supported. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  implementationGuide?: string[];

  /** RESTful capability definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRest)
  rest?: CapabilityStatementRest[];

  /** Messaging capability definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestMessaging)
  messaging?: CapabilityStatementRestMessaging[];

  /** Document capability definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementDocument)
  document?: CapabilityStatementDocument[];

  /** Creates a new CapabilityStatement. @param props - Initial values. */
  constructor(props?: Partial<CapabilityStatement>) {
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

  /** Adds an item to the instantiates array. @returns This instance for chaining. */
  addInstantiates(item: string): this {
    if (!this.instantiates) {
      this.instantiates = [];
    }

    this.instantiates.push(item);

    return this;
  }

  /** Adds an item to the imports array. @returns This instance for chaining. */
  addImports(item: string): this {
    if (!this.imports) {
      this.imports = [];
    }

    this.imports.push(item);

    return this;
  }

  /** Adds an item to the format array. @returns This instance for chaining. */
  addFormat(item: string): this {
    if (!this.format) {
      this.format = [];
    }

    this.format.push(item);

    return this;
  }

  /** Adds an item to the patchFormat array. @returns This instance for chaining. */
  addPatchFormat(item: string): this {
    if (!this.patchFormat) {
      this.patchFormat = [];
    }

    this.patchFormat.push(item);

    return this;
  }

  /** Adds an item to the implementationGuide array. @returns This instance for chaining. */
  addImplementationGuide(item: string): this {
    if (!this.implementationGuide) {
      this.implementationGuide = [];
    }

    this.implementationGuide.push(item);

    return this;
  }

  /** Adds an item to the rest array. @returns This instance for chaining. */
  addRest(item: CapabilityStatementRest): this {
    if (!this.rest) {
      this.rest = [];
    }

    this.rest.push(item);

    return this;
  }

  /** Adds an item to the messaging array. @returns This instance for chaining. */
  addMessaging(item: CapabilityStatementRestMessaging): this {
    if (!this.messaging) {
      this.messaging = [];
    }

    this.messaging.push(item);

    return this;
  }

  /** Adds an item to the document array. @returns This instance for chaining. */
  addDocument(item: CapabilityStatementDocument): this {
    if (!this.document) {
      this.document = [];
    }

    this.document.push(item);

    return this;
  }
}
