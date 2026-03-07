import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';
import { DeviceMetricCalibrationState } from '../enums/device-metric-calibration-state.js';
import { DeviceMetricCalibrationType } from '../enums/device-metric-calibration-type.js';
import { DeviceMetricCategory } from '../enums/device-metric-category.js';
import { DeviceMetricOperationalStatus } from '../enums/device-metric-operational-status.js';

/** Backbone element for DeviceMetric. */
export class DeviceMetricCalibration extends BackboneElement {

  /** Describes the type of the calibration method. */
  @IsOptional()
  @IsEnum(DeviceMetricCalibrationType)
  type?: DeviceMetricCalibrationType;

  /** Describes the state of the calibration. */
  @IsOptional()
  @IsEnum(DeviceMetricCalibrationState)
  state?: DeviceMetricCalibrationState;

  /** Describes the time last calibration was performed. */
  @IsOptional()
  @IsString()
  time?: string;

  /** Creates a new DeviceMetricCalibration. @param props - Initial values. */
  constructor(props?: Partial<DeviceMetricCalibration>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 DeviceMetric — describes a measurement, calculation or setting capability of a medical device. */
export class DeviceMetric extends DomainResource {

  /** Resource type constant. */
  readonly resourceType = 'DeviceMetric';

  /** Business identifiers for this device metric. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Describes the type of the metric. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Describes the unit that an observed value determined for this metric will have. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  unit?: CodeableConcept;

  /** Describes the link to the Device that this DeviceMetric belongs to. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  source?: Reference;

  /** Describes the link to the Device component that this DeviceMetric belongs to. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  parent?: Reference;

  /** Indicates current operational state of the device. */
  @IsOptional()
  @IsEnum(DeviceMetricOperationalStatus)
  operationalStatus?: DeviceMetricOperationalStatus;

  /** Describes the color representation for the metric. */
  @IsOptional()
  @IsString()
  color?: string;

  /** Indicates the category of the observation generation process. */
  @IsOptional()
  @IsEnum(DeviceMetricCategory)
  category?: DeviceMetricCategory;

  /** Describes the measurement repetition time. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  measurementPeriod?: CodeableConcept;

  /** Describes the calibrations that have been performed or that are required to be performed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceMetricCalibration)
  calibration?: DeviceMetricCalibration[];

  /** Creates a new DeviceMetric. @param props - Initial values. */
  constructor(props?: Partial<DeviceMetric>) {
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

  /** Adds an item to the calibration array. @returns This instance for chaining. */
  addCalibration(item: DeviceMetricCalibration): this {
    if (!this.calibration) {
      this.calibration = [];
    }

    this.calibration.push(item);

    return this;
  }
}
