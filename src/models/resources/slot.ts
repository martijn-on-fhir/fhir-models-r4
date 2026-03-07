import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';
import { SlotStatus } from '../enums/slot-status.js';

/** FHIR R4 Slot — a slot of time on a schedule that may be available for booking appointments. */
export class Slot extends DomainResource {

  readonly resourceType = 'Slot';

  /** External identifiers for this slot. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** A broad categorization of the service that is to be performed during this appointment. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  serviceCategory?: CodeableConcept[];

  /** The type of appointments that can be booked into this slot. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  serviceType?: CodeableConcept[];

  /** The specialty of a practitioner that would be required to perform the service requested. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  specialty?: CodeableConcept[];

  /** The style of appointment or patient that may be booked in the slot. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  appointmentType?: CodeableConcept;

  /** The schedule resource that this slot defines an interval of status information. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  schedule?: Reference;

  /** The free/busy status of the slot (e.g., busy, free, busy-unavailable). */
  @IsOptional()
  @IsEnum(SlotStatus)
  status?: SlotStatus;

  /** Date/Time that the slot is to begin. */
  @IsOptional()
  @IsString()
  start?: string;

  /** Date/Time that the slot is to conclude. */
  @IsOptional()
  @IsString()
  end?: string;

  /** Whether this slot has been overbooked beyond the available capacity. */
  @IsOptional()
  @IsBoolean()
  overbooked?: boolean;

  /** Comments on the slot to describe any extended information. */
  @IsOptional()
  @IsString()
  comment?: string;

  /** Creates a new Slot. @param props - Initial values. */
  constructor(props?: Partial<Slot>) {
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
}
