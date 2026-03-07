import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';
import { EventStatus } from '../enums/event-status.js';

/** Backbone element for {@link Communication.payload}. */
export class CommunicationPayload extends BackboneElement {

  /** A communicated content (or for multi-part communications, one portion of the communication). Expressed as a string. */
  @IsOptional()
  @IsString()
  contentString?: string;

  /** A communicated content (or for multi-part communications, one portion of the communication). Expressed as an Attachment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  contentAttachment?: Attachment;

  /** A communicated content (or for multi-part communications, one portion of the communication). Expressed as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  contentReference?: Reference;

  /** Creates a new {@link CommunicationPayload} instance. @param props - Initial property values. */
  constructor(props?: Partial<CommunicationPayload>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 Communication resource — an occurrence of information being transmitted, such as an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition, or clinical data sent to a care coordinator. */
export class Communication extends DomainResource {

  /** The type of resource this is. Always 'Communication'. */
  readonly resourceType = 'Communication';

  /** Business identifiers assigned to this communication by the performer or other systems. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The URL pointing to a FHIR-defined protocol, guideline, orderset, or other definition that is adhered to by this communication. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesCanonical?: string[];

  /** The URL pointing to an externally maintained protocol, guideline, orderset, or other definition that is adhered to by this communication. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesUri?: string[];

  /** An order, proposal, or plan fulfilled in whole or in part by this communication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** Part of this action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /** Prior communication that this communication is in response to. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  inResponseTo?: Reference[];

  /** The status of the transmission. Uses the EventStatus value set. */
  @IsOptional()
  @IsEnum(EventStatus)
  status?: EventStatus;

  /** Captures the reason for the current state of the communication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  statusReason?: CodeableConcept;

  /** The type of message conveyed, such as alert, notification, reminder, or instruction. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** Characterizes how quickly the planned or in-progress communication must be addressed. */
  @IsOptional()
  @IsString()
  priority?: string;

  /** A channel that was used for this communication, such as email, fax, or telephone. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  medium?: CodeableConcept[];

  /** The patient or group that was the focus of this communication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** Description of the purpose/content, similar to a subject line in an email. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  topic?: CodeableConcept;

  /** Other resources that pertain to this communication and to which this communication should be associated. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  about?: Reference[];

  /** The Encounter during which this Communication was created or to which the creation of this record is tightly associated. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** The time when this communication was sent. */
  @IsOptional()
  @IsString()
  sent?: string;

  /** The time when this communication arrived at the destination. */
  @IsOptional()
  @IsString()
  received?: string;

  /** The entity (e.g., person, organization) which was the target of the communication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  recipient?: Reference[];

  /** The entity (e.g., person, organization) which was the source of the communication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  sender?: Reference;

  /** The reason or justification for the communication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Indicates another resource whose existence justifies this communication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** Text, attachment(s), or resource(s) that was communicated to the recipient. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CommunicationPayload)
  payload?: CommunicationPayload[];

  /** Additional notes or commentary about the communication by the sender, receiver, or other interested parties. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Creates a new {@link Communication} instance. @param props - Initial property values. */
  constructor(props?: Partial<Communication>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link Communication.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a canonical string to the {@link Communication.instantiatesCanonical instantiatesCanonical} array. @param item - The canonical string to add. @returns This instance for chaining. */
  addInstantiatesCanonical(item: string): this {
    if (!this.instantiatesCanonical) {
      this.instantiatesCanonical = [];
    }

    this.instantiatesCanonical.push(item);

    return this;
  }

  /** Adds a URI string to the {@link Communication.instantiatesUri instantiatesUri} array. @param item - The URI string to add. @returns This instance for chaining. */
  addInstantiatesUri(item: string): this {
    if (!this.instantiatesUri) {
      this.instantiatesUri = [];
    }

    this.instantiatesUri.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Communication.basedOn basedOn} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addBasedOn(item: Reference): this {
    if (!this.basedOn) {
      this.basedOn = [];
    }

    this.basedOn.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Communication.partOf partOf} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addPartOf(item: Reference): this {
    if (!this.partOf) {
      this.partOf = [];
    }

    this.partOf.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Communication.inResponseTo inResponseTo} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addInResponseTo(item: Reference): this {
    if (!this.inResponseTo) {
      this.inResponseTo = [];
    }

    this.inResponseTo.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link Communication.category category} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addCategory(item: CodeableConcept): this {
    if (!this.category) {
      this.category = [];
    }

    this.category.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link Communication.medium medium} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addMedium(item: CodeableConcept): this {
    if (!this.medium) {
      this.medium = [];
    }

    this.medium.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Communication.about about} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addAbout(item: Reference): this {
    if (!this.about) {
      this.about = [];
    }

    this.about.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Communication.recipient recipient} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addRecipient(item: Reference): this {
    if (!this.recipient) {
      this.recipient = [];
    }

    this.recipient.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link Communication.reasonCode reasonCode} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addReasonCode(item: CodeableConcept): this {
    if (!this.reasonCode) {
      this.reasonCode = [];
    }

    this.reasonCode.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Communication.reasonReference reasonReference} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addReasonReference(item: Reference): this {
    if (!this.reasonReference) {
      this.reasonReference = [];
    }

    this.reasonReference.push(item);

    return this;
  }

  /** Adds a {@link CommunicationPayload} to the {@link Communication.payload payload} array. @param item - The {@link CommunicationPayload} to add. @returns This instance for chaining. */
  addPayload(item: CommunicationPayload): this {
    if (!this.payload) {
      this.payload = [];
    }

    this.payload.push(item);

    return this;
  }

  /** Adds an {@link Annotation} to the {@link Communication.note note} array. @param item - The {@link Annotation} to add. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }
}
