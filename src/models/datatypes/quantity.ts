import { IsOptional, IsString, IsNumber, IsEnum } from 'class-validator';
import { Element } from '../base/element.js';
import { QuantityComparator } from '../enums/quantity-comparator.js';

/** FHIR R4 Quantity — A measured amount (or an amount that can potentially be measured). */
export class Quantity extends Element {

  /** The value of the measured amount, as a decimal. */
  @IsOptional()
  @IsNumber()
  value?: number;

  /** How the value should be understood and represented (<, <=, >=, >). */
  @IsOptional()
  @IsEnum(QuantityComparator)
  comparator?: QuantityComparator;

  /** A human-readable form of the unit. */
  @IsOptional()
  @IsString()
  unit?: string;

  /** The identification of the system that provides the coded form of the unit. */
  @IsOptional()
  @IsString()
  system?: string;

  /** A computer-processable form of the unit in some unit representation system. */
  @IsOptional()
  @IsString()
  code?: string;

  /** Creates a new Quantity. @param props - Initial values. */
  constructor(props?: Partial<Quantity>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
