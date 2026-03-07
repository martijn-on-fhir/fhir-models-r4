import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Element } from '../base/element.js';
import { Identifier } from './identifier.js';

/** FHIR R4 Reference — A reference from one resource to another. */
export class Reference extends Element {

  /** A reference to a location at which the other resource is found (literal reference URL). */
  @IsOptional()
  @IsString()
  reference?: string;

  /** The expected type of the target of the reference (e.g. Patient, Organization). */
  @IsOptional()
  @IsString()
  type?: string;

  /** An identifier for the target resource, used when there is no way to reference the other resource directly. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** Plain text narrative that identifies the resource in addition to the resource reference. */
  @IsOptional()
  @IsString()
  display?: string;

  /** Creates a new Reference. @param props - Initial values. */
  constructor(props?: Partial<Reference>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
