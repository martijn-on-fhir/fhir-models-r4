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

/** Backbone element for EffectEvidenceSynthesis. */
export class EffectEvidenceSynthesisSampleSize extends BackboneElement {

  /** Human-readable summary of sample size. */
  @IsOptional()
  @IsString()
  description?: string;

  /** How many studies are included in this evidence synthesis. */
  @IsOptional()
  @IsNumber()
  numberOfStudies?: number;

  /** How many participants were included in the evidence synthesis. */
  @IsOptional()
  @IsNumber()
  numberOfParticipants?: number;

  /** Creates a new EffectEvidenceSynthesisSampleSize. @param props - Initial values. */
  constructor(props?: Partial<EffectEvidenceSynthesisSampleSize>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for EffectEvidenceSynthesis. */
export class EffectEvidenceSynthesisResultsByExposure extends BackboneElement {

  /** Human-readable summary of results by exposure. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Whether the results are for the exposure state or the alternative exposure state. */
  @IsOptional()
  @IsString()
  exposureState?: string;

  /** Used to define variant exposure states such as low-risk state. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  variantState?: CodeableConcept;

  /** Reference to a RiskEvidenceSynthesis resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  riskEvidenceSynthesis?: Reference;

  /** Creates a new EffectEvidenceSynthesisResultsByExposure. @param props - Initial values. */
  constructor(props?: Partial<EffectEvidenceSynthesisResultsByExposure>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for EffectEvidenceSynthesis. */
export class EffectEvidenceSynthesisEffectEstimatePrecisionEstimate extends BackboneElement {

  /** Type of precision estimate. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Level of confidence interval. */
  @IsOptional()
  @IsNumber()
  level?: number;

  /** Lower bound of the confidence interval. */
  @IsOptional()
  @IsNumber()
  from?: number;

  /** Upper bound of the confidence interval. */
  @IsOptional()
  @IsNumber()
  to?: number;

  /** Creates a new EffectEvidenceSynthesisEffectEstimatePrecisionEstimate. @param props - Initial values. */
  constructor(props?: Partial<EffectEvidenceSynthesisEffectEstimatePrecisionEstimate>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for EffectEvidenceSynthesis. */
export class EffectEvidenceSynthesisEffectEstimate extends BackboneElement {

  /** Human-readable summary of effect estimate. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Type of effect estimate. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Used to define variant exposure states such as low-risk state. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  variantState?: CodeableConcept;

  /** Point estimate of the effect estimate. */
  @IsOptional()
  @IsNumber()
  value?: number;

  /** What unit is the outcome described in. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  unitOfMeasure?: CodeableConcept;

  /** A description of the precision of the estimate for the effect. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EffectEvidenceSynthesisEffectEstimatePrecisionEstimate)
  precisionEstimate?: EffectEvidenceSynthesisEffectEstimatePrecisionEstimate[];

  /** Creates a new EffectEvidenceSynthesisEffectEstimate. @param props - Initial values. */
  constructor(props?: Partial<EffectEvidenceSynthesisEffectEstimate>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the precisionEstimate array. @returns This instance for chaining. */
  addPrecisionEstimate(item: EffectEvidenceSynthesisEffectEstimatePrecisionEstimate): this {
    if (!this.precisionEstimate) {
      this.precisionEstimate = [];
    }

    this.precisionEstimate.push(item);

    return this;
  }
}

/** Backbone element for EffectEvidenceSynthesis. */
export class EffectEvidenceSynthesisCertaintyCertaintySubcomponent extends BackboneElement {

  /** Type of subcomponent of certainty rating. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** A rating of a subcomponent of rating certainty. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  rating?: CodeableConcept[];

  /** Used for footnotes or explanatory notes. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Creates a new EffectEvidenceSynthesisCertaintyCertaintySubcomponent. @param props - Initial values. */
  constructor(props?: Partial<EffectEvidenceSynthesisCertaintyCertaintySubcomponent>) {
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

/** Backbone element for EffectEvidenceSynthesis. */
export class EffectEvidenceSynthesisCertainty extends BackboneElement {

  /** A rating of the certainty of the effect estimate. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  rating?: CodeableConcept[];

  /** Used for footnotes or explanatory notes. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** A description of a component of the overall certainty. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EffectEvidenceSynthesisCertaintyCertaintySubcomponent)
  certaintySubcomponent?: EffectEvidenceSynthesisCertaintyCertaintySubcomponent[];

  /** Creates a new EffectEvidenceSynthesisCertainty. @param props - Initial values. */
  constructor(props?: Partial<EffectEvidenceSynthesisCertainty>) {
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
  addCertaintySubcomponent(item: EffectEvidenceSynthesisCertaintyCertaintySubcomponent): this {
    if (!this.certaintySubcomponent) {
      this.certaintySubcomponent = [];
    }

    this.certaintySubcomponent.push(item);

    return this;
  }
}

/** FHIR R4 EffectEvidenceSynthesis — a quantified estimate of effect based on a body of evidence. */
export class EffectEvidenceSynthesis extends DomainResource {

  /** Resource type constant. */
  readonly resourceType = 'EffectEvidenceSynthesis';

  /** An absolute URI that identifies this effect evidence synthesis. */
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  /** Business identifiers for this resource. */
  identifier?: Identifier[];

  /** Business version of the effect evidence synthesis. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name for the effect evidence synthesis. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short human-readable label. */
  @IsOptional()
  @IsString()
  title?: string;

  /** The status of the effect evidence synthesis. */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** The date this resource was last changed. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization that published this resource. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details for the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the effect evidence synthesis. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Used for footnotes or explanatory notes. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** The content was developed with a focus and intent of supporting the contexts. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the resource is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** A copyright statement relating to the effect evidence synthesis. */
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

  /** The period during which the resource content was or is planned to be in active use. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /** Descriptive topics related to the content of the resource. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  topic?: CodeableConcept[];

  /** An individiual or organization primarily involved in the creation of the content. */
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

  /** An individual or organization primarily responsible for review of some aspect of the content. */
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

  /** Type of synthesis, e.g., meta-analysis. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  synthesisType?: CodeableConcept;

  /** Type of study, e.g., randomized trial. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  studyType?: CodeableConcept;

  /** A reference to a EvidenceVariable resource that defines the population for the research. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  population?: Reference;

  /** A reference to a EvidenceVariable resource that defines the exposure for the research. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  exposure?: Reference;

  /** A reference to a EvidenceVariable resource that defines the comparison exposure. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  exposureAlternative?: Reference;

  /** A reference to a EvidenceVariable resource that defines the outcome for the research. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  outcome?: Reference;

  /** A description of the size of the sample involved in the synthesis. */
  @IsOptional()
  @ValidateNested()
  @Type(() => EffectEvidenceSynthesisSampleSize)
  sampleSize?: EffectEvidenceSynthesisSampleSize;

  /** A description of the results for each exposure considered in the effect estimate. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EffectEvidenceSynthesisResultsByExposure)
  resultsByExposure?: EffectEvidenceSynthesisResultsByExposure[];

  /** The estimated effect of the exposure variant. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EffectEvidenceSynthesisEffectEstimate)
  effectEstimate?: EffectEvidenceSynthesisEffectEstimate[];

  /** A description of the certainty of the effect estimate. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EffectEvidenceSynthesisCertainty)
  certainty?: EffectEvidenceSynthesisCertainty[];

  /** Creates a new EffectEvidenceSynthesis. @param props - Initial values. */
  constructor(props?: Partial<EffectEvidenceSynthesis>) {
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

  /** Adds an item to the resultsByExposure array. @returns This instance for chaining. */
  addResultsByExposure(item: EffectEvidenceSynthesisResultsByExposure): this {
    if (!this.resultsByExposure) {
      this.resultsByExposure = [];
    }

    this.resultsByExposure.push(item);

    return this;
  }

  /** Adds an item to the effectEstimate array. @returns This instance for chaining. */
  addEffectEstimate(item: EffectEvidenceSynthesisEffectEstimate): this {
    if (!this.effectEstimate) {
      this.effectEstimate = [];
    }

    this.effectEstimate.push(item);

    return this;
  }

  /** Adds an item to the certainty array. @returns This instance for chaining. */
  addCertainty(item: EffectEvidenceSynthesisCertainty): this {
    if (!this.certainty) {
      this.certainty = [];
    }

    this.certainty.push(item);

    return this;
  }
}
