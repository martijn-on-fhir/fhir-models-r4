import { IsOptional, IsString, IsNumber } from 'class-validator';
import { Element } from '../base/element.js';

/** FHIR R4 Money — An amount of economic utility in some recognized currency. */
export class Money extends Element {

  /** Numerical value (with implicit precision). */
  @IsOptional()
  @IsNumber()
  value?: number;

  /** ISO 4217 currency code. */
  @IsOptional()
  @IsString()
  currency?: string;

  /** Creates a new Money. @param props - Initial values. */
  constructor(props?: Partial<Money>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
