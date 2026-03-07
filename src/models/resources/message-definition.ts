import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Identifier } from '../datatypes/identifier.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { MessageSignificanceCategory } from '../enums/message-significance-category.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for MessageDefinition. */
export class MessageDefinitionFocus extends BackboneElement {

  /** The kind of resource that must be the focus for this message. */
  @IsOptional()
  @IsString()
  code?: string;

  /** A profile that reflects constraints on the focus resource. */
  @IsOptional()
  @IsString()
  profile?: string;

  /** Minimum number of focus resources. */
  @IsOptional()
  @IsNumber()
  min?: number;

  /** Maximum number of focus resources. */
  @IsOptional()
  @IsString()
  max?: string;

  /** Creates a new MessageDefinitionFocus. @param props - Initial values. */
  constructor(props?: Partial<MessageDefinitionFocus>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for MessageDefinition. */
export class MessageDefinitionAllowedResponse extends BackboneElement {

  /** A reference to the message definition for the allowed response. */
  @IsOptional()
  @IsString()
  message?: string;

  /** When this response should be used. */
  @IsOptional()
  @IsString()
  situation?: string;

  /** Creates a new MessageDefinitionAllowedResponse. @param props - Initial values. */
  constructor(props?: Partial<MessageDefinitionAllowedResponse>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 MessageDefinition — defines the characteristics of a message that can be shared between systems. */
export class MessageDefinition extends DomainResource {

  readonly resourceType = 'MessageDefinition';

  /** The business identifier for this message definition. */
  @IsOptional()
  @IsString()
  url?: string;

  /** A formal identifier that is used to identify this message definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The identifier that is used to identify this version of the message definition. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the message definition. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short, descriptive, user-friendly title for the message definition. */
  @IsOptional()
  @IsString()
  title?: string;

  /** A message definition that is superseded by this definition. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  replaces?: string[];

  /** The status of this message definition (draft, active, retired, unknown). */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** Whether this message definition is for testing purposes. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** The date this version of the message definition was published. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization that published this message definition. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details for the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the message definition. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The content was developed with a focus and intent of supporting the specified contexts. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the message definition applies. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Explanation of why this message definition is needed. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** A copyright statement relating to the message definition. */
  @IsOptional()
  @IsString()
  copyright?: string;

  /** The MessageDefinition that is the basis for the contents of this resource. */
  @IsOptional()
  @IsString()
  base?: string;

  /** Identifies a protocol or workflow that this MessageDefinition represents a step in. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  parent?: string[];

  /** Event code or link to the EventDefinition as a Coding. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  eventCoding?: Coding;

  /** Event code or link to the EventDefinition as a URI. */
  @IsOptional()
  @IsString()
  eventUri?: string;

  /** The impact of the content of the message. */
  @IsOptional()
  @IsEnum(MessageSignificanceCategory)
  category?: MessageSignificanceCategory;

  /** Identifies the resource(s) that are being addressed by the event. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MessageDefinitionFocus)
  focus?: MessageDefinitionFocus[];

  /** Declare at a message definition level whether a response is required. */
  @IsOptional()
  @IsString()
  responseRequired?: string;

  /** Indicates what types of messages may be sent as an application-level response. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MessageDefinitionAllowedResponse)
  allowedResponse?: MessageDefinitionAllowedResponse[];

  /** Canonical reference to a GraphDefinition. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  graph?: string[];

  /** Creates a new MessageDefinition. @param props - Initial values. */
  constructor(props?: Partial<MessageDefinition>) {
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

  /** Adds an item to the replaces array. @returns This instance for chaining. */
  addReplaces(item: string): this {
    if (!this.replaces) {
      this.replaces = [];
    }

    this.replaces.push(item);

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

  /** Adds an item to the parent array. @returns This instance for chaining. */
  addParent(item: string): this {
    if (!this.parent) {
      this.parent = [];
    }

    this.parent.push(item);

    return this;
  }

  /** Adds an item to the focus array. @returns This instance for chaining. */
  addFocus(item: MessageDefinitionFocus): this {
    if (!this.focus) {
      this.focus = [];
    }

    this.focus.push(item);

    return this;
  }

  /** Adds an item to the allowedResponse array. @returns This instance for chaining. */
  addAllowedResponse(item: MessageDefinitionAllowedResponse): this {
    if (!this.allowedResponse) {
      this.allowedResponse = [];
    }

    this.allowedResponse.push(item);

    return this;
  }

  /** Adds an item to the graph array. @returns This instance for chaining. */
  addGraph(item: string): this {
    if (!this.graph) {
      this.graph = [];
    }

    this.graph.push(item);

    return this;
  }
}
