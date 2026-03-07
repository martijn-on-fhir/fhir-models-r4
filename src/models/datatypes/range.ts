import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { Element } from '../base/element.js';
import { SimpleQuantity } from './simple-quantity.js';

/** FHIR R4 Range — A set of ordered Quantity values defined by a low and high limit. */
export class Range extends Element {

  /** The low limit, inclusive boundary. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  low?: SimpleQuantity;

  /** The high limit, inclusive boundary. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  high?: SimpleQuantity;

  /** Creates a new Range. @param props - Initial values. */
  constructor(props?: Partial<Range>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
