import { IsOptional, IsString } from 'class-validator';
import { Element } from '../base/element.js';

/** FHIR R4 Expression — A expression that is evaluated in a specified context and returns a value. */
export class Expression extends Element {

  /** A brief, natural language description of the condition that effectively communicates the intended semantics. */
  @IsOptional()
  @IsString()
  description?: string;

  /** A short name assigned to the expression to allow for multiple reuse of the expression. */
  @IsOptional()
  @IsString()
  name?: string;

  /** The media type of the language for the expression (e.g. text/cql, text/fhirpath, application/x-fhir-query). */
  @IsOptional()
  @IsString()
  language?: string;

  /** An expression in the specified language that returns a value. */
  @IsOptional()
  @IsString()
  expression?: string;

  /** A URI that defines where the expression is found. */
  @IsOptional()
  @IsString()
  reference?: string;

  /** Creates a new Expression. @param props - Initial values. */
  constructor(props?: Partial<Expression>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
