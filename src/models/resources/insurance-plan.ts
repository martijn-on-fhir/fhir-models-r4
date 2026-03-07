import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, ValidateNested, IsNumber, IsEnum } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Address } from '../datatypes/address.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactPoint } from '../datatypes/contact-point.js';
import { HumanName } from '../datatypes/human-name.js';
import { Identifier } from '../datatypes/identifier.js';
import { Money } from '../datatypes/money.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for InsurancePlan. */
export class InsurancePlanContact extends BackboneElement {

  /** Indicates a purpose for which the contact can be reached. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  purpose?: CodeableConcept;

  /** A name associated with the contact. */
  @IsOptional()
  @ValidateNested()
  @Type(() => HumanName)
  name?: HumanName;

  /** A contact detail (e.g. a telephone number or an email address). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /** Visiting or postal address for the contact. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  address?: Address;

  /** Creates a new InsurancePlanContact. @param props - Initial values. */
  constructor(props?: Partial<InsurancePlanContact>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the telecom array. @returns This instance for chaining. */
  addTelecom(item: ContactPoint): this {
    if (!this.telecom) {
      this.telecom = [];
    }

    this.telecom.push(item);

    return this;
  }
}

/** Backbone element for InsurancePlan. */
export class InsurancePlanCoverageBenefitLimit extends BackboneElement {

