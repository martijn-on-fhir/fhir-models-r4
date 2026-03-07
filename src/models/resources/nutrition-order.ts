import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, IsEnum, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Quantity } from '../datatypes/quantity.js';
import { Ratio } from '../datatypes/ratio.js';
import { Reference } from '../datatypes/reference.js';
import { Timing } from '../datatypes/timing.js';
import { NutritionOrderStatus } from '../enums/nutrition-order-status.js';
import { RequestIntent } from '../enums/request-intent.js';

/** Backbone element for NutritionOrder. */
export class NutritionOrderOralDietNutrient extends BackboneElement {

  /** The kind of nutrient that is being modified in the diet. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  modifier?: CodeableConcept;

  /** The quantity of the specified nutrient to include in diet. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  amount?: Quantity;

  /** Creates a new NutritionOrderOralDietNutrient. @param props - Initial values. */
  constructor(props?: Partial<NutritionOrderOralDietNutrient>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for NutritionOrder. */
export class NutritionOrderOralDietTexture extends BackboneElement {

  /** Any texture modifications needed for the patient to safely consume various foods. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  modifier?: CodeableConcept;

  /** The food type(s) this texture modification applies to. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  foodType?: CodeableConcept;

  /** Creates a new NutritionOrderOralDietTexture. @param props - Initial values. */
  constructor(props?: Partial<NutritionOrderOralDietTexture>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for NutritionOrder. */
export class NutritionOrderOralDiet extends BackboneElement {

  /** The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /** The time period and frequency at which the diet should be given. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Timing)
  schedule?: Timing[];

  /** Class of nutrients consumed as part of the diet. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NutritionOrderOralDietNutrient)
  nutrient?: NutritionOrderOralDietNutrient[];

  /** Describes required texture modifications to the diet. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NutritionOrderOralDietTexture)
  texture?: NutritionOrderOralDietTexture[];

  /** The required consistency of fluids and liquids provided to the patient. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  fluidConsistencyType?: CodeableConcept[];

  /** Free text or additional instructions for the oral diet. */
  @IsOptional()
  @IsString()
  instruction?: string;

  /** Creates a new NutritionOrderOralDiet. @param props - Initial values. */
  constructor(props?: Partial<NutritionOrderOralDiet>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the type array. @returns This instance for chaining. */
  addType(item: CodeableConcept): this {
    if (!this.type) {
      this.type = [];
    }

    this.type.push(item);

    return this;
  }

  /** Adds an item to the schedule array. @returns This instance for chaining. */
  addSchedule(item: Timing): this {
    if (!this.schedule) {
      this.schedule = [];
    }

    this.schedule.push(item);

    return this;
  }

  /** Adds an item to the nutrient array. @returns This instance for chaining. */
  addNutrient(item: NutritionOrderOralDietNutrient): this {
    if (!this.nutrient) {
      this.nutrient = [];
    }

    this.nutrient.push(item);

    return this;
  }

  /** Adds an item to the texture array. @returns This instance for chaining. */
  addTexture(item: NutritionOrderOralDietTexture): this {
    if (!this.texture) {
      this.texture = [];
    }

    this.texture.push(item);

    return this;
  }

  /** Adds an item to the fluidConsistencyType array. @returns This instance for chaining. */
  addFluidConsistencyType(item: CodeableConcept): this {
    if (!this.fluidConsistencyType) {
      this.fluidConsistencyType = [];
    }

    this.fluidConsistencyType.push(item);

    return this;
  }
}

/** Backbone element for NutritionOrder. */
export class NutritionOrderSupplement extends BackboneElement {

  /** The kind of nutritional supplement product required. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The product or brand name of the nutritional supplement. */
  @IsOptional()
  @IsString()
  productName?: string;

  /** The time period and frequency at which the supplement should be given. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Timing)
  schedule?: Timing[];

  /** The amount of the nutritional supplement to be given. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** Free text or additional instructions for the supplement. */
  @IsOptional()
  @IsString()
  instruction?: string;

  /** Creates a new NutritionOrderSupplement. @param props - Initial values. */
  constructor(props?: Partial<NutritionOrderSupplement>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the schedule array. @returns This instance for chaining. */
  addSchedule(item: Timing): this {
    if (!this.schedule) {
      this.schedule = [];
    }

    this.schedule.push(item);

    return this;
  }
}

/** Backbone element for NutritionOrder. */
export class NutritionOrderEnteralFormulaAdministration extends BackboneElement {

  /** The time period and frequency at which the enteral formula should be delivered. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  schedule?: Timing;

  /** The volume of formula to provide to the patient per the specified administration schedule. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** The rate of administration of formula via a feeding pump as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  rateQuantity?: Quantity;

  /** The rate of administration of formula via a feeding pump as a Ratio. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  rateRatio?: Ratio;

  /** Creates a new NutritionOrderEnteralFormulaAdministration. @param props - Initial values. */
  constructor(props?: Partial<NutritionOrderEnteralFormulaAdministration>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for NutritionOrder. */
export class NutritionOrderEnteralFormula extends BackboneElement {

  /** The type of enteral or infant formula such as an adult standard formula. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  baseFormulaType?: CodeableConcept;

  /** The product or brand name of the enteral or infant formula product. */
  @IsOptional()
  @IsString()
  baseFormulaProductName?: string;

  /** Indicates the type of modular component to add to the formula. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  additiveType?: CodeableConcept;

  /** The product or brand name of the type of modular component. */
  @IsOptional()
  @IsString()
  additiveProductName?: string;

  /** The amount of energy (calories) the formula should provide per specified volume. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  caloricDensity?: Quantity;

  /** The route or physiological path of administration of the formula. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  routeofAdministration?: CodeableConcept;

  /** Formula administration instructions as structured data. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NutritionOrderEnteralFormulaAdministration)
  administration?: NutritionOrderEnteralFormulaAdministration[];

  /** The maximum total quantity of formula that may be administered to a subject over the period of time. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  maxVolumeToDeliver?: Quantity;

  /** Free text formula administration or feeding instructions for cases where the instructions are too complex. */
  @IsOptional()
  @IsString()
  administrationInstruction?: string;

  /** Creates a new NutritionOrderEnteralFormula. @param props - Initial values. */
  constructor(props?: Partial<NutritionOrderEnteralFormula>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the administration array. @returns This instance for chaining. */
  addAdministration(item: NutritionOrderEnteralFormulaAdministration): this {
    if (!this.administration) {
      this.administration = [];
    }

    this.administration.push(item);

    return this;
  }
}

/** FHIR R4 NutritionOrder — a request for diet, formula feeding, or oral nutritional supplement. */
export class NutritionOrder extends DomainResource {

  readonly resourceType = 'NutritionOrder';

  /** Identifiers assigned to this order by the order sender or order receiver. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The URL pointing to a FHIR-defined protocol or guideline (canonical). */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesCanonical?: string[];

  /** The URL pointing to an externally maintained protocol or guideline. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesUri?: string[];

  /** The URL pointing to a protocol or guideline that was adhered to. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiates?: string[];

  /** The workflow status of the nutrition order request. */
  @IsOptional()
  @IsEnum(NutritionOrderStatus)
  status?: NutritionOrderStatus;

  /** Indicates the level of authority/intentionality associated with the nutrition order. */
  @IsOptional()
  @IsEnum(RequestIntent)
  intent?: RequestIntent;

  /** The person for whom the nutrition order is intended. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /** An encounter associated with this nutrition order. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** The date and time that this nutrition order was requested. */
  @IsOptional()
  @IsString()
  dateTime?: string;

  /** The practitioner that holds legal responsibility for ordering the diet. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  orderer?: Reference;

  /** A link to a record of allergies or intolerances which should be included in the nutrition order. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  allergyIntolerance?: Reference[];

  /** Modifier to the type of food or the ingredients in the diet. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  foodPreferenceModifier?: CodeableConcept[];

  /** Modifier to the type of food or the ingredients that should be excluded from the diet. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  excludeFoodModifier?: CodeableConcept[];

  /** Diet given orally in contrast to enteral (tube) feeding. */
  @IsOptional()
  @ValidateNested()
  @Type(() => NutritionOrderOralDiet)
  oralDiet?: NutritionOrderOralDiet;

  /** Oral nutritional products given to the patient. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NutritionOrderSupplement)
  supplement?: NutritionOrderSupplement[];

  /** Feeding provided through the gastrointestinal tract via a tube or stoma. */
  @IsOptional()
  @ValidateNested()
  @Type(() => NutritionOrderEnteralFormula)
  enteralFormula?: NutritionOrderEnteralFormula;

  /** Comments made about the nutrition order by the requester, performer, or other parties. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Creates a new NutritionOrder. @param props - Initial values. */
  constructor(props?: Partial<NutritionOrder>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the identifier array. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds an item to the instantiatesCanonical array. @returns This instance for chaining. */
  addInstantiatesCanonical(item: string): this {
    if (!this.instantiatesCanonical) {
      this.instantiatesCanonical = [];
    }

    this.instantiatesCanonical.push(item);

    return this;
  }

  /** Adds an item to the instantiatesUri array. @returns This instance for chaining. */
  addInstantiatesUri(item: string): this {
    if (!this.instantiatesUri) {
      this.instantiatesUri = [];
    }

    this.instantiatesUri.push(item);

    return this;
  }

  /** Adds an item to the instantiates array. @returns This instance for chaining. */
  addInstantiates(item: string): this {
    if (!this.instantiates) {
      this.instantiates = [];
    }

    this.instantiates.push(item);

    return this;
  }

  /** Adds an item to the allergyIntolerance array. @returns This instance for chaining. */
  addAllergyIntolerance(item: Reference): this {
    if (!this.allergyIntolerance) {
      this.allergyIntolerance = [];
    }

    this.allergyIntolerance.push(item);

    return this;
  }

  /** Adds an item to the foodPreferenceModifier array. @returns This instance for chaining. */
  addFoodPreferenceModifier(item: CodeableConcept): this {
    if (!this.foodPreferenceModifier) {
      this.foodPreferenceModifier = [];
    }

    this.foodPreferenceModifier.push(item);

    return this;
  }

  /** Adds an item to the excludeFoodModifier array. @returns This instance for chaining. */
  addExcludeFoodModifier(item: CodeableConcept): this {
    if (!this.excludeFoodModifier) {
      this.excludeFoodModifier = [];
    }

    this.excludeFoodModifier.push(item);

    return this;
  }

  /** Adds an item to the supplement array. @returns This instance for chaining. */
  addSupplement(item: NutritionOrderSupplement): this {
    if (!this.supplement) {
      this.supplement = [];
    }

    this.supplement.push(item);

    return this;
  }

  /** Adds an item to the note array. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }
}
