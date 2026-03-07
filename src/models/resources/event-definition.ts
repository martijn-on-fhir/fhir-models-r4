import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { RelatedArtifact } from '../datatypes/related-artifact.js';
import { TriggerDefinition } from '../datatypes/trigger-definition.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** FHIR R4 EventDefinition — defines when a particular event can occur. */
export class EventDefinition extends DomainResource {

  /** Resource type constant. */
  readonly resourceType = 'EventDefinition';

  /** An absolute URI that identifies this event definition. */
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  /** Business identifiers for this event definition. */
  identifier?: Identifier[];

  /** Business version of the event definition. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the event definition. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short human-readable label. */
  @IsOptional()
  @IsString()
  title?: string;

  /** An explanatory or alternate title for the event definition. */
  @IsOptional()
  @IsString()
  subtitle?: string;

  /** The status of this event definition. */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** Whether the event definition is for testing purposes only. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** The intended subjects for the event definition, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  subjectCodeableConcept?: CodeableConcept;

  /** The intended subjects for the event definition, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subjectReference?: Reference;

  /** The date this resource was last changed. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization that published this event definition. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details for the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the event definition. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The content was developed with a focus and intent of supporting the contexts. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the event definition is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Explanation of why this event definition is needed. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** A detailed description of how the event definition is used. */
  @IsOptional()
  @IsString()
  usage?: string;

  /** A copyright statement relating to the event definition. */
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

  /** The period during which the event definition content was or is planned to be in active use. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /** Descriptive topics related to the content of the event definition. */
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

  /** The trigger element defines when the event occurs. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TriggerDefinition)
  trigger?: TriggerDefinition[];

  /** Creates a new EventDefinition. @param props - Initial values. */
  constructor(props?: Partial<EventDefinition>) {
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

  /** Adds an item to the trigger array. @returns This instance for chaining. */
  addTrigger(item: TriggerDefinition): this {
    if (!this.trigger) {
      this.trigger = [];
    }

    this.trigger.push(item);

    return this;
  }
}
