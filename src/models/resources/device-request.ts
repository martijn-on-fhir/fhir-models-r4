import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Range } from '../datatypes/range.js';
import { Reference } from '../datatypes/reference.js';
import { Timing } from '../datatypes/timing.js';
import { RequestIntent } from '../enums/request-intent.js';
import { RequestPriority } from '../enums/request-priority.js';
import { RequestStatus } from '../enums/request-status.js';

/** Backbone element for DeviceRequest. */
export class DeviceRequestParameter extends BackboneElement {

  /** A code or string that identifies the device detail being asserted. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The value of the device detail, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  valueCodeableConcept?: CodeableConcept;

  /** The value of the device detail, as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /** The value of the device detail, as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  valueRange?: Range;

  /** The value of the device detail, as a boolean. */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  /** Creates a new DeviceRequestParameter. @param props - Initial values. */
  constructor(props?: Partial<DeviceRequestParameter>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 DeviceRequest — a request for a patient to use or be given a medical device. */
export class DeviceRequest extends DomainResource {

  /** Resource type constant. */
  readonly resourceType = 'DeviceRequest';

  /** Business identifiers assigned to this device request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The URL pointing to a FHIR-defined protocol or definition that this request is based on. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesCanonical?: string[];

  /** The URL pointing to an externally maintained protocol or definition that this request is based on. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesUri?: string[];

  /** Plan or request that is fulfilled in whole or in part by this device request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** The request takes the place of the referenced completed or terminated request(s). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  priorRequest?: Reference[];

  /** Composite request this is part of. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  groupIdentifier?: Identifier;

  /** The status of the request. */
  @IsOptional()
  @IsEnum(RequestStatus)
  status?: RequestStatus;

  /** Whether the request is a proposal, plan, or an original order. */
  @IsOptional()
  @IsEnum(RequestIntent)
  intent?: RequestIntent;

  /** Indicates how quickly the request should be addressed. */
  @IsOptional()
  @IsEnum(RequestPriority)
  priority?: RequestPriority;

  /** The details of the device to be used, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  codeReference?: Reference;

  /** The details of the device to be used, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  codeCodeableConcept?: CodeableConcept;

  /** Specific parameters for the ordered item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceRequestParameter)
  parameter?: DeviceRequestParameter[];

  /** The patient who will use the device. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** An encounter that provides additional context in which this request is made. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** The timing schedule for the use of the device, as a dateTime. */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  /** The timing schedule for the use of the device, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  occurrencePeriod?: Period;

  /** The timing schedule for the use of the device, as a Timing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  occurrenceTiming?: Timing;

  /** When the request transitioned to being actionable. */
  @IsOptional()
  @IsString()
  authoredOn?: string;

  /** The individual who initiated the request. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  requester?: Reference;

  /** Desired type of performer for doing the diagnostic testing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  performerType?: CodeableConcept;

  /** The desired performer for doing the diagnostic testing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  performer?: Reference;

  /** Reason or justification for the use of this device. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Reason or justification for the use of this device as a reference. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** Insurance plans that may be relevant for the request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  insurance?: Reference[];

  /** Additional clinical information about the patient relevant to the request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supportingInfo?: Reference[];

  /** Details about this request that were not represented in other specific attributes. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Key events in the history of the request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  relevantHistory?: Reference[];

  /** Creates a new DeviceRequest. @param props - Initial values. */
  constructor(props?: Partial<DeviceRequest>) {
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

  /** Adds an item to the instantiatesCanonical array. @returns This instance for chaining. */
  addInstantiatesCanonical(item: string): this {
    if (!this.instantiatesCanonical) {
      this.instantiatesCanonical = [];
    }

    this.instantiatesCanonical.push(item);

    return this;
  }

  /** Adds an item to the instantiatesUri array. @returns This instance for chaining. */
  addInstantiatesUri(item: string): this {
    if (!this.instantiatesUri) {
      this.instantiatesUri = [];
    }

    this.instantiatesUri.push(item);

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

  /** Adds an item to the priorRequest array. @returns This instance for chaining. */
  addPriorRequest(item: Reference): this {
    if (!this.priorRequest) {
      this.priorRequest = [];
    }

    this.priorRequest.push(item);

    return this;
  }

  /** Adds an item to the parameter array. @returns This instance for chaining. */
  addParameter(item: DeviceRequestParameter): this {
    if (!this.parameter) {
      this.parameter = [];
    }

    this.parameter.push(item);

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

  /** Adds an item to the insurance array. @returns This instance for chaining. */
  addInsurance(item: Reference): this {
    if (!this.insurance) {
      this.insurance = [];
    }

    this.insurance.push(item);

    return this;
  }

  /** Adds an item to the supportingInfo array. @returns This instance for chaining. */
  addSupportingInfo(item: Reference): this {
    if (!this.supportingInfo) {
      this.supportingInfo = [];
    }

    this.supportingInfo.push(item);

    return this;
  }

  /** Adds an item to the note array. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }

  /** Adds an item to the relevantHistory array. @returns This instance for chaining. */
  addRelevantHistory(item: Reference): this {
    if (!this.relevantHistory) {
      this.relevantHistory = [];
    }

    this.relevantHistory.push(item);

    return this;
  }
}
