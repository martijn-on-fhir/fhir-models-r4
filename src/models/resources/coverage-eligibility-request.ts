import {Type} from 'class-transformer';
import {IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested, IsNumber} from 'class-validator';
import {BackboneElement} from '../base/backbone-element.js';
import {DomainResource} from '../base/domain-resource.js';
import {CodeableConcept} from '../datatypes/codeable-concept.js';
import {Identifier} from '../datatypes/identifier.js';
import {Money} from '../datatypes/money.js';
import {Period} from '../datatypes/period.js';
import {Quantity} from '../datatypes/quantity.js';
import {Reference} from '../datatypes/reference.js';
import {EligibilityRequestPurpose} from '../enums/eligibility-request-purpose.js';
import {FinancialResourceStatusCodes} from '../enums/financial-resource-status-codes.js';

/** Backbone element for {@link CoverageEligibilityRequest.supportingInfo}. */
export class CoverageEligibilityRequestSupportingInfo extends BackboneElement {

  /** A number to uniquely identify supporting information entries. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  information?: Reference;

  /** The supporting materials are applicable for all detail items, product/services codes and conditions under the plan. */
  @IsOptional()
  @IsBoolean()
  appliesToAll?: boolean;

  /** Creates a new {@link CoverageEligibilityRequestSupportingInfo} instance. @param props - Initial property values. */
  constructor(props?: Partial<CoverageEligibilityRequestSupportingInfo>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link CoverageEligibilityRequest.insurance}. */
export class CoverageEligibilityRequestInsurance extends BackboneElement {

  /** A flag to indicate that this Coverage is to be used for evaluation of this request when set to true. */
  @IsOptional()
  @IsBoolean()
  focal?: boolean;

  /** Reference to the insurance card level information contained in the Coverage resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  coverage?: Reference;

  /** A business agreement number established between the provider and the insurer for special business processing purposes. */
  @IsOptional()
  @IsString()
  businessArrangement?: string;

  /** Creates a new {@link CoverageEligibilityRequestInsurance} instance. @param props - Initial property values. */
  constructor(props?: Partial<CoverageEligibilityRequestInsurance>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link CoverageEligibilityRequestItem.diagnosis}. */
export class CoverageEligibilityRequestItemDiagnosis extends BackboneElement {

  /** The nature of illness or problem in a coded form, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  diagnosisCodeableConcept?: CodeableConcept;

  /** The nature of illness or problem in a coded form, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  diagnosisReference?: Reference;

  /** Creates a new {@link CoverageEligibilityRequestItemDiagnosis} instance. @param props - Initial property values. */
  constructor(props?: Partial<CoverageEligibilityRequestItemDiagnosis>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link CoverageEligibilityRequest.item}. */
export class CoverageEligibilityRequestItem extends BackboneElement {

  /** Exceptions, special conditions and supporting information applicable for this service or product line. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, {each: true})
  supportingInfoSequence?: number[];

  /** Code to identify the general type of benefits under which products and services are provided. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** This contains the product, service, drug or other billing code for the item. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  productOrService?: CodeableConcept;

  /** Item typification or modifiers codes to convey additional context for the product or service. */
  @IsOptional()
  @IsArray()
  @ValidateNested({each: true})
  @Type(() => CodeableConcept)
  modifier?: CodeableConcept[];

  /** The practitioner who is responsible for the product or service to be rendered to the patient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  provider?: Reference;

  /** The number of repetitions of a service or product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** The amount charged to the patient by the provider for a single unit. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  unitPrice?: Money;

  /** Facility where the services will be provided. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  facility?: Reference;

  /** Patient diagnosis for which care is sought. */
  @IsOptional()
  @IsArray()
  @ValidateNested({each: true})
  @Type(() => CoverageEligibilityRequestItemDiagnosis)
  diagnosis?: CoverageEligibilityRequestItemDiagnosis[];

  /** The plan/proposal/order describing the proposed service in detail. */
  @IsOptional()
  @IsArray()
  @ValidateNested({each: true})
  @Type(() => Reference)
  detail?: Reference[];

  /** Creates a new {@link CoverageEligibilityRequestItem} instance. @param props - Initial property values. */
  constructor(props?: Partial<CoverageEligibilityRequestItem>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a supportingInfoSequence number to the {@link CoverageEligibilityRequestItem.supportingInfoSequence supportingInfoSequence} array. @param item - The number to add. @returns This instance for chaining. */
  addSupportingInfoSequence(item: number): this {
    if (!this.supportingInfoSequence) {
      this.supportingInfoSequence = [];
    }

    this.supportingInfoSequence.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link CoverageEligibilityRequestItem.modifier modifier} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addModifier(item: CodeableConcept): this {
    if (!this.modifier) {
      this.modifier = [];
    }

    this.modifier.push(item);

    return this;
  }

  /** Adds a {@link CoverageEligibilityRequestItemDiagnosis} to the {@link CoverageEligibilityRequestItem.diagnosis diagnosis} array. @param item - The {@link CoverageEligibilityRequestItemDiagnosis} to add. @returns This instance for chaining. */
  addDiagnosis(item: CoverageEligibilityRequestItemDiagnosis): this {
    if (!this.diagnosis) {
      this.diagnosis = [];
    }

    this.diagnosis.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link CoverageEligibilityRequestItem.detail detail} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addDetail(item: Reference): this {
    if (!this.detail) {
      this.detail = [];
    }

    this.detail.push(item);

    return this;
  }
}

/** FHIR R4 CoverageEligibilityRequest resource — a request to an insurer to provide the adjudication details from a recent eligibility or benefits determination. */
export class CoverageEligibilityRequest extends DomainResource {

