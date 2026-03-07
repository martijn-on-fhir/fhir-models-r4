import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Dosage } from '../datatypes/dosage.js';
import { Duration } from '../datatypes/duration.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { MedicationRequestIntent } from '../enums/medication-request-intent.js';
import { MedicationRequestPriority } from '../enums/medication-request-priority.js';
import { MedicationRequestStatus } from '../enums/medication-request-status.js';

/** Backbone element for MedicationRequest. */
export class MedicationRequestDispenseRequest extends BackboneElement {

  /** This indicates the validity period of a prescription. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  validityPeriod?: Period;

  /** An integer indicating the number of times the dispense is allowed. */
  @IsOptional()
  @IsNumber()
  numberOfRepeatsAllowed?: number;

  /** The amount that is to be dispensed for one fill. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** Identifies the period time over which the supplied product is expected to be used. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  expectedSupplyDuration?: Duration;

  /** Indicates the intended dispensing Organization specified by the prescriber. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  performer?: Reference;

  /** Creates a new MedicationRequestDispenseRequest. @param props - Initial values. */
  constructor(props?: Partial<MedicationRequestDispenseRequest>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for MedicationRequest. */
export class MedicationRequestSubstitution extends BackboneElement {

  /** True if the prescriber allows a different drug to be dispensed from what was prescribed, as a boolean. */
  @IsOptional()
  @IsBoolean()
  allowedBoolean?: boolean;

  /** True if the prescriber allows a different drug to be dispensed from what was prescribed, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  allowedCodeableConcept?: CodeableConcept;

  /** Indicates the reason for the substitution, or why substitution must or must not be performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  reason?: CodeableConcept;

  /** Creates a new MedicationRequestSubstitution. @param props - Initial values. */
  constructor(props?: Partial<MedicationRequestSubstitution>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 MedicationRequest — an order or request for supply of the medication and administration instructions. */
export class MedicationRequest extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'MedicationRequest';

  /** Identifiers associated with this medication request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** A code specifying the current state of the order. */
  @IsOptional()
  @IsEnum(MedicationRequestStatus)
  status?: MedicationRequestStatus;

  /** Captures the reason for the current state of the medication request. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  statusReason?: CodeableConcept;

  /** Whether the request is a proposal, plan, or an original order. */
  @IsOptional()
  @IsEnum(MedicationRequestIntent)
  intent?: MedicationRequestIntent;

  /** Indicates the type of medication request (inpatient, outpatient, community, etc.). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** Indicates how quickly the medication request should be addressed with respect to other requests. */
  @IsOptional()
  @IsEnum(MedicationRequestPriority)
  priority?: MedicationRequestPriority;

  /** If true indicates that the provider is asking for the medication request not to occur. */
  @IsOptional()
  @IsBoolean()
  doNotPerform?: boolean;

  /** Indicates if this record was captured as a secondary reported record rather than as an original, as a boolean. */
  @IsOptional()
  @IsBoolean()
  reportedBoolean?: boolean;

  /** Indicates if this record was captured as a secondary reported record rather than as an original, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  reportedReference?: Reference;

  /** Identifies the medication being requested as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  medicationCodeableConcept?: CodeableConcept;

  /** Identifies the medication being requested as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  medicationReference?: Reference;

  /** A link to a resource representing the person or set of individuals to whom the medication will be given. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The encounter or episode of care that establishes the context for this medication request. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** Include additional information that might be relevant to the prescription. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supportingInformation?: Reference[];

  /** The date when the prescription was initially written or authored on. */
  @IsOptional()
  @IsString()
  authoredOn?: string;

  /** The individual, organization, or device that initiated the request and has responsibility for its activation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  requester?: Reference;

  /** The specified desired performer of the medication treatment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  performer?: Reference;

  /** Indicates the type of performer of the administration of the medication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  performerType?: CodeableConcept;

  /** The person who entered the order on behalf of another individual. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  recorder?: Reference;

  /** The reason or the indication for ordering or not ordering the medication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Condition or observation that supports why the medication was ordered. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to as canonical. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesCanonical?: string[];

  /** The URL pointing to an externally maintained protocol, guideline, orderset or other definition. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesUri?: string[];

  /** A plan or request that is fulfilled in whole or in part by this medication request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** A shared identifier common to all requests that were authorized more or less simultaneously by a single author. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  groupIdentifier?: Identifier;

  /** The description of the overall pattern of the administration of the medication to the patient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  courseOfTherapyType?: CodeableConcept;

  /** Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations for the medication request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  insurance?: Reference[];

  /** Extra information about the prescription that could not be conveyed by the other attributes. */
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

  /** Indicates the specific details for the dispense or medication supply part of a medication request. */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicationRequestDispenseRequest)
  dispenseRequest?: MedicationRequestDispenseRequest;

  /** Indicates whether or not substitution can or should be part of the dispense. */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicationRequestSubstitution)
  substitution?: MedicationRequestSubstitution;

  /** A link to a resource representing an earlier order related to this order. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  priorPrescription?: Reference;

  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  detectedIssue?: Reference[];

  /** Links to provenance records for past versions of this resource. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  eventHistory?: Reference[];

  /** Creates a new MedicationRequest. @param props - Initial values. */
  constructor(props?: Partial<MedicationRequest>) {
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

  /** Adds an item to the category array. @returns This instance for chaining. */
  addCategory(item: CodeableConcept): this {
    if (!this.category) {
      this.category = [];
    }

    this.category.push(item);

    return this;
  }

  /** Adds an item to the supportingInformation array. @returns This instance for chaining. */
  addSupportingInformation(item: Reference): this {
    if (!this.supportingInformation) {
      this.supportingInformation = [];
    }

    this.supportingInformation.push(item);

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

  /** Adds an item to the instantiatesCanonical array. @returns This instance for chaining. */
  addInstantiatesCanonical(item: string): this {
    if (!this.instantiatesCanonical) {
      this.instantiatesCanonical = [];
    }

    this.instantiatesCanonical.push(item);

    return this;
  }

  /** Adds an item to the instantiatesUri array. @returns This instance for chaining. */
  addInstantiatesUri(item: string): this {
    if (!this.instantiatesUri) {
      this.instantiatesUri = [];
    }

    this.instantiatesUri.push(item);

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

  /** Adds an item to the insurance array. @returns This instance for chaining. */
  addInsurance(item: Reference): this {
    if (!this.insurance) {
      this.insurance = [];
    }

    this.insurance.push(item);

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

  /** Adds an item to the dosageInstruction array. @returns This instance for chaining. */
  addDosageInstruction(item: Dosage): this {
    if (!this.dosageInstruction) {
      this.dosageInstruction = [];
    }

    this.dosageInstruction.push(item);

    return this;
  }

  /** Adds an item to the detectedIssue array. @returns This instance for chaining. */
  addDetectedIssue(item: Reference): this {
    if (!this.detectedIssue) {
      this.detectedIssue = [];
    }

    this.detectedIssue.push(item);

    return this;
  }

  /** Adds an item to the eventHistory array. @returns This instance for chaining. */
  addEventHistory(item: Reference): this {
    if (!this.eventHistory) {
      this.eventHistory = [];
    }

    this.eventHistory.push(item);

    return this;
  }
}
