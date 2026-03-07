import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsNumber, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Duration } from '../datatypes/duration.js';
import { Identifier } from '../datatypes/identifier.js';
import { Quantity } from '../datatypes/quantity.js';
import { Range } from '../datatypes/range.js';
import { Ratio } from '../datatypes/ratio.js';
import { Reference } from '../datatypes/reference.js';
import { GoalLifecycleStatus } from '../enums/goal-lifecycle-status.js';

/** Backbone element for Goal. */
export class GoalTarget extends BackboneElement {

  /** The parameter whose value is being tracked. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  measure?: CodeableConcept;

  /** The target value of the focus to be achieved as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  detailQuantity?: Quantity;

  /** The target value of the focus to be achieved as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  detailRange?: Range;

  /** The target value of the focus to be achieved as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  detailCodeableConcept?: CodeableConcept;

  /** The target value of the focus to be achieved as a string. */
  @IsOptional()
  @IsString()
  detailString?: string;

  /** The target value of the focus to be achieved as a Ratio. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  detailRatio?: Ratio;

  /** The target value of the focus to be achieved as an integer. */
  @IsOptional()
  @IsNumber()
  detailInteger?: number;

  /** The target value of the focus to be achieved as a boolean. */
  @IsOptional()
  @IsBoolean()
  detailBoolean?: boolean;

  /** Indicates either the date or the duration after start by which the goal should be met. */
  @IsOptional()
  @IsString()
  dueDate?: string;

  /** Indicates either the date or the duration after start by which the goal should be met as a Duration. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  dueDuration?: Duration;

  /** Creates a new GoalTarget. @param props - Initial values. */
  constructor(props?: Partial<GoalTarget>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 Goal — describes the intended objectives for a patient, group, or organization. */
export class Goal extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'Goal';

  /** Business identifiers assigned to this goal by the performer or other systems. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The state of the goal throughout its lifecycle. */
  @IsOptional()
  @IsEnum(GoalLifecycleStatus)
  lifecycleStatus?: GoalLifecycleStatus;

  /** Describes the progression, or lack thereof, towards the goal against the target. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  achievementStatus?: CodeableConcept;

  /** Indicates a category the goal falls within. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** Identifies the mutually agreed level of importance associated with reaching/sustaining the goal. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  priority?: CodeableConcept;

  /** Human-readable and/or coded description of a specific desired objective of care. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  description?: CodeableConcept;

  /** Identifies the patient, group, or organization for whom the goal is being established. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The date or event after which the goal should begin being pursued. */
  @IsOptional()
  @IsString()
  startDate?: string;

  /** The date or event after which the goal should begin being pursued as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  startCodeableConcept?: CodeableConcept;

  /** Indicates what should be done by when. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GoalTarget)
  target?: GoalTarget[];

  /** Identifies when the current status was assigned. */
  @IsOptional()
  @IsString()
  statusDate?: string;

  /** Captures the reason for the current status. */
  @IsOptional()
  @IsString()
  statusReason?: string;

  /** Indicates whose goal this is, such as patient, practitioner, etc. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  expressedBy?: Reference;

  /** The identified conditions and other health record elements that are intended to be addressed by the goal. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  addresses?: Reference[];

  /** Any comments related to the goal. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Identifies the change or lack of change at the point when the status of the goal is assessed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  outcomeCode?: CodeableConcept[];

  /** Details of what has changed or is the reason for a change in goal status. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  outcomeReference?: Reference[];

  /** Creates a new Goal. @param props - Initial values. */
  constructor(props?: Partial<Goal>) {
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

  /** Adds an item to the target array. @returns This instance for chaining. */
  addTarget(item: GoalTarget): this {
    if (!this.target) {
      this.target = [];
    }

    this.target.push(item);

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

  /** Adds an item to the note array. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }

  /** Adds an item to the outcomeCode array. @returns This instance for chaining. */
  addOutcomeCode(item: CodeableConcept): this {
    if (!this.outcomeCode) {
      this.outcomeCode = [];
    }

    this.outcomeCode.push(item);

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
}
