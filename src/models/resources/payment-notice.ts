import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Money } from '../datatypes/money.js';
import { Reference } from '../datatypes/reference.js';
import { FinancialResourceStatusCodes } from '../enums/financial-resource-status-codes.js';

/** FHIR R4 PaymentNotice resource — indicates the resource for which payment has been or will be made and the status of that payment. */
export class PaymentNotice extends DomainResource {

  readonly resourceType = 'PaymentNotice';

  /** A unique identifier assigned to this payment notice. */
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The status of the resource instance. */
  @IsOptional()
  @IsEnum(FinancialResourceStatusCodes)
  status?: FinancialResourceStatusCodes;

  /** Reference of resource for which payment is being made. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  request?: Reference;

  /** Reference of response to resource for which payment is being made. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  response?: Reference;

  /** The date when this resource was created. */
  @IsOptional()
  @IsString()
  created?: string;

  /** The practitioner who is responsible for the services rendered to the patient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  provider?: Reference;

  /** A reference to the payment which is the subject of this notice. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  payment?: Reference;

  /** The date when the above payment action occurred. */
  @IsOptional()
  @IsString()
  paymentDate?: string;

  /** The party who will receive or has received payment that is the subject of this notification. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  payee?: Reference;

  /** The party who is notified of the payment status. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  recipient?: Reference;

  /** The amount sent to the payee. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  amount?: Money;

  /** A code indicating whether payment has been sent or cleared. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  paymentStatus?: CodeableConcept;

  /** Creates a new {@link PaymentNotice} instance. @param props - Initial property values. */
  constructor(props?: Partial<PaymentNotice>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link PaymentNotice.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }
}
