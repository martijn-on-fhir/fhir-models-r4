import { Type } from 'class-transformer';
import { IsOptional, IsString, IsNumber, IsBoolean, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { CodeableConcept } from './codeable-concept.js';
import { Range } from './range.js';
import { Ratio } from './ratio.js';
import { SimpleQuantity } from './simple-quantity.js';
import { Timing } from './timing.js';

/** FHIR R4 Dosage.doseAndRate — The amount of medication administered. */
export class DosageDoseAndRate extends BackboneElement {

  /** The kind of dose or rate specified (e.g. ordered, calculated). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Amount of medication per dose, as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  doseRange?: Range;

  /** Amount of medication per dose, as a SimpleQuantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  doseQuantity?: SimpleQuantity;

  /** Amount of medication per unit of time, as a Ratio. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  rateRatio?: Ratio;

  /** Amount of medication per unit of time, as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  rateRange?: Range;

  /** Amount of medication per unit of time, as a SimpleQuantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  rateQuantity?: SimpleQuantity;

  /** Creates a new DosageDoseAndRate. @param props - Initial values. */
  constructor(props?: Partial<DosageDoseAndRate>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 Dosage — Indicates how the medication is/was taken or should be taken by the patient. */
export class Dosage extends BackboneElement {

  /** Indicates the order in which the dosage instructions should be applied or interpreted. */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /** Free text dosage instructions as reported by the information source. */
  @IsOptional()
  @IsString()
  text?: string;

  /** Supplemental instructions to the patient on how to take the medication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  additionalInstruction?: CodeableConcept[];

  /** Instructions in terms that are understood by the patient or consumer. */
  @IsOptional()
  @IsString()
  patientInstruction?: string;

  /** When medication should be administered. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  timing?: Timing;

  /** Indicates whether the medication is only taken when needed, as a boolean. */
  @IsOptional()
  @IsBoolean()
  asNeededBoolean?: boolean;

  /** Indicates whether the medication is only taken when needed, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  asNeededCodeableConcept?: CodeableConcept;

  /** Body site to administer to. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  site?: CodeableConcept;

  /** How the drug should enter the body. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  route?: CodeableConcept;

  /** Technique for administering medication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /** The amount of medication administered. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DosageDoseAndRate)
  doseAndRate?: DosageDoseAndRate[];

  /** Upper limit on medication per unit of time. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  maxDosePerPeriod?: Ratio;

  /** Upper limit on medication per administration. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  maxDosePerAdministration?: SimpleQuantity;

  /** Upper limit on medication per lifetime of the patient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  maxDosePerLifetime?: SimpleQuantity;

  /** Creates a new Dosage. @param props - Initial values. */
  constructor(props?: Partial<Dosage>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the additionalInstruction array. @returns This instance for chaining. */
  addAdditionalInstruction(item: CodeableConcept): this {
    if (!this.additionalInstruction) {
      this.additionalInstruction = [];
    }

    this.additionalInstruction.push(item);

    return this;
  }

  /** Adds an item to the doseAndRate array. @returns This instance for chaining. */
  addDoseAndRate(item: DosageDoseAndRate): this {
    if (!this.doseAndRate) {
      this.doseAndRate = [];
    }

    this.doseAndRate.push(item);

    return this;
  }
}
