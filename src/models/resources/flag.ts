import { Type } from 'class-transformer';
import { IsOptional, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { FlagStatus } from '../enums/flag-status.js';

/** FHIR R4 Flag resource — a prospective warning of potential issues when providing care to the patient. */
export class Flag extends DomainResource {

  /** The type of FHIR resource. */
  readonly resourceType = 'Flag';

  /** Business identifiers assigned to this flag by the performer or other systems. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Supports basic workflow. */
  @IsOptional()
  @IsEnum(FlagStatus)
  status?: FlagStatus;

  /** Allows a flag to be divided into different categories such as clinical, administrative, etc. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** The coded value or textual component of the flag to display to the user. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The period of time from the activation of the flag to inactivation of the flag. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** This alert is only relevant during the encounter. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** The person, organization, or device that created the flag. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /** Creates a new {@link Flag} instance. @param props - Initial property values. */
  constructor(props?: Partial<Flag>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link Flag.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link Flag.category category} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addCategory(item: CodeableConcept): this {
    if (!this.category) {
      this.category = [];
    }

    this.category.push(item);

    return this;
  }
}
