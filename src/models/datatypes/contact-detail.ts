import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { Element } from '../base/element.js';
import { ContactPoint } from './contact-point.js';

/** FHIR R4 ContactDetail — Specifies contact information for a person or organization. */
export class ContactDetail extends Element {

  /** The name of an individual to contact. */
  @IsOptional()
  @IsString()
  name?: string;

  /** The contact details for the individual (if a name was provided) or the organization. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /** Creates a new ContactDetail. @param props - Initial values. */
  constructor(props?: Partial<ContactDetail>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the telecom array. @returns This instance for chaining. */
  addTelecom(item: ContactPoint): this {
    if (!this.telecom) {
      this.telecom = [];
    }

    this.telecom.push(item);

    return this;
  }
}
