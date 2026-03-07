import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { Element } from '../base/element.js';
import { Coding } from './coding.js';

/** FHIR R4 Meta — The metadata about a resource, including versioning, profiles, security labels, and tags. */
export class Meta extends Element {

  /** The version specific identifier, as it appears in the version portion of the URL. */
  @IsOptional()
  @IsString()
  versionId?: string;

  /** When the resource last changed, in the server's time. */
  @IsOptional()
  @IsString()
  lastUpdated?: string;

  /** A uri that identifies the source system of the resource. */
  @IsOptional()
  @IsString()
  source?: string;

  /** A list of profiles (references to StructureDefinition resources) that this resource claims to conform to. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  profile?: string[];

  /** Security labels applied to this resource, from the Healthcare Privacy and Security Classification System. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  security?: Coding[];

  /** Tags applied to this resource, used to relate resources to process and workflow. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  tag?: Coding[];

  /** Creates a new Meta. @param props - Initial values. */
  constructor(props?: Partial<Meta>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the profile array. @returns This instance for chaining. */
  addProfile(item: string): this {
    if (!this.profile) {
      this.profile = [];
    }

    this.profile.push(item);

    return this;
  }

  /** Adds an item to the security array. @returns This instance for chaining. */
  addSecurity(item: Coding): this {
    if (!this.security) {
      this.security = [];
    }

    this.security.push(item);

    return this;
  }

  /** Adds an item to the tag array. @returns This instance for chaining. */
  addTag(item: Coding): this {
    if (!this.tag) {
      this.tag = [];
    }

    this.tag.push(item);

    return this;
  }
}
