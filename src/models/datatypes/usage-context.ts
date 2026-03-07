import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { Element } from '../base/element.js';
import { CodeableConcept } from './codeable-concept.js';
import { Coding } from './coding.js';
import { Quantity } from './quantity.js';
import { Range } from './range.js';
import { Reference } from './reference.js';

/** FHIR R4 UsageContext — Specifies a context of use for a conformance or knowledge resource. */
export class UsageContext extends Element {

  /** A code that identifies the type of context being specified by this usage context. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  code?: Coding;

  /** A value that defines the context specified in this context of use, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  valueCodeableConcept?: CodeableConcept;

  /** A value that defines the context specified in this context of use, as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /** A value that defines the context specified in this context of use, as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  valueRange?: Range;

  /** A value that defines the context specified in this context of use, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /** Creates a new UsageContext. @param props - Initial values. */
  constructor(props?: Partial<UsageContext>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
