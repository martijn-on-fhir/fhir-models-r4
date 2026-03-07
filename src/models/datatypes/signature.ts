import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { Element } from '../base/element.js';
import { Coding } from './coding.js';
import { Reference } from './reference.js';

/** FHIR R4 Signature — A digital signature along with supporting context. */
export class Signature extends Element {

  /** An indication of the reason that the entity signed this document. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  type?: Coding[];

  /** When the digital signature was signed. */
  @IsOptional()
  @IsString()
  when?: string;

  /** A reference to an application-usable description of the identity that signed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  who?: Reference;

  /** A reference to an application-usable description of the identity that is represented by the signature. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  onBehalfOf?: Reference;

  /** A mime type that indicates the technical format of the target resources signed by the signature. */
  @IsOptional()
  @IsString()
  targetFormat?: string;

  /** A mime type that indicates the technical format of the signature. */
  @IsOptional()
  @IsString()
  sigFormat?: string;

  /** The base64 encoding of the signature content. */
  @IsOptional()
  @IsString()
  data?: string;

  /** Creates a new Signature. @param props - Initial values. */
  constructor(props?: Partial<Signature>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the type array. @returns This instance for chaining. */
  addType(item: Coding): this {
    if (!this.type) {
      this.type = [];
    }

    this.type.push(item);

    return this;
  }
}
