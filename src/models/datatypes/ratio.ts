import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { Element } from '../base/element.js';
import { Quantity } from './quantity.js';

/** FHIR R4 Ratio — A relationship of two Quantity values expressed as a numerator and a denominator. */
export class Ratio extends Element {

  /** The value of the numerator. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  numerator?: Quantity;

  /** The value of the denominator. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  denominator?: Quantity;

  /** Creates a new Ratio. @param props - Initial values. */
  constructor(props?: Partial<Ratio>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
