import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Ratio } from '../datatypes/ratio.js';
import { Reference } from '../datatypes/reference.js';
import { SimpleQuantity } from '../datatypes/simple-quantity.js';
import { MedicationAdministrationStatusCodes } from '../enums/medication-administration-status-codes.js';

/** Backbone element for {@link MedicationAdministration.performer}. */
export class MedicationAdministrationPerformer extends BackboneElement {

  /** Distinguishes the type of involvement of the performer in the medication administration (e.g., verifier, witness). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  function?: CodeableConcept;

  /** Indicates who or what performed the medication administration. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  actor?: Reference;

  /** Creates a new {@link MedicationAdministrationPerformer} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationAdministrationPerformer>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link MedicationAdministration.dosage}. */
export class MedicationAdministrationDosage extends BackboneElement {

  /** Free text dosage instructions that can be used for cases where the instructions are too complex to code. */
  @IsOptional()
  @IsString()
  text?: string;

  /** A coded specification of the anatomic site where the medication first entered the body. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  site?: CodeableConcept;

  /** A code specifying the route or physiological path of administration of a therapeutic agent. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  route?: CodeableConcept;

  /** A coded value indicating the method by which the medication is introduced into the body. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /** The amount of the medication given at one administration event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  dose?: SimpleQuantity;

  /** Identifies the speed with which the medication was or will be introduced into the patient, expressed as a Ratio. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  rateRatio?: Ratio;

  /** Identifies the speed with which the medication was or will be introduced into the patient, expressed as a SimpleQuantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  rateQuantity?: SimpleQuantity;

  /** Creates a new {@link MedicationAdministrationDosage} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationAdministrationDosage>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 MedicationAdministration resource — describes the event of a patient consuming or otherwise being administered a medication. */
export class MedicationAdministration extends DomainResource {

  /** The FHIR resource type, always "MedicationAdministration". */
  readonly resourceType = 'MedicationAdministration';

  /** Identifiers associated with this Medication Administration that are defined by business processes. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiates?: string[];

  /** A larger event of which this particular event is a component or step. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /** Will generally be set to show that the administration has been completed. */
  @IsOptional()
  @IsEnum(MedicationAdministrationStatusCodes)
  status?: MedicationAdministrationStatusCodes;

  /** A code indicating why the administration was not performed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  statusReason?: CodeableConcept[];

  /** Indicates where the medication is expected to be consumed or administered, such as inpatient or outpatient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** Identifies the medication that was administered, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  medicationCodeableConcept?: CodeableConcept;

  /** Identifies the medication that was administered, as a Reference to a Medication resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  medicationReference?: Reference;

  /** The person or animal or group receiving the medication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The visit, admission, or other contact between patient and health care provider during which the medication administration was performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** Additional information (e.g., patient height and weight) that supports the administration of the medication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supportingInformation?: Reference[];

  /** A specific date/time or interval of time during which the administration took place, expressed as a dateTime. */
  @IsOptional()
  @IsString()
  effectiveDateTime?: string;

  /** A specific date/time or interval of time during which the administration took place, expressed as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /** Indicates who or what performed the medication administration and how they were involved. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationAdministrationPerformer)
  performer?: MedicationAdministrationPerformer[];

  /** A code indicating why the medication was given. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** A reference to a condition or observation that supports why the medication was administered. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** The original request, instruction, or authority to perform the administration. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  request?: Reference;

  /** The device used in administering the medication to the patient (e.g., a particular infusion pump). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  device?: Reference[];

  /** Extra information about the medication administration that is not conveyed by the other attributes. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Describes the medication dosage information details, such as dose, rate, site, route, etc. */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicationAdministrationDosage)
  dosage?: MedicationAdministrationDosage;

  /** A summary of the events of interest that have occurred, such as when the administration was verified. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  eventHistory?: Reference[];

  /** Creates a new {@link MedicationAdministration} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationAdministration>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link Identifier} to the {@link MedicationAdministration.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a URI string to the {@link MedicationAdministration.instantiates instantiates} array. @param item - The URI string to add. @returns This instance for chaining. */
  addInstantiates(item: string): this {
    if (!this.instantiates) {
      this.instantiates = [];
    }

    this.instantiates.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link MedicationAdministration.partOf partOf} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addPartOf(item: Reference): this {
    if (!this.partOf) {
      this.partOf = [];
    }

    this.partOf.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link MedicationAdministration.statusReason statusReason} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addStatusReason(item: CodeableConcept): this {
    if (!this.statusReason) {
      this.statusReason = [];
    }

    this.statusReason.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link MedicationAdministration.supportingInformation supportingInformation} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addSupportingInformation(item: Reference): this {
    if (!this.supportingInformation) {
      this.supportingInformation = [];
    }

    this.supportingInformation.push(item);

    return this;
  }

  /** Adds a {@link MedicationAdministrationPerformer} to the {@link MedicationAdministration.performer performer} array. @param item - The {@link MedicationAdministrationPerformer} to add. @returns This instance for chaining. */
  addPerformer(item: MedicationAdministrationPerformer): this {
    if (!this.performer) {
      this.performer = [];
    }

    this.performer.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link MedicationAdministration.reasonCode reasonCode} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addReasonCode(item: CodeableConcept): this {
    if (!this.reasonCode) {
      this.reasonCode = [];
    }

    this.reasonCode.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link MedicationAdministration.reasonReference reasonReference} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addReasonReference(item: Reference): this {
    if (!this.reasonReference) {
      this.reasonReference = [];
    }

    this.reasonReference.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link MedicationAdministration.device device} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addDevice(item: Reference): this {
    if (!this.device) {
      this.device = [];
    }

    this.device.push(item);

    return this;
  }

  /** Adds a {@link Annotation} to the {@link MedicationAdministration.note note} array. @param item - The {@link Annotation} to add. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link MedicationAdministration.eventHistory eventHistory} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addEventHistory(item: Reference): this {
    if (!this.eventHistory) {
      this.eventHistory = [];
    }

    this.eventHistory.push(item);

    return this;
  }
}
