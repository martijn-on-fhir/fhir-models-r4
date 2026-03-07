import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Dosage } from '../datatypes/dosage.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { MedicationStatementStatusCodes } from '../enums/medication-statement-status-codes.js';

/** FHIR R4 MedicationStatement — a record of a medication that is being consumed by a patient. */
export class MedicationStatement extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'MedicationStatement';

  /** Identifiers associated with this medication statement. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** A plan, proposal or order that is fulfilled in whole or in part by this event. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** A larger event of which this particular event is a component or step. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /** A code representing the patient or other source's judgment about the state of the medication used. */
  @IsOptional()
  @IsEnum(MedicationStatementStatusCodes)
  status?: MedicationStatementStatusCodes;

  /** Captures the reason for the current state of the medication statement. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  statusReason?: CodeableConcept[];

  /** Indicates where the medication is expected to be consumed or administered. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** Identifies the medication being administered as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  medicationCodeableConcept?: CodeableConcept;

  /** Identifies the medication being administered as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  medicationReference?: Reference;

  /** The person, animal or group who is/was taking the medication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The encounter or episode of care that establishes the context for this medication statement. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** The interval of time during which it is being asserted that the patient is/was/will be taking the medication, as a dateTime. */
  @IsOptional()
  @IsString()
  effectiveDateTime?: string;

  /** The interval of time during which it is being asserted that the patient is/was/will be taking the medication, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /** The date when the medication statement was asserted by the information source. */
  @IsOptional()
  @IsString()
  dateAsserted?: string;

  /** The person or organization that provided the information about the taking of this medication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  informationSource?: Reference;

  /** Allows linking the medication statement to the underlying medication request, or to other information. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  derivedFrom?: Reference[];

  /** A reason for why the medication is being/was taken. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Condition or observation that supports why the medication is being/was taken. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** Provides extra information about the medication statement that is not conveyed by the other attributes. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Indicates how the medication is/was or should be taken by the patient. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Dosage)
  dosage?: Dosage[];

  /** Creates a new MedicationStatement. @param props - Initial values. */
  constructor(props?: Partial<MedicationStatement>) {
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

  /** Adds an item to the partOf array. @returns This instance for chaining. */
  addPartOf(item: Reference): this {
    if (!this.partOf) {
      this.partOf = [];
    }

    this.partOf.push(item);

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

  /** Adds an item to the dosage array. @returns This instance for chaining. */
  addDosage(item: Dosage): this {
    if (!this.dosage) {
      this.dosage = [];
    }

    this.dosage.push(item);

    return this;
  }
}
