import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactPoint } from '../datatypes/contact-point.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for {@link HealthcareService.eligibility}. */
export class HealthcareServiceEligibility extends BackboneElement {

  /** Coded value for the eligibility criteria. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** Describes the eligibility conditions for the service in free text. */
  @IsOptional()
  @IsString()
  comment?: string;

  /** Creates a new {@link HealthcareServiceEligibility} instance. @param props - Initial property values. */
  constructor(props?: Partial<HealthcareServiceEligibility>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link HealthcareService.availableTime}. */
export class HealthcareServiceAvailableTime extends BackboneElement {

  /** Indicates which days of the week are available between the start and end times. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  daysOfWeek?: string[];

  /** Indicates whether the service is available all day (24 hours) on the given days. */
  @IsOptional()
  @IsBoolean()
  allDay?: boolean;

  /** The opening time of day at which this service is available (ignored if allDay is true). */
  @IsOptional()
  @IsString()
  availableStartTime?: string;

  /** The closing time of day at which this service is available (ignored if allDay is true). */
  @IsOptional()
  @IsString()
  availableEndTime?: string;

  /** Creates a new {@link HealthcareServiceAvailableTime} instance. @param props - Initial property values. */
  constructor(props?: Partial<HealthcareServiceAvailableTime>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a string to the {@link HealthcareServiceAvailableTime.daysOfWeek daysOfWeek} array. @param item - The string to add. @returns This instance for chaining. */
  addDaysOfWeek(item: string): this {
    if (!this.daysOfWeek) {
      this.daysOfWeek = [];
    }

    this.daysOfWeek.push(item);

    return this;
  }
}

/** Backbone element for {@link HealthcareService.notAvailable}. */
export class HealthcareServiceNotAvailable extends BackboneElement {

  /** The reason that can be presented to the user as to why this time is not available. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Service is not available during this period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  during?: Period;

  /** Creates a new {@link HealthcareServiceNotAvailable} instance. @param props - Initial property values. */
  constructor(props?: Partial<HealthcareServiceNotAvailable>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 HealthcareService resource — the details of a healthcare service available at a location. */
export class HealthcareService extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'HealthcareService';

  /** External identifiers for this item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Whether this healthcare service record is in active use. */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  /** The organization that provides this healthcare service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  providedBy?: Reference;

  /** Identifies the broad category of service being performed or delivered. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** The specific type of service that may be delivered or performed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /** Collection of specialties handled by the service site. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  specialty?: CodeableConcept[];

  /** The location(s) where this healthcare service may be provided. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  location?: Reference[];

  /** Further description of the service as it would be presented to a consumer while searching. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Any additional description of the service and/or any specific issues not covered by the other attributes. */
  @IsOptional()
  @IsString()
  comment?: string;

  /** Extra details about the service that can't be placed in the other fields. */
  @IsOptional()
  @IsString()
  extraDetails?: string;

  /** If there is a photo/symbol associated with this HealthcareService, it may be included here. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  photo?: Attachment;

  /** List of contacts related to this specific healthcare service. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /** The location(s) that this service is available to (not where the service is provided). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  coverageArea?: Reference[];

  /** The code(s) that detail the conditions under which the healthcare service is available/offered. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  serviceProvisionCode?: CodeableConcept[];

  /** Does this service have specific eligibility requirements that need to be met in order to use the service? */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HealthcareServiceEligibility)
  eligibility?: HealthcareServiceEligibility[];

  /** Programs that this service is applicable to. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  program?: CodeableConcept[];

  /** Collection of characteristics (attributes) of the service. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  characteristic?: CodeableConcept[];

  /** Some services are specifically made available in multiple languages; this property permits a directory to declare the languages this is offered in. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  communication?: CodeableConcept[];

  /** Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  referralMethod?: CodeableConcept[];

  /** Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the organization. */
  @IsOptional()
  @IsBoolean()
  appointmentRequired?: boolean;

  /** A collection of times that the service site is available. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HealthcareServiceAvailableTime)
  availableTime?: HealthcareServiceAvailableTime[];

  /** The healthcare service is not available during this period of time due to the provided reason. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HealthcareServiceNotAvailable)
  notAvailable?: HealthcareServiceNotAvailable[];

  /** A description of site availability exceptions, e.g. public holiday availability. */
  @IsOptional()
  @IsString()
  availabilityExceptions?: string;

  /** Technical endpoints providing access to services operated for the specific healthcare services defined at this resource. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  endpoint?: Reference[];

  /** Creates a new {@link HealthcareService} instance. @param props - Initial property values. */
  constructor(props?: Partial<HealthcareService>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link HealthcareService.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  addCategory(item: CodeableConcept): this {
    if (!this.category) {
      this.category = [];
    }

    this.category.push(item);

    return this;
  }

  addType(item: CodeableConcept): this {
    if (!this.type) {
      this.type = [];
    }

    this.type.push(item);

    return this;
  }

  addSpecialty(item: CodeableConcept): this {
    if (!this.specialty) {
      this.specialty = [];
    }

    this.specialty.push(item);

    return this;
  }

  addLocation(item: Reference): this {
    if (!this.location) {
      this.location = [];
    }

    this.location.push(item);

    return this;
  }

  addTelecom(item: ContactPoint): this {
    if (!this.telecom) {
      this.telecom = [];
    }

    this.telecom.push(item);

    return this;
  }

  addCoverageArea(item: Reference): this {
    if (!this.coverageArea) {
      this.coverageArea = [];
    }

    this.coverageArea.push(item);

    return this;
  }

  addServiceProvisionCode(item: CodeableConcept): this {
    if (!this.serviceProvisionCode) {
      this.serviceProvisionCode = [];
    }

    this.serviceProvisionCode.push(item);

    return this;
  }

  addEligibility(item: HealthcareServiceEligibility): this {
    if (!this.eligibility) {
      this.eligibility = [];
    }

    this.eligibility.push(item);

    return this;
  }

  addProgram(item: CodeableConcept): this {
    if (!this.program) {
      this.program = [];
    }

    this.program.push(item);

    return this;
  }

  addCharacteristic(item: CodeableConcept): this {
    if (!this.characteristic) {
      this.characteristic = [];
    }

    this.characteristic.push(item);

    return this;
  }

  addCommunication(item: CodeableConcept): this {
    if (!this.communication) {
      this.communication = [];
    }

    this.communication.push(item);

    return this;
  }

  addReferralMethod(item: CodeableConcept): this {
    if (!this.referralMethod) {
      this.referralMethod = [];
    }

    this.referralMethod.push(item);

    return this;
  }

  addAvailableTime(item: HealthcareServiceAvailableTime): this {
    if (!this.availableTime) {
      this.availableTime = [];
    }

    this.availableTime.push(item);

    return this;
  }

  addNotAvailable(item: HealthcareServiceNotAvailable): this {
    if (!this.notAvailable) {
      this.notAvailable = [];
    }

    this.notAvailable.push(item);

    return this;
  }

  addEndpoint(item: Reference): this {
    if (!this.endpoint) {
      this.endpoint = [];
    }

    this.endpoint.push(item);

    return this;
  }
}
