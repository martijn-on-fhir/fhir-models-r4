import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { Element } from '../base/element.js';
import { DataRequirement } from './data-requirement.js';
import { Expression } from './expression.js';
import { Reference } from './reference.js';
import { Timing } from './timing.js';

/** FHIR R4 TriggerDefinition — A description of a triggering event, used in subscription and decision support. */
export class TriggerDefinition extends Element {

  /** The type of triggering event (named-event, periodic, data-changed, data-added, data-modified, data-removed, data-accessed). */
  @IsOptional()
  @IsString()
  type?: string;

  /** A formal name for the event, shared across multiple knowledge artifacts. */
  @IsOptional()
  @IsString()
  name?: string;

  /** The timing of the event, as a Timing resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  timingTiming?: Timing;

  /** The timing of the event, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  timingReference?: Reference;

  /** The timing of the event, as a date. */
  @IsOptional()
  @IsString()
  timingDate?: string;

  /** The timing of the event, as a dateTime. */
  @IsOptional()
  @IsString()
  timingDateTime?: string;

  /** The triggering data of the event (if this is a data trigger). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DataRequirement)
  data?: DataRequirement[];

  /** A boolean-valued expression that is evaluated in the context of the container of the trigger definition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  condition?: Expression;

  /** Creates a new TriggerDefinition. @param props - Initial values. */
  constructor(props?: Partial<TriggerDefinition>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the data array. @returns This instance for chaining. */
  addData(item: DataRequirement): this {
    if (!this.data) {
      this.data = [];
    }

    this.data.push(item);

    return this;
  }
}
