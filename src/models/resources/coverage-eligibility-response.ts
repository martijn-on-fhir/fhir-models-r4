import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Money } from '../datatypes/money.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { EligibilityResponsePurpose } from '../enums/eligibility-response-purpose.js';
import { FinancialResourceStatusCodes } from '../enums/financial-resource-status-codes.js';
import { RemittanceOutcome } from '../enums/remittance-outcome.js';

/** Backbone element for {@link CoverageEligibilityResponseInsuranceItem.benefit}. */
export class CoverageEligibilityResponseInsuranceItemBenefit extends BackboneElement {

  /** Classification of benefit being provided. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The quantity of the benefit which is permitted under the coverage, as an unsigned integer. */
  @IsOptional()
  @IsString()
  allowedUnsignedInt?: number;

  /** The quantity of the benefit which is permitted under the coverage, as a string. */
  @IsOptional()
  @IsString()
  allowedString?: string;

  /** The quantity of the benefit which is permitted under the coverage, as Money. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  allowedMoney?: Money;

  /** The quantity of the benefit which have been consumed to date, as an unsigned integer. */
  @IsOptional()
  @IsString()
  usedUnsignedInt?: number;

  /** The quantity of the benefit which have been consumed to date, as a string. */
  @IsOptional()
  @IsString()
  usedString?: string;

  /** The quantity of the benefit which have been consumed to date, as Money. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  usedMoney?: Money;

  /** Creates a new {@link CoverageEligibilityResponseInsuranceItemBenefit} instance. @param props - Initial property values. */
  constructor(props?: Partial<CoverageEligibilityResponseInsuranceItemBenefit>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link CoverageEligibilityResponseInsurance.item}. */
export class CoverageEligibilityResponseInsuranceItem extends BackboneElement {

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
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  modifier?: CodeableConcept[];

  /** The practitioner who is eligible for the provision of the product or service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  provider?: Reference;

  /** True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage. */
  @IsOptional()
  @IsBoolean()
  excluded?: boolean;

  /** A short name or tag for the benefit. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A richer description of the benefit or services covered. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  network?: CodeableConcept;

  /** Indicates if the benefits apply to an individual or to the family. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  unit?: CodeableConcept;

  /** The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  term?: CodeableConcept;

  /** Benefits used to date. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoverageEligibilityResponseInsuranceItemBenefit)
  benefit?: CoverageEligibilityResponseInsuranceItemBenefit[];

  /** A boolean flag indicating whether a preauthorization is required prior to actual service delivery. */
  @IsOptional()
  @IsBoolean()
  authorizationRequired?: boolean;

  /** Codes or comments regarding information or actions associated with the preauthorization. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  authorizationSupporting?: CodeableConcept[];

  /** A web location for obtaining requirements or descriptive information regarding the preauthorization. */
  @IsOptional()
  @IsString()
  authorizationUrl?: string;

  /** Creates a new {@link CoverageEligibilityResponseInsuranceItem} instance. @param props - Initial property values. */
  constructor(props?: Partial<CoverageEligibilityResponseInsuranceItem>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link CodeableConcept} to the {@link CoverageEligibilityResponseInsuranceItem.modifier modifier} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addModifier(item: CodeableConcept): this {
    if (!this.modifier) {
      this.modifier = [];
    }

    this.modifier.push(item);

    return this;
  }

  /** Adds a {@link CoverageEligibilityResponseInsuranceItemBenefit} to the {@link CoverageEligibilityResponseInsuranceItem.benefit benefit} array. @param item - The {@link CoverageEligibilityResponseInsuranceItemBenefit} to add. @returns This instance for chaining. */
  addBenefit(item: CoverageEligibilityResponseInsuranceItemBenefit): this {
    if (!this.benefit) {
      this.benefit = [];
    }

    this.benefit.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link CoverageEligibilityResponseInsuranceItem.authorizationSupporting authorizationSupporting} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addAuthorizationSupporting(item: CodeableConcept): this {
    if (!this.authorizationSupporting) {
      this.authorizationSupporting = [];
    }

    this.authorizationSupporting.push(item);

    return this;
  }
}

/** Backbone element for {@link CoverageEligibilityResponse.insurance}. */
export class CoverageEligibilityResponseInsurance extends BackboneElement {

  /** Reference to the insurance card level information contained in the Coverage resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  coverage?: Reference;

  /** Flag indicating if the coverage provided is inforce currently. */
  @IsOptional()
  @IsBoolean()
  inforce?: boolean;

