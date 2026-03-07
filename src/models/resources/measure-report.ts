import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { MeasureReportStatus } from '../enums/measure-report-status.js';
import { MeasureReportType } from '../enums/measure-report-type.js';

/** Backbone element for {@link MeasureReportGroup.population}. */
export class MeasureReportGroupPopulation extends BackboneElement {

  /** The type of the population, such as initial, numerator, denominator, etc. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The number of members of the population. */
  @IsOptional()
  @IsNumber()
  count?: number;

  /** A reference to a Bundle containing the individual-level data for members of the population. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subjectResults?: Reference;

  /** Creates a new {@link MeasureReportGroupPopulation} instance. @param props - Initial property values. */
  constructor(props?: Partial<MeasureReportGroupPopulation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link MeasureReportGroupStratifierStratum.population}. */
export class MeasureReportGroupStratifierStratumPopulation extends BackboneElement {

  /** The type of the population, such as initial, numerator, denominator, etc. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The number of members of the population in this stratum. */
  @IsOptional()
  @IsNumber()
  count?: number;

  /** A reference to a Bundle containing the individual-level data for members of the population in this stratum. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subjectResults?: Reference;

  /** Creates a new {@link MeasureReportGroupStratifierStratumPopulation} instance. @param props - Initial property values. */
  constructor(props?: Partial<MeasureReportGroupStratifierStratumPopulation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link MeasureReportGroupStratifierStratum.component}. */
export class MeasureReportGroupStratifierStratumComponent extends BackboneElement {

  /** The code for the stratum component value. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The stratum component value. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  value?: CodeableConcept;

  /** Creates a new {@link MeasureReportGroupStratifierStratumComponent} instance. @param props - Initial property values. */
  constructor(props?: Partial<MeasureReportGroupStratifierStratumComponent>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link MeasureReportGroupStratifier.stratum}. */
export class MeasureReportGroupStratifierStratum extends BackboneElement {

  /** The value for this stratum, expressed as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  value?: CodeableConcept;

  /** A stratifier component value for multi-component stratifiers. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureReportGroupStratifierStratumComponent)
  component?: MeasureReportGroupStratifierStratumComponent[];

  /** The populations that make up the stratum, one for each type of population appropriate to the measure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureReportGroupStratifierStratumPopulation)
  population?: MeasureReportGroupStratifierStratumPopulation[];

  /** The measure score for this stratum. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  measureScore?: Quantity;

  /** Creates a new {@link MeasureReportGroupStratifierStratum} instance. @param props - Initial property values. */
  constructor(props?: Partial<MeasureReportGroupStratifierStratum>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link MeasureReportGroupStratifierStratumComponent} to the {@link MeasureReportGroupStratifierStratum.component component} array. @param item - The {@link MeasureReportGroupStratifierStratumComponent} to add. @returns This instance for chaining. */
  addComponent(item: MeasureReportGroupStratifierStratumComponent): this {
    if (!this.component) {
      this.component = [];
    }

    this.component.push(item);

    return this;
  }

  /** Adds a {@link MeasureReportGroupStratifierStratumPopulation} to the {@link MeasureReportGroupStratifierStratum.population population} array. @param item - The {@link MeasureReportGroupStratifierStratumPopulation} to add. @returns This instance for chaining. */
  addPopulation(item: MeasureReportGroupStratifierStratumPopulation): this {
    if (!this.population) {
      this.population = [];
    }

    this.population.push(item);

    return this;
  }
}

/** Backbone element for {@link MeasureReportGroup.stratifier}. */
export class MeasureReportGroupStratifier extends BackboneElement {

  /** The meaning of this stratifier, as defined in the measure definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /** The individual strata that make up the stratifier, one for each unique value found in the measure population for the stratifier. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureReportGroupStratifierStratum)
  stratum?: MeasureReportGroupStratifierStratum[];

  /** Creates a new {@link MeasureReportGroupStratifier} instance. @param props - Initial property values. */
  constructor(props?: Partial<MeasureReportGroupStratifier>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link CodeableConcept} to the {@link MeasureReportGroupStratifier.code code} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addCode(item: CodeableConcept): this {
    if (!this.code) {
      this.code = [];
    }

    this.code.push(item);

    return this;
  }

