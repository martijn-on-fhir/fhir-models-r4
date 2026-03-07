import { IsOptional, IsString, IsNumber } from 'class-validator';
import { Element } from '../base/element.js';

/** FHIR R4 SimpleQuantity — A fixed quantity (no comparator), used where a comparator is not expected. */
export class SimpleQuantity extends Element {

  /** The value of the measured amount, as a decimal. */
  @IsOptional()
  @IsNumber()
  value?: number;

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

  /** Creates a new SimpleQuantity. @param props - Initial values. */
  constructor(props?: Partial<SimpleQuantity>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
