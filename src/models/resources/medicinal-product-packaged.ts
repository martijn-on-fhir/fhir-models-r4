import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { MarketingStatus } from '../datatypes/marketing-status.js';
import { ProdCharacteristic } from '../datatypes/prod-characteristic.js';
import { ProductShelfLife } from '../datatypes/product-shelf-life.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for MedicinalProductPackaged. */
export class MedicinalProductPackagedBatchIdentifier extends BackboneElement {

  /** A number appearing on the outer packaging of a specific batch. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  outerPackaging?: Identifier;

  /** A number appearing on the immediate packaging (and not the outer packaging). */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  immediatePackaging?: Identifier;

  /** Creates a new MedicinalProductPackagedBatchIdentifier. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductPackagedBatchIdentifier>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for MedicinalProductPackaged. */
export class MedicinalProductPackagedPackageItem extends BackboneElement {

  /** Including possibly data carrier identifier. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The physical type of the container of the medicine. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The quantity of this package in the medicinal product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** Material type of the package item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  material?: CodeableConcept[];

  /** A possible alternate material for the packaging. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  alternateMaterial?: CodeableConcept[];

  /** A device accompanying a medicinal product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  device?: Reference[];

  /** The manufactured item as contained in the packaged medicinal product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  manufacturedItem?: Reference[];

  /** Allows containers within containers. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductPackagedPackageItem)
  packageItem?: MedicinalProductPackagedPackageItem[];

  /** Dimensions, color etc. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ProdCharacteristic)
  physicalCharacteristics?: ProdCharacteristic;

  /** Other codeable characteristics. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  otherCharacteristics?: CodeableConcept[];

  /** Shelf life and storage information. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductShelfLife)
  shelfLifeStorage?: ProductShelfLife[];

  /** Manufacturer of this package item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  manufacturer?: Reference[];

  /** Creates a new MedicinalProductPackagedPackageItem. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductPackagedPackageItem>) {
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

  /** Adds an item to the material array. @returns This instance for chaining. */
  addMaterial(item: CodeableConcept): this {
    if (!this.material) {
      this.material = [];
    }

    this.material.push(item);

    return this;
  }

  /** Adds an item to the alternateMaterial array. @returns This instance for chaining. */
  addAlternateMaterial(item: CodeableConcept): this {
    if (!this.alternateMaterial) {
      this.alternateMaterial = [];
    }

    this.alternateMaterial.push(item);

    return this;
  }

  /** Adds an item to the device array. @returns This instance for chaining. */
  addDevice(item: Reference): this {
    if (!this.device) {
      this.device = [];
    }

    this.device.push(item);

    return this;
  }

  /** Adds an item to the manufacturedItem array. @returns This instance for chaining. */
  addManufacturedItem(item: Reference): this {
    if (!this.manufacturedItem) {
      this.manufacturedItem = [];
    }

    this.manufacturedItem.push(item);

    return this;
  }

  /** Adds an item to the packageItem array. @returns This instance for chaining. */
  addPackageItem(item: MedicinalProductPackagedPackageItem): this {
    if (!this.packageItem) {
      this.packageItem = [];
    }

    this.packageItem.push(item);

    return this;
  }

  /** Adds an item to the otherCharacteristics array. @returns This instance for chaining. */
  addOtherCharacteristics(item: CodeableConcept): this {
    if (!this.otherCharacteristics) {
      this.otherCharacteristics = [];
    }

    this.otherCharacteristics.push(item);

    return this;
  }

  /** Adds an item to the shelfLifeStorage array. @returns This instance for chaining. */
  addShelfLifeStorage(item: ProductShelfLife): this {
    if (!this.shelfLifeStorage) {
      this.shelfLifeStorage = [];
    }

    this.shelfLifeStorage.push(item);

    return this;
  }

  /** Adds an item to the manufacturer array. @returns This instance for chaining. */
  addManufacturer(item: Reference): this {
    if (!this.manufacturer) {
      this.manufacturer = [];
    }

    this.manufacturer.push(item);

    return this;
  }
}

/** FHIR R4 MedicinalProductPackaged — a medicinal product in a container or package. */
export class MedicinalProductPackaged extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'MedicinalProductPackaged';

  /** Unique identifier. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The product with this is a pack for. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  subject?: Reference[];

  /** Textual description. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The legal status of supply of the medicinal product as classified by the regulator. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  legalStatusOfSupply?: CodeableConcept;

  /** Marketing information. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MarketingStatus)
  marketingStatus?: MarketingStatus[];

  /** Manufacturer of this package type. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  marketingAuthorization?: Reference;

  /** Manufacturer of this package item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  manufacturer?: Reference[];

  /** Batch numbering. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductPackagedBatchIdentifier)
  batchIdentifier?: MedicinalProductPackagedBatchIdentifier[];

  /** A packaging item, as a contained for medicine, possibly with other packaging items within. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductPackagedPackageItem)
  packageItem?: MedicinalProductPackagedPackageItem[];

  /** Creates a new MedicinalProductPackaged. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductPackaged>) {
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

  /** Adds an item to the subject array. @returns This instance for chaining. */
  addSubject(item: Reference): this {
    if (!this.subject) {
      this.subject = [];
    }

    this.subject.push(item);

    return this;
  }

  /** Adds an item to the marketingStatus array. @returns This instance for chaining. */
  addMarketingStatus(item: MarketingStatus): this {
    if (!this.marketingStatus) {
      this.marketingStatus = [];
    }

    this.marketingStatus.push(item);

    return this;
  }

  /** Adds an item to the manufacturer array. @returns This instance for chaining. */
  addManufacturer(item: Reference): this {
    if (!this.manufacturer) {
      this.manufacturer = [];
    }

    this.manufacturer.push(item);

    return this;
  }

  /** Adds an item to the batchIdentifier array. @returns This instance for chaining. */
  addBatchIdentifier(item: MedicinalProductPackagedBatchIdentifier): this {
    if (!this.batchIdentifier) {
      this.batchIdentifier = [];
    }

    this.batchIdentifier.push(item);

    return this;
  }

  /** Adds an item to the packageItem array. @returns This instance for chaining. */
  addPackageItem(item: MedicinalProductPackagedPackageItem): this {
    if (!this.packageItem) {
      this.packageItem = [];
    }

    this.packageItem.push(item);

    return this;
  }
}
