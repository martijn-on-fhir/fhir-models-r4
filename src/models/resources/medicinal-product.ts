import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { Identifier } from '../datatypes/identifier.js';
import { MarketingStatus } from '../datatypes/marketing-status.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for MedicinalProduct. */
export class MedicinalProductNameNamePart extends BackboneElement {

  /** A fragment of a product name. */
  @IsOptional()
  @IsString()
  part?: string;

  /** Identifying type for this part of the name. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  type?: Coding;

  /** Creates a new MedicinalProductNameNamePart. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductNameNamePart>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for MedicinalProduct. */
export class MedicinalProductNameCountryLanguage extends BackboneElement {

  /** Country code for where this name applies. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  country?: CodeableConcept;

  /** Jurisdiction code for where this name applies. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept;

  /** Language code for this name. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  language?: CodeableConcept;

  /** Creates a new MedicinalProductNameCountryLanguage. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductNameCountryLanguage>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for MedicinalProduct. */
export class MedicinalProductName extends BackboneElement {

  /** The full product name. */
  @IsOptional()
  @IsString()
  productName?: string;

  /** Coding words or phrases of the name. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductNameNamePart)
  namePart?: MedicinalProductNameNamePart[];

  /** Country where the name applies. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductNameCountryLanguage)
  countryLanguage?: MedicinalProductNameCountryLanguage[];

  /** Creates a new MedicinalProductName. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductName>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the namePart array. @returns This instance for chaining. */
  addNamePart(item: MedicinalProductNameNamePart): this {
    if (!this.namePart) {
      this.namePart = [];
    }

    this.namePart.push(item);

    return this;
  }

  /** Adds an item to the countryLanguage array. @returns This instance for chaining. */
  addCountryLanguage(item: MedicinalProductNameCountryLanguage): this {
    if (!this.countryLanguage) {
      this.countryLanguage = [];
    }

    this.countryLanguage.push(item);

    return this;
  }
}

/** Backbone element for MedicinalProduct. */
export class MedicinalProductManufacturingBusinessOperation extends BackboneElement {

  /** The type of manufacturing operation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  operationType?: CodeableConcept;

  /** Regulatory authorisation reference number. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  authorisationReferenceNumber?: Identifier;

  /** Regulatory effective date. */
  @IsOptional()
  @IsString()
  effectiveDate?: string;

  /** Indicates whether the information is confidential. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  confidentialityIndicator?: CodeableConcept;

  /** The manufacturer or establishment associated with the process. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  manufacturer?: Reference[];

  /** A regulator which oversees the operation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  regulator?: Reference;

  /** Creates a new MedicinalProductManufacturingBusinessOperation. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductManufacturingBusinessOperation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
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

/** Backbone element for MedicinalProduct. */
export class MedicinalProductSpecialDesignation extends BackboneElement {

  /** Identifier for the designation or its registration number. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The type of special designation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The intended use of the product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  intendedUse?: CodeableConcept;

  /** Condition for which the medicinal use applies as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  indicationCodeableConcept?: CodeableConcept;

  /** Condition for which the medicinal use applies as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  indicationReference?: Reference;

  /** The status of the designation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /** Date when the designation was granted. */
  @IsOptional()
  @IsString()
  date?: string;

  /** Animal species for which this applies. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  species?: CodeableConcept;

  /** Creates a new MedicinalProductSpecialDesignation. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductSpecialDesignation>) {
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
}

/** FHIR R4 MedicinalProduct — detailed information about a medicinal product. */
export class MedicinalProduct extends DomainResource {

  readonly resourceType = 'MedicinalProduct';

