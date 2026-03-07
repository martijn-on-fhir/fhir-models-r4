import { Type } from 'class-transformer';
import { IsOptional, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { CodeableConcept } from './codeable-concept.js';
import { Identifier } from './identifier.js';
import { Quantity } from './quantity.js';

/** FHIR R4 ProductShelfLife — The shelf-life and storage information for a medicinal product item or container. */
export class ProductShelfLife extends BackboneElement {

  /** Unique identifier for the packaged medicinal product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** This describes the shelf life, taking into account various scenarios such as shelf life of the packaged product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The shelf life time period as a Quantity (typically in months or years). */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  period?: Quantity;

  /** Special precautions for storage, if any, as stated on the product label. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  specialPrecautionsForStorage?: CodeableConcept[];

  /** Creates a new ProductShelfLife. @param props - Initial values. */
  constructor(props?: Partial<ProductShelfLife>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the specialPrecautionsForStorage array. @returns This instance for chaining. */
  addSpecialPrecautionsForStorage(item: CodeableConcept): this {
    if (!this.specialPrecautionsForStorage) {
      this.specialPrecautionsForStorage = [];
    }

    this.specialPrecautionsForStorage.push(item);

    return this;
  }
}
