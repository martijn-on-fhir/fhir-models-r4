import { IsOptional, IsString, IsNumber } from 'class-validator';
import { Element } from '../base/element.js';

/** FHIR R4 Attachment — For referring to data content defined in other formats (e.g. images, documents). */
export class Attachment extends Element {

  /** Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. */
  @IsOptional()
  @IsString()
  contentType?: string;

  /** The human language of the content, based on BCP 47. */
  @IsOptional()
  @IsString()
  language?: string;

  /** The actual data of the attachment, base64 encoded. */
  @IsOptional()
  @IsString()
  data?: string;

  /** A location where the data can be accessed. */
  @IsOptional()
  @IsString()
  url?: string;

  /** The number of bytes of data that make up this attachment. */
  @IsOptional()
  @IsNumber()
  size?: number;

  /** The calculated hash of the data using SHA-1, base64 encoded. */
  @IsOptional()
  @IsString()
  hash?: string;

  /** A label or set of text to display in place of the data. */
  @IsOptional()
  @IsString()
  title?: string;

  /** The date that the attachment was first created. */
  @IsOptional()
  @IsString()
  creation?: string;

  /** Creates a new Attachment. @param props - Initial values. */
  constructor(props?: Partial<Attachment>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