  /** Adds a {@link MeasureReportGroupStratifierStratum} to the {@link MeasureReportGroupStratifier.stratum stratum} array. @param item - The {@link MeasureReportGroupStratifierStratum} to add. @returns This instance for chaining. */
  addStratum(item: MeasureReportGroupStratifierStratum): this {
    if (!this.stratum) {
      this.stratum = [];
    }

    this.stratum.push(item);

    return this;
  }
}

/** Backbone element for {@link MeasureReport.group}. */
export class MeasureReportGroup extends BackboneElement {

  /** The meaning of the population group as defined in the measure definition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The populations that make up the population group, one for each type of population appropriate to the measure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureReportGroupPopulation)
  population?: MeasureReportGroupPopulation[];

  /** The measure score for this population group. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  measureScore?: Quantity;

  /** When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureReportGroupStratifier)
  stratifier?: MeasureReportGroupStratifier[];

  /** Creates a new {@link MeasureReportGroup} instance. @param props - Initial property values. */
  constructor(props?: Partial<MeasureReportGroup>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link MeasureReportGroupPopulation} to the {@link MeasureReportGroup.population population} array. @param item - The {@link MeasureReportGroupPopulation} to add. @returns This instance for chaining. */
  addPopulation(item: MeasureReportGroupPopulation): this {
    if (!this.population) {
      this.population = [];
    }

    this.population.push(item);

    return this;
  }

  /** Adds a {@link MeasureReportGroupStratifier} to the {@link MeasureReportGroup.stratifier stratifier} array. @param item - The {@link MeasureReportGroupStratifier} to add. @returns This instance for chaining. */
  addStratifier(item: MeasureReportGroupStratifier): this {
    if (!this.stratifier) {
      this.stratifier = [];
    }

    this.stratifier.push(item);

    return this;
  }
}

/** FHIR R4 MeasureReport resource — contains the results of evaluating a measure against one or more subjects. */
export class MeasureReport extends DomainResource {

  /** The FHIR resource type, always "MeasureReport". */
  readonly resourceType = 'MeasureReport';

  /** A formal identifier that is used to identify this MeasureReport when it is represented in other contexts. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The MeasureReport status. No data will be available until the MeasureReport status is complete. */
  @IsOptional()
  @IsEnum(MeasureReportStatus)
  status?: MeasureReportStatus;

  /** The type of measure report: individual, subject-list, summary, or data-collection. */
  @IsOptional()
  @IsEnum(MeasureReportType)
  type?: MeasureReportType;

  /** A reference to the Measure that was calculated to produce this report. */
  @IsOptional()
  @IsString()
  measure?: string;

  /** Optional subject identifying the individual or entity being evaluated. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The date this measure report was generated. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The individual, location, or organization that is reporting the data. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  reporter?: Reference;

  /** The reporting period for which the report was calculated. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Whether improvement in the measure is noted by an increase or decrease in the measure score. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  improvementNotation?: CodeableConcept;

  /** The results of the calculation, one for each population group in the measure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureReportGroup)
  group?: MeasureReportGroup[];

  /** A reference to a Bundle containing the Resources that were used in the calculation of this measure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  evaluatedResource?: Reference[];

  /** Creates a new {@link MeasureReport} instance. @param props - Initial property values. */
  constructor(props?: Partial<MeasureReport>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link Identifier} to the {@link MeasureReport.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link MeasureReportGroup} to the {@link MeasureReport.group group} array. @param item - The {@link MeasureReportGroup} to add. @returns This instance for chaining. */
  addGroup(item: MeasureReportGroup): this {
    if (!this.group) {
      this.group = [];
    }

    this.group.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link MeasureReport.evaluatedResource evaluatedResource} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addEvaluatedResource(item: Reference): this {
    if (!this.evaluatedResource) {
      this.evaluatedResource = [];
    }

    this.evaluatedResource.push(item);

    return this;
  }
}
