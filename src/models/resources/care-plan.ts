import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { Timing } from '../datatypes/timing.js';
import { CarePlanActivityStatus } from '../enums/care-plan-activity-status.js';
import { CarePlanIntent } from '../enums/care-plan-intent.js';
import { CarePlanStatus } from '../enums/care-plan-status.js';

/** Backbone element for CarePlan — in-line definition of a care plan activity. */
export class CarePlanActivityDetail extends BackboneElement {

  /** The type of activity (e.g., procedure, observation). */
  @IsOptional()
  @IsString()
  kind?: string;

  /** Canonical URL of a FHIR-defined protocol or definition this activity satisfies. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesCanonical?: string[];

  /** External URI of a protocol or definition this activity satisfies. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesUri?: string[];

  /** Detail type of activity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** Coded reason for the activity. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Reference-based reason for the activity. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** Goals this activity is intended to contribute to. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  goal?: Reference[];

  /** Identifies what progress is being made for the activity. */
  @IsOptional()
  @IsEnum(CarePlanActivityStatus)
  status?: CarePlanActivityStatus;

  /** Reason for the current status of the activity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  statusReason?: CodeableConcept;

  /** If true, indicates the activity should NOT be performed. */
  @IsOptional()
  @IsBoolean()
  doNotPerform?: boolean;

  /** When the activity should occur, as a Timing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  scheduledTiming?: Timing;

  /** When the activity should occur, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  scheduledPeriod?: Period;

  /** When the activity should occur, as a string. */
  @IsOptional()
  @IsString()
  scheduledString?: string;

  /** Where the activity should take place. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /** Who will be responsible for carrying out the activity. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  performer?: Reference[];

  /** What is to be administered or supplied, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  productCodeableConcept?: CodeableConcept;

  /** What is to be administered or supplied, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  productReference?: Reference;

  /** How much to administer/supply per day. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  dailyAmount?: Quantity;

  /** How much to administer/supply in total. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** Extra info describing the activity to perform. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Creates a new CarePlanActivityDetail. @param props - Initial values. */
  constructor(props?: Partial<CarePlanActivityDetail>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
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

  /** Adds an item to the goal array. @returns This instance for chaining. */
  addGoal(item: Reference): this {
    if (!this.goal) {
      this.goal = [];
    }

    this.goal.push(item);

    return this;
  }

  /** Adds an item to the performer array. @returns This instance for chaining. */
  addPerformer(item: Reference): this {
    if (!this.performer) {
      this.performer = [];
    }

    this.performer.push(item);

    return this;
  }
}

/** Backbone element for CarePlan — action to occur as part of the plan. */
export class CarePlanActivity extends BackboneElement {

  /** Results of the activity as a CodeableConcept. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  outcomeCodeableConcept?: CodeableConcept[];

  /** Results of the activity as a Reference. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  outcomeReference?: Reference[];

  /** Comments about the activity status and progress. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  progress?: Annotation[];

  /** Activity details defined in a specific resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  reference?: Reference;

  /** In-line definition of the activity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CarePlanActivityDetail)
  detail?: CarePlanActivityDetail;

  /** Creates a new CarePlanActivity. @param props - Initial values. */
  constructor(props?: Partial<CarePlanActivity>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the outcomeCodeableConcept array. @returns This instance for chaining. */
  addOutcomeCodeableConcept(item: CodeableConcept): this {
    if (!this.outcomeCodeableConcept) {
      this.outcomeCodeableConcept = [];
    }

    this.outcomeCodeableConcept.push(item);

    return this;
  }

  /** Adds an item to the outcomeReference array. @returns This instance for chaining. */
  addOutcomeReference(item: Reference): this {
    if (!this.outcomeReference) {
      this.outcomeReference = [];
    }

    this.outcomeReference.push(item);

    return this;
  }

  /** Adds an item to the progress array. @returns This instance for chaining. */
  addProgress(item: Annotation): this {
    if (!this.progress) {
      this.progress = [];
    }

    this.progress.push(item);

    return this;
  }
}

/** FHIR R4 CarePlan — describes the intention of care for a patient or group. */
export class CarePlan extends DomainResource {

