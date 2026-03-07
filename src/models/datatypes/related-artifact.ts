import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Element } from '../base/element.js';
import { Attachment } from './attachment.js';

/** FHIR R4 RelatedArtifact — Related artifacts such as additional documentation, justification, or bibliographic references. */
export class RelatedArtifact extends Element {

  /** The type of relationship to the related artifact (documentation, justification, citation, predecessor, successor, etc.). */
  @IsOptional()
  @IsString()
  type?: string;

  /** A short label that can be used to reference the citation from elsewhere in the containing artifact. */
  @IsOptional()
  @IsString()
  label?: string;

  /** A brief description of the document or knowledge resource being referenced. */
  @IsOptional()
  @IsString()
  display?: string;

  /** A bibliographic citation for the related artifact. */
  @IsOptional()
  @IsString()
  citation?: string;

  /** A url for the artifact that can be followed to access the actual content. */
  @IsOptional()
  @IsString()
  url?: string;

  /** The document being referenced, represented as an attachment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  document?: Attachment;

  /** The related resource, such as a library, value set, profile, or other knowledge resource. */
  @IsOptional()
  @IsString()
  resource?: string;

  /** Creates a new RelatedArtifact. @param props - Initial values. */
  constructor(props?: Partial<RelatedArtifact>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
