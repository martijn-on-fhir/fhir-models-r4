import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { CompositionAttestationMode } from '../enums/composition-attestation-mode.js';
import { CompositionStatus } from '../enums/composition-status.js';
import { DocumentRelationshipType } from '../enums/document-relationship-type.js';

/** Backbone element for Composition — a participant who has attested to the accuracy of the composition. */
export class CompositionAttester extends BackboneElement {

  /** The type of attestation the authenticator offers (personal | professional | legal | official). */
  @IsOptional()
  @IsEnum(CompositionAttestationMode)
  mode?: CompositionAttestationMode;

  /** When the composition was attested by the party. */
  @IsOptional()
  @IsString()
  time?: string;

  /** Who attested the composition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  party?: Reference;

  /** Creates a new CompositionAttester. @param props - Initial values. */
  constructor(props?: Partial<CompositionAttester>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Composition — relationships to other compositions or documents. */
export class CompositionRelatesTo extends BackboneElement {

  /** The type of relationship (replaces | transforms | signs | appends). */
  @IsOptional()
  @IsEnum(DocumentRelationshipType)
  code?: DocumentRelationshipType;

  /** Target of the relationship, as an Identifier. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  targetIdentifier?: Identifier;

  /** Target of the relationship, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  targetReference?: Reference;

  /** Creates a new CompositionRelatesTo. @param props - Initial values. */
  constructor(props?: Partial<CompositionRelatesTo>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Composition — the clinical service(s) being documented. */
export class CompositionEvent extends BackboneElement {

  /** Code(s) that apply to the event being documented. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /** The period covered by the documentation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** The event(s) being documented. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  detail?: Reference[];

  /** Creates a new CompositionEvent. @param props - Initial values. */
  constructor(props?: Partial<CompositionEvent>) {
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

/** Backbone element for Composition — composition is broken into sections. */
export class CompositionSection extends BackboneElement {

  /** Label for the section. */
  @IsOptional()
  @IsString()
  title?: string;

  /** Classification of the section. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** Who and/or what authored the section. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  author?: Reference[];

  /** Who or what the section is about, when not about the subject of the composition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  focus?: Reference;

  /** Order of section entries. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  orderedBy?: CodeableConcept;

  /** Reference to data that supports this section. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  entry?: Reference[];

  /** Why the section is empty. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  emptyReason?: CodeableConcept;

  /** Nested sub-sections. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompositionSection)
  section?: CompositionSection[];

  /** Working list mode (working | snapshot | changes). */
  @IsOptional()
  @IsString()
  mode?: string;

  /** Creates a new CompositionSection. @param props - Initial values. */
  constructor(props?: Partial<CompositionSection>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the author array. @returns This instance for chaining. */
  addAuthor(item: Reference): this {
    if (!this.author) {
      this.author = [];
    }

    this.author.push(item);

    return this;
  }

  /** Adds an item to the entry array. @returns This instance for chaining. */
  addEntry(item: Reference): this {
    if (!this.entry) {
      this.entry = [];
    }

    this.entry.push(item);

    return this;
  }

  /** Adds an item to the section array. @returns This instance for chaining. */
  addSection(item: CompositionSection): this {
    if (!this.section) {
      this.section = [];
    }

    this.section.push(item);

    return this;
  }
}

/** FHIR R4 Composition — a set of healthcare-related information assembled into a single logical package. */
export class Composition extends DomainResource {

  /** The FHIR resource type string. */
  readonly resourceType = 'Composition';

  /** Version-independent identifier for the composition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** The workflow/clinical status of the composition (preliminary | final | amended | entered-in-error). */
  @IsOptional()
  @IsEnum(CompositionStatus)
  status?: CompositionStatus;

  /** Kind of composition (LOINC if possible). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Categorization of the composition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** Who and/or what the composition is about. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** Context of the composition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** Composition editing time. */
  @IsOptional()
  @IsString()
  date?: string;

  /** Who and/or what authored the composition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  author?: Reference[];

  /** Human-readable label for the composition. */
  @IsOptional()
  @IsString()
  title?: string;

  /** As defined by affinity domain (e.g., V | R | N). */
  @IsOptional()
  @IsString()
  confidentiality?: string;

  /** Attests to accuracy of the composition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompositionAttester)
  attester?: CompositionAttester[];

  /** Organization that maintains the composition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  custodian?: Reference;

  /** Relationships to other compositions or documents. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompositionRelatesTo)
  relatesTo?: CompositionRelatesTo[];

  /** The clinical service(s) being documented. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompositionEvent)
  event?: CompositionEvent[];

  /** Composition sections. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompositionSection)
  section?: CompositionSection[];

  /** Creates a new Composition. @param props - Initial values. */
  constructor(props?: Partial<Composition>) {
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

  /** Adds an item to the author array. @returns This instance for chaining. */
  addAuthor(item: Reference): this {
    if (!this.author) {
      this.author = [];
    }

    this.author.push(item);

    return this;
  }

  /** Adds an item to the attester array. @returns This instance for chaining. */
  addAttester(item: CompositionAttester): this {
    if (!this.attester) {
      this.attester = [];
    }

    this.attester.push(item);

    return this;
  }

  /** Adds an item to the relatesTo array. @returns This instance for chaining. */
  addRelatesTo(item: CompositionRelatesTo): this {
    if (!this.relatesTo) {
      this.relatesTo = [];
    }

    this.relatesTo.push(item);

    return this;
  }

  /** Adds an item to the event array. @returns This instance for chaining. */
  addEvent(item: CompositionEvent): this {
    if (!this.event) {
      this.event = [];
    }

    this.event.push(item);

    return this;
  }

  /** Adds an item to the section array. @returns This instance for chaining. */
  addSection(item: CompositionSection): this {
    if (!this.section) {
      this.section = [];
    }

    this.section.push(item);

    return this;
  }
}
