import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, IsEnum, ValidateNested } from 'class-validator';
import { Element } from '../base/element.js';
import { NameUse } from '../enums/name-use.js';
import { Period } from './period.js';

/** FHIR R4 HumanName — A human's name with the ability to identify parts and usage. */
export class HumanName extends Element {

  /** Identifies the purpose for this name (usual, official, temp, nickname, anonymous, old, maiden). */
  @IsOptional()
  @IsEnum(NameUse)
  use?: NameUse;

  /** Specifies the entire name as it should be displayed. */
  @IsOptional()
  @IsString()
  text?: string;

  /** The part of a name that links to the genealogy (surname). */
  @IsOptional()
  @IsString()
  family?: string;

  /** Given names (not always first), includes middle names. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  given?: string[];

  /** Parts that come before the name (e.g. Dr, Mr, Mrs). */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  prefix?: string[];

  /** Parts that come after the name (e.g. Jr, III, PhD). */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  suffix?: string[];

  /** Time period when the name was/is in use. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Creates a new HumanName. @param props - Initial values. */
  constructor(props?: Partial<HumanName>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the given array. @returns This instance for chaining. */
  addGiven(item: string): this {
    if (!this.given) {
      this.given = [];
    }

    this.given.push(item);

    return this;
  }

  /** Adds an item to the prefix array. @returns This instance for chaining. */
  addPrefix(item: string): this {
    if (!this.prefix) {
      this.prefix = [];
    }

    this.prefix.push(item);

    return this;
  }

  /** Adds an item to the suffix array. @returns This instance for chaining. */
  addSuffix(item: string): this {
    if (!this.suffix) {
      this.suffix = [];
    }

    this.suffix.push(item);

    return this;
  }
}