  /** Business identifier for this product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Regulatory type, e.g. investigational or authorized. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** If this medicine applies to human or veterinary uses. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  domain?: Coding;

  /** The dose form for a combined unitary product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  combinedPharmaceuticalDoseForm?: CodeableConcept;

  /** The legal status of supply of the medicinal product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  legalStatusOfSupply?: CodeableConcept;

  /** Whether the product is subject to additional monitoring. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  additionalMonitoringIndicator?: CodeableConcept;

  /** Special measures required for the product. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  specialMeasures?: string[];

  /** If this medicinal product is subject to paediatric regulation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  paediatricUseIndicator?: CodeableConcept;

  /** Allows the product to be classified by various systems. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  productClassification?: CodeableConcept[];

  /** Marketing status of the medicinal product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MarketingStatus)
  marketingStatus?: MarketingStatus[];

  /** Pharmaceutical aspects of the product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  pharmaceuticalProduct?: Reference[];

  /** Package representation for the product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  packagedMedicinalProduct?: Reference[];

  /** Supporting documentation, typically for regulatory submission. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  attachedDocument?: Reference[];

  /** A master file for the medicinal product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  masterFile?: Reference[];

  /** A product specific contact, person, or organization. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  contact?: Reference[];

  /** Clinical trials associated with the medicinal product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  clinicalTrial?: Reference[];

  /** The product's name, including full name and parts. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductName)
  name?: MedicinalProductName[];

  /** Reference to another product, e.g. for linking authorised to investigational product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  crossReference?: Identifier[];

  /** An operation applied to the product, for manufacturing or adminstrative purpose. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductManufacturingBusinessOperation)
  manufacturingBusinessOperation?: MedicinalProductManufacturingBusinessOperation[];

  /** Special designations associated with the product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductSpecialDesignation)
  specialDesignation?: MedicinalProductSpecialDesignation[];

  /** Creates a new MedicinalProduct. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProduct>) {
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

  /** Adds an item to the specialMeasures array. @returns This instance for chaining. */
  addSpecialMeasures(item: string): this {
    if (!this.specialMeasures) {
      this.specialMeasures = [];
    }

    this.specialMeasures.push(item);

    return this;
  }

  /** Adds an item to the productClassification array. @returns This instance for chaining. */
  addProductClassification(item: CodeableConcept): this {
    if (!this.productClassification) {
      this.productClassification = [];
    }

    this.productClassification.push(item);

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

  /** Adds an item to the pharmaceuticalProduct array. @returns This instance for chaining. */
  addPharmaceuticalProduct(item: Reference): this {
    if (!this.pharmaceuticalProduct) {
      this.pharmaceuticalProduct = [];
    }

    this.pharmaceuticalProduct.push(item);

    return this;
  }

  /** Adds an item to the packagedMedicinalProduct array. @returns This instance for chaining. */
  addPackagedMedicinalProduct(item: Reference): this {
    if (!this.packagedMedicinalProduct) {
      this.packagedMedicinalProduct = [];
    }

    this.packagedMedicinalProduct.push(item);

    return this;
  }

  /** Adds an item to the attachedDocument array. @returns This instance for chaining. */
  addAttachedDocument(item: Reference): this {
    if (!this.attachedDocument) {
      this.attachedDocument = [];
    }

    this.attachedDocument.push(item);

    return this;
  }

  /** Adds an item to the masterFile array. @returns This instance for chaining. */
  addMasterFile(item: Reference): this {
    if (!this.masterFile) {
      this.masterFile = [];
    }

    this.masterFile.push(item);

    return this;
  }

  /** Adds an item to the contact array. @returns This instance for chaining. */
  addContact(item: Reference): this {
    if (!this.contact) {
      this.contact = [];
    }

    this.contact.push(item);

    return this;
  }

  /** Adds an item to the clinicalTrial array. @returns This instance for chaining. */
  addClinicalTrial(item: Reference): this {
    if (!this.clinicalTrial) {
      this.clinicalTrial = [];
    }

    this.clinicalTrial.push(item);

    return this;
  }

  /** Adds an item to the name array. @returns This instance for chaining. */
  addName(item: MedicinalProductName): this {
    if (!this.name) {
      this.name = [];
    }

    this.name.push(item);

    return this;
  }

  /** Adds an item to the crossReference array. @returns This instance for chaining. */
  addCrossReference(item: Identifier): this {
    if (!this.crossReference) {
      this.crossReference = [];
    }

    this.crossReference.push(item);

    return this;
  }

  /** Adds an item to the manufacturingBusinessOperation array. @returns This instance for chaining. */
  addManufacturingBusinessOperation(item: MedicinalProductManufacturingBusinessOperation): this {
    if (!this.manufacturingBusinessOperation) {
      this.manufacturingBusinessOperation = [];
    }

    this.manufacturingBusinessOperation.push(item);

    return this;
  }

  /** Adds an item to the specialDesignation array. @returns This instance for chaining. */
  addSpecialDesignation(item: MedicinalProductSpecialDesignation): this {
    if (!this.specialDesignation) {
      this.specialDesignation = [];
    }

    this.specialDesignation.push(item);

    return this;
  }
}
