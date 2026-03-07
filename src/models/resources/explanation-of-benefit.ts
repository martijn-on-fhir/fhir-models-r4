import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Address } from '../datatypes/address.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { Identifier } from '../datatypes/identifier.js';
import { Money } from '../datatypes/money.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { ClaimUse } from '../enums/claim-use.js';
import { FinancialResourceStatusCodes } from '../enums/financial-resource-status-codes.js';
import { NoteType } from '../enums/note-type.js';
import { RemittanceOutcome } from '../enums/remittance-outcome.js';

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitRelated extends BackboneElement {

  /** Reference to a related claim. */
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

  /** Creates a new ExplanationOfBenefitRelated. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitRelated>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitPayee extends BackboneElement {

  /** Type of party to be reimbursed: subscriber, provider, other. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Reference to the individual or organization to whom the payment will be made. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  party?: Reference;

  /** Creates a new ExplanationOfBenefitPayee. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitPayee>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitCareTeam extends BackboneElement {

  /** A number to uniquely identify care team entries. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** Member of the team who provided the product or service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  provider?: Reference;

  /** The party who is billing and/or responsible for the claimed products or services. */
  @IsOptional()
  @IsBoolean()
  responsible?: boolean;

  /** The lead, currentname, assisting or supervising practitioner and their discipline if a multidisciplinary team. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /** The qualification of the practitioner which is applicable for this service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  qualification?: CodeableConcept;

  /** Creates a new ExplanationOfBenefitCareTeam. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitCareTeam>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitSupportingInfo extends BackboneElement {

  /** A number to uniquely identify supporting information entries. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** The general class of the information supplied: information; exception; accident, employment; onset, etc. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** System and code pertaining to the specific information regarding special conditions. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The date when or period to which this information refers. */
  @IsOptional()
  @IsString()
  timingDate?: string;

  /** The date when or period to which this information refers as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  timingPeriod?: Period;

  /** Additional data or information as a boolean value. */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  /** Additional data or information as a string value. */
  @IsOptional()
  @IsString()
  valueString?: string;

  /** Additional data or information as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /** Additional data or information as an Attachment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  valueAttachment?: Attachment;

  /** Additional data or information as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /** Provides the reason in the situation where a reason code is required in addition to the content. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  reason?: Coding;

  /** Creates a new ExplanationOfBenefitSupportingInfo. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitSupportingInfo>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitDiagnosis extends BackboneElement {

  /** A number to uniquely identify diagnosis entries. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** The nature of illness or problem in a coded form as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  diagnosisCodeableConcept?: CodeableConcept;

  /** The nature of illness or problem in a coded form as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  diagnosisReference?: Reference;

  /** When the condition was observed or the relative ranking. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /** Indication of whether the condition was present on admission. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  onAdmission?: CodeableConcept;

  /** A package billing code or bundle code used to group products and services to a particular health condition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  packageCode?: CodeableConcept;

  /** Creates a new ExplanationOfBenefitDiagnosis. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitDiagnosis>) {
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

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitProcedure extends BackboneElement {

  /** A number to uniquely identify procedure entries. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** When the condition was observed or the relative ranking. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /** Date and optionally time the procedure was performed. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The code or reference to a Procedure resource which identifies the clinical intervention performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  procedureCodeableConcept?: CodeableConcept;

  /** The code or reference to a Procedure resource which identifies the clinical intervention performed as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  procedureReference?: Reference;

  /** Unique Device Identifiers associated with this line item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  udi?: Reference[];

  /** Creates a new ExplanationOfBenefitProcedure. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitProcedure>) {
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
  /** Adds an item to the udi array. @returns This instance for chaining. */
  addUdi(item: Reference): this {
    if (!this.udi) {
      this.udi = [];
    }

    this.udi.push(item);

    return this;
  }
}

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitInsurance extends BackboneElement {

  /** A flag to indicate that this Coverage is to be used for adjudication of this claim when set to true. */
  @IsOptional()
  @IsBoolean()
  focal?: boolean;

  /** Reference to the insurance card level information contained in the Coverage resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  coverage?: Reference;

  /** Reference numbers previously provided by the insurer to the provider to be quoted on subsequent claims. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  preAuthRef?: string[];

  /** Creates a new ExplanationOfBenefitInsurance. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitInsurance>) {
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

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitAccident extends BackboneElement {

  /** Date of an accident event related to the products and services contained in the claim. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The type or context of the accident event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The physical location of the accident event as an Address. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  locationAddress?: Address;

  /** The physical location of the accident event as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  locationReference?: Reference;

  /** Creates a new ExplanationOfBenefitAccident. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitAccident>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitItemAdjudication extends BackboneElement {

  /** A code to indicate the information type of this adjudication record. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** A code supporting the understanding of the adjudication result and explaining variance from expected amount. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  reason?: CodeableConcept;

  /** Monetary amount associated with the category. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  amount?: Money;

  /** A non-monetary value associated with the category. */
  @IsOptional()
  @IsNumber()
  value?: number;

  /** Creates a new ExplanationOfBenefitItemAdjudication. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitItemAdjudication>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitItemDetailSubDetail extends BackboneElement {

  /** A claim detail line. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** The type of revenue or cost center providing the product and/or service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  revenue?: CodeableConcept;

  /** Code to identify the general type of benefits under which products and services are provided. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** When the value is a group code then this item collects a set of related claim details. */
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

  /** Identifies the program under which this may be recovered. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  programCode?: CodeableConcept[];

  /** The number of repetitions of a service or product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** If the item is not a group then this is the fee for the product or service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  unitPrice?: Money;

  /** A real number that represents a multiplier used in determining the overall value of services delivered. */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /** The quantity times the unit price for an additional service or product or charge. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  net?: Money;

  /** Unique Device Identifiers associated with this line item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  udi?: Reference[];

  /** The numbers associated with notes below which apply to the adjudication of this item. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  noteNumber?: number[];

  /** The adjudication results. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitItemAdjudication)
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /** Creates a new ExplanationOfBenefitItemDetailSubDetail. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitItemDetailSubDetail>) {
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

  /** Adds an item to the noteNumber array. @returns This instance for chaining. */
  addNoteNumber(item: number): this {
    if (!this.noteNumber) {
      this.noteNumber = [];
    }

    this.noteNumber.push(item);

    return this;
  }

  /** Adds an item to the adjudication array. @returns This instance for chaining. */
  addAdjudication(item: ExplanationOfBenefitItemAdjudication): this {
    if (!this.adjudication) {
      this.adjudication = [];
    }

    this.adjudication.push(item);

    return this;
  }
}

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitItemDetail extends BackboneElement {

  /** A claim detail line. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** The type of revenue or cost center providing the product and/or service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  revenue?: CodeableConcept;

  /** Code to identify the general type of benefits under which products and services are provided. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** When the value is a group code then this item collects a set of related claim details. */
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

  /** Identifies the program under which this may be recovered. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  programCode?: CodeableConcept[];

  /** The number of repetitions of a service or product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** If the item is not a group then this is the fee for the product or service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  unitPrice?: Money;

  /** A real number that represents a multiplier used in determining the overall value of services delivered. */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /** The quantity times the unit price for an additional service or product or charge. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  net?: Money;

  /** Unique Device Identifiers associated with this line item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  udi?: Reference[];

  /** The numbers associated with notes below which apply to the adjudication of this item. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  noteNumber?: number[];

  /** The adjudication results. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitItemAdjudication)
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /** Third-tier of goods and services. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitItemDetailSubDetail)
  subDetail?: ExplanationOfBenefitItemDetailSubDetail[];

  /** Creates a new ExplanationOfBenefitItemDetail. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitItemDetail>) {
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

  /** Adds an item to the noteNumber array. @returns This instance for chaining. */
  addNoteNumber(item: number): this {
    if (!this.noteNumber) {
      this.noteNumber = [];
    }

    this.noteNumber.push(item);

    return this;
  }

  /** Adds an item to the adjudication array. @returns This instance for chaining. */
  addAdjudication(item: ExplanationOfBenefitItemAdjudication): this {
    if (!this.adjudication) {
      this.adjudication = [];
    }

    this.adjudication.push(item);

    return this;
  }

  /** Adds an item to the subDetail array. @returns This instance for chaining. */
  addSubDetail(item: ExplanationOfBenefitItemDetailSubDetail): this {
    if (!this.subDetail) {
      this.subDetail = [];
    }

    this.subDetail.push(item);

    return this;
  }
}

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitItem extends BackboneElement {

  /** A number to uniquely identify item entries. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** Care team responsible for the product or service. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  careTeamSequence?: number[];

  /** Diagnoses applicable for this service or product. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  diagnosisSequence?: number[];

  /** Procedures applicable for this service or product. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  procedureSequence?: number[];

  /** Exceptions, special conditions and supporting information applicable for this service or product. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  informationSequence?: number[];

  /** The type of revenue or cost center providing the product and/or service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  revenue?: CodeableConcept;

  /** Code to identify the general type of benefits under which products and services are provided. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item. */
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

  /** Identifies the program under which this may be recovered. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  programCode?: CodeableConcept[];

  /** The date or dates when the service or product was supplied, performed or completed. */
  @IsOptional()
  @IsString()
  servicedDate?: string;

  /** The date or dates when the service or product was supplied, performed or completed as a period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  servicedPeriod?: Period;

  /** Where the product or service was provided as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  locationCodeableConcept?: CodeableConcept;

  /** Where the product or service was provided as an Address. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  locationAddress?: Address;

  /** Where the product or service was provided as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  locationReference?: Reference;

  /** The number of repetitions of a service or product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** If the item is not a group then this is the fee for the product or service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  unitPrice?: Money;

  /** A real number that represents a multiplier used in determining the overall value of services delivered. */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /** The quantity times the unit price for an additional service or product or charge. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  net?: Money;

  /** Unique Device Identifiers associated with this line item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  udi?: Reference[];

  /** Physical service site on the patient (limb, tooth, etc.). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept;

  /** A region or surface of the bodySite. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  subSite?: CodeableConcept[];

  /** A billed item may include goods or services provided in multiple encounters. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  encounter?: Reference[];

  /** The numbers associated with notes below which apply to the adjudication of this item. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  noteNumber?: number[];

  /** If this item is a group then the values here are a summary of the adjudication of the detail items. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitItemAdjudication)
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /** Second-tier of goods and services. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitItemDetail)
  detail?: ExplanationOfBenefitItemDetail[];

  /** Creates a new ExplanationOfBenefitItem. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitItem>) {
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

  /** Adds an item to the noteNumber array. @returns This instance for chaining. */
  addNoteNumber(item: number): this {
    if (!this.noteNumber) {
      this.noteNumber = [];
    }

    this.noteNumber.push(item);

    return this;
  }

  /** Adds an item to the adjudication array. @returns This instance for chaining. */
  addAdjudication(item: ExplanationOfBenefitItemAdjudication): this {
    if (!this.adjudication) {
      this.adjudication = [];
    }

    this.adjudication.push(item);

    return this;
  }

  /** Adds an item to the detail array. @returns This instance for chaining. */
  addDetail(item: ExplanationOfBenefitItemDetail): this {
    if (!this.detail) {
      this.detail = [];
    }

    this.detail.push(item);

    return this;
  }
}

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitAddItemDetailSubDetail extends BackboneElement {

  /** The billing code for the product or service. */
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

  /** The number of repetitions of a service or product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** If the item is not a group then this is the fee for the product or service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  unitPrice?: Money;

  /** A real number that represents a multiplier used in determining the overall value of services delivered. */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /** The quantity times the unit price for an additional service or product or charge. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  net?: Money;

  /** The numbers associated with notes below which apply to the adjudication of this item. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  noteNumber?: number[];

  /** The adjudication results. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitItemAdjudication)
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /** Creates a new ExplanationOfBenefitAddItemDetailSubDetail. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitAddItemDetailSubDetail>) {
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

  /** Adds an item to the noteNumber array. @returns This instance for chaining. */
  addNoteNumber(item: number): this {
    if (!this.noteNumber) {
      this.noteNumber = [];
    }

    this.noteNumber.push(item);

    return this;
  }

  /** Adds an item to the adjudication array. @returns This instance for chaining. */
  addAdjudication(item: ExplanationOfBenefitItemAdjudication): this {
    if (!this.adjudication) {
      this.adjudication = [];
    }

    this.adjudication.push(item);

    return this;
  }
}

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitAddItemDetail extends BackboneElement {

  /** The billing code for the product or service. */
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

  /** The number of repetitions of a service or product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** If the item is not a group then this is the fee for the product or service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  unitPrice?: Money;

  /** A real number that represents a multiplier used in determining the overall value of services delivered. */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /** The quantity times the unit price for an additional service or product or charge. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  net?: Money;

  /** The numbers associated with notes below which apply to the adjudication of this item. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  noteNumber?: number[];

  /** The adjudication results. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitItemAdjudication)
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /** Third-tier of goods and services. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitAddItemDetailSubDetail)
  subDetail?: ExplanationOfBenefitAddItemDetailSubDetail[];

  /** Creates a new ExplanationOfBenefitAddItemDetail. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitAddItemDetail>) {
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

  /** Adds an item to the noteNumber array. @returns This instance for chaining. */
  addNoteNumber(item: number): this {
    if (!this.noteNumber) {
      this.noteNumber = [];
    }

    this.noteNumber.push(item);

    return this;
  }

  /** Adds an item to the adjudication array. @returns This instance for chaining. */
  addAdjudication(item: ExplanationOfBenefitItemAdjudication): this {
    if (!this.adjudication) {
      this.adjudication = [];
    }

    this.adjudication.push(item);

    return this;
  }

  /** Adds an item to the subDetail array. @returns This instance for chaining. */
  addSubDetail(item: ExplanationOfBenefitAddItemDetailSubDetail): this {
    if (!this.subDetail) {
      this.subDetail = [];
    }

    this.subDetail.push(item);

    return this;
  }
}

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitAddItem extends BackboneElement {

  /** Claim items which this service line is intended to replace. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  itemSequence?: number[];

  /** The sequence number of the details within the claim item which this line is intended to replace. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  detailSequence?: number[];

  /** The sequence number of the sub-details within the details within the claim item which this line is intended to replace. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  subDetailSequence?: number[];

  /** The providers who are authorized for the services rendered to the patient. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  provider?: Reference[];

  /** When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item. */
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

  /** Identifies the program under which this may be recovered. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  programCode?: CodeableConcept[];

  /** The date or dates when the service or product was supplied, performed or completed. */
  @IsOptional()
  @IsString()
  servicedDate?: string;

  /** The date or dates when the service or product was supplied, performed or completed as a period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  servicedPeriod?: Period;

  /** Where the product or service was provided as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  locationCodeableConcept?: CodeableConcept;

  /** Where the product or service was provided as an Address. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  locationAddress?: Address;

  /** Where the product or service was provided as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  locationReference?: Reference;

  /** The number of repetitions of a service or product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** If the item is not a group then this is the fee for the product or service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  unitPrice?: Money;

  /** A real number that represents a multiplier used in determining the overall value of services delivered. */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /** The quantity times the unit price for an additional service or product or charge. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  net?: Money;

  /** Physical service site on the patient (limb, tooth, etc.). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept;

  /** A region or surface of the bodySite. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  subSite?: CodeableConcept[];

  /** The numbers associated with notes below which apply to the adjudication of this item. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  noteNumber?: number[];

  /** The adjudication results. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitItemAdjudication)
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /** The second-tier service adjudications for payor added services. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitAddItemDetail)
  detail?: ExplanationOfBenefitAddItemDetail[];

  /** Creates a new ExplanationOfBenefitAddItem. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitAddItem>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the itemSequence array. @returns This instance for chaining. */
  addItemSequence(item: number): this {
    if (!this.itemSequence) {
      this.itemSequence = [];
    }

    this.itemSequence.push(item);

    return this;
  }

  /** Adds an item to the detailSequence array. @returns This instance for chaining. */
  addDetailSequence(item: number): this {
    if (!this.detailSequence) {
      this.detailSequence = [];
    }

    this.detailSequence.push(item);

    return this;
  }

  /** Adds an item to the subDetailSequence array. @returns This instance for chaining. */
  addSubDetailSequence(item: number): this {
    if (!this.subDetailSequence) {
      this.subDetailSequence = [];
    }

    this.subDetailSequence.push(item);

    return this;
  }

  /** Adds an item to the provider array. @returns This instance for chaining. */
  addProvider(item: Reference): this {
    if (!this.provider) {
      this.provider = [];
    }

    this.provider.push(item);

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

  /** Adds an item to the subSite array. @returns This instance for chaining. */
  addSubSite(item: CodeableConcept): this {
    if (!this.subSite) {
      this.subSite = [];
    }

    this.subSite.push(item);

    return this;
  }

  /** Adds an item to the noteNumber array. @returns This instance for chaining. */
  addNoteNumber(item: number): this {
    if (!this.noteNumber) {
      this.noteNumber = [];
    }

    this.noteNumber.push(item);

    return this;
  }

  /** Adds an item to the adjudication array. @returns This instance for chaining. */
  addAdjudication(item: ExplanationOfBenefitItemAdjudication): this {
    if (!this.adjudication) {
      this.adjudication = [];
    }

    this.adjudication.push(item);

    return this;
  }

  /** Adds an item to the detail array. @returns This instance for chaining. */
  addDetail(item: ExplanationOfBenefitAddItemDetail): this {
    if (!this.detail) {
      this.detail = [];
    }

    this.detail.push(item);

    return this;
  }
}

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitTotal extends BackboneElement {

  /** A code to indicate the information type of this adjudication record. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** Monetary total amount associated with the category. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  amount?: Money;

  /** Creates a new ExplanationOfBenefitTotal. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitTotal>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitPayment extends BackboneElement {

  /** Whether this represents partial or complete payment of the benefits payable. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Total amount of all adjustments to this payment included in this transaction which are not related to this claim's adjudication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  adjustment?: Money;

  /** Reason for the payment adjustment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  adjustmentReason?: CodeableConcept;

  /** Estimated date the payment will be issued or the actual issue date of payment. */
  @IsOptional()
  @IsString()
  date?: string;

  /** Benefits payable less any payment adjustment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  amount?: Money;

  /** Issuer's unique identifier for the payment instrument. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** Creates a new ExplanationOfBenefitPayment. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitPayment>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitProcessNote extends BackboneElement {

  /** A number to uniquely identify a note entry. */
  @IsOptional()
  @IsNumber()
  number?: number;

  /** The business purpose of the note text. */
  @IsOptional()
  @IsEnum(NoteType)
  type?: NoteType;

  /** The explanation or description associated with the processing. */
  @IsOptional()
  @IsString()
  text?: string;

  /** A code to define the language used in the text of the note. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  language?: CodeableConcept;

  /** Creates a new ExplanationOfBenefitProcessNote. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitProcessNote>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitBenefitBalanceFinancial extends BackboneElement {

  /** Classification of benefit being provided. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The quantity of the benefit which is permitted under the coverage as an unsigned integer. */
  @IsOptional()
  @IsNumber()
  allowedUnsignedInt?: number;

  /** The quantity of the benefit which is permitted under the coverage as a string. */
  @IsOptional()
  @IsString()
  allowedString?: string;

  /** The quantity of the benefit which is permitted under the coverage as Money. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  allowedMoney?: Money;

  /** The quantity of the benefit which have been consumed to date as an unsigned integer. */
  @IsOptional()
  @IsNumber()
  usedUnsignedInt?: number;

  /** The quantity of the benefit which have been consumed to date as Money. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  usedMoney?: Money;

  /** Creates a new ExplanationOfBenefitBenefitBalanceFinancial. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitBenefitBalanceFinancial>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ExplanationOfBenefit. */
export class ExplanationOfBenefitBenefitBalance extends BackboneElement {

  /** Code to identify the general type of benefits under which products and services are provided. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

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
  @Type(() => ExplanationOfBenefitBenefitBalanceFinancial)
  financial?: ExplanationOfBenefitBenefitBalanceFinancial[];

  /** Creates a new ExplanationOfBenefitBenefitBalance. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefitBenefitBalance>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the financial array. @returns This instance for chaining. */
  addFinancial(item: ExplanationOfBenefitBenefitBalanceFinancial): this {
    if (!this.financial) {
      this.financial = [];
    }

    this.financial.push(item);

    return this;
  }
}

/** FHIR R4 ExplanationOfBenefit — this resource provides the adjudication details from the processing of a Claim resource. */
export class ExplanationOfBenefit extends DomainResource {

  readonly resourceType = 'ExplanationOfBenefit';

  /** A unique identifier assigned to this explanation of benefit. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The status of the resource instance. */
  @IsOptional()
  @IsEnum(FinancialResourceStatusCodes)
  status?: FinancialResourceStatusCodes;

  /** The category of claim, e.g. oral, pharmacy, vision, institutional, professional. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  subType?: CodeableConcept;

  /** A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services. */
  @IsOptional()
  @IsEnum(ClaimUse)
  use?: ClaimUse;

  /** The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /** The period for which charges are being submitted. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  billablePeriod?: Period;

  /** The date this resource was created. */
  @IsOptional()
  @IsString()
  created?: string;

  /** Individual who created the claim, predetermination or preauthorization. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  enterer?: Reference;

  /** The party responsible for authorization, adjudication and reimbursement. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  insurer?: Reference;

  /** The provider which is responsible for the claim, predetermination or preauthorization. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  provider?: Reference;

  /** The provider-required urgency of processing the request. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  priority?: CodeableConcept;

  /** A code to indicate whether and for whom funds are to be reserved for future claims. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  fundsReserveRequested?: CodeableConcept;

  /** A code, used only on a response to a preauthorization, to indicate whether the benefits payable have been reserved and for whom. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  fundsReserve?: CodeableConcept;

  /** Other claims which are related to this claim such as prior submissions or claims for related services or for the same event. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitRelated)
  related?: ExplanationOfBenefitRelated[];

  /** Prescription to support the dispensing of pharmacy, device or vision products. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  prescription?: Reference;

  /** Original prescription which has been superseded by this prescription to support the dispensing of pharmacy services, medications or products. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  originalPrescription?: Reference;

  /** The party to be reimbursed for cost of the products and services according to the terms of the policy. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ExplanationOfBenefitPayee)
  payee?: ExplanationOfBenefitPayee;

  /** A reference to the referral resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  referral?: Reference;

  /** Facility where the services were provided. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  facility?: Reference;

  /** The business identifier for the instance of the adjudication request to which this resource relates. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  claim?: Reference;

  /** The business identifier for the instance of the adjudication response to which this resource relates. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  claimResponse?: Reference;

  /** The outcome of the claim, predetermination, or preauthorization processing. */
  @IsOptional()
  @IsEnum(RemittanceOutcome)
  outcome?: RemittanceOutcome;

  /** A human readable description of the status of the adjudication. */
  @IsOptional()
  @IsString()
  disposition?: string;

  /** Reference from the Insurer which is used in later communications which refers to this adjudication. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  preAuthRef?: string[];

  /** The timeframe during which the supplied preauthorization reference may be quoted on claims to obtain the adjudication as provided. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Period)
  preAuthRefPeriod?: Period[];

  /** The members of the team who provided the products and services. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitCareTeam)
  careTeam?: ExplanationOfBenefitCareTeam[];

  /** Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitSupportingInfo)
  supportingInfo?: ExplanationOfBenefitSupportingInfo[];

  /** Information about diagnoses relevant to the claim items. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitDiagnosis)
  diagnosis?: ExplanationOfBenefitDiagnosis[];

  /** Procedures performed on the patient relevant to the billing items with the claim. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitProcedure)
  procedure?: ExplanationOfBenefitProcedure[];

  /** This indicates the relative order of a series of EOBs related to different coverages for the same suite of services. */
  @IsOptional()
  @IsNumber()
  precedence?: number;

  /** Financial instruments for reimbursement for the health care products and services specified on the claim. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitInsurance)
  insurance?: ExplanationOfBenefitInsurance[];

  /** Details of a accident which resulted in injuries which required the products and services listed in the claim. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ExplanationOfBenefitAccident)
  accident?: ExplanationOfBenefitAccident;

  /** A claim line, either simple (a product or service) or a group of details which can also be a simple items or groups of sub-details. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitItem)
  item?: ExplanationOfBenefitItem[];

  /** The first-tier service adjudications for payor added product or service lines. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitAddItem)
  addItem?: ExplanationOfBenefitAddItem[];

  /** The adjudication results which are presented at the header level rather than at the line-item or sub-line-item detail level. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitItemAdjudication)
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /** Categorized monetary totals for the adjudication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitTotal)
  total?: ExplanationOfBenefitTotal[];

  /** Payment details for the adjudication of the claim. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ExplanationOfBenefitPayment)
  payment?: ExplanationOfBenefitPayment;

  /** A code for the form to be used for printing the content. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  formCode?: CodeableConcept;

  /** The actual form, by reference or inclusion, for printing the content or an EOB. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  form?: Attachment;

  /** A note that describes or explains adjudication results in a human readable form. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitProcessNote)
  processNote?: ExplanationOfBenefitProcessNote[];

  /** The term of the benefits documented in this response. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  benefitPeriod?: Period;

  /** Balance by Benefit Category. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitBenefitBalance)
  benefitBalance?: ExplanationOfBenefitBenefitBalance[];

  /** Creates a new ExplanationOfBenefit. @param props - Initial values. */
  constructor(props?: Partial<ExplanationOfBenefit>) {
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
  addRelated(item: ExplanationOfBenefitRelated): this {
    if (!this.related) {
      this.related = [];
    }

    this.related.push(item);

    return this;
  }

  /** Adds an item to the preAuthRef array. @returns This instance for chaining. */
  addPreAuthRef(item: string): this {
    if (!this.preAuthRef) {
      this.preAuthRef = [];
    }

    this.preAuthRef.push(item);

    return this;
  }

  /** Adds an item to the preAuthRefPeriod array. @returns This instance for chaining. */
  addPreAuthRefPeriod(item: Period): this {
    if (!this.preAuthRefPeriod) {
      this.preAuthRefPeriod = [];
    }

    this.preAuthRefPeriod.push(item);

    return this;
  }

  /** Adds an item to the careTeam array. @returns This instance for chaining. */
  addCareTeam(item: ExplanationOfBenefitCareTeam): this {
    if (!this.careTeam) {
      this.careTeam = [];
    }

    this.careTeam.push(item);

    return this;
  }

  /** Adds an item to the supportingInfo array. @returns This instance for chaining. */
  addSupportingInfo(item: ExplanationOfBenefitSupportingInfo): this {
    if (!this.supportingInfo) {
      this.supportingInfo = [];
    }

    this.supportingInfo.push(item);

    return this;
  }

  /** Adds an item to the diagnosis array. @returns This instance for chaining. */
  addDiagnosis(item: ExplanationOfBenefitDiagnosis): this {
    if (!this.diagnosis) {
      this.diagnosis = [];
    }

    this.diagnosis.push(item);

    return this;
  }

  /** Adds an item to the procedure array. @returns This instance for chaining. */
  addProcedure(item: ExplanationOfBenefitProcedure): this {
    if (!this.procedure) {
      this.procedure = [];
    }

    this.procedure.push(item);

    return this;
  }

  /** Adds an item to the insurance array. @returns This instance for chaining. */
  addInsurance(item: ExplanationOfBenefitInsurance): this {
    if (!this.insurance) {
      this.insurance = [];
    }

    this.insurance.push(item);

    return this;
  }

  /** Adds an item to the addItem array. @returns This instance for chaining. */
  addAddItem(item: ExplanationOfBenefitAddItem): this {
    if (!this.addItem) {
      this.addItem = [];
    }

    this.addItem.push(item);

    return this;
  }

  /** Adds an item to the adjudication array. @returns This instance for chaining. */
  addAdjudication(item: ExplanationOfBenefitItemAdjudication): this {
    if (!this.adjudication) {
      this.adjudication = [];
    }

    this.adjudication.push(item);

    return this;
  }

  /** Adds an item to the total array. @returns This instance for chaining. */
  addTotal(item: ExplanationOfBenefitTotal): this {
    if (!this.total) {
      this.total = [];
    }

    this.total.push(item);

    return this;
  }

  /** Adds an item to the processNote array. @returns This instance for chaining. */
  addProcessNote(item: ExplanationOfBenefitProcessNote): this {
    if (!this.processNote) {
      this.processNote = [];
    }

    this.processNote.push(item);

    return this;
  }

  /** Adds an item to the benefitBalance array. @returns This instance for chaining. */
  addBenefitBalance(item: ExplanationOfBenefitBenefitBalance): this {
    if (!this.benefitBalance) {
      this.benefitBalance = [];
    }

    this.benefitBalance.push(item);

    return this;
  }
}
