import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for MedicinalProductInteraction. */
export class MedicinalProductInteractionInteractant extends BackboneElement {

  /** The specific medication, food or laboratory test that interacts, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  itemReference?: Reference;

  /** The specific medication, food or laboratory test that interacts, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  itemCodeableConcept?: CodeableConcept;

  /** Creates a new MedicinalProductInteractionInteractant. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductInteractionInteractant>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 MedicinalProductInteraction — the interactions of a medicinal product. */
export class MedicinalProductInteraction extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'MedicinalProductInteraction';

  /** The medication for which this is a described interaction. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  subject?: Reference[];

  /** The interaction described. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The specific medication, food or laboratory test that interacts. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductInteractionInteractant)
  interactant?: MedicinalProductInteractionInteractant[];

  /** The type of the interaction e.g. drug-drug, drug-food, drug-lab. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The effect of the interaction, for example "reduced gastric absorption of primary medication". */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  effect?: CodeableConcept;

  /** The incidence of the interaction, e.g. theoretical, observed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  incidence?: CodeableConcept;

  /** Actions for managing the interaction. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  management?: CodeableConcept;

  /** Creates a new MedicinalProductInteraction. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductInteraction>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the subject array. @returns This instance for chaining. */
  addSubject(item: Reference): this {
    if (!this.subject) {
      this.subject = [];
    }

    this.subject.push(item);

    return this;
  }

  /** Adds an item to the interactant array. @returns This instance for chaining. */
  addInteractant(item: MedicinalProductInteractionInteractant): this {
    if (!this.interactant) {
      this.interactant = [];
    }

    this.interactant.push(item);

    return this;
  }
}
