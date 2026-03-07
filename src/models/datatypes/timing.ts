import { Type } from 'class-transformer';
import { IsOptional, IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { Element } from '../base/element.js';
import { CodeableConcept } from './codeable-concept.js';
import { Duration } from './duration.js';
import { Period } from './period.js';
import { Range } from './range.js';

/** FHIR R4 Timing.repeat — A set of rules that describe when the event is scheduled. */
export class TimingRepeat extends Element {

  /** Either a duration for the length of the timing schedule or a range of possible lengths, as a Duration. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  boundsDuration?: Duration;

  /** Either a duration for the length of the timing schedule or a range of possible lengths, as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  boundsRange?: Range;

  /** Either a duration for the length of the timing schedule or a range of possible lengths, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  boundsPeriod?: Period;

  /** A total count of the desired number of repetitions across the duration of the entire timing specification. */
  @IsOptional()
  @IsNumber()
  count?: number;

  /** If present, indicates that the count is a range and the maximum number of times to repeat. */
  @IsOptional()
  @IsNumber()
  countMax?: number;

  /** How long this thing happens for when it happens, in units of the durationUnit. */
  @IsOptional()
  @IsNumber()
  duration?: number;

  /** If present, indicates that the duration is a range and the maximum duration time. */
  @IsOptional()
  @IsNumber()
  durationMax?: number;

  /** The units of time for the duration (s, min, h, d, wk, mo, a). */
  @IsOptional()
  @IsString()
  durationUnit?: string;

  /** The number of times to repeat the action within the specified period. */
  @IsOptional()
  @IsNumber()
  frequency?: number;

  /** If present, indicates that the frequency is a range and the maximum frequency. */
  @IsOptional()
  @IsNumber()
  frequencyMax?: number;

  /** Indicates the duration of time over which repetitions are to occur. */
  @IsOptional()
  @IsNumber()
  period?: number;

  /** If present, indicates that the period is a range and the maximum period. */
  @IsOptional()
  @IsNumber()
  periodMax?: number;

  /** The units of time for the period (s, min, h, d, wk, mo, a). */
  @IsOptional()
  @IsString()
  periodUnit?: string;

  /** If one or more days of week is provided, then the action happens only on the specified day(s). */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  dayOfWeek?: string[];

  /** Specified time of day for action to take place. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  timeOfDay?: string[];

  /** An approximate time period during the day, potentially linked to an event of daily living. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  when?: string[];

  /** The number of minutes from the event, positive or negative. */
  @IsOptional()
  @IsNumber()
  offset?: number;

  /** Creates a new TimingRepeat. @param props - Initial values. */
  constructor(props?: Partial<TimingRepeat>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the dayOfWeek array. @returns This instance for chaining. */
  addDayOfWeek(item: string): this {
    if (!this.dayOfWeek) {
      this.dayOfWeek = [];
    }

    this.dayOfWeek.push(item);

    return this;
  }

  /** Adds an item to the timeOfDay array. @returns This instance for chaining. */
  addTimeOfDay(item: string): this {
    if (!this.timeOfDay) {
      this.timeOfDay = [];
    }

    this.timeOfDay.push(item);

    return this;
  }

  /** Adds an item to the when array. @returns This instance for chaining. */
  addWhen(item: string): this {
    if (!this.when) {
      this.when = [];
    }

    this.when.push(item);

    return this;
  }
}

/** FHIR R4 Timing — Specifies an event that may occur multiple times, with timing schedules for when the event occurs. */
export class Timing extends BackboneElement {

  /** Identifies specific times when the event occurs. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  event?: string[];

  /** A set of rules that describe when the event is scheduled. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TimingRepeat)
  repeat?: TimingRepeat;

  /** A code for the timing schedule (e.g. BID, TID, QID, AM, PM, etc.). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** Creates a new Timing. @param props - Initial values. */
  constructor(props?: Partial<Timing>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the event array. @returns This instance for chaining. */
  addEvent(item: string): this {
    if (!this.event) {
      this.event = [];
    }

    this.event.push(item);

    return this;
  }
}
