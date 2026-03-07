import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Ratio } from '../datatypes/ratio.js';
import { Reference } from '../datatypes/reference.js';
import { MedicationStatusCodes } from '../enums/medication-status-codes.js';

/** Backbone element for Medication. */
export class MedicationIngredient extends BackboneElement {

  /** The actual ingredient, either as a substance or as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  itemCodeableConcept?: CodeableConcept;

  /** The actual ingredient, either as a substance reference or as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  itemReference?: Reference;

  /** Indication of whether this ingredient affects the therapeutic action of the drug. */
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  /** Specifies how many (or how much) of the items there are in this medication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  strength?: Ratio;

  /** Creates a new MedicationIngredient. @param props - Initial values. */
  constructor(props?: Partial<MedicationIngredient>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Medication. */
export class MedicationBatch extends BackboneElement {

  /** The assigned lot number of a batch of the specified product. */
  @IsOptional()
  @IsString()
  lotNumber?: string;

  /** When this specific batch of product will expire. */
  @IsOptional()
  @IsString()
  expirationDate?: string;

  /** Creates a new MedicationBatch. @param props - Initial values. */
  constructor(props?: Partial<MedicationBatch>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 Medication — primarily used for identification and definition of a medication. */
export class Medication extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'Medication';

  /** Business identifier for this medication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** A code (or set of codes) that specify this medication, or a textual description if no code is available. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** A code to indicate if the medication is in active use. */
  @IsOptional()
  @IsEnum(MedicationStatusCodes)
  status?: MedicationStatusCodes;

  /** Describes the details of the manufacturer of the medication product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  manufacturer?: Reference;

  /** Describes the form of the item, e.g. powder, tablets, capsule. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  form?: CodeableConcept;

  /** Specific amount of the drug in the packaged product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  amount?: Ratio;

  /** Identifies a particular constituent of interest in the product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationIngredient)
  ingredient?: MedicationIngredient[];

  /** Information that only applies to packages (not products). */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicationBatch)
  batch?: MedicationBatch;

  /** Creates a new Medication. @param props - Initial values. */
  constructor(props?: Partial<Medication>) {
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

  /** Adds an item to the ingredient array. @returns This instance for chaining. */
  addIngredient(item: MedicationIngredient): this {
    if (!this.ingredient) {
      this.ingredient = [];
    }

    this.ingredient.push(item);

    return this;
  }
}
