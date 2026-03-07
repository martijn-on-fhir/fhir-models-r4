import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsOptional, IsString, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';

/** FHIR R4 BodyStructure resource — record details about an anatomical structure on a patient. */
export class BodyStructure extends DomainResource {

  readonly resourceType = 'BodyStructure';

  /** Identifier for this instance of the anatomical structure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Whether this body structure record is in active use. */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  /** The kind of structure being represented by the body structure, such as an anatomical morphology or structure. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  morphology?: CodeableConcept;

  /** The anatomical location or region of the body structure. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  location?: CodeableConcept;

  /** Qualifier to refine the anatomical location, such as laterality or directionality. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  locationQualifier?: CodeableConcept[];

  /** A summary, characterization, or explanation of the body structure. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Image or images used to identify a location. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Attachment)
  image?: Attachment[];

  /** The person to which the body structure relates. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /** Creates a new {@link BodyStructure} instance. @param props - Initial property values. */
  constructor(props?: Partial<BodyStructure>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link BodyStructure.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link BodyStructure.locationQualifier locationQualifier} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addLocationQualifier(item: CodeableConcept): this {
    if (!this.locationQualifier) {
      this.locationQualifier = [];
    }

    this.locationQualifier.push(item);

    return this;
  }

  /** Adds an {@link Attachment} to the {@link BodyStructure.image image} array. @param item - The {@link Attachment} to add. @returns This instance for chaining. */
  addImage(item: Attachment): this {
    if (!this.image) {
      this.image = [];
    }

    this.image.push(item);

    return this;
  }
}
