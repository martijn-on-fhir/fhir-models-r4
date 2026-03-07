import { IsOptional, IsString, IsBoolean } from 'class-validator';
import { Element } from '../base/element.js';

/** FHIR R4 Coding — A reference to a code defined by a terminology system. */
export class Coding extends Element {

  /** The identification of the code system that defines the meaning of the symbol in the code. */
  @IsOptional()
  @IsString()
  system?: string;

  /** The version of the code system which was used when choosing this code. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A symbol in syntax defined by the system. */
  @IsOptional()
  @IsString()
  code?: string;

  /** A representation of the meaning of the code in the system, following the rules of the system. */
  @IsOptional()
  @IsString()
  display?: string;

  /** Indicates that this coding was chosen by a user directly. */
  @IsOptional()
  @IsBoolean()
  userSelected?: boolean;

  /** Creates a new Coding. @param props - Initial values. */
  constructor(props?: Partial<Coding>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
