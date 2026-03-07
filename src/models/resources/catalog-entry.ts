import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { CatalogEntryRelationType } from '../enums/catalog-entry-relation-type.js';

/** Backbone element for {@link CatalogEntry.relatedEntry}. */
export class CatalogEntryRelatedEntry extends BackboneElement {

  /** The type of relation to the related entry, such as triggers or is-replaced-by. Uses the CatalogEntryRelationType value set. */
  @IsOptional()
  @IsEnum(CatalogEntryRelationType)
  relationtype?: CatalogEntryRelationType;

  /** The reference to the related item of the catalog. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  item?: Reference;

  /** Creates a new {@link CatalogEntryRelatedEntry} instance. @param props - Initial property values. */
  constructor(props?: Partial<CatalogEntryRelatedEntry>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 CatalogEntry resource — an entry in a catalog that describes an item and its properties, and related items. */
export class CatalogEntry extends DomainResource {

  /** The type of resource this is. Always 'CatalogEntry'. */
  readonly resourceType = 'CatalogEntry';

  /** Identifiers assigned to this catalog entry by the system or by external systems. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The type of item, such as medication, device, or service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Whether the entry represents an orderable item. */
  @IsOptional()
  @IsBoolean()
  orderable?: boolean;

  /** The item in a catalog or definition that this entry references. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  referencedItem?: Reference;

  /** Additional identifiers for this catalog entry, other than the primary identifier. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  additionalIdentifier?: Identifier[];

  /** Classification or category of the catalog entry. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  classification?: CodeableConcept[];

  /** The status of the catalog entry, such as draft, active, or retired. */
  @IsOptional()
  @IsString()
  status?: string;

  /** The time period during which this catalog entry is expected to be valid. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  validityPeriod?: Period;

  /** The date until which this catalog entry is expected to be effective. */
  @IsOptional()
  @IsString()
  validTo?: string;

  /** Typically date of issue of the catalog entry, indicating when it was last updated. */
  @IsOptional()
  @IsString()
  lastUpdated?: string;

  /** Additional characteristics of the catalog entry, such as size, color, or strength. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  additionalCharacteristic?: CodeableConcept[];

  /** Additional classification of the catalog entry beyond the primary classification. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  additionalClassification?: CodeableConcept[];

  /** Items related to this catalog entry, such as components or alternatives. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CatalogEntryRelatedEntry)
  relatedEntry?: CatalogEntryRelatedEntry[];

  /** Creates a new {@link CatalogEntry} instance. @param props - Initial property values. */
  constructor(props?: Partial<CatalogEntry>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link CatalogEntry.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds an {@link Identifier} to the {@link CatalogEntry.additionalIdentifier additionalIdentifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addAdditionalIdentifier(item: Identifier): this {
    if (!this.additionalIdentifier) {
      this.additionalIdentifier = [];
    }

    this.additionalIdentifier.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link CatalogEntry.classification classification} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addClassification(item: CodeableConcept): this {
    if (!this.classification) {
      this.classification = [];
    }

    this.classification.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link CatalogEntry.additionalCharacteristic additionalCharacteristic} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addAdditionalCharacteristic(item: CodeableConcept): this {
    if (!this.additionalCharacteristic) {
      this.additionalCharacteristic = [];
    }

    this.additionalCharacteristic.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link CatalogEntry.additionalClassification additionalClassification} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addAdditionalClassification(item: CodeableConcept): this {
    if (!this.additionalClassification) {
      this.additionalClassification = [];
    }

    this.additionalClassification.push(item);

    return this;
  }

  /** Adds a {@link CatalogEntryRelatedEntry} to the {@link CatalogEntry.relatedEntry relatedEntry} array. @param item - The {@link CatalogEntryRelatedEntry} to add. @returns This instance for chaining. */
  addRelatedEntry(item: CatalogEntryRelatedEntry): this {
    if (!this.relatedEntry) {
      this.relatedEntry = [];
    }

    this.relatedEntry.push(item);

    return this;
  }
}
