import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Quantity } from '../datatypes/quantity.js';
import { Ratio } from '../datatypes/ratio.js';
import { Reference } from '../datatypes/reference.js';
import { FHIRSubstanceStatus } from '../enums/fhir-substance-status.js';

/** Backbone element for Substance. */
export class SubstanceInstance extends BackboneElement {

  /** Identifier associated with the package/container. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** When the substance is no longer valid to use. */
  @IsOptional()
  @IsString()
  expiry?: string;

  /** The amount of the substance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** Creates a new SubstanceInstance. @param props - Initial values. */
  constructor(props?: Partial<SubstanceInstance>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Substance. */
export class SubstanceIngredient extends BackboneElement {

  /** The amount of the ingredient in the substance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  quantity?: Ratio;

  /** Another substance that is a component of this substance as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  substanceCodeableConcept?: CodeableConcept;

  /** Another substance that is a component of this substance as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  substanceReference?: Reference;

  /** Creates a new SubstanceIngredient. @param props - Initial values. */
  constructor(props?: Partial<SubstanceIngredient>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 Substance — a homogeneous material with a definite composition. */
export class Substance extends DomainResource {

  readonly resourceType = 'Substance';

  /** Unique identifier for the substance. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** A code to indicate if the substance is actively used. */
  @IsOptional()
  @IsEnum(FHIRSubstanceStatus)
  status?: FHIRSubstanceStatus;

  /** A code that classifies the general type of substance. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** A code (or set of codes) that identify this substance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** A description of the substance - its appearance, handling requirements, and other usage notes. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Substance may be used to describe a kind of substance, or a specific package/container of the substance. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceInstance)
  instance?: SubstanceInstance[];

  /** A substance can be composed of other substances. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceIngredient)
  ingredient?: SubstanceIngredient[];

  /** Creates a new Substance. @param props - Initial values. */
  constructor(props?: Partial<Substance>) {
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

  /** Adds an item to the category array. @returns This instance for chaining. */
  addCategory(item: CodeableConcept): this {
    if (!this.category) {
      this.category = [];
    }

    this.category.push(item);

    return this;
  }

  /** Adds an item to the instance array. @returns This instance for chaining. */
  addInstance(item: SubstanceInstance): this {
    if (!this.instance) {
      this.instance = [];
    }

    this.instance.push(item);

    return this;
  }

  /** Adds an item to the ingredient array. @returns This instance for chaining. */
  addIngredient(item: SubstanceIngredient): this {
    if (!this.ingredient) {
      this.ingredient = [];
    }

    this.ingredient.push(item);

    return this;
  }
}
