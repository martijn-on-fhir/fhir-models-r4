import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';

/** FHIR R4 Basic resource — a resource for representing content that has no other appropriate resource type. */
export class Basic extends DomainResource {

  readonly resourceType = 'Basic';

  /** Business identifiers assigned to this resource by the performer or other systems. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Identifies the "type" of resource — equivalent to the resource name for other resources. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** Identifies the patient, practitioner, device, or any other resource that is the "focus" of this resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** Identifies when the resource was first created. */
  @IsOptional()
  @IsString()
  created?: string;

  /** Indicates who was responsible for creating the resource instance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /** Creates a new {@link Basic} instance. @param props - Initial property values. */
  constructor(props?: Partial<Basic>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link Basic.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }
}
