import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Resource } from '../base/resource.js';
import { Reference } from '../datatypes/reference.js';

/** FHIR R4 Binary resource — a resource that represents raw data such as text, images, PDFs, or other content types. */
export class Binary extends Resource {

  readonly resourceType = 'Binary';

  /** MimeType of the binary content, expressed using BCP 13. */
  @IsOptional()
  @IsString()
  contentType?: string;

  /** A reference that provides context for interpreting the binary data, used to determine access control. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  securityContext?: Reference;

  /** The actual content of the binary resource, base64 encoded. */
  @IsOptional()
  @IsString()
  data?: string;

  /** Creates a new {@link Binary} instance. @param props - Initial property values. */
  constructor(props?: Partial<Binary>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
