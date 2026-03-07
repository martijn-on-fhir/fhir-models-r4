import { Type } from 'class-transformer';
import { IsOptional, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Population } from '../datatypes/population.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for MedicinalProductContraindication. */
export class MedicinalProductContraindicationOtherTherapy extends BackboneElement {

  /** The type of relationship between the medicinal product indication or contraindication and another therapy. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  therapyRelationshipType?: CodeableConcept;

  /** Reference to a specific medication as part of an indication or contraindication, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  medicationCodeableConcept?: CodeableConcept;

  /** Reference to a specific medication as part of an indication or contraindication, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  medicationReference?: Reference;

  /** Creates a new MedicinalProductContraindicationOtherTherapy. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductContraindicationOtherTherapy>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 MedicinalProductContraindication — a contraindication for a medicinal product. */
export class MedicinalProductContraindication extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'MedicinalProductContraindication';

  /** The medication for which this is a contraindication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  subject?: Reference[];

  /** The disease, symptom or procedure for the contraindication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  disease?: CodeableConcept;

  /** The status of the disease or symptom for the contraindication. */
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

  /** Information about the use of the medicinal product in relation to other therapies as part of the indication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  therapeuticIndication?: Reference[];

  /** Information about the use of the medicinal product in relation to other therapies described as part of the contraindication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductContraindicationOtherTherapy)
  otherTherapy?: MedicinalProductContraindicationOtherTherapy[];

  /** The population group to which this contraindication applies. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Population)
  population?: Population[];

  /** Creates a new MedicinalProductContraindication. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductContraindication>) {
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

  /** Adds an item to the therapeuticIndication array. @returns This instance for chaining. */
  addTherapeuticIndication(item: Reference): this {
    if (!this.therapeuticIndication) {
      this.therapeuticIndication = [];
    }

    this.therapeuticIndication.push(item);

    return this;
  }

  /** Adds an item to the otherTherapy array. @returns This instance for chaining. */
  addOtherTherapy(item: MedicinalProductContraindicationOtherTherapy): this {
    if (!this.otherTherapy) {
      this.otherTherapy = [];
    }

    this.otherTherapy.push(item);

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
