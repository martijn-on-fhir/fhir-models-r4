import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';
import { ImmunizationEvaluationStatusCodes } from '../enums/immunization-evaluation-status-codes.js';

/** FHIR R4 ImmunizationEvaluation — describes a comparison of an immunization event against published recommendations. */
export class ImmunizationEvaluation extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'ImmunizationEvaluation';

  /** A unique identifier assigned to this immunization evaluation record. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Indicates the current status of the evaluation of the vaccination administration event. */
  @IsOptional()
  @IsEnum(ImmunizationEvaluationStatusCodes)
  status?: ImmunizationEvaluationStatusCodes;

  /** The individual for whom the evaluation is being done. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /** The date the evaluation of the vaccine administration event was performed. */
  @IsOptional()
  @IsString()
  date?: string;

  /** Indicates the authority who published the protocol. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  authority?: Reference;

  /** The vaccine preventable disease the dose is being evaluated against. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  targetDisease?: CodeableConcept;

  /** The vaccine administration event being evaluated. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  immunizationEvent?: Reference;

  /** Indicates if the dose is valid or not valid with respect to the published recommendations. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  doseStatus?: CodeableConcept;

  /** Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  doseStatusReason?: CodeableConcept[];

  /** Additional information about the evaluation. */
  @IsOptional()
  @IsString()
  description?: string;

  /** One possible path to achieve presumed immunity against a disease. */
  @IsOptional()
  @IsString()
  series?: string;

  /** Nominal position in a series as a positive integer. */
  @IsOptional()
  @IsNumber()
  doseNumberPositiveInt?: number;

  /** Nominal position in a series as a string. */
  @IsOptional()
  @IsString()
  doseNumberString?: string;

  /** The recommended number of doses to achieve immunity as a positive integer. */
  @IsOptional()
  @IsNumber()
  seriesDosesPositiveInt?: number;

  /** The recommended number of doses to achieve immunity as a string. */
  @IsOptional()
  @IsString()
  seriesDosesString?: string;

  /** Creates a new ImmunizationEvaluation. @param props - Initial values. */
  constructor(props?: Partial<ImmunizationEvaluation>) {
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

  /** Adds an item to the doseStatusReason array. @returns This instance for chaining. */
  addDoseStatusReason(item: CodeableConcept): this {
    if (!this.doseStatusReason) {
      this.doseStatusReason = [];
    }

    this.doseStatusReason.push(item);

    return this;
  }
}
