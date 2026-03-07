import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';

/**
 * FHIR R4 Extension — optional element present on every FHIR element that carries additional
 * information not part of the basic definition of the resource.
 */
export class Extension {

  /** Creates a new Extension instance. @param props - Initial property values. */
  constructor(props?: Partial<Extension>) {
    if (props) {
      Object.assign(this, props);
    }
  }

  /** Identifies the meaning of the extension via a URI. */
  @IsOptional()
  @IsString()
  url?: string;

  /** Value of the extension as a string (choice type value[x]). */
  @IsOptional()
  @IsString()
  valueString?: string;

  /** Value of the extension as a boolean (choice type value[x]). */
  @IsOptional()
  valueBoolean?: boolean;

  /** Value of the extension as an integer (choice type value[x]). */
  @IsOptional()
  valueInteger?: number;

  /** Value of the extension as a decimal (choice type value[x]). */
  @IsOptional()
  valueDecimal?: number;

  /** Value of the extension as a URI (choice type value[x]). */
  @IsOptional()
  @IsString()
  valueUri?: string;

  /** Value of the extension as a URL (choice type value[x]). */
  @IsOptional()
  @IsString()
  valueUrl?: string;

  /** Value of the extension as a code (choice type value[x]). */
  @IsOptional()
  @IsString()
  valueCode?: string;

  /** Value of the extension as a date (choice type value[x]). */
  @IsOptional()
  @IsString()
  valueDate?: string;

  /** Value of the extension as a dateTime (choice type value[x]). */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  /** Value of the extension as a time (choice type value[x]). */
  @IsOptional()
  @IsString()
  valueTime?: string;

  /** Value of the extension as an instant (choice type value[x]). */
  @IsOptional()
  @IsString()
  valueInstant?: string;

  /** Value of the extension as an id (choice type value[x]). */
  @IsOptional()
  @IsString()
  valueId?: string;

  /** Value of the extension as an OID (choice type value[x]). */
  @IsOptional()
  @IsString()
  valueOid?: string;

  /** Value of the extension as a UUID (choice type value[x]). */
  @IsOptional()
  @IsString()
  valueUuid?: string;

  /** Value of the extension as base64-encoded binary data (choice type value[x]). */
  @IsOptional()
  @IsString()
  valueBase64Binary?: string;

  /** Value of the extension as markdown text (choice type value[x]). */
  @IsOptional()
  @IsString()
  valueMarkdown?: string;

  /** Value of the extension as a canonical URL (choice type value[x]). */
  @IsOptional()
  @IsString()
  valueCanonical?: string;

  /** Value of the extension as an unsigned integer (choice type value[x]). */
  @IsOptional()
  valueUnsignedInt?: number;

  /** Value of the extension as a positive integer (choice type value[x]). */
  @IsOptional()
  valuePositiveInt?: number;

  /** Additional nested extensions that are part of this extension. */
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Extension)
  extension?: Extension[];

  /**
   * Adds an {@link Extension} to the {@link Extension.extension extension} array.
   * @param item - The {@link Extension} to add.
   * @returns This instance for chaining.
   */
  addExtension(item: Extension): this {
    if (!this.extension) {
      this.extension = [];
    }

    this.extension.push(item);

    return this;
  }
}

export class Element {

  constructor(props?: Partial<Element>) {
    if (props) {
      Object.assign(this, props);
    }
  }

  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Extension)
  extension?: Extension[];

  addExtension(item: Extension): this {
    if (!this.extension) {
      this.extension = [];
    }

    this.extension.push(item);

    return this;
  }
}
