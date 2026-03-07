import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, IsEnum, ValidateNested } from 'class-validator';
import { Element } from '../base/element.js';
import { AddressType } from '../enums/address-type.js';
import { AddressUse } from '../enums/address-use.js';
import { Period } from './period.js';

/** FHIR R4 Address — An address expressed using postal conventions (as opposed to GPS or other location definition formats). */
export class Address extends Element {

  /** The purpose of this address (home, work, temp, old, billing). */
  @IsOptional()
  @IsEnum(AddressUse)
  use?: AddressUse;

  /** Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes). */
  @IsOptional()
  @IsEnum(AddressType)
  type?: AddressType;

  /** Specifies the entire address as it should be displayed. */
  @IsOptional()
  @IsString()
  text?: string;

  /** Street name, number, direction, P.O. Box, delivery hints, and similar address information. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  line?: string[];

  /** The name of the city, town, suburb, village, or other community or delivery center. */
  @IsOptional()
  @IsString()
  city?: string;

  /** The name of the administrative area (county). */
  @IsOptional()
  @IsString()
  district?: string;

  /** Sub-unit of a country with limited sovereignty in a federally organized country (state or province). */
  @IsOptional()
  @IsString()
  state?: string;

  /** A postal code designating a region defined by the postal service. */
  @IsOptional()
  @IsString()
  postalCode?: string;

  /** Country as represented by the ISO 3166 2-letter code. */
  @IsOptional()
  @IsString()
  country?: string;

  /** Time period when the address was/is in use. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Creates a new Address. @param props - Initial values. */
  constructor(props?: Partial<Address>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the line array. @returns This instance for chaining. */
  addLine(item: string): this {
    if (!this.line) {
      this.line = [];
    }

    this.line.push(item);

    return this;
  }
}
