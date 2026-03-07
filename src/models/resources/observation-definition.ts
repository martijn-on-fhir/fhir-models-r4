import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Range } from '../datatypes/range.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for ObservationDefinition. */
export class ObservationDefinitionQuantitativeDetails extends BackboneElement {

  /** Customary unit used to report quantitative results of this observation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  customaryUnit?: CodeableConcept;

  /** SI unit used to report quantitative results of this observation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  unit?: CodeableConcept;

  /** Factor for converting value expressed with SI unit to value expressed with customary unit. */
  @IsOptional()
  @IsNumber()
  conversionFactor?: number;

  /** Number of digits after decimal separator when the results are of type Quantity. */
  @IsOptional()
  @IsNumber()
  decimalPrecision?: number;

  /** Creates a new ObservationDefinitionQuantitativeDetails. @param props - Initial values. */
  constructor(props?: Partial<ObservationDefinitionQuantitativeDetails>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ObservationDefinition. */
export class ObservationDefinitionQualifiedInterval extends BackboneElement {

  /** The category of interval of values, e.g. reference, critical, or absolute. */
  @IsOptional()
  @IsString()
  category?: string;

  /** The low and high values determining the interval. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  range?: Range;

  /** Codes to indicate the health context the range applies to. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  context?: CodeableConcept;

  /** Codes to indicate the target population this reference range applies to. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  appliesTo?: CodeableConcept[];

  /** Sex of the population the range applies to. */
  @IsOptional()
  @IsString()
  gender?: string;

  /** The age at which this reference range is applicable. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  age?: Range;

  /** The gestational age to which this reference range is applicable. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  gestationalAge?: Range;

  /** Text based condition for which the reference range is valid. */
  @IsOptional()
  @IsString()
  condition?: string;

  /** Creates a new ObservationDefinitionQualifiedInterval. @param props - Initial values. */
  constructor(props?: Partial<ObservationDefinitionQualifiedInterval>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the appliesTo array. @returns This instance for chaining. */
  addAppliesTo(item: CodeableConcept): this {
    if (!this.appliesTo) {
      this.appliesTo = [];
    }

    this.appliesTo.push(item);

    return this;
  }
}

/** FHIR R4 ObservationDefinition — definition of an observation and the valid results. */
export class ObservationDefinition extends DomainResource {

  readonly resourceType = 'ObservationDefinition';

  /** A code that classifies the general type of observation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** Describes what will be observed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** A unique identifier assigned to this ObservationDefinition artifact. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The data types allowed for the value element of the instance observations. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  permittedDataType?: string[];

  /** Whether multiple results are allowed for the observation. */
  @IsOptional()
  @IsBoolean()
  multipleResultsAllowed?: boolean;

  /** The method or technique used to perform the observation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /** The preferred name to be used when reporting results of this observation. */
  @IsOptional()
  @IsString()
  preferredReportName?: string;

  /** Characteristics for quantitative results of this observation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ObservationDefinitionQuantitativeDetails)
  quantitativeDetails?: ObservationDefinitionQuantitativeDetails;

  /** Multiple ranges of results qualified by different contexts for ordinal or continuous observations. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationDefinitionQualifiedInterval)
  qualifiedInterval?: ObservationDefinitionQualifiedInterval[];

  /** The set of valid coded results for the observations conforming to this ObservationDefinition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  validCodedValueSet?: Reference;

  /** The set of normal coded results for the observations conforming to this ObservationDefinition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  normalCodedValueSet?: Reference;

  /** The set of abnormal coded results for the observations conforming to this ObservationDefinition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  abnormalCodedValueSet?: Reference;

  /** The set of critical coded results for the observations conforming to this ObservationDefinition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  criticalCodedValueSet?: Reference;

  /** Creates a new ObservationDefinition. @param props - Initial values. */
  constructor(props?: Partial<ObservationDefinition>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the category array. @returns This instance for chaining. */
  addCategory(item: CodeableConcept): this {
    if (!this.category) {
      this.category = [];
    }

    this.category.push(item);

    return this;
  }

  /** Adds an item to the identifier array. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds an item to the permittedDataType array. @returns This instance for chaining. */
  addPermittedDataType(item: string): this {
    if (!this.permittedDataType) {
      this.permittedDataType = [];
    }

    this.permittedDataType.push(item);

    return this;
  }

  /** Adds an item to the qualifiedInterval array. @returns This instance for chaining. */
  addQualifiedInterval(item: ObservationDefinitionQualifiedInterval): this {
    if (!this.qualifiedInterval) {
      this.qualifiedInterval = [];
    }

    this.qualifiedInterval.push(item);

    return this;
  }
}