  /** The term of the benefits documented in this response. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  benefitPeriod?: Period;

  /** Benefits and optionally current balances, and authorization details by category or service. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoverageEligibilityResponseInsuranceItem)
  item?: CoverageEligibilityResponseInsuranceItem[];

  /** Creates a new {@link CoverageEligibilityResponseInsurance} instance. @param props - Initial property values. */
  constructor(props?: Partial<CoverageEligibilityResponseInsurance>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link CoverageEligibilityResponseInsuranceItem} to the {@link CoverageEligibilityResponseInsurance.item item} array. @param item - The {@link CoverageEligibilityResponseInsuranceItem} to add. @returns This instance for chaining. */
  addItem(item: CoverageEligibilityResponseInsuranceItem): this {
    if (!this.item) {
      this.item = [];
    }

    this.item.push(item);

    return this;
  }
}

/** Backbone element for {@link CoverageEligibilityResponse.error}. */
export class CoverageEligibilityResponseError extends BackboneElement {

  /** An error code, from a specified code system, which details why the eligibility check could not be performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** Creates a new {@link CoverageEligibilityResponseError} instance. @param props - Initial property values. */
  constructor(props?: Partial<CoverageEligibilityResponseError>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 CoverageEligibilityResponse resource — a response to an eligibility request providing the adjudication details from the processing of a CoverageEligibilityRequest. */
export class CoverageEligibilityResponse extends DomainResource {

  /** The FHIR resource type string for CoverageEligibilityResponse. */
  readonly resourceType = 'CoverageEligibilityResponse';

  /** A unique identifier assigned to this coverage eligibility response. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The status of the resource instance. */
  @IsOptional()
  @IsEnum(FinancialResourceStatusCodes)
  status?: FinancialResourceStatusCodes;

  /** Code to specify whether requesting: prior authorization requirements for some service categories or
   * billing codes; benefits for coverages specified or discovered; discovery and return of coverages for
   * the patient; and/or validation that the specified coverage is in-force at the date/period specified.
   */
  @IsOptional()
  @IsArray()
  @IsEnum(EligibilityResponsePurpose, { each: true })
  purpose?: EligibilityResponsePurpose[];

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

  /** The date this resource was created. */
  @IsOptional()
  @IsString()
  created?: string;

  /** The provider which is responsible for the request. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  requestor?: Reference;

  /** Reference to the original request resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  request?: Reference;

  /** The outcome of the request processing. */
  @IsOptional()
  @IsEnum(RemittanceOutcome)
  outcome?: RemittanceOutcome;

  /** A human readable description of the status of the adjudication. */
  @IsOptional()
  @IsString()
  disposition?: string;

  /** The Insurer who issued the coverage in question and is the author of the response. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  insurer?: Reference;

  /** Financial instruments for reimbursement for the health care products and services. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoverageEligibilityResponseInsurance)
  insurance?: CoverageEligibilityResponseInsurance[];

  /** A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred. */
  @IsOptional()
  @IsString()
  preAuthRef?: string;

  /** A code for the form to be used for printing the content. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  form?: CodeableConcept;

  /** Errors encountered during the processing of the request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoverageEligibilityResponseError)
  error?: CoverageEligibilityResponseError[];

  /** Creates a new {@link CoverageEligibilityResponse} instance. @param props - Initial property values. */
  constructor(props?: Partial<CoverageEligibilityResponse>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link CoverageEligibilityResponse.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds an {@link EligibilityResponsePurpose} to the {@link CoverageEligibilityResponse.purpose purpose} array. @param item - The {@link EligibilityResponsePurpose} to add. @returns This instance for chaining. */
  addPurpose(item: EligibilityResponsePurpose): this {
    if (!this.purpose) {
      this.purpose = [];
    }

    this.purpose.push(item);

    return this;
  }

  /** Adds a {@link CoverageEligibilityResponseInsurance} to the {@link CoverageEligibilityResponse.insurance insurance} array. @param item - The {@link CoverageEligibilityResponseInsurance} to add. @returns This instance for chaining. */
  addInsurance(item: CoverageEligibilityResponseInsurance): this {
    if (!this.insurance) {
      this.insurance = [];
    }

    this.insurance.push(item);

    return this;
  }

  /** Adds a {@link CoverageEligibilityResponseError} to the {@link CoverageEligibilityResponse.error error} array. @param item - The {@link CoverageEligibilityResponseError} to add. @returns This instance for chaining. */
  addError(item: CoverageEligibilityResponseError): this {
    if (!this.error) {
      this.error = [];
    }

    this.error.push(item);

    return this;
  }
}
