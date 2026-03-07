import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactPoint } from '../datatypes/contact-point.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for PractitionerRole representing times the service site is available. */
export class PractitionerRoleAvailableTime extends BackboneElement {

  /** Indicates which days of the week are available between the start and end times. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  daysOfWeek?: string[];

  /** Is this always available, all day. */
  @IsOptional()
  @IsBoolean()
  allDay?: boolean;

  /** The opening time of day for the available times. */
  @IsOptional()
  @IsString()
  availableStartTime?: string;

  /** The closing time of day for the available times. */
  @IsOptional()
  @IsString()
  availableEndTime?: string;

  /** Creates a new PractitionerRoleAvailableTime. @param props - Initial values. */
  constructor(props?: Partial<PractitionerRoleAvailableTime>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the daysOfWeek array. @returns This instance for chaining. */
  addDaysOfWeek(item: string): this {
    if (!this.daysOfWeek) {
      this.daysOfWeek = [];
    }

    this.daysOfWeek.push(item);

    return this;
  }
}

/** Backbone element for PractitionerRole representing periods when the practitioner is not available. */
export class PractitionerRoleNotAvailable extends BackboneElement {

  /** The reason that can be presented to the user as to why this time is not available. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Service is not available during this period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  during?: Period;

  /** Creates a new PractitionerRoleNotAvailable. @param props - Initial values. */
  constructor(props?: Partial<PractitionerRoleNotAvailable>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 PractitionerRole — A specific set of roles, locations, specialties, or services that a practitioner may perform. */
export class PractitionerRole extends DomainResource {

  readonly resourceType = 'PractitionerRole';

  /** Business identifiers that are specific to this role. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Whether this practitioner role record is in active use. */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  /** The period during which the person is authorized to act as a practitioner in these role(s). */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Practitioner that is able to provide the defined services for the organization. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  practitioner?: Reference;

  /** The organization where the practitioner performs the roles associated. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  organization?: Reference;

  /** Roles which this practitioner is authorized to perform for the organization. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /** Specific specialty of the practitioner. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  specialty?: CodeableConcept[];

  /** The location(s) at which this practitioner provides care. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  location?: Reference[];

  /** The list of healthcare services that this worker provides for this role's organization/location(s). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  healthcareService?: Reference[];

  /** Contact details that are specific to the role/location/service. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /** A collection of times the practitioner is available or performing this role at the location. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PractitionerRoleAvailableTime)
  availableTime?: PractitionerRoleAvailableTime[];

  /** The practitioner is not available or performing this role during this period of time. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PractitionerRoleNotAvailable)
  notAvailable?: PractitionerRoleNotAvailable[];

  /** A description of site availability exceptions. */
  @IsOptional()
  @IsString()
  availabilityExceptions?: string;

  /** Technical endpoints providing access to services operated for the practitioner with this role. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  endpoint?: Reference[];

  /** Creates a new PractitionerRole. @param props - Initial values. */
  constructor(props?: Partial<PractitionerRole>) {
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

  /** Adds an item to the code array. @returns This instance for chaining. */
  addCode(item: CodeableConcept): this {
    if (!this.code) {
      this.code = [];
    }

    this.code.push(item);

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

  /** Adds an item to the location array. @returns This instance for chaining. */
  addLocation(item: Reference): this {
    if (!this.location) {
      this.location = [];
    }

    this.location.push(item);

    return this;
  }

  /** Adds an item to the healthcareService array. @returns This instance for chaining. */
  addHealthcareService(item: Reference): this {
    if (!this.healthcareService) {
      this.healthcareService = [];
    }

    this.healthcareService.push(item);

    return this;
  }

  /** Adds an item to the telecom array. @returns This instance for chaining. */
  addTelecom(item: ContactPoint): this {
    if (!this.telecom) {
      this.telecom = [];
    }

    this.telecom.push(item);

    return this;
  }

  /** Adds an item to the availableTime array. @returns This instance for chaining. */
  addAvailableTime(item: PractitionerRoleAvailableTime): this {
    if (!this.availableTime) {
      this.availableTime = [];
    }

    this.availableTime.push(item);

    return this;
  }

  /** Adds an item to the notAvailable array. @returns This instance for chaining. */
  addNotAvailable(item: PractitionerRoleNotAvailable): this {
    if (!this.notAvailable) {
      this.notAvailable = [];
    }

    this.notAvailable.push(item);

    return this;
  }

  /** Adds an item to the endpoint array. @returns This instance for chaining. */
  addEndpoint(item: Reference): this {
    if (!this.endpoint) {
      this.endpoint = [];
    }

    this.endpoint.push(item);

    return this;
  }
}
