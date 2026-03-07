import { Type } from 'class-transformer';
import { IsOptional, IsString, IsNumber, IsEnum, ValidateNested } from 'class-validator';
import { Element } from '../base/element.js';
import { ContactPointSystem } from '../enums/contact-point-system.js';
import { ContactPointUse } from '../enums/contact-point-use.js';
import { Period } from './period.js';

/** FHIR R4 ContactPoint — Details for all kinds of technology-mediated contact points for a person or organization. */
export class ContactPoint extends Element {

  /** Telecommunications form for the contact point (phone, fax, email, pager, url, sms, other). */
  @IsOptional()
  @IsEnum(ContactPointSystem)
  system?: ContactPointSystem;

  /** The actual contact point details, in a form that is meaningful to the designated communication system. */
  @IsOptional()
  @IsString()
  value?: string;

  /** Identifies the purpose for the contact point (home, work, temp, old, mobile). */
  @IsOptional()
  @IsEnum(ContactPointUse)
  use?: ContactPointUse;

  /** Specifies a preferred order in which to use a set of contacts. */
  @IsOptional()
  @IsNumber()
  rank?: number;

  /** Time period when the contact point was/is in use. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Creates a new ContactPoint. @param props - Initial values. */
  constructor(props?: Partial<ContactPoint>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
