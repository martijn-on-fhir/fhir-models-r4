import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsNumber, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Address } from '../datatypes/address.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { ContactPoint } from '../datatypes/contact-point.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';
import { LocationMode } from '../enums/location-mode.js';
import { LocationStatus } from '../enums/location-status.js';

/** Backbone element for Location. */
export class LocationPosition extends BackboneElement {

  /** Longitude with WGS84 datum. */
  @IsOptional()
  @IsNumber()
  longitude?: number;

  /** Latitude with WGS84 datum. */
  @IsOptional()
  @IsNumber()
  latitude?: number;

  /** Altitude with WGS84 datum. */
  @IsOptional()
  @IsNumber()
  altitude?: number;

  /** Creates a new LocationPosition. @param props - Initial values. */
  constructor(props?: Partial<LocationPosition>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Location. */
export class LocationHoursOfOperation extends BackboneElement {

  /** Indicates which days of the week are available between the start and end times. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  daysOfWeek?: string[];

  /** The location is open all day. */
  @IsOptional()
  @IsBoolean()
  allDay?: boolean;

  /** Time that the location opens. */
  @IsOptional()
  @IsString()
  openingTime?: string;

  /** Time that the location closes. */
  @IsOptional()
  @IsString()
  closingTime?: string;

  /** Creates a new LocationHoursOfOperation. @param props - Initial values. */
  constructor(props?: Partial<LocationHoursOfOperation>) {
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

/** FHIR R4 Location — details and position information for a physical place. */
export class Location extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'Location';

  /** Unique code or number identifying the location to its users. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The status property covers the general availability of the resource, not the current value which may be covered by the operationalStatus. */
  @IsOptional()
  @IsEnum(LocationStatus)
  status?: LocationStatus;

  /** The operational status covers operation values most relevant to beds. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  operationalStatus?: Coding;

  /** Name of the location as used by humans. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A list of alternate names that the location is known as or was known as in the past. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  alias?: string[];

  /** Description of the location, which helps in finding or referencing the place. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Indicates whether a resource instance represents a specific location or a class of locations. */
  @IsOptional()
  @IsEnum(LocationMode)
  mode?: LocationMode;

  /** Indicates the type of function performed at the location. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /** The contact details of communication devices available at the location. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /** Physical location. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  address?: Address;

  /** Physical form of the location, e.g. building, room, vehicle, road. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  physicalType?: CodeableConcept;

  /** The absolute geographic location of the location, expressed using the WGS84 datum. */
  @IsOptional()
  @ValidateNested()
  @Type(() => LocationPosition)
  position?: LocationPosition;

  /** The organization responsible for the provisioning and upkeep of the location. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  managingOrganization?: Reference;

  /** Another location of which this location is physically a part of. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  partOf?: Reference;

  /** What days/times during a week is this location usually open. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LocationHoursOfOperation)
  hoursOfOperation?: LocationHoursOfOperation[];

  /** A description of when the locations opening hours are different to normal. */
  @IsOptional()
  @IsString()
  availabilityExceptions?: string;

  /** Technical endpoints providing access to services operated for the location. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  endpoint?: Reference[];

  /** Creates a new Location. @param props - Initial values. */
  constructor(props?: Partial<Location>) {
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

  /** Adds an item to the alias array. @returns This instance for chaining. */
  addAlias(item: string): this {
    if (!this.alias) {
      this.alias = [];
    }

    this.alias.push(item);

    return this;
  }

  /** Adds an item to the type array. @returns This instance for chaining. */
  addType(item: CodeableConcept): this {
    if (!this.type) {
      this.type = [];
    }

    this.type.push(item);

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

  /** Adds an item to the hoursOfOperation array. @returns This instance for chaining. */
  addHoursOfOperation(item: LocationHoursOfOperation): this {
    if (!this.hoursOfOperation) {
      this.hoursOfOperation = [];
    }

    this.hoursOfOperation.push(item);

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
