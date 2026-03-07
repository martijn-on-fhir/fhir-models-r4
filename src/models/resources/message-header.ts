import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { ContactPoint } from '../datatypes/contact-point.js';
import { Reference } from '../datatypes/reference.js';
import { ResponseType } from '../enums/response-type.js';

/** Backbone element for MessageHeader. */
export class MessageHeaderDestination extends BackboneElement {

  /** Human-readable name for the target system. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Identifies the target end system in situations where the initial message transmission is indirect. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  target?: Reference;

  /** Indicates where the message should be routed to. */
  @IsOptional()
  @IsString()
  endpoint?: string;

  /** Allows data conveyed by a message to be addressed to a particular party. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  receiver?: Reference;

  /** Creates a new MessageHeaderDestination. @param props - Initial values. */
  constructor(props?: Partial<MessageHeaderDestination>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for MessageHeader. */
export class MessageHeaderSource extends BackboneElement {

  /** Human-readable name for the source system. */
  @IsOptional()
  @IsString()
  name?: string;

  /** May include configuration or other information useful in debugging. */
  @IsOptional()
  @IsString()
  software?: string;

  /** Can convey versions of multiple systems in situations where a message passes through multiple hands. */
  @IsOptional()
  @IsString()
  version?: string;

  /** An e-mail, phone, website or other contact point to resolve issues with the message. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ContactPoint)
  contact?: ContactPoint;

  /** Identifies the routing target to send acknowledgements to. */
  @IsOptional()
  @IsString()
  endpoint?: string;

  /** Creates a new MessageHeaderSource. @param props - Initial values. */
  constructor(props?: Partial<MessageHeaderSource>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for MessageHeader. */
export class MessageHeaderResponse extends BackboneElement {

  /** The MessageHeader.id of the message to which this message is a response. */
  @IsOptional()
  @IsString()
  identifier?: string;

  /** Code that identifies the type of response to the message. */
  @IsOptional()
  @IsEnum(ResponseType)
  code?: ResponseType;

  /** Full details of any issues found in the message. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  details?: Reference;

  /** Creates a new MessageHeaderResponse. @param props - Initial values. */
  constructor(props?: Partial<MessageHeaderResponse>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 MessageHeader — the header for a message exchange. */
export class MessageHeader extends DomainResource {

  readonly resourceType = 'MessageHeader';

  /** Code that identifies the event this message represents as a Coding. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  eventCoding?: Coding;

  /** Code that identifies the event this message represents as a URI. */
  @IsOptional()
  @IsString()
  eventUri?: string;

  /** Message destination application(s). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MessageHeaderDestination)
  destination?: MessageHeaderDestination[];

  /** Identifies the sending system. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  sender?: Reference;

  /** The person or device that performed the data entry. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  enterer?: Reference;

  /** The logical author of the message. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /** The source application from which this message originated. */
  @IsOptional()
  @ValidateNested()
  @Type(() => MessageHeaderSource)
  source?: MessageHeaderSource;

  /** The person or organization that accepts overall responsibility for the contents of the message. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  responsible?: Reference;

  /** Coded indication of the cause for the event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  reason?: CodeableConcept;

  /** Information about the message that this message is a response to. */
  @IsOptional()
  @ValidateNested()
  @Type(() => MessageHeaderResponse)
  response?: MessageHeaderResponse;

  /** The actual data of the message. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  focus?: Reference[];

  /** Permanent link to the MessageDefinition for this message. */
  @IsOptional()
  @IsString()
  definition?: string;

  /** Creates a new MessageHeader. @param props - Initial values. */
  constructor(props?: Partial<MessageHeader>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the destination array. @returns This instance for chaining. */
  addDestination(item: MessageHeaderDestination): this {
    if (!this.destination) {
      this.destination = [];
    }

    this.destination.push(item);

    return this;
  }

  /** Adds an item to the focus array. @returns This instance for chaining. */
  addFocus(item: Reference): this {
    if (!this.focus) {
      this.focus = [];
    }

    this.focus.push(item);

    return this;
  }
}
