import { Type } from 'class-transformer';
import { IsOptional, IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Element } from '../base/element.js';
import { CodeableConcept } from './codeable-concept.js';
import { Coding } from './coding.js';
import { Duration } from './duration.js';
import { Period } from './period.js';
import { Reference } from './reference.js';

/** FHIR R4 DataRequirement.codeFilter — Code filters specify additional constraints on the data. */
export class DataRequirementCodeFilter extends Element {

  /** The code-valued attribute of the filter as a path. */
  @IsOptional()
  @IsString()
  path?: string;

  /** A token parameter that refers to a search parameter on the specified type of the DataRequirement. */
  @IsOptional()
  @IsString()
  searchParam?: string;

  /** The valueset for the code filter, as a canonical reference. */
  @IsOptional()
  @IsString()
  valueSet?: string;

  /** The codes for the code filter. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  code?: Coding[];

  /** Creates a new DataRequirementCodeFilter. @param props - Initial values. */
  constructor(props?: Partial<DataRequirementCodeFilter>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the code array. @returns This instance for chaining. */
  addCode(item: Coding): this {
    if (!this.code) {
      this.code = [];
    }

    this.code.push(item);

    return this;
  }
}

/** FHIR R4 DataRequirement.dateFilter — Date filters specify additional constraints on the data related to date. */
export class DataRequirementDateFilter extends Element {

  /** The date-valued attribute of the filter as a path. */
  @IsOptional()
  @IsString()
  path?: string;

  /** A date parameter that refers to a search parameter on the specified type of the DataRequirement. */
  @IsOptional()
  @IsString()
  searchParam?: string;

  /** The value of the filter as a dateTime. */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  /** The value of the filter as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  valuePeriod?: Period;

  /** The value of the filter as a Duration. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  valueDuration?: Duration;

  /** Creates a new DataRequirementDateFilter. @param props - Initial values. */
  constructor(props?: Partial<DataRequirementDateFilter>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 DataRequirement.sort — Specifies the order of the results to be returned. */
export class DataRequirementSort extends Element {

  /** The attribute of the sort as a path expression. */
  @IsOptional()
  @IsString()
  path?: string;

  /** The direction of the sort, ascending or descending. */
  @IsOptional()
  @IsString()
  direction?: string;

  /** Creates a new DataRequirementSort. @param props - Initial values. */
  constructor(props?: Partial<DataRequirementSort>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 DataRequirement — Describes a required data item for evaluation in terms of the type of data and optional code or date-based filters. */
export class DataRequirement extends Element {

  /** The type of the required data, specified as the type name of a resource. */
  @IsOptional()
  @IsString()
  type?: string;

  /** The profile of the required data, specified as the canonical URL of the profile. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  profile?: string[];

  /** The intended subjects of the data requirement, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  subjectCodeableConcept?: CodeableConcept;

  /** The intended subjects of the data requirement, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subjectReference?: Reference;

  /** Indicates that specific elements of the type are referenced by the knowledge module. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  mustSupport?: string[];

  /** Code filters specify additional constraints on the data, specifying the value set of interest for a particular element. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DataRequirementCodeFilter)
  codeFilter?: DataRequirementCodeFilter[];

  /** Date filters specify additional constraints on the data in terms of the applicable date range. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DataRequirementDateFilter)
  dateFilter?: DataRequirementDateFilter[];

  /** Specifies a maximum number of results to be returned for the data requirement. */
  @IsOptional()
  @IsNumber()
  limit?: number;

  /** Specifies the order of the results to be returned. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DataRequirementSort)
  sort?: DataRequirementSort[];

  /** Creates a new DataRequirement. @param props - Initial values. */
  constructor(props?: Partial<DataRequirement>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the profile array. @returns This instance for chaining. */
  addProfile(item: string): this {
    if (!this.profile) {
      this.profile = [];
    }

    this.profile.push(item);

    return this;
  }

  /** Adds an item to the mustSupport array. @returns This instance for chaining. */
  addMustSupport(item: string): this {
    if (!this.mustSupport) {
      this.mustSupport = [];
    }

    this.mustSupport.push(item);

    return this;
  }

  /** Adds an item to the codeFilter array. @returns This instance for chaining. */
  addCodeFilter(item: DataRequirementCodeFilter): this {
    if (!this.codeFilter) {
      this.codeFilter = [];
    }

    this.codeFilter.push(item);

    return this;
  }

  /** Adds an item to the dateFilter array. @returns This instance for chaining. */
  addDateFilter(item: DataRequirementDateFilter): this {
    if (!this.dateFilter) {
      this.dateFilter = [];
    }

    this.dateFilter.push(item);

    return this;
  }

  /** Adds an item to the sort array. @returns This instance for chaining. */
  addSort(item: DataRequirementSort): this {
    if (!this.sort) {
      this.sort = [];
    }

    this.sort.push(item);

    return this;
  }
}
