import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { DataRequirement } from '../datatypes/data-requirement.js';
import { Duration } from '../datatypes/duration.js';
import { Expression } from '../datatypes/expression.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { RelatedArtifact } from '../datatypes/related-artifact.js';
import { Timing } from '../datatypes/timing.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for ResearchElementDefinition. */
export class ResearchElementDefinitionCharacteristic extends BackboneElement {

  /** The characteristic definition as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  definitionCodeableConcept?: CodeableConcept;

  /** The characteristic definition as a canonical reference. */
  @IsOptional()
  @IsString()
  definitionCanonical?: string;

  /** The characteristic definition as an Expression. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  definitionExpression?: Expression;

  /** The characteristic definition as a DataRequirement. */
  @IsOptional()
  @ValidateNested()
  @Type(() => DataRequirement)
  definitionDataRequirement?: DataRequirement;

  /** Use context applied to the characteristic. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  usageContext?: UsageContext[];

  /** Whether the characteristic is an exclusion criterion. */
  @IsOptional()
  @IsBoolean()
  exclude?: boolean;

  /** The unit of measure for the characteristic. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  unitOfMeasure?: CodeableConcept;

  /** A narrative description of the study effective time. */
  @IsOptional()
  @IsString()
  studyEffectiveDescription?: string;

  /** The study effective time expressed as a dateTime. */
  @IsOptional()
  @IsString()
  studyEffectiveDateTime?: string;

  /** The study effective time expressed as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  studyEffectivePeriod?: Period;

  /** The study effective time expressed as a Duration. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  studyEffectiveDuration?: Duration;

  /** The study effective time expressed as a Timing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  studyEffectiveTiming?: Timing;

  /** Indicates duration from the study start. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  studyEffectiveTimeFromStart?: Duration;

  /** Indicates how elements are aggregated for the study effective period. */
  @IsOptional()
  @IsString()
  studyEffectiveGroupMeasure?: string;

  /** A narrative description of the participant effective time. */
  @IsOptional()
  @IsString()
  participantEffectiveDescription?: string;

  /** The participant effective time expressed as a dateTime. */
  @IsOptional()
  @IsString()
  participantEffectiveDateTime?: string;

  /** The participant effective time expressed as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  participantEffectivePeriod?: Period;

  /** The participant effective time expressed as a Duration. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  participantEffectiveDuration?: Duration;

  /** The participant effective time expressed as a Timing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  participantEffectiveTiming?: Timing;

  /** Indicates duration from the participant start. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  participantEffectiveTimeFromStart?: Duration;

  /** Indicates how elements are aggregated for the participant effective period. */
  @IsOptional()
  @IsString()
  participantEffectiveGroupMeasure?: string;

  /** Creates a new ResearchElementDefinitionCharacteristic. @param props - Initial values. */
  constructor(props?: Partial<ResearchElementDefinitionCharacteristic>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the usageContext array. @returns This instance for chaining. */
  addUsageContext(item: UsageContext): this {
    if (!this.usageContext) {
      this.usageContext = [];
    }

    this.usageContext.push(item);

    return this;
  }
}

/** FHIR R4 ResearchElementDefinition — describes a measurable element used in research. */
export class ResearchElementDefinition extends DomainResource {

  readonly resourceType = 'ResearchElementDefinition';

  /** An absolute URI that identifies this research element definition uniquely. */
  @IsOptional()
  @IsString()
  url?: string;

  /** A formal identifier for this research element definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The business version of the research element definition. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the research element definition. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short human-readable label for the research element definition. */
  @IsOptional()
  @IsString()
  title?: string;

  /** An abbreviated title for use in informal contexts. */
  @IsOptional()
  @IsString()
  shortTitle?: string;

  /** An explanatory or alternate title for the research element definition. */
  @IsOptional()
  @IsString()
  subtitle?: string;

  /** The publication status of the research element definition. */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** Whether this research element definition is for testing purposes rather than real usage. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** The intended subjects for the research element definition as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  subjectCodeableConcept?: CodeableConcept;

  /** The intended subjects for the research element definition as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subjectReference?: Reference;

  /** The date the research element definition was last changed. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization or individual that published the research element definition. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details for the publisher of the research element definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the research element definition. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Additional comments about the research element definition. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  comment?: string[];

  /** The context in which the research element definition content is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the research element definition is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Explanation of why this research element definition is needed. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** A detailed description of how the research element definition is used. */
  @IsOptional()
  @IsString()
  usage?: string;

  /** A copyright statement for the research element definition. */
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

  /** The period during which the research element definition content was or is planned to be in active use. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /** Descriptive topics related to the content of the research element definition. */
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

  /** A reference to a Library resource containing any formal logic used by the research element definition. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  library?: string[];

  /** The type of research element, such as population, exposure, or outcome. */
  @IsOptional()
  @IsString()
  type?: string;

  /** The type of the outcome variable (e.g., dichotomous, continuous, descriptive). */
  @IsOptional()
  @IsString()
  variableType?: string;

  /** A characteristic that defines the members of the research element. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ResearchElementDefinitionCharacteristic)
  characteristic?: ResearchElementDefinitionCharacteristic[];

  /** Creates a new ResearchElementDefinition. @param props - Initial values. */
  constructor(props?: Partial<ResearchElementDefinition>) {
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

  /** Adds an item to the comment array. @returns This instance for chaining. */
  addComment(item: string): this {
    if (!this.comment) {
      this.comment = [];
    }

    this.comment.push(item);

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

  /** Adds an item to the library array. @returns This instance for chaining. */
  addLibrary(item: string): this {
    if (!this.library) {
      this.library = [];
    }

    this.library.push(item);

    return this;
  }

  /** Adds an item to the characteristic array. @returns This instance for chaining. */
  addCharacteristic(item: ResearchElementDefinitionCharacteristic): this {
    if (!this.characteristic) {
      this.characteristic = [];
    }

    this.characteristic.push(item);

    return this;
  }
}