  /** The maximum amount of a service item a plan will pay for a covered benefit. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  value?: Quantity;

  /** The specific limit on the benefit. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** Creates a new InsurancePlanCoverageBenefitLimit. @param props - Initial values. */
  constructor(props?: Partial<InsurancePlanCoverageBenefitLimit>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for InsurancePlan. */
export class InsurancePlanCoverageBenefit extends BackboneElement {

  /** Type of benefit (primary care; speciality care; inpatient; outpatient). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The referral requirements to have access/coverage for this benefit. */
  @IsOptional()
  @IsString()
  requirement?: string;

  /** The specific limits on the benefit. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanCoverageBenefitLimit)
  limit?: InsurancePlanCoverageBenefitLimit[];

  /** Creates a new InsurancePlanCoverageBenefit. @param props - Initial values. */
  constructor(props?: Partial<InsurancePlanCoverageBenefit>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the limit array. @returns This instance for chaining. */
  addLimit(item: InsurancePlanCoverageBenefitLimit): this {
    if (!this.limit) {
      this.limit = [];
    }

    this.limit.push(item);

    return this;
  }
}

/** Backbone element for InsurancePlan. */
export class InsurancePlanCoverage extends BackboneElement {

  /** Type of coverage (Medical; Dental; Mental Health; Substance Abuse; Vision; etc.). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Reference to the network that providing the type of coverage. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  network?: Reference[];

  /** Specific benefits under this type of coverage. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanCoverageBenefit)
  benefit?: InsurancePlanCoverageBenefit[];

  /** Creates a new InsurancePlanCoverage. @param props - Initial values. */
  constructor(props?: Partial<InsurancePlanCoverage>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the network array. @returns This instance for chaining. */
  addNetwork(item: Reference): this {
    if (!this.network) {
      this.network = [];
    }

    this.network.push(item);

    return this;
  }

  /** Adds an item to the benefit array. @returns This instance for chaining. */
  addBenefit(item: InsurancePlanCoverageBenefit): this {
    if (!this.benefit) {
      this.benefit = [];
    }

    this.benefit.push(item);

    return this;
  }
}

/** Backbone element for InsurancePlan. */
export class InsurancePlanPlanGeneralCost extends BackboneElement {

  /** Type of cost. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Number of participants enrolled in the plan. */
  @IsOptional()
  @IsNumber()
  groupSize?: number;

  /** Value of the cost. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  cost?: Money;

  /** Additional information about the general costs associated with this plan. */
  @IsOptional()
  @IsString()
  comment?: string;

  /** Creates a new InsurancePlanPlanGeneralCost. @param props - Initial values. */
  constructor(props?: Partial<InsurancePlanPlanGeneralCost>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for InsurancePlan. */
export class InsurancePlanPlanSpecificCostBenefitComponent extends BackboneElement {

  /** Type of specific benefit (preventive; primary care office visit; speciality office visit; etc.). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Whether the cost applies to in-network or out-of-network providers. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  applicability?: CodeableConcept[];

  /** Additional information about the cost, such as information about funding sources. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Quantity)
  qualifiers?: Quantity[];

  /** The actual cost value. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  value?: Money;

  /** Creates a new InsurancePlanPlanSpecificCostBenefitComponent. @param props - Initial values. */
  constructor(props?: Partial<InsurancePlanPlanSpecificCostBenefitComponent>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the applicability array. @returns This instance for chaining. */
  addApplicability(item: CodeableConcept): this {
    if (!this.applicability) {
      this.applicability = [];
    }

    this.applicability.push(item);

    return this;
  }

  /** Adds an item to the qualifiers array. @returns This instance for chaining. */
  addQualifiers(item: Quantity): this {
    if (!this.qualifiers) {
      this.qualifiers = [];
    }

    this.qualifiers.push(item);

    return this;
  }
}

/** Backbone element for InsurancePlan. */
export class InsurancePlanPlanSpecificCostBenefit extends BackboneElement {

  /** Type of specific benefit (preventive; primary care office visit; speciality office visit; etc.). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** List of the costs associated with a specific benefit. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanPlanSpecificCostBenefitComponent)
  cost?: InsurancePlanPlanSpecificCostBenefitComponent[];

  /** Creates a new InsurancePlanPlanSpecificCostBenefit. @param props - Initial values. */
  constructor(props?: Partial<InsurancePlanPlanSpecificCostBenefit>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the cost array. @returns This instance for chaining. */
  addCost(item: InsurancePlanPlanSpecificCostBenefitComponent): this {
    if (!this.cost) {
      this.cost = [];
    }

    this.cost.push(item);

    return this;
  }
}

/** Backbone element for InsurancePlan. */
export class InsurancePlanPlanSpecificCost extends BackboneElement {

  /** General category of benefit (Medical; Dental; Vision; etc.). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** List of the specific benefits under this category of benefit. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanPlanSpecificCostBenefit)
  benefit?: InsurancePlanPlanSpecificCostBenefit[];

  /** Creates a new InsurancePlanPlanSpecificCost. @param props - Initial values. */
  constructor(props?: Partial<InsurancePlanPlanSpecificCost>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the benefit array. @returns This instance for chaining. */
  addBenefit(item: InsurancePlanPlanSpecificCostBenefit): this {
    if (!this.benefit) {
      this.benefit = [];
    }

    this.benefit.push(item);

    return this;
  }
}

/** Backbone element for InsurancePlan. */
export class InsurancePlanPlan extends BackboneElement {

  /** Business identifiers assigned to this plan by the health insurer. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Type of plan (e.g. Bronze, Silver, Gold). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The geographic region in which a health insurance plan's benefits apply. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  coverageArea?: Reference[];

  /** Reference to the network that providing the type of coverage. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  network?: Reference[];

  /** Overall costs associated with the plan. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanPlanGeneralCost)
  generalCost?: InsurancePlanPlanGeneralCost[];

  /** Costs associated with the coverage provided by the product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanPlanSpecificCost)
  specificCost?: InsurancePlanPlanSpecificCost[];

  /** Creates a new InsurancePlanPlan. @param props - Initial values. */
  constructor(props?: Partial<InsurancePlanPlan>) {
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

  /** Adds an item to the coverageArea array. @returns This instance for chaining. */
  addCoverageArea(item: Reference): this {
    if (!this.coverageArea) {
      this.coverageArea = [];
    }

    this.coverageArea.push(item);

    return this;
  }

  /** Adds an item to the network array. @returns This instance for chaining. */
  addNetwork(item: Reference): this {
    if (!this.network) {
      this.network = [];
    }

    this.network.push(item);

    return this;
  }

  /** Adds an item to the generalCost array. @returns This instance for chaining. */
  addGeneralCost(item: InsurancePlanPlanGeneralCost): this {
    if (!this.generalCost) {
      this.generalCost = [];
    }

    this.generalCost.push(item);

    return this;
  }

  /** Adds an item to the specificCost array. @returns This instance for chaining. */
  addSpecificCost(item: InsurancePlanPlanSpecificCost): this {
    if (!this.specificCost) {
      this.specificCost = [];
    }

    this.specificCost.push(item);

    return this;
  }
}

/** FHIR R4 InsurancePlan — details of a health insurance product/plan provided by an organization. */
export class InsurancePlan extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'InsurancePlan';

  /** Business identifiers assigned to this insurance plan. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The current state of the insurance plan. */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** The kind of health insurance product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /** Official name of the health insurance product as designated by the owner. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A list of alternate names that the product is known as or was known as in the past. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  alias?: string[];

  /** The period of time that the insurance plan is available. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** The entity that is providing the health insurance product and underwriting the risk. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  ownedBy?: Reference;

  /** An organization which administer other services such as underwriting, entity adjudication or claims payment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  administeredBy?: Reference;

  /** The geographic region in which a health insurance product's benefits apply. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  coverageArea?: Reference[];

  /** The contact for the health insurance product for a certain purpose. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanContact)
  contact?: InsurancePlanContact[];

  /** The technical endpoints providing access to services operated for the health insurance product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  endpoint?: Reference[];

  /** Reference to the network included in the health insurance product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  network?: Reference[];

  /** Details about the coverage offered by the insurance product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanCoverage)
  coverage?: InsurancePlanCoverage[];

  /** Details about an insurance plan. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanPlan)
  plan?: InsurancePlanPlan[];

  /** Creates a new InsurancePlan. @param props - Initial values. */
  constructor(props?: Partial<InsurancePlan>) {
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

  /** Adds an item to the type array. @returns This instance for chaining. */
  addType(item: CodeableConcept): this {
    if (!this.type) {
      this.type = [];
    }

    this.type.push(item);

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

  /** Adds an item to the coverageArea array. @returns This instance for chaining. */
  addCoverageArea(item: Reference): this {
    if (!this.coverageArea) {
      this.coverageArea = [];
    }

    this.coverageArea.push(item);

    return this;
  }

  /** Adds an item to the contact array. @returns This instance for chaining. */
  addContact(item: InsurancePlanContact): this {
    if (!this.contact) {
      this.contact = [];
    }

    this.contact.push(item);

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

  /** Adds an item to the network array. @returns This instance for chaining. */
  addNetwork(item: Reference): this {
    if (!this.network) {
      this.network = [];
    }

    this.network.push(item);

    return this;
  }

  /** Adds an item to the coverage array. @returns This instance for chaining. */
  addCoverage(item: InsurancePlanCoverage): this {
    if (!this.coverage) {
      this.coverage = [];
    }

    this.coverage.push(item);

    return this;
  }

  /** Adds an item to the plan array. @returns This instance for chaining. */
  addPlan(item: InsurancePlanPlan): this {
    if (!this.plan) {
      this.plan = [];
    }

    this.plan.push(item);

    return this;
  }
}
