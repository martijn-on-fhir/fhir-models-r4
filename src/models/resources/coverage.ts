import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Money } from '../datatypes/money.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { FinancialResourceStatusCodes } from '../enums/financial-resource-status-codes.js';

/** Backbone element for {@link CoverageCostToBeneficiary.exception}. */
export class CoverageCostToBeneficiaryException extends BackboneElement {

  /** The code for the specific exception. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The timeframe during which the exception is in force. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Creates a new {@link CoverageCostToBeneficiaryException} instance. @param props - Initial property values. */
  constructor(props?: Partial<CoverageCostToBeneficiaryException>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link Coverage.costToBeneficiary}. */
export class CoverageCostToBeneficiary extends BackboneElement {

  /** The category of patient centric costs associated with treatment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The amount due from the patient for the cost category, as a Quantity (e.g., copay percentage). */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /** The amount due from the patient for the cost category, as Money. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  valueMoney?: Money;

  /** A suite of codes indicating exceptions or reductions to patient costs and their effective periods. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoverageCostToBeneficiaryException)
  exception?: CoverageCostToBeneficiaryException[];

  /** Creates a new {@link CoverageCostToBeneficiary} instance. @param props - Initial property values. */
  constructor(props?: Partial<CoverageCostToBeneficiary>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link CoverageCostToBeneficiaryException} to the {@link CoverageCostToBeneficiary.exception exception} array.
   * @param item - The {@link CoverageCostToBeneficiaryException} to add. @returns This instance for chaining.
   */
  addException(item: CoverageCostToBeneficiaryException): this {
    if (!this.exception) {
      this.exception = [];
    }

    this.exception.push(item);

    return this;
  }
}

/** Backbone element for {@link Coverage.class}. */
export class CoverageClass extends BackboneElement {

  /** The type of classification for which an insurer-specific class label or number and optional name is provided, e.g., type may be used to identify a class of coverage or employer group. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The alphanumeric string value associated with the insurer issued label. */
  @IsOptional()
  @IsString()
  value?: string;

  /** A short description for the class. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Creates a new {@link CoverageClass} instance. @param props - Initial property values. */
  constructor(props?: Partial<CoverageClass>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 Coverage resource — financial instrument which may be used to reimburse or pay for health care products and services. */
export class Coverage extends DomainResource {

  /** The FHIR resource type string for Coverage. */
  readonly resourceType = 'Coverage';

  /** A unique identifier assigned to this coverage. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The status of the resource instance. */
  @IsOptional()
  @IsEnum(FinancialResourceStatusCodes)
  status?: FinancialResourceStatusCodes;

  /** The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The party who 'owns' the insurance policy. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  policyHolder?: Reference;

  /** The party who has signed-up for or 'owns' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subscriber?: Reference;

  /** The insurer assigned ID for the Subscriber. */
  @IsOptional()
  @IsString()
  subscriberId?: string;

  /** The party who benefits from the insurance coverage; the patient when products and/or services are provided. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  beneficiary?: Reference;

  /** A unique identifier for a dependent under the coverage. */
  @IsOptional()
  @IsString()
  dependent?: string;

  /** The relationship of beneficiary (patient) to the subscriber. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  relationship?: CodeableConcept;

  /** Time period during which the coverage is in force. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  payor?: Reference[];

  /** A suite of underwriter specific classifiers. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoverageClass)
  class?: CoverageClass[];

  /** The order of applicability of this coverage relative to other coverages which are currently in force. */
  @IsOptional()
  @IsNumber()
  order?: number;

  /** The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate. */
  @IsOptional()
  @IsString()
  network?: string;

  /** A suite of codes indicating the cost category and associated amount which have been detailed in the policy and may have been included on the health card. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoverageCostToBeneficiary)
  costToBeneficiary?: CoverageCostToBeneficiary[];

  /** When 'subrogation=true' this insurance instance has been included not for adjudication but to provide insurers with the details to recover costs. */
  @IsOptional()
  @IsBoolean()
  subrogation?: boolean;

  /** The policy(s) which constitute this insurance coverage. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  contract?: Reference[];

  /** Creates a new {@link Coverage} instance. @param props - Initial property values. */
  constructor(props?: Partial<Coverage>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link Coverage.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Coverage.payor payor} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addPayor(item: Reference): this {
    if (!this.payor) {
      this.payor = [];
    }

    this.payor.push(item);

    return this;
  }

  /** Adds a {@link CoverageClass} to the {@link Coverage.class class} array. @param item - The {@link CoverageClass} to add. @returns This instance for chaining. */
  addClass(item: CoverageClass): this {
    if (!this.class) {
      this.class = [];
    }

    this.class.push(item);

    return this;
  }

  /** Adds a {@link CoverageCostToBeneficiary} to the {@link Coverage.costToBeneficiary costToBeneficiary} array. @param item - The {@link CoverageCostToBeneficiary} to add. @returns This instance for chaining. */
  addCostToBeneficiary(item: CoverageCostToBeneficiary): this {
    if (!this.costToBeneficiary) {
      this.costToBeneficiary = [];
    }

    this.costToBeneficiary.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Coverage.contract contract} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addContract(item: Reference): this {
    if (!this.contract) {
      this.contract = [];
    }

    this.contract.push(item);

    return this;
  }
}
