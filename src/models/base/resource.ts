
import {ClassTransformer, instanceToPlain, Type} from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Meta } from '../datatypes/meta.js';

export interface IResource {
  resourceType?: string;
  id?: string;
  meta?: Meta;
  implicitRules?: string;
  language?: string;
  toPlainObject?(): any;
  init?(): void;
}
/** FHIR R4 Resource — Base definition for all FHIR resources. */
export class Resource implements IResource{

  /** The type of the resource. */
  @IsOptional()
  @IsString()
  resourceType?: string;

  /** The logical id of the resource, assigned by the server. */
  @IsOptional()
  @IsString()
  id?: string;

  /** The metadata about the resource, including version, profile, security labels, and tags. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Meta)
  meta?: Meta;

  /** A reference to a set of rules that were followed when the resource was constructed. */
  @IsOptional()
  @IsString()
  implicitRules?: string;

  /** The base language in which the resource is written. */
  @IsOptional()
  @IsString()
  language?: string;

  /** Creates a new Resource. @param props - Initial values. */
  constructor(props?: Partial<Resource>) {
    if (props) {
      Object.assign(this, props);
    }

    this.init();
  }

  init(): void {

    if(!this.meta) {

      this.meta = new Meta({
        profile: [],
        lastUpdated: new Date().toISOString()
      });
    }
  }

  /**
   * Transforms the resource into a plain object.
   */
  toPlainObject () {

    return instanceToPlain(this, {
      exposeUnsetFields: false
    })
  }

  /**
   * Serializes the resource into a JSON string.
   */
  serialize(): string {

    return new ClassTransformer().serialize(this, {
      exposeUnsetFields: false
    });
  }
}
