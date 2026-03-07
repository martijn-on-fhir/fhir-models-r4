import { IsOptional, IsString, IsNumber } from 'class-validator';
import { Element } from '../base/element.js';

/** FHIR R4 ParameterDefinition — The parameters to the module, defining the input and output of the evaluation. */
export class ParameterDefinition extends Element {

  /** The name of the parameter used to allow access to the value of the parameter in evaluation contexts. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Whether the parameter is input or output for the module (in, out). */
  @IsOptional()
  @IsString()
  use?: string;

  /** The minimum number of times this parameter shall appear in the request or response. */
  @IsOptional()
  @IsNumber()
  min?: number;

  /** The maximum number of times this element is permitted to appear in the request or response. */
  @IsOptional()
  @IsString()
  max?: string;

  /** A brief discussion of what the parameter is for and how it is used. */
  @IsOptional()
  @IsString()
  documentation?: string;

  /** The type of the parameter. */
  @IsOptional()
  @IsString()
  type?: string;

  /** If specified, this indicates a profile that the input data must conform to. */
  @IsOptional()
  @IsString()
  profile?: string;

  /** Creates a new ParameterDefinition. @param props - Initial values. */
  constructor(props?: Partial<ParameterDefinition>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
