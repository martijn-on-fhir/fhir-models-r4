import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Dosage } from '../datatypes/dosage.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';
import { SimpleQuantity } from '../datatypes/simple-quantity.js';
import { MedicationDispenseStatusCodes } from '../enums/medication-dispense-status-codes.js';

/** Backbone element for {@link MedicationDispense.performer}. */
export class MedicationDispensePerformer extends BackboneElement {

  /** Distinguishes the type of performer in the dispense (e.g., checker, packager). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  function?: CodeableConcept;

  /** The device, practitioner, or organization who performed the action. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  actor?: Reference;

  /** Creates a new {@link MedicationDispensePerformer} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationDispensePerformer>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link MedicationDispense.substitution}. */
export class MedicationDispenseSubstitution extends BackboneElement {

  /** True if the dispenser dispensed a different drug or product from what was prescribed. */
  @IsOptional()
  @IsBoolean()
  wasSubstituted?: boolean;

  /** A code signifying whether a different drug was dispensed from what was prescribed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Indicates the reason for the substitution (or lack of substitution). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reason?: CodeableConcept[];

  /** The person or organization that has primary responsibility for the substitution. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  responsibleParty?: Reference[];

  /** Creates a new {@link MedicationDispenseSubstitution} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationDispenseSubstitution>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link CodeableConcept} to the {@link MedicationDispenseSubstitution.reason reason} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addReason(item: CodeableConcept): this {
    if (!this.reason) {
      this.reason = [];
    }

    this.reason.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link MedicationDispenseSubstitution.responsibleParty responsibleParty} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addResponsibleParty(item: Reference): this {
    if (!this.responsibleParty) {
      this.responsibleParty = [];
    }

    this.responsibleParty.push(item);

    return this;
  }
}

/** FHIR R4 MedicationDispense resource — indicates that a medication product has been dispensed for a named patient/subject. */
export class MedicationDispense extends DomainResource {

  /** The FHIR resource type, always "MedicationDispense". */
  readonly resourceType = 'MedicationDispense';

  /** Identifiers associated with this Medication Dispense that are defined by business processes. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The procedure that triggered the dispense. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /** A code specifying the state of the set of dispense events. */
  @IsOptional()
  @IsEnum(MedicationDispenseStatusCodes)
  status?: MedicationDispenseStatusCodes;

  /** Indicates the reason why a dispense was not performed, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  statusReasonCodeableConcept?: CodeableConcept;

  /** Indicates the reason why a dispense was not performed, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  statusReasonReference?: Reference;

  /** Indicates the type of medication dispense, such as a refill or emergency fill. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** Identifies the medication being administered, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  medicationCodeableConcept?: CodeableConcept;

  /** Identifies the medication being administered, as a Reference to a Medication resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  medicationReference?: Reference;

  /** A link to a resource representing the person or group to whom the medication will be given. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The encounter or episode of care that establishes the context for this event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** Additional information that supports the medication being dispensed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supportingInformation?: Reference[];

  /** Indicates who or what performed the dispense event. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationDispensePerformer)
  performer?: MedicationDispensePerformer[];

  /** The principal physical location where the dispense was performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /** Indicates the medication order that is being dispensed against. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  authorizingPrescription?: Reference[];

  /** Indicates the type of dispensing event that is performed (e.g., trial fill, partial fill). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The amount of medication that has been dispensed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  quantity?: SimpleQuantity;

  /** The amount of medication expressed as a timing amount (e.g., number of days' supply). */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  daysSupply?: SimpleQuantity;

  /** The time when the dispensed product was packaged and reviewed. */
  @IsOptional()
  @IsString()
  whenPrepared?: string;

  /** The time the dispensed product was provided to the patient or their representative. */
  @IsOptional()
  @IsString()
  whenHandedOver?: string;

  /** Identification of the facility/location where the medication was shipped to as part of the dispense event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  destination?: Reference;

  /** Identifies the person who picked up the medication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  receiver?: Reference[];

  /** Extra information about the dispense that could not be conveyed in the other attributes. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Indicates how the medication is to be used by the patient. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Dosage)
  dosageInstruction?: Dosage[];

  /** Indicates whether or not substitution was made as part of the dispense. */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicationDispenseSubstitution)
  substitution?: MedicationDispenseSubstitution;

  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  detectedIssue?: Reference[];

  /** A summary of the events of interest that have occurred, such as when the dispense was verified. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  eventHistory?: Reference[];

  /** Creates a new {@link MedicationDispense} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationDispense>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link Identifier} to the {@link MedicationDispense.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link MedicationDispense.partOf partOf} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addPartOf(item: Reference): this {
    if (!this.partOf) {
      this.partOf = [];
    }

    this.partOf.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link MedicationDispense.supportingInformation supportingInformation} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addSupportingInformation(item: Reference): this {
    if (!this.supportingInformation) {
      this.supportingInformation = [];
    }

    this.supportingInformation.push(item);

    return this;
  }

  /** Adds a {@link MedicationDispensePerformer} to the {@link MedicationDispense.performer performer} array. @param item - The {@link MedicationDispensePerformer} to add. @returns This instance for chaining. */
  addPerformer(item: MedicationDispensePerformer): this {
    if (!this.performer) {
      this.performer = [];
    }

    this.performer.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link MedicationDispense.authorizingPrescription authorizingPrescription} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addAuthorizingPrescription(item: Reference): this {
    if (!this.authorizingPrescription) {
      this.authorizingPrescription = [];
    }

    this.authorizingPrescription.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link MedicationDispense.receiver receiver} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addReceiver(item: Reference): this {
    if (!this.receiver) {
      this.receiver = [];
    }

    this.receiver.push(item);

    return this;
  }

  /** Adds a {@link Annotation} to the {@link MedicationDispense.note note} array. @param item - The {@link Annotation} to add. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }

  /** Adds a {@link Dosage} to the {@link MedicationDispense.dosageInstruction dosageInstruction} array. @param item - The {@link Dosage} to add. @returns This instance for chaining. */
  addDosageInstruction(item: Dosage): this {
    if (!this.dosageInstruction) {
      this.dosageInstruction = [];
    }

    this.dosageInstruction.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link MedicationDispense.detectedIssue detectedIssue} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addDetectedIssue(item: Reference): this {
    if (!this.detectedIssue) {
      this.detectedIssue = [];
    }

    this.detectedIssue.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link MedicationDispense.eventHistory eventHistory} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addEventHistory(item: Reference): this {
    if (!this.eventHistory) {
      this.eventHistory = [];
    }

    this.eventHistory.push(item);

    return this;
  }
}
