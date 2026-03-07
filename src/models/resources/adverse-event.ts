import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';
import { AdverseEventActuality } from '../enums/adverse-event-actuality.js';

/** Backbone element for AdverseEvent — causality assessment for the suspect entity. */
export class AdverseEventSuspectEntityCausality extends BackboneElement {

  /** Assessment of the causal relationship between the suspect entity and the event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  assessment?: CodeableConcept;

  /** Assessment of the relatedness of the product to the event. */
  @IsOptional()
  @IsString()
  productRelatedness?: string;

  /** Who authored the causality assessment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /** Method used for assessing causality. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /** Creates a new AdverseEventSuspectEntityCausality. @param props - Initial values. */
  constructor(props?: Partial<AdverseEventSuspectEntityCausality>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for AdverseEvent — the suspected agent causing the event. */
export class AdverseEventSuspectEntity extends BackboneElement {

  /** Identifies the actual instance of the suspect substance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  instance?: Reference;

  /** Information on the possible cause of the event. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AdverseEventSuspectEntityCausality)
  causality?: AdverseEventSuspectEntityCausality[];

  /** Creates a new AdverseEventSuspectEntity. @param props - Initial values. */
  constructor(props?: Partial<AdverseEventSuspectEntity>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the causality array. @returns This instance for chaining. */
  addCausality(item: AdverseEventSuspectEntityCausality): this {
    if (!this.causality) {
      this.causality = [];
    }

    this.causality.push(item);

    return this;
  }
}

/** FHIR R4 AdverseEvent — an undesirable medical occurrence associated with treatment. */
export class AdverseEvent extends DomainResource {

  /** The FHIR resource type string. */
  readonly resourceType = 'AdverseEvent';

  /** Business identifier for the event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** Whether the event actually happened or was a near miss. */
  @IsOptional()
  @IsEnum(AdverseEventActuality)
  actuality?: AdverseEventActuality;

  /** The overall type of event, intended for search and filtering. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** The specific event that occurred or that was prevented. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  event?: CodeableConcept;

  /** The subject or group impacted by the event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The encounter during which the adverse event was recorded. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** When the event occurred. */
  @IsOptional()
  @IsString()
  date?: string;

  /** When the adverse event was detected. */
  @IsOptional()
  @IsString()
  detected?: string;

  /** Date when the resource was first recorded. */
  @IsOptional()
  @IsString()
  recordedDate?: string;

  /** Conditions resulting from this adverse event. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  resultingCondition?: Reference[];

  /** The location where the adverse event occurred. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /** Assessment of whether the event was serious. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  seriousness?: CodeableConcept;

  /** The severity or grade of the event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  severity?: CodeableConcept;

  /** The overall result or resolution of the adverse event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  outcome?: CodeableConcept;

  /** Who recorded the adverse event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  recorder?: Reference;

  /** Who was involved in the adverse event or the potential adverse event. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  contributor?: Reference[];

  /** Suspected causative agent(s). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AdverseEventSuspectEntity)
  suspectEntity?: AdverseEventSuspectEntity[];

  /** Relevant past medical history for the subject. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  subjectMedicalHistory?: Reference[];

  /** Supporting reference documents. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  referenceDocument?: Reference[];

  /** Study that identified the adverse event. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  study?: Reference[];

  /** Creates a new AdverseEvent. @param props - Initial values. */
  constructor(props?: Partial<AdverseEvent>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the category array. @returns This instance for chaining. */
  addCategory(item: CodeableConcept): this {
    if (!this.category) {
      this.category = [];
    }

    this.category.push(item);

    return this;
  }

  /** Adds an item to the resultingCondition array. @returns This instance for chaining. */
  addResultingCondition(item: Reference): this {
    if (!this.resultingCondition) {
      this.resultingCondition = [];
    }

    this.resultingCondition.push(item);

    return this;
  }

  /** Adds an item to the contributor array. @returns This instance for chaining. */
  addContributor(item: Reference): this {
    if (!this.contributor) {
      this.contributor = [];
    }

    this.contributor.push(item);

    return this;
  }

  /** Adds an item to the suspectEntity array. @returns This instance for chaining. */
  addSuspectEntity(item: AdverseEventSuspectEntity): this {
    if (!this.suspectEntity) {
      this.suspectEntity = [];
    }

    this.suspectEntity.push(item);

    return this;
  }

  /** Adds an item to the subjectMedicalHistory array. @returns This instance for chaining. */
  addSubjectMedicalHistory(item: Reference): this {
    if (!this.subjectMedicalHistory) {
      this.subjectMedicalHistory = [];
    }

    this.subjectMedicalHistory.push(item);

    return this;
  }

  /** Adds an item to the referenceDocument array. @returns This instance for chaining. */
  addReferenceDocument(item: Reference): this {
    if (!this.referenceDocument) {
      this.referenceDocument = [];
    }

    this.referenceDocument.push(item);

    return this;
  }

  /** Adds an item to the study array. @returns This instance for chaining. */
  addStudy(item: Reference): this {
    if (!this.study) {
      this.study = [];
    }

    this.study.push(item);

    return this;
  }
}