  /** The FHIR resource type string. */
  readonly resourceType = 'CarePlan';

  /** Business identifiers assigned to this care plan. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Canonical URL of a FHIR-defined protocol or definition this care plan satisfies. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesCanonical?: string[];

  /** External URI of a protocol or definition this care plan satisfies. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesUri?: string[];

  /** Fulfills CarePlan, ServiceRequest, or other plan/proposal. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** Completed or terminated care plan(s) that this replaces. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  replaces?: Reference[];

  /** A larger care plan of which this is a component or step. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /** The status of the care plan (draft | active | on-hold | etc.). */
  @IsOptional()
  @IsEnum(CarePlanStatus)
  status?: CarePlanStatus;

  /** The level of authority or intentionality of the care plan (proposal | plan | order | option). */
  @IsOptional()
  @IsEnum(CarePlanIntent)
  intent?: CarePlanIntent;

  /** Type of plan (e.g., mental health, asthma, etc.). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** Human-friendly name for the care plan. */
  @IsOptional()
  @IsString()
  title?: string;

  /** Summary of the nature of the plan. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Who the care plan is for. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The encounter during which this care plan was created. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** Time period the plan covers. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Date record was first recorded. */
  @IsOptional()
  @IsString()
  created?: string;

  /** Who is the designated responsible party. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /** Who provided the content of the care plan. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  contributor?: Reference[];

  /** Who is involved in the care plan. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  careTeam?: Reference[];

  /** Health issues this plan addresses. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  addresses?: Reference[];

  /** Information considered as part of the plan. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supportingInfo?: Reference[];

  /** Desired outcome of the plan. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  goal?: Reference[];

  /** Action to occur as part of the plan. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CarePlanActivity)
  activity?: CarePlanActivity[];

  /** General notes about the care plan. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Creates a new CarePlan. @param props - Initial values. */
  constructor(props?: Partial<CarePlan>) {
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

  /** Adds an item to the replaces array. @returns This instance for chaining. */
  addReplaces(item: Reference): this {
    if (!this.replaces) {
      this.replaces = [];
    }

    this.replaces.push(item);

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

  /** Adds an item to the category array. @returns This instance for chaining. */
  addCategory(item: CodeableConcept): this {
    if (!this.category) {
      this.category = [];
    }

    this.category.push(item);

    return this;
  }

  /** Adds an item to the contributor array. @returns This instance for chaining. */
  addContributor(item: Reference): this {
    if (!this.contributor) {
      this.contributor = [];
    }

    this.contributor.push(item);

    return this;
  }

  /** Adds an item to the careTeam array. @returns This instance for chaining. */
  addCareTeam(item: Reference): this {
    if (!this.careTeam) {
      this.careTeam = [];
    }

    this.careTeam.push(item);

    return this;
  }

  /** Adds an item to the addresses array. @returns This instance for chaining. */
  addAddresses(item: Reference): this {
    if (!this.addresses) {
      this.addresses = [];
    }

    this.addresses.push(item);

    return this;
  }

  /** Adds an item to the supportingInfo array. @returns This instance for chaining. */
  addSupportingInfo(item: Reference): this {
    if (!this.supportingInfo) {
      this.supportingInfo = [];
    }

    this.supportingInfo.push(item);

    return this;
  }

  /** Adds an item to the goal array. @returns This instance for chaining. */
  addGoal(item: Reference): this {
    if (!this.goal) {
      this.goal = [];
    }

    this.goal.push(item);

    return this;
  }

  /** Adds an item to the activity array. @returns This instance for chaining. */
  addActivity(item: CarePlanActivity): this {
    if (!this.activity) {
      this.activity = [];
    }

    this.activity.push(item);

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
