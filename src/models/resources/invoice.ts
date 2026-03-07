import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Money } from '../datatypes/money.js';
import { Reference } from '../datatypes/reference.js';
import { InvoicePriceComponentType } from '../enums/invoice-price-component-type.js';
import { InvoiceStatus } from '../enums/invoice-status.js';

/** Backbone element for Invoice. */
export class InvoiceParticipant extends BackboneElement {

  /** Describes the type of involvement (e.g. transcriptionist, creator etc.). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /** The device, practitioner, etc. who performed or participated in the service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  actor?: Reference;

  /** Creates a new InvoiceParticipant. @param props - Initial values. */
  constructor(props?: Partial<InvoiceParticipant>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Invoice. */
export class InvoiceLineItemPriceComponent extends BackboneElement {

  /** This code identifies the type of the component (e.g. base, surcharge, deduction, etc.). */
  @IsOptional()
  @IsEnum(InvoicePriceComponentType)
  type?: InvoicePriceComponentType;

  /** A code that identifies the component. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The factor that has been applied on the base price for calculating this component. */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /** The amount calculated for this component. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  amount?: Money;

  /** Creates a new InvoiceLineItemPriceComponent. @param props - Initial values. */
  constructor(props?: Partial<InvoiceLineItemPriceComponent>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Invoice. */
export class InvoiceLineItem extends BackboneElement {

  /** Sequence in which the items appear on the invoice. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** The ChargeItem contains information such as the billing code, date, amount etc. as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  chargeItemReference?: Reference;

  /** The ChargeItem contains information such as the billing code, date, amount etc. as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  chargeItemCodeableConcept?: CodeableConcept;

  /** The price for a ChargeItem may be calculated as a base price with surcharges/deductions. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InvoiceLineItemPriceComponent)
  priceComponent?: InvoiceLineItemPriceComponent[];

  /** Creates a new InvoiceLineItem. @param props - Initial values. */
  constructor(props?: Partial<InvoiceLineItem>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the priceComponent array. @returns This instance for chaining. */
  addPriceComponent(item: InvoiceLineItemPriceComponent): this {
    if (!this.priceComponent) {
      this.priceComponent = [];
    }

    this.priceComponent.push(item);

    return this;
  }
}

/** FHIR R4 Invoice — represents a financial instrument used to track charges for goods and services. */
export class Invoice extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'Invoice';

  /** Identifier of this invoice. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The current state of the invoice. */
  @IsOptional()
  @IsEnum(InvoiceStatus)
  status?: InvoiceStatus;

  /** In case of Invoice cancellation a reason must be given. */
  @IsOptional()
  @IsString()
  cancelledReason?: string;

  /** Type of invoice depending on domain, realm, an individual site needs. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The individual or set of individuals receiving the goods and services billed in this invoice. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The individual or Organization responsible for balancing of this invoice. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  recipient?: Reference;

  /** Date/time(s) of when this invoice was posted. */
  @IsOptional()
  @IsString()
  date?: string;

  /** Indicates who or what performed or participated in the charged service. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InvoiceParticipant)
  participant?: InvoiceParticipant[];

  /** The organizationissuing the invoice. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  issuer?: Reference;

  /** Account which is supposed to be balanced with this invoice. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  account?: Reference;

  /** Each line item represents one charge for goods and services rendered. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InvoiceLineItem)
  lineItem?: InvoiceLineItem[];

  /** The total amount for the invoice, incorporating price components at the invoice level. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InvoiceLineItemPriceComponent)
  totalPriceComponent?: InvoiceLineItemPriceComponent[];

  /** Invoice total, tax included. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  totalNet?: Money;

  /** Invoice total after tax. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  totalGross?: Money;

  /** Payment details such as banking details, period of payment, deductibles, methods of payment. */
  @IsOptional()
  @IsString()
  paymentTerms?: string;

  /** Comments made about the invoice by the issuer, subject, or other participants. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Creates a new Invoice. @param props - Initial values. */
  constructor(props?: Partial<Invoice>) {
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

  /** Adds an item to the participant array. @returns This instance for chaining. */
  addParticipant(item: InvoiceParticipant): this {
    if (!this.participant) {
      this.participant = [];
    }

    this.participant.push(item);

    return this;
  }

  /** Adds an item to the lineItem array. @returns This instance for chaining. */
  addLineItem(item: InvoiceLineItem): this {
    if (!this.lineItem) {
      this.lineItem = [];
    }

    this.lineItem.push(item);

    return this;
  }

  /** Adds an item to the totalPriceComponent array. @returns This instance for chaining. */
  addTotalPriceComponent(item: InvoiceLineItemPriceComponent): this {
    if (!this.totalPriceComponent) {
      this.totalPriceComponent = [];
    }

    this.totalPriceComponent.push(item);

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
}
