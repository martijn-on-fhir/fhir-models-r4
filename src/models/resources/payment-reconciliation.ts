import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Money } from '../datatypes/money.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { FinancialResourceStatusCodes } from '../enums/financial-resource-status-codes.js';
import { NoteType } from '../enums/note-type.js';
import { RemittanceOutcome } from '../enums/remittance-outcome.js';

/** Backbone element for {@link PaymentReconciliation.detail}. */
export class PaymentReconciliationDetail extends BackboneElement {

  /** Unique identifier for the current payment item for the referenced payable. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** Unique identifier for the prior payment item for the referenced payable. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  predecessor?: Identifier;

  /** Code to indicate the nature of the payment (e.g. payment, adjustment). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** A resource such as a Claim, the evaluation of which could lead to payment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  request?: Reference;

  /** The party which submitted the claim or financial transaction. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  submitter?: Reference;

  /** A resource such as a ClaimResponse which is the outcome of processing the referenced request resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  response?: Reference;

  /** The date of the invoice or financial resource. */
  @IsOptional()
  @IsString()
  date?: string;

  /** A reference to the individual who is responsible for inquiries regarding the response and its payment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  responsible?: Reference;

  /** The party which is receiving the payment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  payee?: Reference;

  /** The monetary amount allocated from the total payment to the payable. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  amount?: Money;

  /** Creates a new {@link PaymentReconciliationDetail} instance. @param props - Initial property values. */
  constructor(props?: Partial<PaymentReconciliationDetail>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link PaymentReconciliation.processNote}. */
export class PaymentReconciliationProcessNote extends BackboneElement {

  /** The business purpose of the note text. */
  @IsOptional()
  @IsEnum(NoteType)
  type?: NoteType;

  /** The explanation or description associated with the processing. */
  @IsOptional()
  @IsString()
  text?: string;

  /** Creates a new {@link PaymentReconciliationProcessNote} instance. @param props - Initial property values. */
  constructor(props?: Partial<PaymentReconciliationProcessNote>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 PaymentReconciliation resource — provides the bulk payment details associated with a payment by the payor for goods and services rendered by a provider to patients covered by insurance plans offered by that payor. */
export class PaymentReconciliation extends DomainResource {

  readonly resourceType = 'PaymentReconciliation';

  /** A unique identifier assigned to this payment reconciliation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The status of the resource instance. */
  @IsOptional()
  @IsEnum(FinancialResourceStatusCodes)
  status?: FinancialResourceStatusCodes;

  /** The period of time for which payments have been gathered into this bulk payment for settlement. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** The date when the resource was created. */
  @IsOptional()
  @IsString()
  created?: string;

  /** The party who generated the payment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  paymentIssuer?: Reference;

  /** Original request resource reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  request?: Reference;

  /** The practitioner who is responsible for the services rendered to the patient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  requestor?: Reference;

  /** The outcome of a request for a reconciliation. */
  @IsOptional()
  @IsEnum(RemittanceOutcome)
  outcome?: RemittanceOutcome;

  /** A human readable description of the status of the request for the reconciliation. */
  @IsOptional()
  @IsString()
  disposition?: string;

  /** The date of payment as indicated on the financial instrument. */
  @IsOptional()
  @IsString()
  paymentDate?: string;

  /** Total payment amount as indicated on the financial instrument. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  paymentAmount?: Money;

  /** Issuer's unique identifier for the payment instrument. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  paymentIdentifier?: Identifier;

  /** Distribution of the payment amount for a previously acknowledged payable. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PaymentReconciliationDetail)
  detail?: PaymentReconciliationDetail[];

  /** A code for the form to be used for printing the content. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  formCode?: CodeableConcept;

  /** A note that describes or explains the processing in a human readable form. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PaymentReconciliationProcessNote)
  processNote?: PaymentReconciliationProcessNote[];

  /** Creates a new {@link PaymentReconciliation} instance. @param props - Initial property values. */
  constructor(props?: Partial<PaymentReconciliation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link PaymentReconciliation.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link PaymentReconciliationDetail} to the {@link PaymentReconciliation.detail detail} array. @param item - The {@link PaymentReconciliationDetail} to add. @returns This instance for chaining. */
  addDetail(item: PaymentReconciliationDetail): this {
    if (!this.detail) {
      this.detail = [];
    }

    this.detail.push(item);

    return this;
  }

  /** Adds a {@link PaymentReconciliationProcessNote} to the {@link PaymentReconciliation.processNote processNote} array. @param item - The {@link PaymentReconciliationProcessNote} to add. @returns This instance for chaining. */
  addProcessNote(item: PaymentReconciliationProcessNote): this {
    if (!this.processNote) {
      this.processNote = [];
    }

    this.processNote.push(item);

    return this;
  }
}
