import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { RequestStatus } from '../enums/request-status.js';

/** Backbone element for {@link CommunicationRequest.payload}. */
export class CommunicationRequestPayload extends BackboneElement {

  /** The communicated content (or for multi-part communications, one portion of the communication). Expressed as a string. */
  @IsOptional()
  @IsString()
  contentString?: string;

  /** The communicated content (or for multi-part communications, one portion of the communication). Expressed as an Attachment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  contentAttachment?: Attachment;

  /** The communicated content (or for multi-part communications, one portion of the communication). Expressed as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  contentReference?: Reference;

  /** Creates a new {@link CommunicationRequestPayload} instance. @param props - Initial property values. */
  constructor(props?: Partial<CommunicationRequestPayload>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 CommunicationRequest resource — a request to convey information, such as a request for a clinician to communicate lab results to a patient. */
export class CommunicationRequest extends DomainResource {

  /** The type of resource this is. Always 'CommunicationRequest'. */
  readonly resourceType = 'CommunicationRequest';

  /** Business identifiers assigned to this communication request by the performer or other systems. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** A plan or proposal that is fulfilled in whole or in part by this request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** Completed or terminated request(s) whose function is taken by this new request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  replaces?: Reference[];

  /** A shared identifier common to all requests that were authorized more or less simultaneously by a single author. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  groupIdentifier?: Identifier;

  /** The status of the proposal or order. Uses the RequestStatus value set. */
  @IsOptional()
  @IsEnum(RequestStatus)
  status?: RequestStatus;

  /** Captures the reason for the current state of the CommunicationRequest. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  statusReason?: CodeableConcept;

  /** The type of message to be sent, such as alert, notification, reminder, or instruction. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** Characterizes how quickly the proposed act must be initiated. */
  @IsOptional()
  @IsString()
  priority?: string;

  /** If true, indicates that the CommunicationRequest is asking for the specified action to not occur. */
  @IsOptional()
  @IsBoolean()
  doNotPerform?: boolean;

  /** A channel that was used for this communication, such as email, fax, or telephone. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  medium?: CodeableConcept[];

  /** The patient or group that is the focus of this communication request. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** Other resources that pertain to this communication request and to which this communication request should be associated. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  about?: Reference[];

  /** The Encounter during which this CommunicationRequest was created or to which the creation of this record is tightly associated. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** Text, attachment(s), or resource(s) to be communicated to the recipient. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CommunicationRequestPayload)
  payload?: CommunicationRequestPayload[];

  /** The time when this communication is to occur. Expressed as a dateTime. */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  /** The time when this communication is to occur. Expressed as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  occurrencePeriod?: Period;

  /** For draft requests, indicates the date of initial creation. For requests with other statuses, indicates the date of activation. */
  @IsOptional()
  @IsString()
  authoredOn?: string;

  /** The device, individual, or organization who initiated the request and has responsibility for its activation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  requester?: Reference;

  /** The entity (e.g., person, organization) which is the intended target of the communication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  recipient?: Reference[];

  /** The entity (e.g., person, organization) which is to act on the information in this communication request. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  sender?: Reference;

  /** Describes why the request is being made in coded or textual form. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Indicates another resource whose existence justifies this request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** Comments made about the communication request by the requester, sender, recipient, or other participants. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Creates a new {@link CommunicationRequest} instance. @param props - Initial property values. */
  constructor(props?: Partial<CommunicationRequest>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link CommunicationRequest.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link CommunicationRequest.basedOn basedOn} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addBasedOn(item: Reference): this {
    if (!this.basedOn) {
      this.basedOn = [];
    }

    this.basedOn.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link CommunicationRequest.replaces replaces} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addReplaces(item: Reference): this {
    if (!this.replaces) {
      this.replaces = [];
    }

    this.replaces.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link CommunicationRequest.category category} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addCategory(item: CodeableConcept): this {
    if (!this.category) {
      this.category = [];
    }

    this.category.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link CommunicationRequest.medium medium} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addMedium(item: CodeableConcept): this {
    if (!this.medium) {
      this.medium = [];
    }

    this.medium.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link CommunicationRequest.about about} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addAbout(item: Reference): this {
    if (!this.about) {
      this.about = [];
    }

    this.about.push(item);

    return this;
  }

  /** Adds a {@link CommunicationRequestPayload} to the {@link CommunicationRequest.payload payload} array. @param item - The {@link CommunicationRequestPayload} to add. @returns This instance for chaining. */
  addPayload(item: CommunicationRequestPayload): this {
    if (!this.payload) {
      this.payload = [];
    }

    this.payload.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link CommunicationRequest.recipient recipient} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addRecipient(item: Reference): this {
    if (!this.recipient) {
      this.recipient = [];
    }

    this.recipient.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link CommunicationRequest.reasonCode reasonCode} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addReasonCode(item: CodeableConcept): this {
    if (!this.reasonCode) {
      this.reasonCode = [];
    }

    this.reasonCode.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link CommunicationRequest.reasonReference reasonReference} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addReasonReference(item: Reference): this {
    if (!this.reasonReference) {
      this.reasonReference = [];
    }

    this.reasonReference.push(item);

    return this;
  }

  /** Adds an {@link Annotation} to the {@link CommunicationRequest.note note} array. @param item - The {@link Annotation} to add. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }
}
