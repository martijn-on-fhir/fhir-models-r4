import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';
import { FinancialResourceStatusCodes } from '../enums/financial-resource-status-codes.js';
import { RemittanceOutcome } from '../enums/remittance-outcome.js';

/** FHIR R4 EnrollmentResponse resource — a response to an enrollment request, indicating the outcome of the enrollment process. */
export class EnrollmentResponse extends DomainResource {

  /** The type of FHIR resource. */
  readonly resourceType = 'EnrollmentResponse';

  /** Business identifiers assigned to this enrollment response by the insurer. */
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The status of the resource instance. */
  @IsOptional()
  @IsEnum(FinancialResourceStatusCodes)
  status?: FinancialResourceStatusCodes;

  /** Original request resource reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  request?: Reference;

  /** Processing status: error, complete. */
  @IsOptional()
  @IsEnum(RemittanceOutcome)
  outcome?: RemittanceOutcome;

  /** A description of the status of the adjudication. */
  @IsOptional()
  @IsString()
  disposition?: string;

  /** The date when the enclosed suite of services were performed or completed. */
  @IsOptional()
  @IsString()
  created?: string;

  /** The Insurer who produced this adjudicated response. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  organization?: Reference;

  /** The practitioner who is responsible for the services rendered to the patient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  requestProvider?: Reference;

  /** Creates a new {@link EnrollmentResponse} instance. @param props - Initial property values. */
  constructor(props?: Partial<EnrollmentResponse>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link EnrollmentResponse.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }
}
