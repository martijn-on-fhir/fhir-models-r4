import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Element } from '../base/element.js';
import { Reference } from './reference.js';

/** FHIR R4 Annotation — A text note which also contains information about who made the statement and when. */
export class Annotation extends Element {

  /** The individual responsible for making the annotation, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  authorReference?: Reference;

  /** The individual responsible for making the annotation, as a string. */
  @IsOptional()
  @IsString()
  authorString?: string;

  /** Indicates when this particular annotation was made. */
  @IsOptional()
  @IsString()
  time?: string;

  /** The text of the annotation in markdown format. */
  @IsOptional()
  @IsString()
  text?: string;

  /** Creates a new Annotation. @param props - Initial values. */
  constructor(props?: Partial<Annotation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
