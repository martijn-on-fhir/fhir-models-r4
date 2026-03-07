import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { Attachment } from './attachment.js';
import { CodeableConcept } from './codeable-concept.js';
import { Quantity } from './quantity.js';

/** FHIR R4 ProdCharacteristic — The marketing status describes the characteristics of a medicinal manufactured item. */
export class ProdCharacteristic extends BackboneElement {

  /** Where applicable, the height can be specified using a numerical value and its unit of measurement. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  height?: Quantity;

  /** Where applicable, the width can be specified using a numerical value and its unit of measurement. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  width?: Quantity;

  /** Where applicable, the depth can be specified using a numerical value and its unit of measurement. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  depth?: Quantity;

  /** Where applicable, the weight can be specified using a numerical value and its unit of measurement. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  weight?: Quantity;

  /** Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  nominalVolume?: Quantity;

  /** Where applicable, the external diameter can be specified using a numerical value and its unit of measurement. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  externalDiameter?: Quantity;

  /** Where applicable, the shape can be specified as a text string. */
  @IsOptional()
  @IsString()
  shape?: string;

  /** Where applicable, the color can be specified as a text string. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  color?: string[];

  /** Where applicable, the imprint can be specified as text. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  imprint?: string[];

  /** Where applicable, the image can be provided. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Attachment)
  image?: Attachment[];

  /** Where applicable, the scoring can be specified as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  scoring?: CodeableConcept;

  /** Creates a new ProdCharacteristic. @param props - Initial values. */
  constructor(props?: Partial<ProdCharacteristic>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the color array. @returns This instance for chaining. */
  addColor(item: string): this {
    if (!this.color) {
      this.color = [];
    }

    this.color.push(item);

    return this;
  }

  /** Adds an item to the imprint array. @returns This instance for chaining. */
  addImprint(item: string): this {
    if (!this.imprint) {
      this.imprint = [];
    }

    this.imprint.push(item);

    return this;
  }

  /** Adds an item to the image array. @returns This instance for chaining. */
  addImage(item: Attachment): this {
    if (!this.image) {
      this.image = [];
    }

    this.image.push(item);

    return this;
  }
}
