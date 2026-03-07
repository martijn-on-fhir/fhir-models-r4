import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';
import { FinancialResourceStatusCodes } from '../enums/financial-resource-status-codes.js';

/** FHIR R4 EnrollmentRequest resource — a request to enroll a patient or subscriber in an insurance plan. */
export class EnrollmentRequest extends DomainResource {

  /** The type of FHIR resource. */
  readonly resourceType = 'EnrollmentRequest';

  /** Business identifiers assigned to this enrollment request by the provider or payer. */
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The status of the resource instance. */
  @IsOptional()
  @IsEnum(FinancialResourceStatusCodes)
  status?: FinancialResourceStatusCodes;

  /** The date when this resource was created. */
  @IsOptional()
  @IsString()
  created?: string;

  /** The Insurer who is expected to pay for the enrollment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  insurer?: Reference;

  /** The practitioner who is responsible for the services rendered to the patient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  provider?: Reference;

  /** Patient Resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  candidate?: Reference;

  /** Reference to the program or plan identification, underwriter, or payor. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  coverage?: Reference;

  /** Creates a new {@link EnrollmentRequest} instance. @param props - Initial property values. */
  constructor(props?: Partial<EnrollmentRequest>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link EnrollmentRequest.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }
}
