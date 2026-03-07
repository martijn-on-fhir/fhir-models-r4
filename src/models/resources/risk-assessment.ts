import { Type } from 'class-transformer';
import { IsOptional, IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Range } from '../datatypes/range.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for RiskAssessment. */
export class RiskAssessmentPrediction extends BackboneElement {

  /** One of the potential outcomes for the patient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  outcome?: CodeableConcept;

  /** The likelihood of the outcome expressed as a decimal probability. */
  @IsOptional()
  @IsNumber()
  probabilityDecimal?: number;

  /** The likelihood of the outcome expressed as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  probabilityRange?: Range;

  /** Indicates how likely the outcome is on a qualitative scale. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  qualitativeRisk?: CodeableConcept;

  /** Indicates the risk for this particular subject relative to the general population. */
  @IsOptional()
  @IsNumber()
  relativeRisk?: number;

  /** The timeframe of the prediction expressed as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  whenPeriod?: Period;

  /** The timeframe of the prediction expressed as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  whenRange?: Range;

  /** Additional information explaining the basis for the prediction. */
  @IsOptional()
  @IsString()
  rationale?: string;

  /** Creates a new RiskAssessmentPrediction. @param props - Initial values. */
  constructor(props?: Partial<RiskAssessmentPrediction>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 RiskAssessment — an assessment of the likely outcomes for a patient or other subject. */
export class RiskAssessment extends DomainResource {

  readonly resourceType = 'RiskAssessment';

  /** Business identifiers assigned to this risk assessment. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** A reference to the request that is fulfilled by this risk assessment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  basedOn?: Reference;

  /** A reference to a resource that this risk assessment is part of. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  parent?: Reference;

  /** The status of the risk assessment (e.g., registered, preliminary, final, amended). */
  @IsOptional()
  @IsString()
  status?: string;

  /** The algorithm, process, or mechanism used to evaluate the risk. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /** The type of the risk assessment performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The patient or group the risk assessment applies to. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The encounter where the assessment was performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** The date or date-time the assessment was performed, as a dateTime. */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  /** The date or date-time the assessment was performed, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  occurrencePeriod?: Period;

  /** The condition for which the risk is being assessed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  condition?: Reference;

  /** The provider or software application that performed the assessment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  performer?: Reference;

  /** The reason the risk assessment was performed, as coded values. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** The reason the risk assessment was performed, as references. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** Indicates the source data considered as part of the assessment. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basis?: Reference[];

  /** Describes the expected outcome for the subject. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RiskAssessmentPrediction)
  prediction?: RiskAssessmentPrediction[];

  /** A description of the steps taken to reduce the identified risk. */
  @IsOptional()
  @IsString()
  mitigation?: string;

  /** Additional comments about the risk assessment. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Creates a new RiskAssessment. @param props - Initial values. */
  constructor(props?: Partial<RiskAssessment>) {
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

  /** Adds an item to the reasonCode array. @returns This instance for chaining. */
  addReasonCode(item: CodeableConcept): this {
    if (!this.reasonCode) {
      this.reasonCode = [];
    }

    this.reasonCode.push(item);

    return this;
  }

  /** Adds an item to the reasonReference array. @returns This instance for chaining. */
  addReasonReference(item: Reference): this {
    if (!this.reasonReference) {
      this.reasonReference = [];
    }

    this.reasonReference.push(item);

    return this;
  }

  /** Adds an item to the basis array. @returns This instance for chaining. */
  addBasis(item: Reference): this {
    if (!this.basis) {
      this.basis = [];
    }

    this.basis.push(item);

    return this;
  }

  /** Adds an item to the prediction array. @returns This instance for chaining. */
  addPrediction(item: RiskAssessmentPrediction): this {
    if (!this.prediction) {
      this.prediction = [];
    }

    this.prediction.push(item);

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
