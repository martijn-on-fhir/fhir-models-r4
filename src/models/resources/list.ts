import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';
import { ListMode } from '../enums/list-mode.js';
import { ListStatus } from '../enums/list-status.js';

/** Backbone element for FhirList. */
export class ListEntry extends BackboneElement {

  /** The flag allows the system constructing the list to indicate the role and significance of the item in the list. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  flag?: CodeableConcept;

  /** True if this item is marked as deleted in the list. */
  @IsOptional()
  @IsBoolean()
  deleted?: boolean;

  /** When this item was added to the list. */
  @IsOptional()
  @IsString()
  date?: string;

  /** A reference to the actual resource from which data was derived. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  item?: Reference;

  /** Creates a new ListEntry. @param props - Initial values. */
  constructor(props?: Partial<ListEntry>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 List — a flat, possibly ordered collection of records. */
export class FhirList extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'List';

  /** Identifier for the list assigned for business purposes outside the context of FHIR. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Indicates the current state of this list. */
  @IsOptional()
  @IsEnum(ListStatus)
  status?: ListStatus;

  /** How this list was prepared - whether it is a working list or a snapshot. */
  @IsOptional()
  @IsEnum(ListMode)
  mode?: ListMode;

  /** A label for the list assigned by the author. */
  @IsOptional()
  @IsString()
  title?: string;

  /** This code defines the purpose of the list - why it was created. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The common subject (or patient) of the resources that are in the list. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The encounter that is the context in which this list was created. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** The date that the list was prepared. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The entity responsible for deciding what the contents of the list were. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  source?: Reference;

  /** What order applies to the items in the list. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  orderedBy?: CodeableConcept;

  /** Comments that apply to the overall list. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Entries in this list. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ListEntry)
  entry?: ListEntry[];

  /** If the list is empty, why the list is empty. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  emptyReason?: CodeableConcept;

  /** Creates a new FhirList. @param props - Initial values. */
  constructor(props?: Partial<FhirList>) {
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

  /** Adds an item to the note array. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }

  /** Adds an item to the entry array. @returns This instance for chaining. */
  addEntry(item: ListEntry): this {
    if (!this.entry) {
      this.entry = [];
    }

    this.entry.push(item);

    return this;
  }
}