  /** The FHIR resource type string for CoverageEligibilityRequest. */
  readonly resourceType = 'CoverageEligibilityRequest';

  /** A unique identifier assigned to this coverage eligibility request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({each: true})
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The status of the resource instance. */
  @IsOptional()
  @IsEnum(FinancialResourceStatusCodes)
  status?: FinancialResourceStatusCodes;

  /** When the requestor expects the processor to complete processing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  priority?: CodeableConcept;

  /**
   * Code to specify whether requesting: prior combeli requirements for some service categories or billing codes;
   * benefits for coverages specified or discovered; discovery and return of coverages for the patient;
   * and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
   */
  @IsOptional()
  @IsArray()
  @IsEnum(EligibilityRequestPurpose, {each: true})
  purpose?: EligibilityRequestPurpose[];

  /** The party who is the beneficiary of the supplied coverage and for whom eligibility is sought. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /** The date or dates when the enclosed suite of services were performed or completed, as a date. */
  @IsOptional()
  @IsString()
  servicedDate?: string;

  /** The date or dates when the enclosed suite of services were performed or completed, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  servicedPeriod?: Period;

  /** The date when this resource was created. */
  @IsOptional()
  @IsString()
  created?: string;

  /** Person who created the request. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  enterer?: Reference;

  /** The provider which is responsible for the request. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  provider?: Reference;

  /** The Insurer who issued the coverage in question and is the recipient of the request. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  insurer?: Reference;

  /** Facility where the services are intended to be provided. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  facility?: Reference;

  /** Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. */
  @IsOptional()
  @IsArray()
  @ValidateNested({each: true})
  @Type(() => CoverageEligibilityRequestSupportingInfo)
  supportingInfo?: CoverageEligibilityRequestSupportingInfo[];

  /** Financial instruments for reimbursement for the health care products and services. */
  @IsOptional()
  @IsArray()
  @ValidateNested({each: true})
  @Type(() => CoverageEligibilityRequestInsurance)
  insurance?: CoverageEligibilityRequestInsurance[];

  /** Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor. */
  @IsOptional()
  @IsArray()
  @ValidateNested({each: true})
  @Type(() => CoverageEligibilityRequestItem)
  item?: CoverageEligibilityRequestItem[];

  /** Creates a new {@link CoverageEligibilityRequest} instance. @param props - Initial property values. */
  constructor(props?: Partial<CoverageEligibilityRequest>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link CoverageEligibilityRequest.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds an {@link EligibilityRequestPurpose} to the {@link CoverageEligibilityRequest.purpose purpose} array. @param item - The {@link EligibilityRequestPurpose} to add. @returns This instance for chaining. */
  addPurpose(item: EligibilityRequestPurpose): this {
    if (!this.purpose) {
      this.purpose = [];
    }

    this.purpose.push(item);

    return this;
  }

  /** Adds a {@link CoverageEligibilityRequestSupportingInfo} to the {@link CoverageEligibilityRequest.supportingInfo supportingInfo} array. @param item - The {@link CoverageEligibilityRequestSupportingInfo} to add. @returns This instance for chaining. */
  addSupportingInfo(item: CoverageEligibilityRequestSupportingInfo): this {
    if (!this.supportingInfo) {
      this.supportingInfo = [];
    }

    this.supportingInfo.push(item);

    return this;
  }

  /** Adds a {@link CoverageEligibilityRequestInsurance} to the {@link CoverageEligibilityRequest.insurance insurance} array. @param item - The {@link CoverageEligibilityRequestInsurance} to add. @returns This instance for chaining. */
  addInsurance(item: CoverageEligibilityRequestInsurance): this {
    if (!this.insurance) {
      this.insurance = [];
    }

    this.insurance.push(item);

    return this;
  }

  /** Adds a {@link CoverageEligibilityRequestItem} to the {@link CoverageEligibilityRequest.item item} array. @param item - The {@link CoverageEligibilityRequestItem} to add. @returns This instance for chaining. */
  addItem(item: CoverageEligibilityRequestItem): this {
    if (!this.item) {
      this.item = [];
    }

    this.item.push(item);

    return this;
  }
}
