import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { AppointmentStatus } from '../enums/appointment-status.js';

/** Backbone element for Appointment — participants involved in the appointment. */
export class AppointmentParticipant extends BackboneElement {

  /** Role of participant in the appointment. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /** Person, location, device, or healthcare service participating. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  actor?: Reference;

  /** Whether the participant is required, optional, or information-only. */
  @IsOptional()
  @IsString()
  required?: string;

  /** Participation status of the actor. */
  @IsOptional()
  @IsString()
  status?: string;

  /** Participation period of the actor. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Creates a new AppointmentParticipant. @param props - Initial values. */
  constructor(props?: Partial<AppointmentParticipant>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the type array. @returns This instance for chaining. */
  addType(item: CodeableConcept): this {
    if (!this.type) {
      this.type = [];
    }

    this.type.push(item);

    return this;
  }
}

/** FHIR R4 Appointment — a booking of a healthcare event among patients, practitioners, and resources. */
export class Appointment extends DomainResource {

  /** The FHIR resource type string. */
  readonly resourceType = 'Appointment';

  /** Business identifiers assigned to this appointment. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The overall status of the appointment (proposed | pending | booked | etc.). */
  @IsOptional()
  @IsEnum(AppointmentStatus)
  status?: AppointmentStatus;

  /** The coded reason for the appointment being cancelled. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  cancelationReason?: CodeableConcept;

  /** Broad categorization of the type of service. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  serviceCategory?: CodeableConcept[];

  /** Specific type of service to be performed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  serviceType?: CodeableConcept[];

  /** The specialty of the practitioner for this appointment. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  specialty?: CodeableConcept[];

  /** The style of appointment that has been booked. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  appointmentType?: CodeableConcept;

  /** Coded reason the appointment is being scheduled. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Reference-based reason the appointment is being scheduled. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** Used to make informed decisions about urgency of the appointment. */
  @IsOptional()
  @IsNumber()
  priority?: number;

  /** Shown on a subject line in a meeting request or appointment list. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Additional information to support the appointment. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supportingInformation?: Reference[];

  /** When the appointment is to take place (start time). */
  @IsOptional()
  @IsString()
  start?: string;

  /** When the appointment is to conclude (end time). */
  @IsOptional()
  @IsString()
  end?: string;

  /** Duration of the appointment in minutes. */
  @IsOptional()
  @IsNumber()
  minutesDuration?: number;

  /** Slot(s) that this appointment is filling. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  slot?: Reference[];

  /** The date that the appointment was initially created. */
  @IsOptional()
  @IsString()
  created?: string;

  /** Additional comments about the appointment. */
  @IsOptional()
  @IsString()
  comment?: string;

  /** Detailed information for the patient about the appointment. */
  @IsOptional()
  @IsString()
  patientInstruction?: string;

  /** The service request this appointment is allocated to assess. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** List of participants involved in the appointment. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AppointmentParticipant)
  participant?: AppointmentParticipant[];

  /** Potential date/time interval(s) requested for the appointment. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Period)
  requestedPeriod?: Period[];

  /** Creates a new Appointment. @param props - Initial values. */
  constructor(props?: Partial<Appointment>) {
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

  /** Adds an item to the serviceCategory array. @returns This instance for chaining. */
  addServiceCategory(item: CodeableConcept): this {
    if (!this.serviceCategory) {
      this.serviceCategory = [];
    }

    this.serviceCategory.push(item);

    return this;
  }

  /** Adds an item to the serviceType array. @returns This instance for chaining. */
  addServiceType(item: CodeableConcept): this {
    if (!this.serviceType) {
      this.serviceType = [];
    }

    this.serviceType.push(item);

    return this;
  }

  /** Adds an item to the specialty array. @returns This instance for chaining. */
  addSpecialty(item: CodeableConcept): this {
    if (!this.specialty) {
      this.specialty = [];
    }

    this.specialty.push(item);

    return this;
  }

  /** Adds an item to the reasonCode array. @returns This instance for chaining. */
  addReasonCode(item: CodeableConcept): this {
    if (!this.reasonCode) {
      this.reasonCode = [];
    }

    this.reasonCode.push(item);

    return this;
  }

  /** Adds an item to the reasonReference array. @returns This instance for chaining. */
  addReasonReference(item: Reference): this {
    if (!this.reasonReference) {
      this.reasonReference = [];
    }

    this.reasonReference.push(item);

    return this;
  }

  /** Adds an item to the supportingInformation array. @returns This instance for chaining. */
  addSupportingInformation(item: Reference): this {
    if (!this.supportingInformation) {
      this.supportingInformation = [];
    }

    this.supportingInformation.push(item);

    return this;
  }

  /** Adds an item to the slot array. @returns This instance for chaining. */
  addSlot(item: Reference): this {
    if (!this.slot) {
      this.slot = [];
    }

    this.slot.push(item);

    return this;
  }

  /** Adds an item to the basedOn array. @returns This instance for chaining. */
  addBasedOn(item: Reference): this {
    if (!this.basedOn) {
      this.basedOn = [];
    }

    this.basedOn.push(item);

    return this;
  }

  /** Adds an item to the participant array. @returns This instance for chaining. */
  addParticipant(item: AppointmentParticipant): this {
    if (!this.participant) {
      this.participant = [];
    }

    this.participant.push(item);

    return this;
  }

  /** Adds an item to the requestedPeriod array. @returns This instance for chaining. */
  addRequestedPeriod(item: Period): this {
    if (!this.requestedPeriod) {
      this.requestedPeriod = [];
    }

    this.requestedPeriod.push(item);

    return this;
  }
}
