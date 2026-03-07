import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { CodeableConcept } from './codeable-concept.js';
import { Range } from './range.js';

/** FHIR R4 Population — A populationcriteria for the appropriateness of a therapy described in a clinical guideline. */
export class Population extends BackboneElement {

  /** The age of the specific population, as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  ageRange?: Range;

  /** The age of the specific population, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  ageCodeableConcept?: CodeableConcept;

  /** The gender of the specific population. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  gender?: CodeableConcept;

  /** Race of the specific population. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  race?: CodeableConcept;

  /** The existing physiological conditions of the specific population to which this applies. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  physiologicalCondition?: CodeableConcept;

  /** Creates a new Population. @param props - Initial values. */
  constructor(props?: Partial<Population>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
