import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested, IsArray } from 'class-validator';
import { Element } from '../base/element.js';
import { Coding } from './coding.js';

/** FHIR R4 CodeableConcept — A concept that may be defined by a formal coding system or provided as free text. */
export class CodeableConcept extends Element {

  /** A reference to a code defined by a terminology system. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  coding?: Coding[];

  /** A human language representation of the concept as seen/selected/uttered by the user. */
  @IsOptional()
  @IsString()
  text?: string;

  /** Creates a new CodeableConcept. @param props - Initial values. */
  constructor(props?: Partial<CodeableConcept>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the coding array. @returns This instance for chaining. */
  addCoding(item: Coding): this {
    if (!this.coding) {
      this.coding = [];
    }

    this.coding.push(item);

    return this;
  }
}
