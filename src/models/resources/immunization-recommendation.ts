import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for ImmunizationRecommendation. */
export class ImmunizationRecommendationRecommendationDateCriterion extends BackboneElement {

  /** Date classification of recommendation, e.g. earliest date to give or latest date to give. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The date whose meaning is specified by dateCriterion.code. */
  @IsOptional()
  @IsString()
  value?: string;

  /** Creates a new ImmunizationRecommendationRecommendationDateCriterion. @param props - Initial values. */
  constructor(props?: Partial<ImmunizationRecommendationRecommendationDateCriterion>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ImmunizationRecommendation. */
export class ImmunizationRecommendationRecommendation extends BackboneElement {

  /** Vaccine(s) or vaccine group that pertain to the recommendation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  vaccineCode?: CodeableConcept[];

  /** The targeted disease for the recommendation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  targetDisease?: CodeableConcept;

  /** Vaccine(s) which should not be used to fulfill the recommendation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  contraindicatedVaccineCode?: CodeableConcept[];

  /** Indicates the patient status with respect to the path to immunity for the target disease. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  forecastStatus?: CodeableConcept;

  /** The reason for the assigned forecast status. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  forecastReason?: CodeableConcept[];

  /** Vaccine date recommendations, e.g. earliest date to administer, latest date to administer. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImmunizationRecommendationRecommendationDateCriterion)
  dateCriterion?: ImmunizationRecommendationRecommendationDateCriterion[];

  /** Contains the description about the protocol under which the vaccine was administered. */
  @IsOptional()
  @IsString()
  description?: string;

  /** One possible path to achieve presumed immunity against a disease. */
  @IsOptional()
  @IsString()
  series?: string;

  /** Nominal position of the recommended dose in a series as a positive integer. */
  @IsOptional()
  @IsNumber()
  doseNumberPositiveInt?: number;

  /** Nominal position of the recommended dose in a series as a string. */
  @IsOptional()
  @IsString()
  doseNumberString?: string;

  /** The recommended number of doses to achieve immunity as a positive integer. */
  @IsOptional()
  @IsNumber()
  seriesDosesPositiveInt?: number;

  /** The recommended number of doses to achieve immunity as a string. */
  @IsOptional()
  @IsString()
  seriesDosesString?: string;

  /** Immunization event history and target disease that supports the recommendation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supportingImmunization?: Reference[];

  /** Patient Information that supports the status and recommendation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supportingPatientInformation?: Reference[];

  /** Creates a new ImmunizationRecommendationRecommendation. @param props - Initial values. */
  constructor(props?: Partial<ImmunizationRecommendationRecommendation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the vaccineCode array. @returns This instance for chaining. */
  addVaccineCode(item: CodeableConcept): this {
    if (!this.vaccineCode) {
      this.vaccineCode = [];
    }

    this.vaccineCode.push(item);

    return this;
  }

  /** Adds an item to the contraindicatedVaccineCode array. @returns This instance for chaining. */
  addContraindicatedVaccineCode(item: CodeableConcept): this {
    if (!this.contraindicatedVaccineCode) {
      this.contraindicatedVaccineCode = [];
    }

    this.contraindicatedVaccineCode.push(item);

    return this;
  }

  /** Adds an item to the forecastReason array. @returns This instance for chaining. */
  addForecastReason(item: CodeableConcept): this {
    if (!this.forecastReason) {
      this.forecastReason = [];
    }

    this.forecastReason.push(item);

    return this;
  }

  /** Adds an item to the dateCriterion array. @returns This instance for chaining. */
  addDateCriterion(item: ImmunizationRecommendationRecommendationDateCriterion): this {
    if (!this.dateCriterion) {
      this.dateCriterion = [];
    }

    this.dateCriterion.push(item);

    return this;
  }

  /** Adds an item to the supportingImmunization array. @returns This instance for chaining. */
  addSupportingImmunization(item: Reference): this {
    if (!this.supportingImmunization) {
      this.supportingImmunization = [];
    }

    this.supportingImmunization.push(item);

    return this;
  }

  /** Adds an item to the supportingPatientInformation array. @returns This instance for chaining. */
  addSupportingPatientInformation(item: Reference): this {
    if (!this.supportingPatientInformation) {
      this.supportingPatientInformation = [];
    }

    this.supportingPatientInformation.push(item);

    return this;
  }
}

/** FHIR R4 ImmunizationRecommendation — a patient's point-in-time set of vaccine recommendations. */
export class ImmunizationRecommendation extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'ImmunizationRecommendation';

  /** A unique identifier assigned to this particular recommendation record. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The patient the recommendation(s) are for. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /** The date the immunization recommendation(s) were created. */
  @IsOptional()
  @IsString()
  date?: string;

  /** Indicates the authority who published the protocol. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  authority?: Reference;

  /** Vaccine administration recommendations. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImmunizationRecommendationRecommendation)
  recommendation?: ImmunizationRecommendationRecommendation[];

  /** Creates a new ImmunizationRecommendation. @param props - Initial values. */
  constructor(props?: Partial<ImmunizationRecommendation>) {
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

  /** Adds an item to the recommendation array. @returns This instance for chaining. */
  addRecommendation(item: ImmunizationRecommendationRecommendation): this {
    if (!this.recommendation) {
      this.recommendation = [];
    }

    this.recommendation.push(item);

    return this;
  }
}
