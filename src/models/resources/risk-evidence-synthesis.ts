import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { RelatedArtifact } from '../datatypes/related-artifact.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for RiskEvidenceSynthesis. */
export class RiskEvidenceSynthesisSampleSize extends BackboneElement {

  /** Human-readable summary of the sample size. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Number of studies included in the evidence synthesis. */
  @IsOptional()
  @IsNumber()
  numberOfStudies?: number;

  /** Number of participants included in the evidence synthesis. */
  @IsOptional()
  @IsNumber()
  numberOfParticipants?: number;

  /** Creates a new RiskEvidenceSynthesisSampleSize. @param props - Initial values. */
  constructor(props?: Partial<RiskEvidenceSynthesisSampleSize>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for RiskEvidenceSynthesis. */
export class RiskEvidenceSynthesisRiskEstimatePrecisionEstimate extends BackboneElement {

  /** The type of precision estimate (e.g., confidence interval). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The confidence level of the precision estimate (e.g., 0.95). */
  @IsOptional()
  @IsNumber()
  level?: number;

  /** Lower bound of the precision estimate. */
  @IsOptional()
  @IsNumber()
  from?: number;

  /** Upper bound of the precision estimate. */
  @IsOptional()
  @IsNumber()
  to?: number;

  /** Creates a new RiskEvidenceSynthesisRiskEstimatePrecisionEstimate. @param props - Initial values. */
  constructor(props?: Partial<RiskEvidenceSynthesisRiskEstimatePrecisionEstimate>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for RiskEvidenceSynthesis. */
export class RiskEvidenceSynthesisRiskEstimate extends BackboneElement {

  /** Human-readable summary of the risk estimate. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The type of risk estimate (e.g., proportion, rate). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The point estimate of the risk. */
  @IsOptional()
  @IsNumber()
  value?: number;

  /** The unit of measure for the risk estimate value. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  unitOfMeasure?: CodeableConcept;

  /** The sample size for the group that was measured for the risk. */
  @IsOptional()
  @IsNumber()
  denominatorCount?: number;

  /** The number of events in the population. */
  @IsOptional()
  @IsNumber()
  numeratorCount?: number;

  /** A description of the precision of the estimate. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RiskEvidenceSynthesisRiskEstimatePrecisionEstimate)
  precisionEstimate?: RiskEvidenceSynthesisRiskEstimatePrecisionEstimate[];

  /** Creates a new RiskEvidenceSynthesisRiskEstimate. @param props - Initial values. */
  constructor(props?: Partial<RiskEvidenceSynthesisRiskEstimate>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the precisionEstimate array. @returns This instance for chaining. */
  addPrecisionEstimate(item: RiskEvidenceSynthesisRiskEstimatePrecisionEstimate): this {
    if (!this.precisionEstimate) {
      this.precisionEstimate = [];
    }

    this.precisionEstimate.push(item);

    return this;
  }
}

/** Backbone element for RiskEvidenceSynthesis. */
export class RiskEvidenceSynthesisCertaintyCertaintySubcomponent extends BackboneElement {

  /** Type of subcomponent of certainty rating. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** A rating of a subcomponent of quality of evidence. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  rating?: CodeableConcept[];

  /** A human-readable string to clarify or explain concepts about the certainty subcomponent. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Creates a new RiskEvidenceSynthesisCertaintyCertaintySubcomponent. @param props - Initial values. */
  constructor(props?: Partial<RiskEvidenceSynthesisCertaintyCertaintySubcomponent>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the rating array. @returns This instance for chaining. */
  addRating(item: CodeableConcept): this {
    if (!this.rating) {
      this.rating = [];
    }

    this.rating.push(item);

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

/** Backbone element for RiskEvidenceSynthesis. */
export class RiskEvidenceSynthesisCertainty extends BackboneElement {

  /** A rating of the certainty of the effect estimate. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  rating?: CodeableConcept[];

  /** A human-readable string to clarify or explain concepts about the certainty. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** A description of a component of the overall certainty. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RiskEvidenceSynthesisCertaintyCertaintySubcomponent)
  certaintySubcomponent?: RiskEvidenceSynthesisCertaintyCertaintySubcomponent[];

  /** Creates a new RiskEvidenceSynthesisCertainty. @param props - Initial values. */
  constructor(props?: Partial<RiskEvidenceSynthesisCertainty>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the rating array. @returns This instance for chaining. */
  addRating(item: CodeableConcept): this {
    if (!this.rating) {
      this.rating = [];
    }

    this.rating.push(item);

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

  /** Adds an item to the certaintySubcomponent array. @returns This instance for chaining. */
  addCertaintySubcomponent(item: RiskEvidenceSynthesisCertaintyCertaintySubcomponent): this {
    if (!this.certaintySubcomponent) {
      this.certaintySubcomponent = [];
    }

    this.certaintySubcomponent.push(item);

    return this;
  }
}

/** FHIR R4 RiskEvidenceSynthesis — a quantified estimate of risk based on a body of evidence. */
export class RiskEvidenceSynthesis extends DomainResource {

  readonly resourceType = 'RiskEvidenceSynthesis';

  /** An absolute URI that identifies this risk evidence synthesis uniquely. */
  @IsOptional()
  @IsString()
  url?: string;

  /** A formal identifier for this risk evidence synthesis. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The business version of the risk evidence synthesis. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the risk evidence synthesis. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short human-readable label for the risk evidence synthesis. */
  @IsOptional()
  @IsString()
  title?: string;

  /** The publication status of the risk evidence synthesis. */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** The date the risk evidence synthesis was last changed. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization or individual that published the risk evidence synthesis. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details for the publisher of the risk evidence synthesis. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the risk evidence synthesis. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Additional comments about the risk evidence synthesis. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** The context in which the risk evidence synthesis content is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the risk evidence synthesis is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** A copyright statement for the risk evidence synthesis. */
  @IsOptional()
  @IsString()
  copyright?: string;

  /** The date on which the resource content was approved by the publisher. */
  @IsOptional()
  @IsString()
  approvalDate?: string;

  /** The date on which the resource content was last reviewed. */
  @IsOptional()
  @IsString()
  lastReviewDate?: string;

  /** The period during which the risk evidence synthesis content was or is planned to be in active use. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /** Descriptive topics related to the content of the risk evidence synthesis. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  topic?: CodeableConcept[];

  /** An individual or organization primarily involved in the creation of the content. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  author?: ContactDetail[];

  /** An individual or organization primarily responsible for internal coherence of the content. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  editor?: ContactDetail[];

  /** An individual or organization primarily responsible for review of the content. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  reviewer?: ContactDetail[];

  /** An individual or organization responsible for officially endorsing the content. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  endorser?: ContactDetail[];

  /** Related artifacts such as additional documentation or citations. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RelatedArtifact)
  relatedArtifact?: RelatedArtifact[];

  /** Type of synthesis used (e.g., std-MA, IPD-MA). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  synthesisType?: CodeableConcept;

  /** Type of study (e.g., randomized trial, cohort study). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  studyType?: CodeableConcept;

  /** A reference to an EvidenceVariable resource that defines the population. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  population?: Reference;

  /** A reference to an EvidenceVariable resource that defines the exposure. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  exposure?: Reference;

  /** A reference to an EvidenceVariable resource that defines the outcome. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  outcome?: Reference;

  /** A description of the size of the sample involved in the synthesis. */
  @IsOptional()
  @ValidateNested()
  @Type(() => RiskEvidenceSynthesisSampleSize)
  sampleSize?: RiskEvidenceSynthesisSampleSize;

  /** The estimated risk of the outcome. */
  @IsOptional()
  @ValidateNested()
  @Type(() => RiskEvidenceSynthesisRiskEstimate)
  riskEstimate?: RiskEvidenceSynthesisRiskEstimate;

  /** A description of the certainty of the risk estimate. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RiskEvidenceSynthesisCertainty)
  certainty?: RiskEvidenceSynthesisCertainty[];

  /** Creates a new RiskEvidenceSynthesis. @param props - Initial values. */
  constructor(props?: Partial<RiskEvidenceSynthesis>) {
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

  /** Adds an item to the contact array. @returns This instance for chaining. */
  addContact(item: ContactDetail): this {
    if (!this.contact) {
      this.contact = [];
    }

    this.contact.push(item);

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

  /** Adds an item to the useContext array. @returns This instance for chaining. */
  addUseContext(item: UsageContext): this {
    if (!this.useContext) {
      this.useContext = [];
    }

    this.useContext.push(item);

    return this;
  }

  /** Adds an item to the jurisdiction array. @returns This instance for chaining. */
  addJurisdiction(item: CodeableConcept): this {
    if (!this.jurisdiction) {
      this.jurisdiction = [];
    }

    this.jurisdiction.push(item);

    return this;
  }

  /** Adds an item to the topic array. @returns This instance for chaining. */
  addTopic(item: CodeableConcept): this {
    if (!this.topic) {
      this.topic = [];
    }

    this.topic.push(item);

    return this;
  }

  /** Adds an item to the author array. @returns This instance for chaining. */
  addAuthor(item: ContactDetail): this {
    if (!this.author) {
      this.author = [];
    }

    this.author.push(item);

    return this;
  }

  /** Adds an item to the editor array. @returns This instance for chaining. */
  addEditor(item: ContactDetail): this {
    if (!this.editor) {
      this.editor = [];
    }

    this.editor.push(item);

    return this;
  }

  /** Adds an item to the reviewer array. @returns This instance for chaining. */
  addReviewer(item: ContactDetail): this {
    if (!this.reviewer) {
      this.reviewer = [];
    }

    this.reviewer.push(item);

    return this;
  }

  /** Adds an item to the endorser array. @returns This instance for chaining. */
  addEndorser(item: ContactDetail): this {
    if (!this.endorser) {
      this.endorser = [];
    }

    this.endorser.push(item);

    return this;
  }

  /** Adds an item to the relatedArtifact array. @returns This instance for chaining. */
  addRelatedArtifact(item: RelatedArtifact): this {
    if (!this.relatedArtifact) {
      this.relatedArtifact = [];
    }

    this.relatedArtifact.push(item);

    return this;
  }

  /** Adds an item to the certainty array. @returns This instance for chaining. */
  addCertainty(item: RiskEvidenceSynthesisCertainty): this {
    if (!this.certainty) {
      this.certainty = [];
    }

    this.certainty.push(item);

    return this;
  }
}
