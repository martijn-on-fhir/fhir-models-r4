import { Type } from 'class-transformer';
import { IsOptional, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Population } from '../datatypes/population.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for MedicinalProductIndication. */
export class MedicinalProductIndicationOtherTherapy extends BackboneElement {

  /** The type of relationship between the medicinal product indication and another therapy. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  therapyRelationshipType?: CodeableConcept;

  /** Reference to a specific medication as part of an indication, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  medicationCodeableConcept?: CodeableConcept;

  /** Reference to a specific medication as part of an indication, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  medicationReference?: Reference;

  /** Creates a new MedicinalProductIndicationOtherTherapy. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductIndicationOtherTherapy>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 MedicinalProductIndication — an indication for a medicinal product. */
export class MedicinalProductIndication extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'MedicinalProductIndication';

  /** The medication for which this is an indication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  subject?: Reference[];

  /** The disease, symptom or procedure that is the indication for treatment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  diseaseSymptomProcedure?: CodeableConcept;

  /** The status of the disease or symptom for the indication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  diseaseStatus?: CodeableConcept;

  /** A comorbidity or coinfection as part of the indication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  comorbidity?: CodeableConcept[];

  /** The intended effect, aim or strategy to be achieved by the indication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  intendedEffect?: CodeableConcept;

  /** Timing or duration information for the indication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  duration?: Quantity;

  /** Information about the use of the medicinal product in relation to other therapies described as part of the indication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductIndicationOtherTherapy)
  otherTherapy?: MedicinalProductIndicationOtherTherapy[];

  /** Describe the undesirable effects of the medicinal product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  undesirableEffect?: Reference[];

  /** The population group to which this indication applies. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Population)
  population?: Population[];

  /** Creates a new MedicinalProductIndication. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductIndication>) {
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

  /** Adds an item to the comorbidity array. @returns This instance for chaining. */
  addComorbidity(item: CodeableConcept): this {
    if (!this.comorbidity) {
      this.comorbidity = [];
    }

    this.comorbidity.push(item);

    return this;
  }

  /** Adds an item to the otherTherapy array. @returns This instance for chaining. */
  addOtherTherapy(item: MedicinalProductIndicationOtherTherapy): this {
    if (!this.otherTherapy) {
      this.otherTherapy = [];
    }

    this.otherTherapy.push(item);

    return this;
  }

  /** Adds an item to the undesirableEffect array. @returns This instance for chaining. */
  addUndesirableEffect(item: Reference): this {
    if (!this.undesirableEffect) {
      this.undesirableEffect = [];
    }

    this.undesirableEffect.push(item);

    return this;
  }

  /** Adds an item to the population array. @returns This instance for chaining. */
  addPopulation(item: Population): this {
    if (!this.population) {
      this.population = [];
    }

    this.population.push(item);

    return this;
  }
}
