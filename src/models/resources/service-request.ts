import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Range } from '../datatypes/range.js';
import { Ratio } from '../datatypes/ratio.js';
import { Reference } from '../datatypes/reference.js';
import { Timing } from '../datatypes/timing.js';
import { RequestIntent } from '../enums/request-intent.js';
import { RequestPriority } from '../enums/request-priority.js';
import { RequestStatus } from '../enums/request-status.js';

/** FHIR R4 ServiceRequest resource — a record of a request for a diagnostic investigation, treatment, or operation. */
export class ServiceRequest extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'ServiceRequest';

  /** Business identifiers assigned to this resource. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Canonical URL references to the protocol or definition this request is based on. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesCanonical?: string[];

  /** URI references to the protocol or definition this request is based on. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesUri?: string[];

  /** Plan or request that is fulfilled by this request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** The request that is being replaced. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  replaces?: Reference[];

  /** A shared identifier for all requests that were authorized at the same time. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  requisition?: Identifier;

  /** The status of the resource. */
  @IsOptional()
  @IsEnum(RequestStatus)
  status?: RequestStatus;

  /** Whether the request is a proposal, plan, or order. */
  @IsOptional()
  @IsEnum(RequestIntent)
  intent?: RequestIntent;

  /** A code that classifies the resource for searching and display. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** Indicates how quickly the resource should be addressed. */
  @IsOptional()
  @IsEnum(RequestPriority)
  priority?: RequestPriority;

  /** If true, indicates that the service should NOT be performed. */
  @IsOptional()
  @IsBoolean()
  doNotPerform?: boolean;

  /** A code that identifies a particular resource or action. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** Additional details about the order. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  orderDetail?: CodeableConcept[];

  /** The amount of the service or substance requested as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantityQuantity?: Quantity;

  /** The amount of the service or substance requested as a Ratio. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  quantityRatio?: Ratio;

  /** The amount of the service or substance requested as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  quantityRange?: Range;

  /** The individual or entity the resource is about. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The encounter during which this resource was created. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** The date/time when the requested service should occur. */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  /** The period during which the requested service should occur. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  occurrencePeriod?: Period;

  /** The timing schedule for the requested service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  occurrenceTiming?: Timing;

  /** Indicates whether the service is needed as a boolean. */
  @IsOptional()
  @IsBoolean()
  asNeededBoolean?: boolean;

  /** A coded reason for why the service is as-needed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  asNeededCodeableConcept?: CodeableConcept;

  /** When the resource was authored. */
  @IsOptional()
  @IsString()
  authoredOn?: string;

  /** The individual who initiated the request. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  requester?: Reference;

  /** The type of performer requested. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  performerType?: CodeableConcept;

  /** The desired performer for the service. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  performer?: Reference[];

  /** The preferred location as a coded value. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  locationCode?: CodeableConcept[];

  /** A reference to the preferred location for the service. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  locationReference?: Reference[];

  /** Coded reason for the resource. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Reference to a resource that supports the reason. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** Insurance plans that may be relevant to this resource. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  insurance?: Reference[];

  /** Additional clinical information about the patient or specimen. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supportingInfo?: Reference[];

  /** Specimens to be used for analysis. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  specimen?: Reference[];

  /** Anatomical location where the procedure should be performed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept[];

  /** Comments made about the resource. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Instructions for the patient. */
  @IsOptional()
  @IsString()
  patientInstruction?: string;

  /** Key events in the history of the request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  relevantHistory?: Reference[];

  /** Creates a new ServiceRequest. @param props - Initial values. */
  constructor(props?: Partial<ServiceRequest>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  addInstantiatesCanonical(item: string): this {
    if (!this.instantiatesCanonical) {
      this.instantiatesCanonical = [];
    }

    this.instantiatesCanonical.push(item);

    return this;
  }

  addInstantiatesUri(item: string): this {
    if (!this.instantiatesUri) {
      this.instantiatesUri = [];
    }

    this.instantiatesUri.push(item);

    return this;
  }

  addBasedOn(item: Reference): this {
    if (!this.basedOn) {
      this.basedOn = [];
    }

    this.basedOn.push(item);

    return this;
  }

  addReplaces(item: Reference): this {
    if (!this.replaces) {
      this.replaces = [];
    }

    this.replaces.push(item);

    return this;
  }

  addCategory(item: CodeableConcept): this {
    if (!this.category) {
      this.category = [];
    }

    this.category.push(item);

    return this;
  }

  addOrderDetail(item: CodeableConcept): this {
    if (!this.orderDetail) {
      this.orderDetail = [];
    }

    this.orderDetail.push(item);

    return this;
  }

  addPerformer(item: Reference): this {
    if (!this.performer) {
      this.performer = [];
    }

    this.performer.push(item);

    return this;
  }

  addLocationCode(item: CodeableConcept): this {
    if (!this.locationCode) {
      this.locationCode = [];
    }

    this.locationCode.push(item);

    return this;
  }

  addLocationReference(item: Reference): this {
    if (!this.locationReference) {
      this.locationReference = [];
    }

    this.locationReference.push(item);

    return this;
  }

  addReasonCode(item: CodeableConcept): this {
    if (!this.reasonCode) {
      this.reasonCode = [];
    }

    this.reasonCode.push(item);

    return this;
  }

  addReasonReference(item: Reference): this {
    if (!this.reasonReference) {
      this.reasonReference = [];
    }

    this.reasonReference.push(item);

    return this;
  }

  addInsurance(item: Reference): this {
    if (!this.insurance) {
      this.insurance = [];
    }

    this.insurance.push(item);

    return this;
  }

  addSupportingInfo(item: Reference): this {
    if (!this.supportingInfo) {
      this.supportingInfo = [];
    }

    this.supportingInfo.push(item);

    return this;
  }

  addSpecimen(item: Reference): this {
    if (!this.specimen) {
      this.specimen = [];
    }

    this.specimen.push(item);

    return this;
  }

  addBodySite(item: CodeableConcept): this {
    if (!this.bodySite) {
      this.bodySite = [];
    }

    this.bodySite.push(item);

    return this;
  }

  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }

  addRelevantHistory(item: Reference): this {
    if (!this.relevantHistory) {
      this.relevantHistory = [];
    }

    this.relevantHistory.push(item);

    return this;
  }
}
