import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { BiologicallyDerivedProductCategory } from '../enums/biologically-derived-product-category.js';
import { BiologicallyDerivedProductStatus } from '../enums/biologically-derived-product-status.js';

/** Backbone element for BiologicallyDerivedProduct — how the product was collected. */
export class BiologicallyDerivedProductCollection extends BackboneElement {

  /** Individual performing the collection. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  collector?: Reference;

  /** The patient or entity providing the product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  source?: Reference;

  /** Time of collection, as a dateTime. */
  @IsOptional()
  @IsString()
  collectedDateTime?: string;

  /** Time of collection, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  collectedPeriod?: Period;

  /** Creates a new BiologicallyDerivedProductCollection. @param props - Initial values. */
  constructor(props?: Partial<BiologicallyDerivedProductCollection>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for BiologicallyDerivedProduct — processing steps applied. */
export class BiologicallyDerivedProductProcessing extends BackboneElement {

  /** Description of the processing. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Procesing code. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  procedure?: CodeableConcept;

  /** Substance added during processing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  additive?: Reference;

  /** Time of processing, as a dateTime. */
  @IsOptional()
  @IsString()
  timeDateTime?: string;

  /** Time of processing, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  timePeriod?: Period;

  /** Creates a new BiologicallyDerivedProductProcessing. @param props - Initial values. */
  constructor(props?: Partial<BiologicallyDerivedProductProcessing>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for BiologicallyDerivedProduct — any manipulation performed. */
export class BiologicallyDerivedProductManipulation extends BackboneElement {

  /** Description of the manipulation. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Time of manipulation, as a dateTime. */
  @IsOptional()
  @IsString()
  timeDateTime?: string;

  /** Time of manipulation, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  timePeriod?: Period;

  /** Creates a new BiologicallyDerivedProductManipulation. @param props - Initial values. */
  constructor(props?: Partial<BiologicallyDerivedProductManipulation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for BiologicallyDerivedProduct — product storage conditions. */
export class BiologicallyDerivedProductStorage extends BackboneElement {

  /** Description of storage. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Storage temperature. */
  @IsOptional()
  @IsNumber()
  temperature?: number;

  /** Temperature scale used (farenheit | celsius | kelvin). */
  @IsOptional()
  @IsString()
  scale?: string;

  /** Storage timeframe. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  duration?: Period;

  /** Creates a new BiologicallyDerivedProductStorage. @param props - Initial values. */
  constructor(props?: Partial<BiologicallyDerivedProductStorage>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 BiologicallyDerivedProduct — a material substance originating from a biological entity. */
export class BiologicallyDerivedProduct extends DomainResource {

  /** The FHIR resource type string. */
  readonly resourceType = 'BiologicallyDerivedProduct';

  /** Business identifiers assigned to this product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Broad category of this product (organ | tissue | fluid | cells | biologicalAgent). */
  @IsOptional()
  @IsEnum(BiologicallyDerivedProductCategory)
  productCategory?: BiologicallyDerivedProductCategory;

  /** Specific code identifying the type of product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  productCode?: CodeableConcept;

  /** Whether the product is currently available (available | unavailable). */
  @IsOptional()
  @IsEnum(BiologicallyDerivedProductStatus)
  status?: BiologicallyDerivedProductStatus;

  /** Procedure request to obtain this biologically derived product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  request?: Reference[];

  /** Number of items in the product. */
  @IsOptional()
  @IsNumber()
  quantity?: number;

  /** Parent product(s) from which this was derived. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  parent?: Reference[];

  /** How this product was collected. */
  @IsOptional()
  @ValidateNested()
  @Type(() => BiologicallyDerivedProductCollection)
  collection?: BiologicallyDerivedProductCollection;

  /** Processing steps applied to the product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BiologicallyDerivedProductProcessing)
  processing?: BiologicallyDerivedProductProcessing[];

  /** Any manipulation performed on the product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => BiologicallyDerivedProductManipulation)
  manipulation?: BiologicallyDerivedProductManipulation;

  /** Product storage conditions. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BiologicallyDerivedProductStorage)
  storage?: BiologicallyDerivedProductStorage[];

  /** Creates a new BiologicallyDerivedProduct. @param props - Initial values. */
  constructor(props?: Partial<BiologicallyDerivedProduct>) {
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

  /** Adds an item to the request array. @returns This instance for chaining. */
  addRequest(item: Reference): this {
    if (!this.request) {
      this.request = [];
    }

    this.request.push(item);

    return this;
  }

  /** Adds an item to the parent array. @returns This instance for chaining. */
  addParent(item: Reference): this {
    if (!this.parent) {
      this.parent = [];
    }

    this.parent.push(item);

    return this;
  }

  /** Adds an item to the processing array. @returns This instance for chaining. */
  addProcessing(item: BiologicallyDerivedProductProcessing): this {
    if (!this.processing) {
      this.processing = [];
    }

    this.processing.push(item);

    return this;
  }

  /** Adds an item to the storage array. @returns This instance for chaining. */
  addStorage(item: BiologicallyDerivedProductStorage): this {
    if (!this.storage) {
      this.storage = [];
    }

    this.storage.push(item);

    return this;
  }
}
