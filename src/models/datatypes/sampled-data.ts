import { Type } from 'class-transformer';
import { IsOptional, IsString, IsNumber, ValidateNested } from 'class-validator';
import { Element } from '../base/element.js';
import { SimpleQuantity } from './simple-quantity.js';

/** FHIR R4 SampledData — A series of measurements taken by a device, with upper and lower limits. */
export class SampledData extends Element {

  /** The base quantity that a measured value of zero represents, with units. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  origin?: SimpleQuantity;

  /** The length of time between sampling times, measured in milliseconds. */
  @IsOptional()
  @IsNumber()
  period?: number;

  /** A correction factor that is applied to the sampled data points before they are added to the origin. */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /** The lower limit of detection of the measured points. */
  @IsOptional()
  @IsNumber()
  lowerLimit?: number;

  /** The upper limit of detection of the measured points. */
  @IsOptional()
  @IsNumber()
  upperLimit?: number;

  /** The number of sample points at each time point. */
  @IsOptional()
  @IsNumber()
  dimensions?: number;

  /** A series of data points separated by a single space, where each data point is a decimal or "E" | "U" | "L". */
  @IsOptional()
  @IsString()
  data?: string;

  /** Creates a new SampledData. @param props - Initial values. */
  constructor(props?: Partial<SampledData>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
