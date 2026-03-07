import { Type } from 'class-transformer';
import { IsOptional, IsString, IsNumber, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { VisionBase } from '../enums/vision-base.js';
import { VisionEyes } from '../enums/vision-eyes.js';

/** Backbone element for VisionPrescription. */
export class VisionPrescriptionLensSpecificationPrism extends BackboneElement {

  /** Amount of prism to compensate for eye alignment in fractional diopters. */
  @IsOptional()
  @IsNumber()
  amount?: number;

  /** The relative base, or reference lens edge, for the prism. */
  @IsOptional()
  @IsEnum(VisionBase)
  base?: VisionBase;

  /** Creates a new VisionPrescriptionLensSpecificationPrism. @param props - Initial values. */
  constructor(props?: Partial<VisionPrescriptionLensSpecificationPrism>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for VisionPrescription. */
export class VisionPrescriptionLensSpecification extends BackboneElement {

  /** Identifies the type of vision correction product which is required for the patient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  product?: CodeableConcept;

  /** The eye for which the lens specification applies. */
  @IsOptional()
  @IsEnum(VisionEyes)
  eye?: VisionEyes;

  /** Lens power measured in diopters (0.25 units). */
  @IsOptional()
  @IsNumber()
  sphere?: number;

  /** Power adjustment for astigmatism measured in diopters (0.25 units). */
  @IsOptional()
  @IsNumber()
  cylinder?: number;

  /** Adjustment for astigmatism measured in integer degrees. */
  @IsOptional()
  @IsNumber()
  axis?: number;

  /** Allows for adjustment on two axis. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VisionPrescriptionLensSpecificationPrism)
  prism?: VisionPrescriptionLensSpecificationPrism[];

  /** Power adjustment for multifocal lenses measured in diopters (0.25 units). */
  @IsOptional()
  @IsNumber()
  add?: number;

  /** Contact lens power measured in diopters (0.25 units). */
  @IsOptional()
  @IsNumber()
  power?: number;

  /** Back curvature measured in millimeters. */
  @IsOptional()
  @IsNumber()
  backCurve?: number;

  /** Contact lens diameter measured in millimeters. */
  @IsOptional()
  @IsNumber()
  diameter?: number;

  /** The recommended maximum wear period for the lens. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  duration?: Quantity;

  /** Special color or pattern. */
  @IsOptional()
  @IsString()
  color?: string;

  /** Brand recommendations or restrictions. */
  @IsOptional()
  @IsString()
  brand?: string;

  /** Notes for special requirements such as coatings and lens materials. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Creates a new VisionPrescriptionLensSpecification. @param props - Initial values. */
  constructor(props?: Partial<VisionPrescriptionLensSpecification>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the prism array. @returns This instance for chaining. */
  addPrism(item: VisionPrescriptionLensSpecificationPrism): this {
    if (!this.prism) {
      this.prism = [];
    }

    this.prism.push(item);

    return this;
  }

  /** Adds an item to the note array. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }
}

/** FHIR R4 VisionPrescription — an authorization for the provision of glasses and/or contact lenses to a patient. */
export class VisionPrescription extends DomainResource {

  readonly resourceType = 'VisionPrescription';

  /** A unique identifier assigned to this vision prescription. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The status of the resource instance. */
  @IsOptional()
  @IsString()
  status?: string;

  /** The date this resource was created. */
  @IsOptional()
  @IsString()
  created?: string;

  /** A resource reference to the person to whom the vision prescription applies. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /** A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** The date (and perhaps time) when the prescription was written. */
  @IsOptional()
  @IsString()
  dateWritten?: string;

  /** The healthcare professional responsible for authorizing the prescription. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  prescriber?: Reference;

  /** Contain the details of the individual lens specifications and serves as the authorization for the fulfilment by certified professionals. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VisionPrescriptionLensSpecification)
  lensSpecification?: VisionPrescriptionLensSpecification[];

  /** Creates a new VisionPrescription. @param props - Initial values. */
  constructor(props?: Partial<VisionPrescription>) {
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

  /** Adds an item to the lensSpecification array. @returns This instance for chaining. */
  addLensSpecification(item: VisionPrescriptionLensSpecification): this {
    if (!this.lensSpecification) {
      this.lensSpecification = [];
    }

    this.lensSpecification.push(item);

    return this;
  }
}
