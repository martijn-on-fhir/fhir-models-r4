import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsArray, IsEnum, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Identifier } from '../datatypes/identifier.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { DeviceNameType } from '../enums/device-name-type.js';

/** Backbone element for DeviceDefinition. */
export class DeviceDefinitionUdiDeviceIdentifier extends BackboneElement {

  /** The identifier that is to be associated with every Device that references this DeviceDefinition. */
  @IsOptional()
  @IsString()
  deviceIdentifier?: string;

  /** The organization that assigns the identifier algorithm. */
  @IsOptional()
  @IsString()
  issuer?: string;

  /** The jurisdiction to which the deviceIdentifier applies. */
  @IsOptional()
  @IsString()
  jurisdiction?: string;

  /** Creates a new DeviceDefinitionUdiDeviceIdentifier. @param props - Initial values. */
  constructor(props?: Partial<DeviceDefinitionUdiDeviceIdentifier>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for DeviceDefinition. */
export class DeviceDefinitionDeviceName extends BackboneElement {

  /** The name of the device. */
  @IsOptional()
  @IsString()
  name?: string;

  /** The type of device name, such as registered name or user-friendly name. */
  @IsOptional()
  @IsEnum(DeviceNameType)
  type?: DeviceNameType;

  /** Creates a new DeviceDefinitionDeviceName. @param props - Initial values. */
  constructor(props?: Partial<DeviceDefinitionDeviceName>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for DeviceDefinition. */
export class DeviceDefinitionSpecialization extends BackboneElement {

  /** The standard that is used to operate and communicate. */
  @IsOptional()
  @IsString()
  systemType?: string;

  /** The version of the standard that is used to operate and communicate. */
  @IsOptional()
  @IsString()
  version?: string;

  /** Creates a new DeviceDefinitionSpecialization. @param props - Initial values. */
  constructor(props?: Partial<DeviceDefinitionSpecialization>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for DeviceDefinition. */
export class DeviceDefinitionCapability extends BackboneElement {

  /** Type of capability. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Description of capability. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  description?: CodeableConcept[];

  /** Creates a new DeviceDefinitionCapability. @param props - Initial values. */
  constructor(props?: Partial<DeviceDefinitionCapability>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the description array. @returns This instance for chaining. */
  addDescription(item: CodeableConcept): this {
    if (!this.description) {
      this.description = [];
    }

    this.description.push(item);

    return this;
  }
}

/** Backbone element for DeviceDefinition. */
export class DeviceDefinitionProperty extends BackboneElement {

  /** Code that specifies the property. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Property value as a quantity. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Quantity)
  valueQuantity?: Quantity[];

  /** Property value as a code. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  valueCode?: CodeableConcept[];

  /** Creates a new DeviceDefinitionProperty. @param props - Initial values. */
  constructor(props?: Partial<DeviceDefinitionProperty>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the valueQuantity array. @returns This instance for chaining. */
  addValueQuantity(item: Quantity): this {
    if (!this.valueQuantity) {
      this.valueQuantity = [];
    }

    this.valueQuantity.push(item);

    return this;
  }

  /** Adds an item to the valueCode array. @returns This instance for chaining. */
  addValueCode(item: CodeableConcept): this {
    if (!this.valueCode) {
      this.valueCode = [];
    }

    this.valueCode.push(item);

    return this;
  }
}

/** Backbone element for DeviceDefinition. */
export class DeviceDefinitionMaterial extends BackboneElement {

  /** The substance used to create the material. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  substance?: CodeableConcept;

  /** Indicates an alternative material of the device. */
  @IsOptional()
  @IsBoolean()
  alternate?: boolean;

  /** Whether the substance is a known or suspected allergen. */
  @IsOptional()
  @IsBoolean()
  allergenicIndicator?: boolean;

  /** Creates a new DeviceDefinitionMaterial. @param props - Initial values. */
  constructor(props?: Partial<DeviceDefinitionMaterial>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 DeviceDefinition — the characteristics and capabilities of a medical device. */
export class DeviceDefinition extends DomainResource {

  /** Resource type constant. */
  readonly resourceType = 'DeviceDefinition';

  /** Business identifiers for this device definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceDefinitionUdiDeviceIdentifier)
  /** Unique device identifier (UDI) information. */
  udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier[];

  /** Manufacturer name as a string. */
  @IsOptional()
  @IsString()
  manufacturerString?: string;

  /** Manufacturer name as a reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  manufacturerReference?: Reference;

  /** A name given to the device to identify it. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceDefinitionDeviceName)
  deviceName?: DeviceDefinitionDeviceName[];

  /** The model number for the device. */
  @IsOptional()
  @IsString()
  modelNumber?: string;

  /** What kind of device or device system this is. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceDefinitionSpecialization)
  /** The capabilities supported on a device and the standards to which they conform. */
  specialization?: DeviceDefinitionSpecialization[];

  /** Available versions of the device. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  version?: string[];

  /** Safety characteristics of the device. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  safety?: CodeableConcept[];

  /** Shelf life and storage information. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  shelfLifeStorage?: CodeableConcept[];

  /** Physical characteristics of the device. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  physicalCharacteristics?: CodeableConcept;

  /** Language code for the human-readable text strings produced by the device. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  languageCode?: CodeableConcept[];

  /** Device capabilities. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceDefinitionCapability)
  capability?: DeviceDefinitionCapability[];

  /** The actual configuration settings of a device as it actually operates. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceDefinitionProperty)
  property?: DeviceDefinitionProperty[];

  /** An organization that is responsible for the provision and ongoing maintenance of the device. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  owner?: Reference;

  /** Contact details for an organization or a particular human that is responsible for the device. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A network address on which the device may be contacted directly. */
  @IsOptional()
  @IsString()
  url?: string;

  /** Access to on-line information about the device. */
  @IsOptional()
  @IsString()
  onlineInformation?: string;

  /** Descriptive information, usage notes or implantation information not captured elsewhere. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** The quantity of the device present in the packaging. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** The parent device it can be part of. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  parentDevice?: Reference;

  /** A substance used to create the material(s) of which the device is made. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceDefinitionMaterial)
  material?: DeviceDefinitionMaterial[];

  /** Creates a new DeviceDefinition. @param props - Initial values. */
  constructor(props?: Partial<DeviceDefinition>) {
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

  /** Adds an item to the udiDeviceIdentifier array. @returns This instance for chaining. */
  addUdiDeviceIdentifier(item: DeviceDefinitionUdiDeviceIdentifier): this {
    if (!this.udiDeviceIdentifier) {
      this.udiDeviceIdentifier = [];
    }

    this.udiDeviceIdentifier.push(item);

    return this;
  }

  /** Adds an item to the deviceName array. @returns This instance for chaining. */
  addDeviceName(item: DeviceDefinitionDeviceName): this {
    if (!this.deviceName) {
      this.deviceName = [];
    }

    this.deviceName.push(item);

    return this;
  }

  /** Adds an item to the specialization array. @returns This instance for chaining. */
  addSpecialization(item: DeviceDefinitionSpecialization): this {
    if (!this.specialization) {
      this.specialization = [];
    }

    this.specialization.push(item);

    return this;
  }

  /** Adds an item to the version array. @returns This instance for chaining. */
  addVersion(item: string): this {
    if (!this.version) {
      this.version = [];
    }

    this.version.push(item);

    return this;
  }

  /** Adds an item to the safety array. @returns This instance for chaining. */
  addSafety(item: CodeableConcept): this {
    if (!this.safety) {
      this.safety = [];
    }

    this.safety.push(item);

    return this;
  }

  /** Adds an item to the shelfLifeStorage array. @returns This instance for chaining. */
  addShelfLifeStorage(item: CodeableConcept): this {
    if (!this.shelfLifeStorage) {
      this.shelfLifeStorage = [];
    }

    this.shelfLifeStorage.push(item);

    return this;
  }

  /** Adds an item to the languageCode array. @returns This instance for chaining. */
  addLanguageCode(item: CodeableConcept): this {
    if (!this.languageCode) {
      this.languageCode = [];
    }

    this.languageCode.push(item);

    return this;
  }

  /** Adds an item to the capability array. @returns This instance for chaining. */
  addCapability(item: DeviceDefinitionCapability): this {
    if (!this.capability) {
      this.capability = [];
    }

    this.capability.push(item);

    return this;
  }

  /** Adds an item to the property array. @returns This instance for chaining. */
  addProperty(item: DeviceDefinitionProperty): this {
    if (!this.property) {
      this.property = [];
    }

    this.property.push(item);

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

  /** Adds an item to the note array. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }

  /** Adds an item to the material array. @returns This instance for chaining. */
  addMaterial(item: DeviceDefinitionMaterial): this {
    if (!this.material) {
      this.material = [];
    }

    this.material.push(item);

    return this;
  }
}
