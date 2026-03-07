import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Range } from '../datatypes/range.js';
import { Reference } from '../datatypes/reference.js';
import { Timing } from '../datatypes/timing.js';
import { RequestStatus } from '../enums/request-status.js';

/** Backbone element for SupplyRequest. */
export class SupplyRequestParameter extends BackboneElement {

  /** A code or string that identifies the device detail being asserted. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The value of the device detail as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  valueCodeableConcept?: CodeableConcept;

  /** The value of the device detail as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /** The value of the device detail as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  valueRange?: Range;

  /** The value of the device detail as a boolean. */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  /** Creates a new SupplyRequestParameter. @param props - Initial values. */
  constructor(props?: Partial<SupplyRequestParameter>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 SupplyRequest — a record of a request for a supply of a device or medication used in healthcare. */
export class SupplyRequest extends DomainResource {

  readonly resourceType = 'SupplyRequest';

  /** Business identifiers assigned to this SupplyRequest by the author and/or other systems. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Status of the supply request. */
  @IsOptional()
  @IsEnum(RequestStatus)
  status?: RequestStatus;

  /** Category of supply, e.g., central, non-stock, etc. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** Indicates how quickly this SupplyRequest should be addressed with respect to other requests. */
  @IsOptional()
  @IsString()
  priority?: string;

  /** The item that is requested to be supplied as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  itemCodeableConcept?: CodeableConcept;

  /** The item that is requested to be supplied as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  itemReference?: Reference;

  /** The amount that is being ordered of the indicated item. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** Specific parameters for the ordered item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SupplyRequestParameter)
  parameter?: SupplyRequestParameter[];

  /** When the request should be fulfilled as a dateTime. */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  /** When the request should be fulfilled as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  occurrencePeriod?: Period;

  /** When the request should be fulfilled as a Timing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  occurrenceTiming?: Timing;

  /** When the request was made. */
  @IsOptional()
  @IsString()
  authoredOn?: string;

  /** The device, practitioner, etc. who initiated the request. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  requester?: Reference;

  /** Who is intended to fulfill the request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supplier?: Reference[];

  /** The reason why the supply item was requested. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** The reason why the supply item was requested as a reference. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** Where the supply is expected to come from. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  deliverFrom?: Reference;

  /** Where the supply is destined to go. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  deliverTo?: Reference;

  /** Creates a new SupplyRequest. @param props - Initial values. */
  constructor(props?: Partial<SupplyRequest>) {
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

  /** Adds an item to the parameter array. @returns This instance for chaining. */
  addParameter(item: SupplyRequestParameter): this {
    if (!this.parameter) {
      this.parameter = [];
    }

    this.parameter.push(item);

    return this;
  }

  /** Adds an item to the supplier array. @returns This instance for chaining. */
  addSupplier(item: Reference): this {
    if (!this.supplier) {
      this.supplier = [];
    }

    this.supplier.push(item);

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
}
