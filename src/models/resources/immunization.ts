import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { ImmunizationStatusCodes } from '../enums/immunization-status-codes.js';

/** Backbone element for Immunization. */
export class ImmunizationPerformer extends BackboneElement {

  /** Describes the type of performance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  function?: CodeableConcept;

  /** The practitioner or organization who performed the action. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  actor?: Reference;

  /** Creates a new ImmunizationPerformer. @param props - Initial values. */
  constructor(props?: Partial<ImmunizationPerformer>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Immunization. */
export class ImmunizationEducation extends BackboneElement {

  /** Identifier of the material presented to the patient. */
  @IsOptional()
  @IsString()
  documentType?: string;

  /** Reference pointer to the educational material given to the patient. */
  @IsOptional()
  @IsString()
  reference?: string;

  /** Date the educational material was published. */
  @IsOptional()
  @IsString()
  publicationDate?: string;

  /** Date the educational material was given to the patient. */
  @IsOptional()
  @IsString()
  presentationDate?: string;

  /** Creates a new ImmunizationEducation. @param props - Initial values. */
  constructor(props?: Partial<ImmunizationEducation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Immunization. */
export class ImmunizationReaction extends BackboneElement {

  /** Date of reaction to the immunization. */
  @IsOptional()
  @IsString()
  date?: string;

  /** Details of the reaction. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  detail?: Reference;

  /** Self-reported indicator. */
  @IsOptional()
  @IsBoolean()
  reported?: boolean;

  /** Creates a new ImmunizationReaction. @param props - Initial values. */
  constructor(props?: Partial<ImmunizationReaction>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Immunization. */
export class ImmunizationProtocolApplied extends BackboneElement {

  /** One possible path to achieve presumed immunity against a disease. */
  @IsOptional()
  @IsString()
  series?: string;

  /** Indicates the authority who published the protocol. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  authority?: Reference;

  /** The vaccine preventable disease the dose is being administered against. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  targetDisease?: CodeableConcept[];

  /** Nominal position in a series as a positive integer. */
  @IsOptional()
  @IsNumber()
  doseNumberPositiveInt?: number;

  /** Nominal position in a series as a string. */
  @IsOptional()
  @IsString()
  doseNumberString?: string;

  /** The recommended number of doses to achieve immunity as a positive integer. */
  @IsOptional()
  @IsNumber()
  seriesDosesPositiveInt?: number;

  /** The recommended number of doses to achieve immunity as a string. */
  @IsOptional()
  @IsString()
  seriesDosesString?: string;

  /** Creates a new ImmunizationProtocolApplied. @param props - Initial values. */
  constructor(props?: Partial<ImmunizationProtocolApplied>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the targetDisease array. @returns This instance for chaining. */
  addTargetDisease(item: CodeableConcept): this {
    if (!this.targetDisease) {
      this.targetDisease = [];
    }

    this.targetDisease.push(item);

    return this;
  }
}

/** FHIR R4 Immunization — describes the event of a patient being administered a vaccine. */
export class Immunization extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'Immunization';

  /** A unique identifier assigned to this immunization record. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Indicates the current status of the immunization event. */
  @IsOptional()
  @IsEnum(ImmunizationStatusCodes)
  status?: ImmunizationStatusCodes;

  /** Indicates the reason the immunization event was not performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  statusReason?: CodeableConcept;

  /** Vaccine that was administered or was to be administered. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  vaccineCode?: CodeableConcept;

  /** The patient who either received or did not receive the immunization. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /** The visit or admission or other contact during which the vaccination occurred. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** Date vaccine administered or was to be administered as a dateTime. */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  /** Date vaccine administered or was to be administered as a string. */
  @IsOptional()
  @IsString()
  occurrenceString?: string;

  /** The date the occurrence of the immunization was first captured in the record. */
  @IsOptional()
  @IsString()
  recorded?: string;

  /** Indicates whether the data contained in the resource was captured by the individual/organization that administered the vaccine. */
  @IsOptional()
  @IsBoolean()
  primarySource?: boolean;

  /** The source of the data when the report of the immunization event is not based on information from the person who gave the vaccination. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  reportOrigin?: CodeableConcept;

  /** The service delivery location where the vaccine administration occurred. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /** Name of vaccine manufacturer. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  manufacturer?: Reference;

  /** Lot number of the vaccine product. */
  @IsOptional()
  @IsString()
  lotNumber?: string;

  /** Date vaccine batch expires. */
  @IsOptional()
  @IsString()
  expirationDate?: string;

  /** Body site where vaccine was administered. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  site?: CodeableConcept;

  /** The path by which the vaccine product is taken into the body. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  route?: CodeableConcept;

  /** The quantity of vaccine product that was administered. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  doseQuantity?: Quantity;

  /** Indicates who performed the immunization event. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImmunizationPerformer)
  performer?: ImmunizationPerformer[];

  /** Extra information about the immunization that is not conveyed by the other attributes. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Reasons why the vaccine was administered. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Condition, Observation, or DiagnosticReport that supports why the immunization was administered. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** Indication if a dose is considered to be subpotent. */
  @IsOptional()
  @IsBoolean()
  isSubpotent?: boolean;

  /** Reason why a dose is considered to be subpotent. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  subpotentReason?: CodeableConcept[];

  /** Educational material presented to the patient or guardian at the time of vaccine administration. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImmunizationEducation)
  education?: ImmunizationEducation[];

  /** Indicates a patient's eligibility for a funding program. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  programEligibility?: CodeableConcept[];

  /** Indicates the source of the vaccine actually administered. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  fundingSource?: CodeableConcept;

  /** Categorical data indicating that an adverse event is associated in time to an immunization. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImmunizationReaction)
  reaction?: ImmunizationReaction[];

  /** The protocol (set of recommendations) being followed by the provider who administered the dose. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImmunizationProtocolApplied)
  protocolApplied?: ImmunizationProtocolApplied[];

  /** Creates a new Immunization. @param props - Initial values. */
  constructor(props?: Partial<Immunization>) {
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

  /** Adds an item to the performer array. @returns This instance for chaining. */
  addPerformer(item: ImmunizationPerformer): this {
    if (!this.performer) {
      this.performer = [];
    }

    this.performer.push(item);

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

  /** Adds an item to the subpotentReason array. @returns This instance for chaining. */
  addSubpotentReason(item: CodeableConcept): this {
    if (!this.subpotentReason) {
      this.subpotentReason = [];
    }

    this.subpotentReason.push(item);

    return this;
  }

  /** Adds an item to the education array. @returns This instance for chaining. */
  addEducation(item: ImmunizationEducation): this {
    if (!this.education) {
      this.education = [];
    }

    this.education.push(item);

    return this;
  }

  /** Adds an item to the programEligibility array. @returns This instance for chaining. */
  addProgramEligibility(item: CodeableConcept): this {
    if (!this.programEligibility) {
      this.programEligibility = [];
    }

    this.programEligibility.push(item);

    return this;
  }

  /** Adds an item to the reaction array. @returns This instance for chaining. */
  addReaction(item: ImmunizationReaction): this {
    if (!this.reaction) {
      this.reaction = [];
    }

    this.reaction.push(item);

    return this;
  }

  /** Adds an item to the protocolApplied array. @returns This instance for chaining. */
  addProtocolApplied(item: ImmunizationProtocolApplied): this {
    if (!this.protocolApplied) {
      this.protocolApplied = [];
    }

    this.protocolApplied.push(item);

    return this;
  }
}
