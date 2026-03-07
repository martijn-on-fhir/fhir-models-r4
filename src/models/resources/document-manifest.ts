import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';
import { DocumentReferenceStatus } from '../enums/document-reference-status.js';

/** Backbone element for DocumentManifest. */
export class DocumentManifestRelated extends BackboneElement {

  /** Related identifier. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** Related resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  ref?: Reference;

  /** Creates a new DocumentManifestRelated. @param props - Initial values. */
  constructor(props?: Partial<DocumentManifestRelated>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 DocumentManifest — a collection of documents compiled for a purpose. */
export class DocumentManifest extends DomainResource {

  /** Resource type constant. */
  readonly resourceType = 'DocumentManifest';

  /** A single identifier that uniquely identifies this manifest. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  masterIdentifier?: Identifier;

  /** Other identifiers associated with the document manifest. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The status of this document manifest. */
  @IsOptional()
  @IsEnum(DocumentReferenceStatus)
  status?: DocumentReferenceStatus;

  /** The code specifying the type of clinical activity that resulted in placing the items in the manifest. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Who or what the set of documents is about. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** When the document manifest was created. */
  @IsOptional()
  @IsString()
  created?: string;

  /** Identifies who is the author of the manifest. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  author?: Reference[];

  /** A patient, practitioner, or organization for which this set of documents is intended. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  recipient?: Reference[];

  /** Identifies the source system, application, or software that produced the document manifest. */
  @IsOptional()
  @IsString()
  source?: string;

  /** Human-readable description of the source document. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The list of resources that are parts of this manifest. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  content?: Reference[];

  /** Related identifiers or resources associated with the document manifest. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DocumentManifestRelated)
  related?: DocumentManifestRelated[];

  /** Creates a new DocumentManifest. @param props - Initial values. */
  constructor(props?: Partial<DocumentManifest>) {
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

  /** Adds an item to the author array. @returns This instance for chaining. */
  addAuthor(item: Reference): this {
    if (!this.author) {
      this.author = [];
    }

    this.author.push(item);

    return this;
  }

  /** Adds an item to the recipient array. @returns This instance for chaining. */
  addRecipient(item: Reference): this {
    if (!this.recipient) {
      this.recipient = [];
    }

    this.recipient.push(item);

    return this;
  }

  /** Adds an item to the content array. @returns This instance for chaining. */
  addContent(item: Reference): this {
    if (!this.content) {
      this.content = [];
    }

    this.content.push(item);

    return this;
  }

  /** Adds an item to the related array. @returns This instance for chaining. */
  addRelated(item: DocumentManifestRelated): this {
    if (!this.related) {
      this.related = [];
    }

    this.related.push(item);

    return this;
  }
}
