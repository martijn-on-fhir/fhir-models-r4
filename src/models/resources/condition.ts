import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Age } from '../datatypes/age.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Range } from '../datatypes/range.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for Condition — stage or grade of the condition. */
export class ConditionStage extends BackboneElement {

  /** Simple summary of the stage (e.g., Stage I). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  summary?: CodeableConcept;

  /** Formal record of the assessment. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  assessment?: Reference[];

  /** Kind of staging (e.g., clinical, pathological). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Creates a new ConditionStage. @param props - Initial values. */
  constructor(props?: Partial<ConditionStage>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the assessment array. @returns This instance for chaining. */
  addAssessment(item: Reference): this {
    if (!this.assessment) {
      this.assessment = [];
    }

    this.assessment.push(item);

    return this;
  }
}

/** Backbone element for Condition — supporting evidence. */
export class ConditionEvidence extends BackboneElement {

  /** Manifestation or symptom codes. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /** Supporting information found elsewhere. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  detail?: Reference[];

  /** Creates a new ConditionEvidence. @param props - Initial values. */
  constructor(props?: Partial<ConditionEvidence>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the code array. @returns This instance for chaining. */
  addCode(item: CodeableConcept): this {
    if (!this.code) {
      this.code = [];
    }

    this.code.push(item);

    return this;
  }

  /** Adds an item to the detail array. @returns This instance for chaining. */
  addDetail(item: Reference): this {
    if (!this.detail) {
      this.detail = [];
    }

    this.detail.push(item);

    return this;
  }
}

/** FHIR R4 Condition — a clinical condition, problem, diagnosis, or other event. */
export class Condition extends DomainResource {

  /** The FHIR resource type string. */
  readonly resourceType = 'Condition';

  /** Business identifiers assigned to this condition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The clinical status of the condition (active | recurrence | relapse | inactive | remission | resolved). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  clinicalStatus?: CodeableConcept;

  /** The verification status of the condition (unconfirmed | provisional | differential | confirmed | refuted | entered-in-error). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  verificationStatus?: CodeableConcept;

  /** Category of the condition (e.g., problem-list-item, encounter-diagnosis). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** Subjective severity of the condition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  severity?: CodeableConcept;

  /** Identification of the condition, problem, or diagnosis. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** Anatomical location of the condition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept[];

  /** Who has the condition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** Encounter created as part of. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** Estimated or actual date of onset, as a dateTime. */
  @IsOptional()
  @IsString()
  onsetDateTime?: string;

  /** Estimated or actual date of onset, as an Age. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Age)
  onsetAge?: Age;

  /** Estimated or actual date of onset, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  onsetPeriod?: Period;

  /** Estimated or actual date of onset, as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  onsetRange?: Range;

  /** Estimated or actual date of onset, as a string. */
  @IsOptional()
  @IsString()
  onsetString?: string;

  /** When in resolution or remission, as a dateTime. */
  @IsOptional()
  @IsString()
  abatementDateTime?: string;

  /** When in resolution or remission, as an Age. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Age)
  abatementAge?: Age;

  /** When in resolution or remission, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  abatementPeriod?: Period;

  /** When in resolution or remission, as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  abatementRange?: Range;

  /** When in resolution or remission, as a string. */
  @IsOptional()
  @IsString()
  abatementString?: string;

  /** Date record was first recorded. */
  @IsOptional()
  @IsString()
  recordedDate?: string;

  /** Who recorded the condition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  recorder?: Reference;

  /** Person who asserts this condition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  asserter?: Reference;

  /** Stage or grade of the condition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConditionStage)
  stage?: ConditionStage[];

  /** Supporting evidence. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConditionEvidence)
  evidence?: ConditionEvidence[];

  /** Additional information about the condition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Creates a new Condition. @param props - Initial values. */
  constructor(props?: Partial<Condition>) {
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
  addCategory(item: CodeableConcept): this {
    if (!this.category) {
      this.category = [];
    }

    this.category.push(item);

    return this;
  }

  /** Adds an item to the bodySite array. @returns This instance for chaining. */
  addBodySite(item: CodeableConcept): this {
    if (!this.bodySite) {
      this.bodySite = [];
    }

    this.bodySite.push(item);

    return this;
  }

  /** Adds an item to the stage array. @returns This instance for chaining. */
  addStage(item: ConditionStage): this {
    if (!this.stage) {
      this.stage = [];
    }

    this.stage.push(item);

    return this;
  }

  /** Adds an item to the evidence array. @returns This instance for chaining. */
  addEvidence(item: ConditionEvidence): this {
    if (!this.evidence) {
      this.evidence = [];
    }

    this.evidence.push(item);

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
