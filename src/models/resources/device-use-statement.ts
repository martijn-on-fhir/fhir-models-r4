import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { Timing } from '../datatypes/timing.js';
import { DeviceUseStatementStatus } from '../enums/device-use-statement-status.js';

/** FHIR R4 DeviceUseStatement — a record of a device being used by a patient. */
export class DeviceUseStatement extends DomainResource {

  /** Resource type constant. */
  readonly resourceType = 'DeviceUseStatement';

  /** Business identifiers for this device use statement. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** A plan, proposal or order that is fulfilled by this device use statement. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** The status of the device use statement. */
  @IsOptional()
  @IsEnum(DeviceUseStatementStatus)
  status?: DeviceUseStatementStatus;

  /** The patient who used the device. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** Allows linking the DeviceUseStatement to the underlying request or event. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  derivedFrom?: Reference[];

  /** How often the device was used, as a Timing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  timingTiming?: Timing;

  /** How often the device was used, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  timingPeriod?: Period;

  /** How often the device was used, as a dateTime. */
  @IsOptional()
  @IsString()
  timingDateTime?: string;

  /** The time at which the statement was made or recorded. */
  @IsOptional()
  @IsString()
  recordedOn?: string;

  /** Who reported the device was being used by the patient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  source?: Reference;

  /** The details of the device used. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  device?: Reference;

  /** Reason or justification for the use of the device. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Reason or justification for the use of the device, as a reference. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** Indicates the anatomical location on the subject's body where the device was used. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept;

  /** Details about the device statement that were not represented in other attributes. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Creates a new DeviceUseStatement. @param props - Initial values. */
  constructor(props?: Partial<DeviceUseStatement>) {
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

  /** Adds an item to the basedOn array. @returns This instance for chaining. */
  addBasedOn(item: Reference): this {
    if (!this.basedOn) {
      this.basedOn = [];
    }

    this.basedOn.push(item);

    return this;
  }

  /** Adds an item to the derivedFrom array. @returns This instance for chaining. */
  addDerivedFrom(item: Reference): this {
    if (!this.derivedFrom) {
      this.derivedFrom = [];
    }

    this.derivedFrom.push(item);

    return this;
  }

  /** Adds an item to the reasonCode array. @returns This instance for chaining. */
  addReasonCode(item: CodeableConcept): this {
    if (!this.reasonCode) {
      this.reasonCode = [];
    }

    this.reasonCode.push(item);

    return this;
  }

  /** Adds an item to the reasonReference array. @returns This instance for chaining. */
  addReasonReference(item: Reference): this {
    if (!this.reasonReference) {
      this.reasonReference = [];
    }

    this.reasonReference.push(item);

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
}
