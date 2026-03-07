import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { DataRequirement } from '../datatypes/data-requirement.js';
import { Identifier } from '../datatypes/identifier.js';
import { ParameterDefinition } from '../datatypes/parameter-definition.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { RelatedArtifact } from '../datatypes/related-artifact.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** FHIR R4 Library — a shareable collection of knowledge artifacts such as logic definitions and asset collections. */
export class Library extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'Library';

  /** An absolute URI that is used to identify this library when it is referenced in a specification. */
  @IsOptional()
  @IsString()
  url?: string;

  /** A formal identifier that is used to identify this library when it is represented in other formats. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The identifier that is used to identify this version of the library. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the library. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short, descriptive, user-friendly title for the library. */
  @IsOptional()
  @IsString()
  title?: string;

  /** An explanatory or alternate title for the library. */
  @IsOptional()
  @IsString()
  subtitle?: string;

  /** The status of this library (draft, active, retired, unknown). */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** A Boolean value to indicate that this library is authored for testing purposes. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** Identifies the type of library such as a logic library, model definition, asset collection, or module definition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** A code or group definition that describes the intended subject of the contents of the library as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  subjectCodeableConcept?: CodeableConcept;

  /** A code or group definition that describes the intended subject of the contents of the library as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subjectReference?: Reference;

  /** The date (and optionally time) when the library was published. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization or individual that published the library. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details to assist a user in finding and communicating with the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the library from a consumer's perspective. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The content was developed with a focus and intent of supporting the contexts that are listed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the library is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Explanation of why this library is needed and why it has been designed as it has. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** A detailed description of how the library is used from a clinical perspective. */
  @IsOptional()
  @IsString()
  usage?: string;

  /** A copyright statement relating to the library and/or its contents. */
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

  /** The period during which the library content was or is planned to be in active use. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /** Descriptive topics related to the content of the library. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  topic?: CodeableConcept[];

  /** An individiual or organization primarily involved in the creation and maintenance of the content. */
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

  /** An individual or organization responsible for officially endorsing the content for use in some setting. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  endorser?: ContactDetail[];

  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RelatedArtifact)
  relatedArtifact?: RelatedArtifact[];

  /** The parameter element defines parameters used by the library. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ParameterDefinition)
  parameter?: ParameterDefinition[];

  /** Describes a set of data that must be provided in order to be able to successfully perform the computations. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DataRequirement)
  dataRequirement?: DataRequirement[];

  /** The content of the library as an Attachment. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Attachment)
  content?: Attachment[];

  /** Creates a new Library. @param props - Initial values. */
  constructor(props?: Partial<Library>) {
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

  /** Adds an item to the parameter array. @returns This instance for chaining. */
  addParameter(item: ParameterDefinition): this {
    if (!this.parameter) {
      this.parameter = [];
    }

    this.parameter.push(item);

    return this;
  }

  /** Adds an item to the dataRequirement array. @returns This instance for chaining. */
  addDataRequirement(item: DataRequirement): this {
    if (!this.dataRequirement) {
      this.dataRequirement = [];
    }

    this.dataRequirement.push(item);

    return this;
  }

  /** Adds an item to the content array. @returns This instance for chaining. */
  addContent(item: Attachment): this {
    if (!this.content) {
      this.content = [];
    }

    this.content.push(item);

    return this;
  }
}
