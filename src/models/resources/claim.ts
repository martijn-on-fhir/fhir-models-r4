import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Address } from '../datatypes/address.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Money } from '../datatypes/money.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { ClaimUse } from '../enums/claim-use.js';
import { FinancialResourceStatusCodes } from '../enums/financial-resource-status-codes.js';

/** Backbone element for Claim — other claims related to this claim. */
export class ClaimRelated extends BackboneElement {

  /** Reference to the related claim. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  claim?: Reference;

  /** How the reference claim is related. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  relationship?: CodeableConcept;

  /** File or case reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  reference?: Identifier;

  /** Creates a new ClaimRelated. @param props - Initial values. */
  constructor(props?: Partial<ClaimRelated>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Claim — recipient of benefits payable. */
export class ClaimPayee extends BackboneElement {

  /** Type of party to be reimbursed (subscriber, provider, other). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Reference to the party to receive payment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  party?: Reference;

  /** Creates a new ClaimPayee. @param props - Initial values. */
  constructor(props?: Partial<ClaimPayee>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Claim — members of the care team. */
export class ClaimCareTeam extends BackboneElement {

  /** Order of the care team member in the list. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** Practitioner or organization providing care. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  provider?: Reference;

  /** Indicator of the lead practitioner. */
  @IsOptional()
  @IsBoolean()
  responsible?: boolean;

  /** Function within the team (e.g., primary, assist). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /** Practitioner credential or specialization. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  qualification?: CodeableConcept;

  /** Creates a new ClaimCareTeam. @param props - Initial values. */
  constructor(props?: Partial<ClaimCareTeam>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Claim — supporting information for the claim. */
export class ClaimSupportingInfo extends BackboneElement {

  /** Information instance identifier. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** Classification of the supplied information. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** Type of the information. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** When the information applies, as a date. */
  @IsOptional()
  @IsString()
  timingDate?: string;

  /** When the information applies, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  timingPeriod?: Period;

  /** Data to be provided, as a boolean. */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  /** Data to be provided, as a string. */
  @IsOptional()
  @IsString()
  valueString?: string;

  /** Data to be provided, as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /** Data to be provided, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /** Explanation for the information. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  reason?: CodeableConcept;

  /** Creates a new ClaimSupportingInfo. @param props - Initial values. */
  constructor(props?: Partial<ClaimSupportingInfo>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Claim — pertinent diagnosis information. */
export class ClaimDiagnosis extends BackboneElement {

  /** Diagnosis instance identifier. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** Nature of illness or problem, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  diagnosisCodeableConcept?: CodeableConcept;

  /** Nature of illness or problem, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  diagnosisReference?: Reference;

  /** Timing or nature of the diagnosis. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /** Present on admission indicator. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  onAdmission?: CodeableConcept;

  /** Package billing code. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  packageCode?: CodeableConcept;

  /** Creates a new ClaimDiagnosis. @param props - Initial values. */
  constructor(props?: Partial<ClaimDiagnosis>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the type array. @returns This instance for chaining. */
  addType(item: CodeableConcept): this {
    if (!this.type) {
      this.type = [];
    }

    this.type.push(item);

    return this;
  }
}

/** Backbone element for Claim — clinical procedures performed. */
export class ClaimProcedure extends BackboneElement {

  /** Procedure instance identifier. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** Category of the procedure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /** When the procedure was performed. */
  @IsOptional()
  @IsString()
  date?: string;

  /** Specific clinical procedure, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  procedureCodeableConcept?: CodeableConcept;

  /** Specific clinical procedure, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  procedureReference?: Reference;

  /** Unique device identifiers associated with the procedure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  udi?: Reference[];

  /** Creates a new ClaimProcedure. @param props - Initial values. */
  constructor(props?: Partial<ClaimProcedure>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the type array. @returns This instance for chaining. */
  addType(item: CodeableConcept): this {
    if (!this.type) {
      this.type = [];
    }

    this.type.push(item);

    return this;
  }

  /** Adds an item to the udi array. @returns This instance for chaining. */
  addUdi(item: Reference): this {
    if (!this.udi) {
      this.udi = [];
    }

    this.udi.push(item);

    return this;
  }
}

/** Backbone element for Claim — patient insurance information. */
export class ClaimInsurance extends BackboneElement {

  /** Insurance instance identifier. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** Coverage used for adjudication. */
  @IsOptional()
  @IsBoolean()
  focal?: boolean;

  /** Pre-assigned claim number. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** Insurance information. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  coverage?: Reference;

  /** Additional provider contract number. */
  @IsOptional()
  @IsString()
  businessArrangement?: string;

  /** Prior authorization reference numbers. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  preAuthRef?: string[];

  /** Adjudication results. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  claimResponse?: Reference;

  /** Creates a new ClaimInsurance. @param props - Initial values. */
  constructor(props?: Partial<ClaimInsurance>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the preAuthRef array. @returns This instance for chaining. */
  addPreAuthRef(item: string): this {
    if (!this.preAuthRef) {
      this.preAuthRef = [];
    }

    this.preAuthRef.push(item);

    return this;
  }
}

/** Backbone element for Claim — details of a relevant accident. */
export class ClaimAccident extends BackboneElement {

  /** When the incident occurred. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The nature of the accident. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Where the event occurred, as an Address. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  locationAddress?: Address;

  /** Where the event occurred, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  locationReference?: Reference;

  /** Creates a new ClaimAccident. @param props - Initial values. */
  constructor(props?: Partial<ClaimAccident>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Claim — product or service sub-detail. */
export class ClaimItemDetailSubDetail extends BackboneElement {

  /** Item instance identifier. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** Revenue or cost center code. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  revenue?: CodeableConcept;

  /** Benefit classification. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** Billing, service, or product code. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  productOrService?: CodeableConcept;

  /** Service or product billing modifiers. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  modifier?: CodeableConcept[];

  /** Program the product or service is provided under. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  programCode?: CodeableConcept[];

  /** Count of products or services. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** Fee, charge, or cost per item. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  unitPrice?: Money;

  /** Price scaling factor. */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /** Total item cost. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  net?: Money;

  /** Unique device identifiers. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  udi?: Reference[];

  /** Creates a new ClaimItemDetailSubDetail. @param props - Initial values. */
  constructor(props?: Partial<ClaimItemDetailSubDetail>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the modifier array. @returns This instance for chaining. */
  addModifier(item: CodeableConcept): this {
    if (!this.modifier) {
      this.modifier = [];
    }

    this.modifier.push(item);

    return this;
  }

  /** Adds an item to the programCode array. @returns This instance for chaining. */
  addProgramCode(item: CodeableConcept): this {
    if (!this.programCode) {
      this.programCode = [];
    }

    this.programCode.push(item);

    return this;
  }

  /** Adds an item to the udi array. @returns This instance for chaining. */
  addUdi(item: Reference): this {
    if (!this.udi) {
      this.udi = [];
    }

    this.udi.push(item);

    return this;
  }
}

/** Backbone element for Claim — product or service detail. */
export class ClaimItemDetail extends BackboneElement {

  /** Item instance identifier. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** Revenue or cost center code. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  revenue?: CodeableConcept;

  /** Benefit classification. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** Billing, service, or product code. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  productOrService?: CodeableConcept;

  /** Service or product billing modifiers. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  modifier?: CodeableConcept[];

  /** Program the product or service is provided under. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  programCode?: CodeableConcept[];

  /** Count of products or services. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** Fee, charge, or cost per item. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  unitPrice?: Money;

  /** Price scaling factor. */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /** Total item cost. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  net?: Money;

  /** Unique device identifiers. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  udi?: Reference[];

  /** Component items of the claim detail. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimItemDetailSubDetail)
  subDetail?: ClaimItemDetailSubDetail[];

  /** Creates a new ClaimItemDetail. @param props - Initial values. */
  constructor(props?: Partial<ClaimItemDetail>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the modifier array. @returns This instance for chaining. */
  addModifier(item: CodeableConcept): this {
    if (!this.modifier) {
      this.modifier = [];
    }

    this.modifier.push(item);

    return this;
  }

  /** Adds an item to the programCode array. @returns This instance for chaining. */
  addProgramCode(item: CodeableConcept): this {
    if (!this.programCode) {
      this.programCode = [];
    }

    this.programCode.push(item);

    return this;
  }

  /** Adds an item to the udi array. @returns This instance for chaining. */
  addUdi(item: Reference): this {
    if (!this.udi) {
      this.udi = [];
    }

    this.udi.push(item);

    return this;
  }

  /** Adds an item to the subDetail array. @returns This instance for chaining. */
  addSubDetail(item: ClaimItemDetailSubDetail): this {
    if (!this.subDetail) {
      this.subDetail = [];
    }

    this.subDetail.push(item);

    return this;
  }
}

/** Backbone element for Claim — product or service provided. */
export class ClaimItem extends BackboneElement {

  /** Item instance identifier. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** Applicable care team members. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  careTeamSequence?: number[];

  /** Applicable diagnoses. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  diagnosisSequence?: number[];

  /** Applicable procedures. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  procedureSequence?: number[];

  /** Applicable exception and supporting information. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  informationSequence?: number[];

  /** Revenue or cost center code. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  revenue?: CodeableConcept;

  /** Benefit classification. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** Billing, service, or product code. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  productOrService?: CodeableConcept;

  /** Service or product billing modifiers. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  modifier?: CodeableConcept[];

  /** Program the product or service is provided under. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  programCode?: CodeableConcept[];

  /** Date or dates of service, as a date. */
  @IsOptional()
  @IsString()
  servicedDate?: string;

  /** Date or dates of service, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  servicedPeriod?: Period;

  /** Place of service, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  locationCodeableConcept?: CodeableConcept;

  /** Place of service, as an Address. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  locationAddress?: Address;

  /** Place of service, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  locationReference?: Reference;

  /** Count of products or services. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** Fee, charge, or cost per item. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  unitPrice?: Money;

  /** Price scaling factor. */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /** Total item cost. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  net?: Money;

  /** Unique device identifiers. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  udi?: Reference[];

  /** Anatomical location of the service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept;

  /** Anatomical sub-location of the service. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  subSite?: CodeableConcept[];

  /** Encounters related to this billed item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  encounter?: Reference[];

  /** Product or service provided. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimItemDetail)
  detail?: ClaimItemDetail[];

  /** Creates a new ClaimItem. @param props - Initial values. */
  constructor(props?: Partial<ClaimItem>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the careTeamSequence array. @returns This instance for chaining. */
  addCareTeamSequence(item: number): this {
    if (!this.careTeamSequence) {
      this.careTeamSequence = [];
    }

    this.careTeamSequence.push(item);

    return this;
  }

  /** Adds an item to the diagnosisSequence array. @returns This instance for chaining. */
  addDiagnosisSequence(item: number): this {
    if (!this.diagnosisSequence) {
      this.diagnosisSequence = [];
    }

    this.diagnosisSequence.push(item);

    return this;
  }

  /** Adds an item to the procedureSequence array. @returns This instance for chaining. */
  addProcedureSequence(item: number): this {
    if (!this.procedureSequence) {
      this.procedureSequence = [];
    }

    this.procedureSequence.push(item);

    return this;
  }

  /** Adds an item to the informationSequence array. @returns This instance for chaining. */
  addInformationSequence(item: number): this {
    if (!this.informationSequence) {
      this.informationSequence = [];
    }

    this.informationSequence.push(item);

    return this;
  }

  /** Adds an item to the modifier array. @returns This instance for chaining. */
  addModifier(item: CodeableConcept): this {
    if (!this.modifier) {
      this.modifier = [];
    }

    this.modifier.push(item);

    return this;
  }

  /** Adds an item to the programCode array. @returns This instance for chaining. */
  addProgramCode(item: CodeableConcept): this {
    if (!this.programCode) {
      this.programCode = [];
    }

    this.programCode.push(item);

    return this;
  }

  /** Adds an item to the udi array. @returns This instance for chaining. */
  addUdi(item: Reference): this {
    if (!this.udi) {
      this.udi = [];
    }

    this.udi.push(item);

    return this;
  }

  /** Adds an item to the subSite array. @returns This instance for chaining. */
  addSubSite(item: CodeableConcept): this {
    if (!this.subSite) {
      this.subSite = [];
    }

    this.subSite.push(item);

    return this;
  }

  /** Adds an item to the encounter array. @returns This instance for chaining. */
  addEncounter(item: Reference): this {
    if (!this.encounter) {
      this.encounter = [];
    }

    this.encounter.push(item);

    return this;
  }

  /** Adds an item to the detail array. @returns This instance for chaining. */
  addDetail(item: ClaimItemDetail): this {
    if (!this.detail) {
      this.detail = [];
    }

    this.detail.push(item);

    return this;
  }
}

/** FHIR R4 Claim — a provider-issued request for payment for products and services. */
export class Claim extends DomainResource {

  /** The FHIR resource type string. */
  readonly resourceType = 'Claim';

  /** Business identifiers assigned to this claim. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The status of the resource instance (active | cancelled | draft | entered-in-error). */
  @IsOptional()
  @IsEnum(FinancialResourceStatusCodes)
  status?: FinancialResourceStatusCodes;

  /** Categorization of the claim (e.g., oral, pharmacy, vision). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** More granular claim type. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  subType?: CodeableConcept;

  /** Claim usage context (claim | preauthorization | predetermination). */
  @IsOptional()
  @IsEnum(ClaimUse)
  use?: ClaimUse;

  /** The recipient of the products and services. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /** Relevant time frame for the claim. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  billablePeriod?: Period;

  /** Resource creation date. */
  @IsOptional()
  @IsString()
  created?: string;

  /** Author of the claim. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  enterer?: Reference;

  /** Target payor of the claim. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  insurer?: Reference;

  /** Party responsible for the claim. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  provider?: Reference;

  /** Desired processing urgency. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  priority?: CodeableConcept;

  /** For whom to reserve funds. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  fundsReserve?: CodeableConcept;

  /** Prior or corollary claims. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimRelated)
  related?: ClaimRelated[];

  /** Prescription authorizing services or products. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  prescription?: Reference;

  /** Original prescription if superseded by fulfiller. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  originalPrescription?: Reference;

  /** Recipient of benefits payable. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ClaimPayee)
  payee?: ClaimPayee;

  /** Treatment referral. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  referral?: Reference;

  /** Servicing facility. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  facility?: Reference;

  /** Members of the care team. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimCareTeam)
  careTeam?: ClaimCareTeam[];

  /** Supporting information for the claim. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimSupportingInfo)
  supportingInfo?: ClaimSupportingInfo[];

  /** Pertinent diagnosis information. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimDiagnosis)
  diagnosis?: ClaimDiagnosis[];

  /** Clinical procedures performed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimProcedure)
  procedure?: ClaimProcedure[];

  /** Patient insurance information. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimInsurance)
  insurance?: ClaimInsurance[];

  /** Details of a relevant accident. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ClaimAccident)
  accident?: ClaimAccident;

  /** Product or service provided. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimItem)
  item?: ClaimItem[];

  /** Total claim cost. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  total?: Money;

  /** Creates a new Claim. @param props - Initial values. */
  constructor(props?: Partial<Claim>) {
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

  /** Adds an item to the related array. @returns This instance for chaining. */
  addRelated(item: ClaimRelated): this {
    if (!this.related) {
      this.related = [];
    }

    this.related.push(item);

    return this;
  }

  /** Adds an item to the careTeam array. @returns This instance for chaining. */
  addCareTeam(item: ClaimCareTeam): this {
    if (!this.careTeam) {
      this.careTeam = [];
    }

    this.careTeam.push(item);

    return this;
  }

  /** Adds an item to the supportingInfo array. @returns This instance for chaining. */
  addSupportingInfo(item: ClaimSupportingInfo): this {
    if (!this.supportingInfo) {
      this.supportingInfo = [];
    }

    this.supportingInfo.push(item);

    return this;
  }

  /** Adds an item to the diagnosis array. @returns This instance for chaining. */
  addDiagnosis(item: ClaimDiagnosis): this {
    if (!this.diagnosis) {
      this.diagnosis = [];
    }

    this.diagnosis.push(item);

    return this;
  }

  /** Adds an item to the procedure array. @returns This instance for chaining. */
  addProcedure(item: ClaimProcedure): this {
    if (!this.procedure) {
      this.procedure = [];
    }

    this.procedure.push(item);

    return this;
  }

  /** Adds an item to the insurance array. @returns This instance for chaining. */
  addInsurance(item: ClaimInsurance): this {
    if (!this.insurance) {
      this.insurance = [];
    }

    this.insurance.push(item);

    return this;
  }

  /** Adds an item to the item array. @returns This instance for chaining. */
  addItem(item: ClaimItem): this {
    if (!this.item) {
      this.item = [];
    }

    this.item.push(item);

    return this;
  }
}
