import { Type } from 'class-transformer';
import { IsOptional, IsArray, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ProdCharacteristic } from '../datatypes/prod-characteristic.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';

/** FHIR R4 MedicinalProductManufactured resource — the manufactured item as contained in the packaged medicinal product. */
export class MedicinalProductManufactured extends DomainResource {

  readonly resourceType = 'MedicinalProductManufactured';

  /** Dose form as manufactured and before any transformation into the pharmaceutical product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  manufacturedDoseForm?: CodeableConcept;

  /** The "real world" units in which the quantity of the manufactured item is described. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  unitOfPresentation?: CodeableConcept;

  /** The quantity or "count number" of the manufactured item. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** Manufacturer of the item (Note: this is not the manufacturer of the pharmaceutical product). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  manufacturer?: Reference[];

  /** Ingredient references for this manufactured item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  ingredient?: Reference[];

  /** Dimensions, color, etc. of the manufactured item. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ProdCharacteristic)
  physicalCharacteristics?: ProdCharacteristic;

  /** Other codeable characteristics of the manufactured item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  otherCharacteristics?: CodeableConcept[];

  /** Creates a new {@link MedicinalProductManufactured} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicinalProductManufactured>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link Reference} to the {@link MedicinalProductManufactured.manufacturer manufacturer} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addManufacturer(item: Reference): this {
    if (!this.manufacturer) {
      this.manufacturer = [];
    }

    this.manufacturer.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link MedicinalProductManufactured.ingredient ingredient} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addIngredient(item: Reference): this {
    if (!this.ingredient) {
      this.ingredient = [];
    }

    this.ingredient.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link MedicinalProductManufactured.otherCharacteristics otherCharacteristics} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addOtherCharacteristics(item: CodeableConcept): this {
    if (!this.otherCharacteristics) {
      this.otherCharacteristics = [];
    }

    this.otherCharacteristics.push(item);

    return this;
  }
}
