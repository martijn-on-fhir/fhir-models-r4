import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Address } from '../datatypes/address.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Money } from '../datatypes/money.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { ClaimUse } from '../enums/claim-use.js';
import { FinancialResourceStatusCodes } from '../enums/financial-resource-status-codes.js';
import { NoteType } from '../enums/note-type.js';
import { RemittanceOutcome } from '../enums/remittance-outcome.js';

/** Backbone element for ClaimResponse — adjudication details for a claim line item. */
export class ClaimResponseItemAdjudication extends BackboneElement {

  /** Category of the adjudication (e.g., submitted, eligible, benefit). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** Reason for the adjudication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  reason?: CodeableConcept;

  /** Monetary amount associated with the adjudication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  amount?: Money;

  /** Non-monetary value associated with the adjudication. */
  @IsOptional()
  @IsNumber()
  value?: number;

  /** Creates a new ClaimResponseItemAdjudication. @param props - Initial values. */
  constructor(props?: Partial<ClaimResponseItemAdjudication>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ClaimResponse — adjudication for a sub-detail line item. */
export class ClaimResponseItemDetailSubDetail extends BackboneElement {

  /** Sequence number of the sub-detail within the detail. */
  @IsOptional()
  @IsNumber()
  subDetailSequence?: number;

  /** Applicable note numbers for this sub-detail. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  noteNumber?: number[];

  /** Adjudication details for the sub-detail. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItemAdjudication)
  adjudication?: ClaimResponseItemAdjudication[];

  /** Creates a new ClaimResponseItemDetailSubDetail. @param props - Initial values. */
  constructor(props?: Partial<ClaimResponseItemDetailSubDetail>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
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
  addAdjudication(item: ClaimResponseItemAdjudication): this {
    if (!this.adjudication) {
      this.adjudication = [];
    }

    this.adjudication.push(item);

    return this;
  }
}

/** Backbone element for ClaimResponse — adjudication for a detail line item. */
export class ClaimResponseItemDetail extends BackboneElement {

  /** Sequence number of the detail within the line item. */
  @IsOptional()
  @IsNumber()
  detailSequence?: number;

  /** Applicable note numbers for this detail. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  noteNumber?: number[];

  /** Adjudication details for the detail. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItemAdjudication)
  adjudication?: ClaimResponseItemAdjudication[];

  /** Sub-detail level adjudication results. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItemDetailSubDetail)
  subDetail?: ClaimResponseItemDetailSubDetail[];

  /** Creates a new ClaimResponseItemDetail. @param props - Initial values. */
  constructor(props?: Partial<ClaimResponseItemDetail>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
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
  addAdjudication(item: ClaimResponseItemAdjudication): this {
    if (!this.adjudication) {
      this.adjudication = [];
    }

    this.adjudication.push(item);

    return this;
  }

  /** Adds an item to the subDetail array. @returns This instance for chaining. */
  addSubDetail(item: ClaimResponseItemDetailSubDetail): this {
    if (!this.subDetail) {
      this.subDetail = [];
    }

    this.subDetail.push(item);

    return this;
  }
}

/** Backbone element for ClaimResponse — adjudication for a claim line item. */
export class ClaimResponseItem extends BackboneElement {

  /** Sequence number of the claim line item being adjudicated. */
  @IsOptional()
  @IsNumber()
  itemSequence?: number;

  /** Applicable note numbers for this item. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  noteNumber?: number[];

  /** Adjudication details for this item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItemAdjudication)
  adjudication?: ClaimResponseItemAdjudication[];

  /** Detail level adjudication results. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItemDetail)
  detail?: ClaimResponseItemDetail[];

  /** Creates a new ClaimResponseItem. @param props - Initial values. */
  constructor(props?: Partial<ClaimResponseItem>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
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
  addAdjudication(item: ClaimResponseItemAdjudication): this {
    if (!this.adjudication) {
      this.adjudication = [];
    }

    this.adjudication.push(item);

    return this;
  }

  /** Adds an item to the detail array. @returns This instance for chaining. */
  addDetail(item: ClaimResponseItemDetail): this {
    if (!this.detail) {
      this.detail = [];
    }

    this.detail.push(item);

    return this;
  }
}

/** Backbone element for ClaimResponse — sub-detail for an added item detail. */
export class ClaimResponseAddItemDetailSubDetail extends BackboneElement {

  /** Billing code for the added sub-detail. */
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

  /** Applicable note numbers. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  noteNumber?: number[];

  /** Adjudication details for this sub-detail. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItemAdjudication)
  adjudication?: ClaimResponseItemAdjudication[];

  /** Creates a new ClaimResponseAddItemDetailSubDetail. @param props - Initial values. */
  constructor(props?: Partial<ClaimResponseAddItemDetailSubDetail>) {
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
  addAdjudication(item: ClaimResponseItemAdjudication): this {
    if (!this.adjudication) {
      this.adjudication = [];
    }

    this.adjudication.push(item);

    return this;
  }
}

/** Backbone element for ClaimResponse — detail for an insurer-added item. */
export class ClaimResponseAddItemDetail extends BackboneElement {

  /** Billing code for the added detail. */
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

  /** Applicable note numbers. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  noteNumber?: number[];

  /** Adjudication details for this detail. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItemAdjudication)
  adjudication?: ClaimResponseItemAdjudication[];

  /** Sub-detail items added by the insurer. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseAddItemDetailSubDetail)
  subDetail?: ClaimResponseAddItemDetailSubDetail[];

  /** Creates a new ClaimResponseAddItemDetail. @param props - Initial values. */
  constructor(props?: Partial<ClaimResponseAddItemDetail>) {
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
  addAdjudication(item: ClaimResponseItemAdjudication): this {
    if (!this.adjudication) {
      this.adjudication = [];
    }

    this.adjudication.push(item);

    return this;
  }

  /** Adds an item to the subDetail array. @returns This instance for chaining. */
  addSubDetail(item: ClaimResponseAddItemDetailSubDetail): this {
    if (!this.subDetail) {
      this.subDetail = [];
    }

    this.subDetail.push(item);

    return this;
  }
}

/** Backbone element for ClaimResponse — item added by the insurer. */
export class ClaimResponseAddItem extends BackboneElement {

  /** Claim items the added item relates to. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  itemSequence?: number[];

  /** Claim details the added item relates to. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  detailSequence?: number[];

  /** Claim sub-details the added item relates to. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  subdetailSequence?: number[];

  /** Authorized providers for the added item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  provider?: Reference[];

  /** Billing code for the added item. */
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

  /** Applicable note numbers. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  noteNumber?: number[];

  /** Adjudication details for the added item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItemAdjudication)
  adjudication?: ClaimResponseItemAdjudication[];

  /** Detail level items added by the insurer. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseAddItemDetail)
  detail?: ClaimResponseAddItemDetail[];

  /** Creates a new ClaimResponseAddItem. @param props - Initial values. */
  constructor(props?: Partial<ClaimResponseAddItem>) {
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

  /** Adds an item to the subdetailSequence array. @returns This instance for chaining. */
  addSubdetailSequence(item: number): this {
    if (!this.subdetailSequence) {
      this.subdetailSequence = [];
    }

    this.subdetailSequence.push(item);

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
  addAdjudication(item: ClaimResponseItemAdjudication): this {
    if (!this.adjudication) {
      this.adjudication = [];
    }

    this.adjudication.push(item);

    return this;
  }

  /** Adds an item to the detail array. @returns This instance for chaining. */
  addDetail(item: ClaimResponseAddItemDetail): this {
    if (!this.detail) {
      this.detail = [];
    }

    this.detail.push(item);

    return this;
  }
}

/** Backbone element for ClaimResponse — adjudication totals. */
export class ClaimResponseTotal extends BackboneElement {

  /** Category of the total (e.g., submitted, benefit). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** Financial total for the category. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  amount?: Money;

  /** Creates a new ClaimResponseTotal. @param props - Initial values. */
  constructor(props?: Partial<ClaimResponseTotal>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ClaimResponse — payment details. */
export class ClaimResponsePayment extends BackboneElement {

  /** Whether the payment has been partially or fully made. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Payment adjustment for non-claim issues. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  adjustment?: Money;

  /** Explanation for the adjustment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  adjustmentReason?: CodeableConcept;

  /** Expected date of payment. */
  @IsOptional()
  @IsString()
  date?: string;

  /** Payable amount after adjustment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  amount?: Money;

  /** Business identifier for the payment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** Creates a new ClaimResponsePayment. @param props - Initial values. */
  constructor(props?: Partial<ClaimResponsePayment>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ClaimResponse — note concerning adjudication. */
export class ClaimResponseProcessNote extends BackboneElement {

  /** Note instance identifier. */
  @IsOptional()
  @IsNumber()
  number?: number;

  /** The type of note (display | print | printoper). */
  @IsOptional()
  @IsEnum(NoteType)
  type?: NoteType;

  /** Note explanatory text. */
  @IsOptional()
  @IsString()
  text?: string;

  /** Language of the note text. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  language?: CodeableConcept;

  /** Creates a new ClaimResponseProcessNote. @param props - Initial values. */
  constructor(props?: Partial<ClaimResponseProcessNote>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ClaimResponse — patient insurance information. */
export class ClaimResponseInsurance extends BackboneElement {

  /** Insurance instance identifier. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** Coverage used for adjudication. */
  @IsOptional()
  @IsBoolean()
  focal?: boolean;

  /** Insurance information. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  coverage?: Reference;

  /** Additional provider contract number. */
  @IsOptional()
  @IsString()
  businessArrangement?: string;

  /** Adjudication results for the referenced coverage. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  claimResponse?: Reference;

  /** Creates a new ClaimResponseInsurance. @param props - Initial values. */
  constructor(props?: Partial<ClaimResponseInsurance>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ClaimResponse — processing errors. */
export class ClaimResponseError extends BackboneElement {

  /** Sequence number of the item with the error. */
  @IsOptional()
  @IsNumber()
  itemSequence?: number;

  /** Sequence number of the detail with the error. */
  @IsOptional()
  @IsNumber()
  detailSequence?: number;

  /** Sequence number of the sub-detail with the error. */
  @IsOptional()
  @IsNumber()
  subDetailSequence?: number;

  /** Error code detailing processing issues. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** Creates a new ClaimResponseError. @param props - Initial values. */
  constructor(props?: Partial<ClaimResponseError>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 ClaimResponse — processing results for a claim or pre-authorization. */
export class ClaimResponse extends DomainResource {

  /** The FHIR resource type string. */
  readonly resourceType = 'ClaimResponse';

  /** Business identifiers assigned to this claim response. */
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

  /** Date the claim response was issued. */
  @IsOptional()
  @IsString()
  created?: string;

  /** Party responsible for the claim. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  insurer?: Reference;

  /** Party responsible for the claim submission. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  requestor?: Reference;

  /** Reference to the original claim. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  request?: Reference;

  /** Outcome of the claim processing (queued | complete | error | partial). */
  @IsOptional()
  @IsEnum(RemittanceOutcome)
  outcome?: RemittanceOutcome;

  /** Disposition message from the insurer. */
  @IsOptional()
  @IsString()
  disposition?: string;

  /** Pre-authorization reference. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  preAuthRef?: string[];

  /** Pre-authorization reference effective period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  preAuthPeriod?: Period;

  /** Party to be paid any benefits payable. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  payeeType?: CodeableConcept;

  /** Adjudication for claim line items. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItem)
  item?: ClaimResponseItem[];

  /** Insurer-added line items. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseAddItem)
  addItem?: ClaimResponseAddItem[];

  /** Header-level adjudication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItemAdjudication)
  adjudication?: ClaimResponseItemAdjudication[];

  /** Adjudication totals. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseTotal)
  total?: ClaimResponseTotal[];

  /** Payment details. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ClaimResponsePayment)
  payment?: ClaimResponsePayment;

  /** Funds reserved status. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  fundsReserve?: CodeableConcept;

  /** Printed form identifier. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  formCode?: CodeableConcept;

  /** Printed reference or actual form. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  form?: Attachment;

  /** Note concerning adjudication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseProcessNote)
  processNote?: ClaimResponseProcessNote[];

  /** Request for additional information. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  communicationRequest?: Reference[];

  /** Patient insurance information. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseInsurance)
  insurance?: ClaimResponseInsurance[];

  /** Processing errors. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseError)
  error?: ClaimResponseError[];

  /** Creates a new ClaimResponse. @param props - Initial values. */
  constructor(props?: Partial<ClaimResponse>) {
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

  /** Adds an item to the preAuthRef array. @returns This instance for chaining. */
  addPreAuthRef(item: string): this {
    if (!this.preAuthRef) {
      this.preAuthRef = [];
    }

    this.preAuthRef.push(item);

    return this;
  }

  /** Adds an item to the addItem array. @returns This instance for chaining. */
  addAddItem(item: ClaimResponseAddItem): this {
    if (!this.addItem) {
      this.addItem = [];
    }

    this.addItem.push(item);

    return this;
  }

  /** Adds an item to the adjudication array. @returns This instance for chaining. */
  addAdjudication(item: ClaimResponseItemAdjudication): this {
    if (!this.adjudication) {
      this.adjudication = [];
    }

    this.adjudication.push(item);

    return this;
  }

  /** Adds an item to the total array. @returns This instance for chaining. */
  addTotal(item: ClaimResponseTotal): this {
    if (!this.total) {
      this.total = [];
    }

    this.total.push(item);

    return this;
  }

  /** Adds an item to the processNote array. @returns This instance for chaining. */
  addProcessNote(item: ClaimResponseProcessNote): this {
    if (!this.processNote) {
      this.processNote = [];
    }

    this.processNote.push(item);

    return this;
  }

  /** Adds an item to the communicationRequest array. @returns This instance for chaining. */
  addCommunicationRequest(item: Reference): this {
    if (!this.communicationRequest) {
      this.communicationRequest = [];
    }

    this.communicationRequest.push(item);

    return this;
  }

  /** Adds an item to the insurance array. @returns This instance for chaining. */
  addInsurance(item: ClaimResponseInsurance): this {
    if (!this.insurance) {
      this.insurance = [];
    }

    this.insurance.push(item);

    return this;
  }

  /** Adds an item to the error array. @returns This instance for chaining. */
  addError(item: ClaimResponseError): this {
    if (!this.error) {
      this.error = [];
    }

    this.error.push(item);

    return this;
  }
}
