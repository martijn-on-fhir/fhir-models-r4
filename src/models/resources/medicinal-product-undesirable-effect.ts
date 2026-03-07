import { Type } from 'class-transformer';
import { IsOptional, IsArray, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Population } from '../datatypes/population.js';
import { Reference } from '../datatypes/reference.js';

/** FHIR R4 MedicinalProductUndesirableEffect — describe the undesirable effects of the medicinal product. */
export class MedicinalProductUndesirableEffect extends DomainResource {

  readonly resourceType = 'MedicinalProductUndesirableEffect';

  /** The medication for which this is an indication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  subject?: Reference[];

  /** The symptom, condition or undesirable effect. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  symptomConditionEffect?: CodeableConcept;

  /** Classification of the effect. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  classification?: CodeableConcept;

  /** The frequency of occurrence of the effect. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  frequencyOfOccurrence?: CodeableConcept;

  /** The population group to which this applies. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Population)
  population?: Population[];

  /** Creates a new MedicinalProductUndesirableEffect. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductUndesirableEffect>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the subject array. @returns This instance for chaining. */
  addSubject(item: Reference): this {
    if (!this.subject) {
      this.subject = [];
    }

    this.subject.push(item);

    return this;
  }

  /** Adds an item to the population array. @returns This instance for chaining. */
  addPopulation(item: Population): this {
    if (!this.population) {
      this.population = [];
    }

    this.population.push(item);

    return this;
  }
}
