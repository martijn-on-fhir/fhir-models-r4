import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
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
import { TriggerDefinition } from '../datatypes/trigger-definition.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for EvidenceVariable. */
export class EvidenceVariableCharacteristic extends BackboneElement {

  /** A short natural language description of the characteristic. */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  /** Define members of the evidence element using a Reference. */
  definitionReference?: Reference;

  /** Define members of the evidence element using a canonical reference. */
  @IsOptional()
  @IsString()
  definitionCanonical?: string;

  /** Define members of the evidence element using a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  definitionCodeableConcept?: CodeableConcept;

  /** Define members of the evidence element using an Expression. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  definitionExpression?: Expression;

  /** Define members of the evidence element using a DataRequirement. */
  @IsOptional()
  @ValidateNested()
  @Type(() => DataRequirement)
  definitionDataRequirement?: DataRequirement;

  /** Define members of the evidence element using a TriggerDefinition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TriggerDefinition)
  definitionTriggerDefinition?: TriggerDefinition;

  /** Use UsageContext to define the members of the population. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  usageContext?: UsageContext[];

  /** When true, members with this characteristic are excluded from the element. */
  @IsOptional()
  @IsBoolean()
  exclude?: boolean;

  /** Indicates what effective period the study covers, as a dateTime. */
  @IsOptional()
  @IsString()
  participantEffectiveDateTime?: string;

  /** Indicates what effective period the study covers, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  participantEffectivePeriod?: Period;

  /** Indicates what effective period the study covers, as a Duration. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  participantEffectiveDuration?: Duration;

  /** Indicates what effective period the study covers, as a Timing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  participantEffectiveTiming?: Timing;

  /** Indicates duration from the participant's study entry. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  timeFromStart?: Duration;

  /** Indicates how elements are aggregated within the study effective period. */
  @IsOptional()
  @IsString()
  groupMeasure?: string;

  /** Creates a new EvidenceVariableCharacteristic. @param props - Initial values. */
  constructor(props?: Partial<EvidenceVariableCharacteristic>) {
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

/** FHIR R4 EvidenceVariable — defines a measurable characteristic of a population or exposure. */
export class EvidenceVariable extends DomainResource {

  /** Resource type constant. */
  readonly resourceType = 'EvidenceVariable';

  /** An absolute URI that identifies this evidence variable. */
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  /** Business identifiers for this evidence variable. */
  identifier?: Identifier[];

  /** Business version of the evidence variable. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the evidence variable. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short human-readable label. */
  @IsOptional()
  @IsString()
  title?: string;

  /** An abbreviated title for use in informal descriptive contexts. */
  @IsOptional()
  @IsString()
  shortTitle?: string;

  /** An explanatory or alternate title. */
  @IsOptional()
  @IsString()
  subtitle?: string;

  /** The status of this evidence variable. */
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

  /** A free text natural language description of the evidence variable. */
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

  /** A legal or geographic region in which the evidence variable is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** A copyright statement relating to the evidence variable. */
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

  /** The period during which the evidence variable content was or is planned to be in active use. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /** Descriptive topics related to the content of the evidence variable. */
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

  /** The type of evidence element, a population, an exposure, or an outcome. */
  @IsOptional()
  @IsString()
  type?: string;

  /** A characteristic that defines the members of the evidence element. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EvidenceVariableCharacteristic)
  characteristic?: EvidenceVariableCharacteristic[];

  /** Creates a new EvidenceVariable. @param props - Initial values. */
  constructor(props?: Partial<EvidenceVariable>) {
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

  /** Adds an item to the characteristic array. @returns This instance for chaining. */
  addCharacteristic(item: EvidenceVariableCharacteristic): this {
    if (!this.characteristic) {
      this.characteristic = [];
    }

    this.characteristic.push(item);

    return this;
  }
}
