import { IsOptional, IsString } from 'class-validator';
import { Element } from '../base/element.js';

/** FHIR R4 Period — A time period defined by a start and end date/time. */
export class Period extends Element {

  /** The start of the period, inclusive boundary. */
  @IsOptional()
  @IsString()
  start?: string;

  /** The end of the period, inclusive boundary (if not ongoing). */
  @IsOptional()
  @IsString()
  end?: string;

  /** Creates a new Period. @param props - Initial values. */
  constructor(props?: Partial<Period>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
