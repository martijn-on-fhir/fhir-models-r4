import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, ValidateNested } from 'class-validator';
import { Element } from '../base/element.js';
import { IdentifierUse } from '../enums/identifier-use.js';
import { CodeableConcept } from './codeable-concept.js';
import { Period } from './period.js';
import { Reference } from './reference.js';

/** FHIR R4 Identifier — An identifier intended for computation, assigned by an authority. */
export class Identifier extends Element {

  /** The purpose of this identifier (usual, official, temp, secondary, old). */
  @IsOptional()
  @IsEnum(IdentifierUse)
  use?: IdentifierUse;

  /** A coded type for the identifier that can be used to determine which identifier to use for a particular purpose. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Establishes the namespace for the value, a URL that describes a set of values that are unique. */
  @IsOptional()
  @IsString()
  system?: string;

  /** The portion of the identifier typically relevant to the user and which is unique within the context of the system. */
  @IsOptional()
  @IsString()
  value?: string;

  /** Time period during which the identifier is/was valid for use. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Organization that issued/manages the identifier. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  assigner?: Reference;

  /** Creates a new Identifier. @param props - Initial values. */
  constructor(props?: Partial<Identifier>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
