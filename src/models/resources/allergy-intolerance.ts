import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Age } from '../datatypes/age.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Range } from '../datatypes/range.js';
import { Reference } from '../datatypes/reference.js';
import { AllergyIntoleranceCategory } from '../enums/allergy-intolerance-category.js';
import { AllergyIntoleranceCriticality } from '../enums/allergy-intolerance-criticality.js';
import { AllergyIntoleranceSeverity } from '../enums/allergy-intolerance-severity.js';
import { AllergyIntoleranceType } from '../enums/allergy-intolerance-type.js';

/** Backbone element for AllergyIntolerance — adverse reaction event details. */
export class AllergyIntoleranceReaction extends BackboneElement {

  /** Specific substance or pharmaceutical product considered responsible. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  substance?: CodeableConcept;

  /** Clinical symptoms and/or signs of the reaction. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  manifestation?: CodeableConcept[];

  /** Text description about the reaction as a whole. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Date or estimated date of the reaction onset. */
  @IsOptional()
  @IsString()
  onset?: string;

  /** Clinical assessment of the severity of the reaction event. */
  @IsOptional()
  @IsEnum(AllergyIntoleranceSeverity)
  severity?: AllergyIntoleranceSeverity;

  /** How the subject was exposed to the substance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  exposureRoute?: CodeableConcept;

  /** Additional text about the adverse reaction event. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Creates a new AllergyIntoleranceReaction. @param props - Initial values. */
  constructor(props?: Partial<AllergyIntoleranceReaction>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the manifestation array. @returns This instance for chaining. */
  addManifestation(item: CodeableConcept): this {
    if (!this.manifestation) {
      this.manifestation = [];
    }

    this.manifestation.push(item);

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

/** FHIR R4 AllergyIntolerance — risk of harmful reaction to a substance. */
export class AllergyIntolerance extends DomainResource {

  /** The FHIR resource type string. */
  readonly resourceType = 'AllergyIntolerance';

  /** Business identifiers assigned to this allergy or intolerance. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The clinical status of the allergy or intolerance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  clinicalStatus?: CodeableConcept;

  /** Assertion about certainty associated with the propensity or risk. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  verificationStatus?: CodeableConcept;

  /** Identification of the underlying physiological mechanism for the reaction risk (allergy | intolerance). */
  @IsOptional()
  @IsEnum(AllergyIntoleranceType)
  type?: AllergyIntoleranceType;

  /** Category of the identified substance (food | medication | environment | biologic). */
  @IsOptional()
  @IsArray()
  @IsEnum(AllergyIntoleranceCategory, { each: true })
  category?: AllergyIntoleranceCategory[];

  /** Estimate of the potential clinical harm or seriousness of the reaction. */
  @IsOptional()
  @IsEnum(AllergyIntoleranceCriticality)
  criticality?: AllergyIntoleranceCriticality;

  /** Code that identifies the allergy or intolerance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The patient who has the allergy or intolerance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /** The encounter when the allergy or intolerance was asserted. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** Estimated or actual date the allergy or intolerance began, as a dateTime. */
  @IsOptional()
  @IsString()
  onsetDateTime?: string;

  /** Estimated or actual date the allergy or intolerance began, as an Age. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Age)
  onsetAge?: Age;

  /** Estimated or actual date the allergy or intolerance began, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  onsetPeriod?: Period;

  /** Estimated or actual date the allergy or intolerance began, as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  onsetRange?: Range;

  /** Estimated or actual date the allergy or intolerance began, as a string. */
  @IsOptional()
  @IsString()
  onsetString?: string;

  /** Date when the resource was first recorded. */
  @IsOptional()
  @IsString()
  recordedDate?: string;

  /** Who recorded the sensitivity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  recorder?: Reference;

  /** Source of the information about the allergy. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  asserter?: Reference;

  /** Date of last known occurrence of a reaction. */
  @IsOptional()
  @IsString()
  lastOccurrence?: string;

  /** Additional narrative about the allergy not captured in other fields. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Adverse reaction events linked to exposure to substance. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AllergyIntoleranceReaction)
  reaction?: AllergyIntoleranceReaction[];

  /** Creates a new AllergyIntolerance. @param props - Initial values. */
  constructor(props?: Partial<AllergyIntolerance>) {
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

  /** Adds an item to the category array. @returns This instance for chaining. */
  addCategory(item: AllergyIntoleranceCategory): this {
    if (!this.category) {
      this.category = [];
    }

    this.category.push(item);

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

  /** Adds an item to the reaction array. @returns This instance for chaining. */
  addReaction(item: AllergyIntoleranceReaction): this {
    if (!this.reaction) {
      this.reaction = [];
    }

    this.reaction.push(item);

    return this;
  }
}
