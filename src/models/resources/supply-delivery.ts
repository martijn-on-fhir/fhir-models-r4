import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { Timing } from '../datatypes/timing.js';
import { SupplyDeliveryStatus } from '../enums/supply-delivery-status.js';

/** Backbone element for SupplyDelivery. */
export class SupplyDeliverySuppliedItem extends BackboneElement {

  /** The amount of supply that has been dispensed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** Identifies the medication, substance or device being dispensed as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  itemCodeableConcept?: CodeableConcept;

  /** Identifies the medication, substance or device being dispensed as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  itemReference?: Reference;

  /** Creates a new SupplyDeliverySuppliedItem. @param props - Initial values. */
  constructor(props?: Partial<SupplyDeliverySuppliedItem>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 SupplyDelivery — record of delivery of what is supplied. */
export class SupplyDelivery extends DomainResource {

  readonly resourceType = 'SupplyDelivery';

  /** Identifier for this supply delivery. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** A plan, proposal or order that is fulfilled in whole or in part by this event. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** A larger event of which this particular event is a component or step. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /** A code specifying the state of the dispense event. */
  @IsOptional()
  @IsEnum(SupplyDeliveryStatus)
  status?: SupplyDeliveryStatus;

  /** A link to a resource representing the person whom the delivered item is for. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /** Indicates the type of dispensing event that is performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The item that is being delivered or has been supplied. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SupplyDeliverySuppliedItem)
  suppliedItem?: SupplyDeliverySuppliedItem;

  /** The date or time(s) the activity occurred as a dateTime. */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  /** The date or time(s) the activity occurred as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  occurrencePeriod?: Period;

  /** The date or time(s) the activity occurred as a Timing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  occurrenceTiming?: Timing;

  /** The individual responsible for dispensing the medication, supplier or device. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  supplier?: Reference;

  /** Identification of the facility/location where the Supply was shipped to, as part of the dispense event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  destination?: Reference;

  /** Identifies the person who picked up the Supply. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  receiver?: Reference[];

  /** Creates a new SupplyDelivery. @param props - Initial values. */
  constructor(props?: Partial<SupplyDelivery>) {
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

  /** Adds an item to the basedOn array. @returns This instance for chaining. */
  addBasedOn(item: Reference): this {
    if (!this.basedOn) {
      this.basedOn = [];
    }

    this.basedOn.push(item);

    return this;
  }

  /** Adds an item to the partOf array. @returns This instance for chaining. */
  addPartOf(item: Reference): this {
    if (!this.partOf) {
      this.partOf = [];
    }

    this.partOf.push(item);

    return this;
  }

  /** Adds an item to the receiver array. @returns This instance for chaining. */
  addReceiver(item: Reference): this {
    if (!this.receiver) {
      this.receiver = [];
    }

    this.receiver.push(item);

    return this;
  }
}
