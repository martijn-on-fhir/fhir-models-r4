import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { Element } from '../base/element.js';
import { CodeableConcept } from './codeable-concept.js';
import { Quantity } from './quantity.js';
import { Range } from './range.js';

/** FHIR R4 SubstanceAmount.referenceRange — Reference range of possible or expected values. */
export class SubstanceAmountReferenceRange extends Element {

  /** Lower limit of the reference range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  lowLimit?: Quantity;

  /** Upper limit of the reference range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  highLimit?: Quantity;

  /** Creates a new SubstanceAmountReferenceRange. @param props - Initial values. */
  constructor(props?: Partial<SubstanceAmountReferenceRange>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 SubstanceAmount — Chemical substances are a single substance type whose precise structure is known. */
export class SubstanceAmount extends BackboneElement {

  /** Used to capture quantitative values for a variety of elements, as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  amountQuantity?: Quantity;

  /** Used to capture quantitative values for a variety of elements, as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  amountRange?: Range;

  /** Used to capture quantitative values for a variety of elements, as a string. */
  @IsOptional()
  @IsString()
  amountString?: string;

  /** Most elements that require a quantitative value will also have a field called amount type. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  amountType?: CodeableConcept;

  /** A textual comment on a numeric value. */
  @IsOptional()
  @IsString()
  amountText?: string;

  /** Reference range of possible or expected values. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceAmountReferenceRange)
  referenceRange?: SubstanceAmountReferenceRange;

  /** Creates a new SubstanceAmount. @param props - Initial values. */
  constructor(props?: Partial<SubstanceAmount>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
