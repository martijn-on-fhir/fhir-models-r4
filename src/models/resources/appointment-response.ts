import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';
import { ParticipantStatus } from '../enums/participant-status.js';

/** FHIR R4 AppointmentResponse resource — a reply to an appointment request for a patient and/or practitioner. */
export class AppointmentResponse extends DomainResource {

  readonly resourceType = 'AppointmentResponse';

  /** Business identifiers assigned to this appointment response. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Reference to the appointment that this response is replying to. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  appointment?: Reference;

  /** Date/time that the appointment is to take place, or the requested new start time. */
  @IsOptional()
  @IsString()
  start?: string;

  /** The date/time at which the appointment is to conclude, or the requested new end time. */
  @IsOptional()
  @IsString()
  end?: string;

  /** Role of the participant in the appointment, such as attendee or performer. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  participantType?: CodeableConcept[];

  /** A person, location, healthcare service, or device that is participating in the appointment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  actor?: Reference;

  /** Participation status of the participant. Uses the ParticipantStatus value set. */
  @IsOptional()
  @IsEnum(ParticipantStatus)
  participantStatus?: ParticipantStatus;

  /** Additional comments about the appointment response. */
  @IsOptional()
  @IsString()
  comment?: string;

  /** Creates a new {@link AppointmentResponse} instance. @param props - Initial property values. */
  constructor(props?: Partial<AppointmentResponse>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link AppointmentResponse.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link AppointmentResponse.participantType participantType} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addParticipantType(item: CodeableConcept): this {
    if (!this.participantType) {
      this.participantType = [];
    }

    this.participantType.push(item);

    return this;
  }
}
