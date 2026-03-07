import { Type } from 'class-transformer';
import { IsOptional, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { Duration } from '../datatypes/duration.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { EncounterLocationStatus } from '../enums/encounter-location-status.js';
import { EncounterStatus } from '../enums/encounter-status.js';

/** Backbone element for Encounter. */
export class EncounterStatusHistory extends BackboneElement {

  /** The status of the encounter during this period. */
  @IsOptional()
  @IsEnum(EncounterStatus)
  status?: EncounterStatus;

  /** The time that the episode was in the specified status. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Creates a new EncounterStatusHistory. @param props - Initial values. */
  constructor(props?: Partial<EncounterStatusHistory>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Encounter. */
export class EncounterClassHistory extends BackboneElement {

  /** The class of the encounter during this period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  class?: Coding;

  /** The time that the episode was in the specified class. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Creates a new EncounterClassHistory. @param props - Initial values. */
  constructor(props?: Partial<EncounterClassHistory>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Encounter. */
export class EncounterParticipant extends BackboneElement {

  /** Role of participant in encounter. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /** The period of time that the specified participant participated in the encounter. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Persons involved in the encounter other than the patient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  individual?: Reference;

  /** Creates a new EncounterParticipant. @param props - Initial values. */
  constructor(props?: Partial<EncounterParticipant>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the type array. @returns This instance for chaining. */
  addType(item: CodeableConcept): this {
    if (!this.type) {
      this.type = [];
    }

    this.type.push(item);

    return this;
  }
}

/** Backbone element for Encounter. */
export class EncounterDiagnosis extends BackboneElement {

  /** Reason the encounter takes place, as specified using information from another resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  condition?: Reference;

  /** Role that this diagnosis has within the encounter. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  use?: CodeableConcept;

  /** Ranking of the diagnosis for each role type. */
  @IsOptional()
  rank?: number;

  /** Creates a new EncounterDiagnosis. @param props - Initial values. */
  constructor(props?: Partial<EncounterDiagnosis>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Encounter. */
export class EncounterHospitalization extends BackboneElement {

  /** Pre-admission identifier. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  preAdmissionIdentifier?: Identifier;

  /** The location or organization from which the patient came before admission. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  origin?: Reference;

  /** From where patient was admitted. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  admitSource?: CodeableConcept;

  /** Whether this hospitalization is a readmission. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  reAdmission?: CodeableConcept;

  /** Diet preferences reported by the patient. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  dietPreference?: CodeableConcept[];

  /** Special courtesies such as VIP or board member. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  specialCourtesy?: CodeableConcept[];

  /** Any special requests that have been made for this hospitalization encounter. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  specialArrangement?: CodeableConcept[];

  /** Location or organization to which the patient is discharged. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  destination?: Reference;

  /** Category or kind of location after discharge. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  dischargeDisposition?: CodeableConcept;

  /** Creates a new EncounterHospitalization. @param props - Initial values. */
  constructor(props?: Partial<EncounterHospitalization>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the dietPreference array. @returns This instance for chaining. */
  addDietPreference(item: CodeableConcept): this {
    if (!this.dietPreference) {
      this.dietPreference = [];
    }

    this.dietPreference.push(item);

    return this;
  }

  /** Adds an item to the specialCourtesy array. @returns This instance for chaining. */
  addSpecialCourtesy(item: CodeableConcept): this {
    if (!this.specialCourtesy) {
      this.specialCourtesy = [];
    }

    this.specialCourtesy.push(item);

    return this;
  }

  /** Adds an item to the specialArrangement array. @returns This instance for chaining. */
  addSpecialArrangement(item: CodeableConcept): this {
    if (!this.specialArrangement) {
      this.specialArrangement = [];
    }

    this.specialArrangement.push(item);

    return this;
  }
}

/** Backbone element for Encounter. */
export class EncounterLocation extends BackboneElement {

  /** The location where the encounter takes place. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /** The status of the participants' presence at the specified location. */
  @IsOptional()
  @IsEnum(EncounterLocationStatus)
  status?: EncounterLocationStatus;

  /** The physical type of the location. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  physicalType?: CodeableConcept;

  /** Time period during which the patient was present at the location. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Creates a new EncounterLocation. @param props - Initial values. */
  constructor(props?: Partial<EncounterLocation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 Encounter — an interaction between a patient and healthcare provider(s). */
export class Encounter extends DomainResource {

  /** Resource type constant. */
  readonly resourceType = 'Encounter';

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  /** Business identifiers for this encounter. */
  identifier?: Identifier[];

  /** The current status of the encounter. */
  @IsOptional()
  @IsEnum(EncounterStatus)
  status?: EncounterStatus;

  /** The status history permits the encounter resource to contain the status history. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EncounterStatusHistory)
  statusHistory?: EncounterStatusHistory[];

  /** Concepts representing classification of patient encounter such as ambulatory, inpatient, or emergency. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  class?: Coding;

  /** The class history permits the tracking of the encounters transitions. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EncounterClassHistory)
  classHistory?: EncounterClassHistory[];

  /** Specific type of encounter. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /** Broad categorization of the service that is to be provided. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  serviceType?: CodeableConcept;

  /** Indicates the urgency of the encounter. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  priority?: CodeableConcept;

  /** The patient or group present at the encounter. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** Where a specific encounter should be classified as a part of a specific episode(s) of care. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  episodeOfCare?: Reference[];

  /** The request this encounter satisfies. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** The list of people responsible for providing the service. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EncounterParticipant)
  participant?: EncounterParticipant[];

  /** The appointment that scheduled this encounter. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  appointment?: Reference[];

  /** The start and end time of the encounter. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Quantity of time the encounter lasted. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  length?: Duration;

  /** Reason the encounter takes place, expressed as a code. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Reason the encounter takes place, expressed as a reference. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** The list of diagnosis relevant to this encounter. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EncounterDiagnosis)
  diagnosis?: EncounterDiagnosis[];

  /** The set of accounts that may be used for billing for this encounter. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  account?: Reference[];

  /** Details about the admission to a healthcare service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => EncounterHospitalization)
  hospitalization?: EncounterHospitalization;

  /** List of locations where the patient has been during this encounter. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EncounterLocation)
  location?: EncounterLocation[];

  /** The organization that is primarily responsible for this encounter's services. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  serviceProvider?: Reference;

  /** Another encounter of which this encounter is a part of. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  partOf?: Reference;

  /** Creates a new Encounter. @param props - Initial values. */
  constructor(props?: Partial<Encounter>) {
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

  /** Adds an item to the statusHistory array. @returns This instance for chaining. */
  addStatusHistory(item: EncounterStatusHistory): this {
    if (!this.statusHistory) {
      this.statusHistory = [];
    }

    this.statusHistory.push(item);

    return this;
  }

  /** Adds an item to the classHistory array. @returns This instance for chaining. */
  addClassHistory(item: EncounterClassHistory): this {
    if (!this.classHistory) {
      this.classHistory = [];
    }

    this.classHistory.push(item);

    return this;
  }

  /** Adds an item to the type array. @returns This instance for chaining. */
  addType(item: CodeableConcept): this {
    if (!this.type) {
      this.type = [];
    }

    this.type.push(item);

    return this;
  }

  /** Adds an item to the episodeOfCare array. @returns This instance for chaining. */
  addEpisodeOfCare(item: Reference): this {
    if (!this.episodeOfCare) {
      this.episodeOfCare = [];
    }

    this.episodeOfCare.push(item);

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

  /** Adds an item to the participant array. @returns This instance for chaining. */
  addParticipant(item: EncounterParticipant): this {
    if (!this.participant) {
      this.participant = [];
    }

    this.participant.push(item);

    return this;
  }

  /** Adds an item to the appointment array. @returns This instance for chaining. */
  addAppointment(item: Reference): this {
    if (!this.appointment) {
      this.appointment = [];
    }

    this.appointment.push(item);

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

  /** Adds an item to the diagnosis array. @returns This instance for chaining. */
  addDiagnosis(item: EncounterDiagnosis): this {
    if (!this.diagnosis) {
      this.diagnosis = [];
    }

    this.diagnosis.push(item);

    return this;
  }

  /** Adds an item to the account array. @returns This instance for chaining. */
  addAccount(item: Reference): this {
    if (!this.account) {
      this.account = [];
    }

    this.account.push(item);

    return this;
  }

  /** Adds an item to the location array. @returns This instance for chaining. */
  addLocation(item: EncounterLocation): this {
    if (!this.location) {
      this.location = [];
    }

    this.location.push(item);

    return this;
  }
}
