import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { DocumentReferenceStatus } from '../enums/document-reference-status.js';
import { DocumentRelationshipType } from '../enums/document-relationship-type.js';

/** Backbone element for DocumentReference. */
export class DocumentReferenceRelatesTo extends BackboneElement {

  /** The type of relationship that this document has with another document. */
  @IsOptional()
  @IsEnum(DocumentRelationshipType)
  code?: DocumentRelationshipType;

  /** The target document of this relationship. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  target?: Reference;

  /** Creates a new DocumentReferenceRelatesTo. @param props - Initial values. */
  constructor(props?: Partial<DocumentReferenceRelatesTo>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for DocumentReference. */
export class DocumentReferenceContent extends BackboneElement {

  /** The document or URL of the document along with critical metadata to prove content has integrity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  attachment?: Attachment;

  /** An identifier of the document encoding, structure, and template that the document conforms to. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  format?: Coding;

  /** Creates a new DocumentReferenceContent. @param props - Initial values. */
  constructor(props?: Partial<DocumentReferenceContent>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for DocumentReference. */
export class DocumentReferenceContext extends BackboneElement {

  /** Describes the clinical encounter that the document content is associated with. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  encounter?: Reference[];

  /** This list of codes represents the main clinical acts being documented. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  event?: CodeableConcept[];

  /** The time period over which the service was provided. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** The kind of facility where the patient was seen. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  facilityType?: CodeableConcept;

  /** The clinical specialty of the clinician or provider. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  practiceSetting?: CodeableConcept;

  /** The Patient Information as known when the document was published. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  sourcePatientInfo?: Reference;

  /** Related identifiers or resources associated with the document. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  related?: Reference[];

  /** Creates a new DocumentReferenceContext. @param props - Initial values. */
  constructor(props?: Partial<DocumentReferenceContext>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the encounter array. @returns This instance for chaining. */
  addEncounter(item: Reference): this {
    if (!this.encounter) {
      this.encounter = [];
    }

    this.encounter.push(item);

    return this;
  }

  /** Adds an item to the event array. @returns This instance for chaining. */
  addEvent(item: CodeableConcept): this {
    if (!this.event) {
      this.event = [];
    }

    this.event.push(item);

    return this;
  }

  /** Adds an item to the related array. @returns This instance for chaining. */
  addRelated(item: Reference): this {
    if (!this.related) {
      this.related = [];
    }

    this.related.push(item);

    return this;
  }
}

/** FHIR R4 DocumentReference — a reference to a document of any kind. */
export class DocumentReference extends DomainResource {

  /** Resource type constant. */
  readonly resourceType = 'DocumentReference';

  /** Document identifier as assigned by the source of the document. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  masterIdentifier?: Identifier;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  /** Other identifiers associated with the document. */
  identifier?: Identifier[];

  /** The status of this document reference. */
  @IsOptional()
  @IsEnum(DocumentReferenceStatus)
  status?: DocumentReferenceStatus;

  /** The status of the underlying document. */
  @IsOptional()
  @IsEnum(DocumentReferenceStatus)
  docStatus?: DocumentReferenceStatus;

  /** Specifies the particular kind of document referenced. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** A categorization for the type of document referenced. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** Who or what the document is about. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** When this document reference was created. */
  @IsOptional()
  @IsString()
  date?: string;

  /** Identifies who is responsible for adding the information to the document. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  author?: Reference[];

  /** Which person or organization authenticates that this document is valid. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  authenticator?: Reference;

  /** Identifies the organization or group who is responsible for ongoing maintenance of the document. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  custodian?: Reference;

  /** Relationships that this document has with other document references. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DocumentReferenceRelatesTo)
  relatesTo?: DocumentReferenceRelatesTo[];

  /** Human-readable description of the source document. */
  @IsOptional()
  @IsString()
  description?: string;

  /** A set of Security-Tag codes specifying the level of privacy/security of the Document. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  securityLabel?: CodeableConcept[];

  /** The document and format referenced. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DocumentReferenceContent)
  content?: DocumentReferenceContent[];

  /** The clinical context in which the document was prepared. */
  @IsOptional()
  @ValidateNested()
  @Type(() => DocumentReferenceContext)
  context?: DocumentReferenceContext;

  /** Creates a new DocumentReference. @param props - Initial values. */
  constructor(props?: Partial<DocumentReference>) {
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

  /** Adds an item to the author array. @returns This instance for chaining. */
  addAuthor(item: Reference): this {
    if (!this.author) {
      this.author = [];
    }

    this.author.push(item);

    return this;
  }

  /** Adds an item to the relatesTo array. @returns This instance for chaining. */
  addRelatesTo(item: DocumentReferenceRelatesTo): this {
    if (!this.relatesTo) {
      this.relatesTo = [];
    }

    this.relatesTo.push(item);

    return this;
  }

  /** Adds an item to the securityLabel array. @returns This instance for chaining. */
  addSecurityLabel(item: CodeableConcept): this {
    if (!this.securityLabel) {
      this.securityLabel = [];
    }

    this.securityLabel.push(item);

    return this;
  }

  /** Adds an item to the content array. @returns This instance for chaining. */
  addContent(item: DocumentReferenceContent): this {
    if (!this.content) {
      this.content = [];
    }

    this.content.push(item);

    return this;
  }
}
