import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactPoint } from '../datatypes/contact-point.js';
import { Identifier } from '../datatypes/identifier.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { DeviceNameType } from '../enums/device-name-type.js';
import { FHIRDeviceStatus } from '../enums/fhir-device-status.js';
import { UDIEntryType } from '../enums/udi-entry-type.js';

/** Backbone element for Device. */
export class DeviceUdiCarrier extends BackboneElement {

  /** The device identifier (DI) is a mandatory, fixed portion of a UDI. */
  @IsOptional()
  @IsString()
  deviceIdentifier?: string;

  /** Organization that is charged with issuing UDIs for devices. */
  @IsOptional()
  @IsString()
  issuer?: string;

  /** The identity of the authoritative source for UDI generation within a jurisdiction. */
  @IsOptional()
  @IsString()
  jurisdiction?: string;

  /** The full UDI carrier of the Automatic Identification and Data Capture (AIDC) technology representation. */
  @IsOptional()
  @IsString()
  carrierAIDC?: string;

  /** The full UDI carrier as the human readable form (HRF). */
  @IsOptional()
  @IsString()
  carrierHRF?: string;

  /** A coded entry to indicate how the data was entered. */
  @IsOptional()
  @IsEnum(UDIEntryType)
  entryType?: UDIEntryType;

  /** Creates a new DeviceUdiCarrier. @param props - Initial values. */
  constructor(props?: Partial<DeviceUdiCarrier>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Device. */
export class DeviceDeviceName extends BackboneElement {

  /** The name of the device. */
  @IsOptional()
  @IsString()
  name?: string;

  /** The type of device name. */
  @IsOptional()
  @IsEnum(DeviceNameType)
  type?: DeviceNameType;

  /** Creates a new DeviceDeviceName. @param props - Initial values. */
  constructor(props?: Partial<DeviceDeviceName>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Device. */
export class DeviceSpecialization extends BackboneElement {

  /** The standard that is used to operate and communicate. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  systemType?: CodeableConcept;

  /** The version of the standard that is used to operate and communicate. */
  @IsOptional()
  @IsString()
  version?: string;

  /** Creates a new DeviceSpecialization. @param props - Initial values. */
  constructor(props?: Partial<DeviceSpecialization>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Device. */
export class DeviceVersion extends BackboneElement {

  /** The type of the device version. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** A single component of the device version. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  component?: Identifier;

  /** The version text. */
  @IsOptional()
  @IsString()
  value?: string;

  /** Creates a new DeviceVersion. @param props - Initial values. */
  constructor(props?: Partial<DeviceVersion>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Device. */
export class DeviceProperty extends BackboneElement {

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

  /** Creates a new DeviceProperty. @param props - Initial values. */
  constructor(props?: Partial<DeviceProperty>) {
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

/** FHIR R4 Device — a type of manufactured item used in the provision of healthcare. */
export class Device extends DomainResource {

  /** Resource type constant. */
  readonly resourceType = 'Device';

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  /** Business identifiers for this device. */
  identifier?: Identifier[];

  /** The reference to the definition for this device. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  definition?: Reference;

  /** Unique device identifier (UDI) barcode or RFID string. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceUdiCarrier)
  udiCarrier?: DeviceUdiCarrier[];

  /** Status of the device availability. */
  @IsOptional()
  @IsEnum(FHIRDeviceStatus)
  status?: FHIRDeviceStatus;

  /** Reason for the current status of the device. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  statusReason?: CodeableConcept[];

  /** The distinct identification string as required by regulation. */
  @IsOptional()
  @IsString()
  distinctIdentifier?: string;

  /** A name of the manufacturer. */
  @IsOptional()
  @IsString()
  manufacturer?: string;

  /** The date and time when the device was manufactured. */
  @IsOptional()
  @IsString()
  manufactureDate?: string;

  /** The date and time beyond which this device is no longer valid or should not be used. */
  @IsOptional()
  @IsString()
  expirationDate?: string;

  /** Lot number assigned by the manufacturer. */
  @IsOptional()
  @IsString()
  lotNumber?: string;

  /** The serial number assigned by the organization when the device was manufactured. */
  @IsOptional()
  @IsString()
  serialNumber?: string;

  /** This represents the manufacturer's name of the device as provided by the device. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceDeviceName)
  deviceName?: DeviceDeviceName[];

  /** The model number for the device. */
  @IsOptional()
  @IsString()
  modelNumber?: string;

  /** The part number of the device. */
  @IsOptional()
  @IsString()
  partNumber?: string;

  /** The kind or type of device. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The capabilities supported on a device and the standards to which they conform. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceSpecialization)
  specialization?: DeviceSpecialization[];

  /** The actual design of the device or software version running on the device. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceVersion)
  version?: DeviceVersion[];

  /** The actual configuration settings of a device as it actually operates. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceProperty)
  property?: DeviceProperty[];

  /** Patient information if the device is affixed to a person. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /** An organization that is responsible for the provision and ongoing maintenance of the device. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  owner?: Reference;

  /** Contact details for an organization or a particular human that is responsible for the device. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  contact?: ContactPoint[];

  /** The place where the device can be found. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /** A network address on which the device may be contacted directly. */
  @IsOptional()
  @IsString()
  url?: string;

  /** Descriptive information, usage notes or implantation information. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Provides additional safety characteristics about a medical device. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  safety?: CodeableConcept[];

  /** The parent device. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  parent?: Reference;

  /** Creates a new Device. @param props - Initial values. */
  constructor(props?: Partial<Device>) {
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

  /** Adds an item to the udiCarrier array. @returns This instance for chaining. */
  addUdiCarrier(item: DeviceUdiCarrier): this {
    if (!this.udiCarrier) {
      this.udiCarrier = [];
    }

    this.udiCarrier.push(item);

    return this;
  }

  /** Adds an item to the statusReason array. @returns This instance for chaining. */
  addStatusReason(item: CodeableConcept): this {
    if (!this.statusReason) {
      this.statusReason = [];
    }

    this.statusReason.push(item);

    return this;
  }

  /** Adds an item to the deviceName array. @returns This instance for chaining. */
  addDeviceName(item: DeviceDeviceName): this {
    if (!this.deviceName) {
      this.deviceName = [];
    }

    this.deviceName.push(item);

    return this;
  }

  /** Adds an item to the specialization array. @returns This instance for chaining. */
  addSpecialization(item: DeviceSpecialization): this {
    if (!this.specialization) {
      this.specialization = [];
    }

    this.specialization.push(item);

    return this;
  }

  /** Adds an item to the version array. @returns This instance for chaining. */
  addVersion(item: DeviceVersion): this {
    if (!this.version) {
      this.version = [];
    }

    this.version.push(item);

    return this;
  }

  /** Adds an item to the property array. @returns This instance for chaining. */
  addProperty(item: DeviceProperty): this {
    if (!this.property) {
      this.property = [];
    }

    this.property.push(item);

    return this;
  }

  /** Adds an item to the contact array. @returns This instance for chaining. */
  addContact(item: ContactPoint): this {
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

  /** Adds an item to the safety array. @returns This instance for chaining. */
  addSafety(item: CodeableConcept): this {
    if (!this.safety) {
      this.safety = [];
    }

    this.safety.push(item);

    return this;
  }
}
