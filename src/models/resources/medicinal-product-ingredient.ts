import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Ratio } from '../datatypes/ratio.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for MedicinalProductIngredient. */
export class MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends BackboneElement {

  /** Relevant reference substance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  substance?: CodeableConcept;

  /** Strength expressed in terms of a reference substance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  strength?: Ratio;

  /** Strength expressed in terms of a reference substance, low limit. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  strengthLowLimit?: Ratio;

  /** For when strength is measured at a particular point or distance. */
  @IsOptional()
  @IsString()
  measurementPoint?: string;

  /** The country or countries for which the strength range applies. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  country?: CodeableConcept[];

  /** Creates a new MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the country array. @returns This instance for chaining. */
  addCountry(item: CodeableConcept): this {
    if (!this.country) {
      this.country = [];
    }

    this.country.push(item);

    return this;
  }
}

/** Backbone element for MedicinalProductIngredient. */
export class MedicinalProductIngredientSpecifiedSubstanceStrength extends BackboneElement {

  /** The quantity of substance in the unit of presentation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  presentation?: Ratio;

  /** A lower limit for the quantity of substance in the unit of presentation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  presentationLowLimit?: Ratio;

  /** The strength per unitary volume or mass. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  concentration?: Ratio;

  /** A lower limit for the strength per unitary volume or mass. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  concentrationLowLimit?: Ratio;

  /** For when strength is measured at a particular point or distance. */
  @IsOptional()
  @IsString()
  measurementPoint?: string;

  /** The country or countries for which the strength range applies. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  country?: CodeableConcept[];

  /** Strength expressed in terms of a reference substance. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength)
  referenceStrength?: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[];

  /** Creates a new MedicinalProductIngredientSpecifiedSubstanceStrength. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductIngredientSpecifiedSubstanceStrength>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the country array. @returns This instance for chaining. */
  addCountry(item: CodeableConcept): this {
    if (!this.country) {
      this.country = [];
    }

    this.country.push(item);

    return this;
  }

  /** Adds an item to the referenceStrength array. @returns This instance for chaining. */
  addReferenceStrength(item: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength): this {
    if (!this.referenceStrength) {
      this.referenceStrength = [];
    }

    this.referenceStrength.push(item);

    return this;
  }
}

/** Backbone element for MedicinalProductIngredient. */
export class MedicinalProductIngredientSpecifiedSubstance extends BackboneElement {

  /** The specified substance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The group of specified substance, e.g. group 1 to 4. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  group?: CodeableConcept;

  /** Confidentiality level of the specified substance as the ingredient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  confidentiality?: CodeableConcept;

  /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductIngredientSpecifiedSubstanceStrength)
  strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[];

  /** Creates a new MedicinalProductIngredientSpecifiedSubstance. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductIngredientSpecifiedSubstance>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the strength array. @returns This instance for chaining. */
  addStrength(item: MedicinalProductIngredientSpecifiedSubstanceStrength): this {
    if (!this.strength) {
      this.strength = [];
    }

    this.strength.push(item);

    return this;
  }
}

/** Backbone element for MedicinalProductIngredient. */
export class MedicinalProductIngredientSubstance extends BackboneElement {

  /** The ingredient substance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductIngredientSpecifiedSubstanceStrength)
  strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[];

  /** Creates a new MedicinalProductIngredientSubstance. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductIngredientSubstance>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the strength array. @returns This instance for chaining. */
  addStrength(item: MedicinalProductIngredientSpecifiedSubstanceStrength): this {
    if (!this.strength) {
      this.strength = [];
    }

    this.strength.push(item);

    return this;
  }
}

/** FHIR R4 MedicinalProductIngredient — an ingredient of a manufactured item or pharmaceutical product. */
export class MedicinalProductIngredient extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'MedicinalProductIngredient';

  /** The identifier(s) of this ingredient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** Ingredient role e.g. Active ingredient, excipient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /** If the ingredient is a known or suspected allergen. */
  @IsOptional()
  @IsBoolean()
  allergenicIndicator?: boolean;

  /** Manufacturer of this ingredient. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  manufacturer?: Reference[];

  /** A specified substance that comprises this ingredient. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductIngredientSpecifiedSubstance)
  specifiedSubstance?: MedicinalProductIngredientSpecifiedSubstance[];

  /** The ingredient substance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicinalProductIngredientSubstance)
  substance?: MedicinalProductIngredientSubstance;

  /** Creates a new MedicinalProductIngredient. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductIngredient>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the manufacturer array. @returns This instance for chaining. */
  addManufacturer(item: Reference): this {
    if (!this.manufacturer) {
      this.manufacturer = [];
    }

    this.manufacturer.push(item);

    return this;
  }

  /** Adds an item to the specifiedSubstance array. @returns This instance for chaining. */
  addSpecifiedSubstance(item: MedicinalProductIngredientSpecifiedSubstance): this {
    if (!this.specifiedSubstance) {
      this.specifiedSubstance = [];
    }

    this.specifiedSubstance.push(item);

    return this;
  }
}
