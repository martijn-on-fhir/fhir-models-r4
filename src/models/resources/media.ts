import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { EventStatus } from '../enums/event-status.js';

/** FHIR R4 Media resource — a photo, video, or audio recording acquired or used in healthcare. */
export class Media extends DomainResource {

  /** The FHIR resource type, always "Media". */
  readonly resourceType = 'Media';

  /** Identifiers associated with the media, including identifiers for the image itself and accession numbers. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** A procedure that is fulfilled in whole or in part by the creation of this media. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** A larger event of which this particular event is a component or step. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /** The current state of the media resource (e.g., preparation, in-progress, completed, entered-in-error). */
  @IsOptional()
  @IsEnum(EventStatus)
  status?: EventStatus;

  /** A code that classifies whether the media is an image, video, or audio recording or some other media category. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Details of the type of the media, such as the modality used to acquire it (e.g., CT, MRI, ultrasound). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  modality?: CodeableConcept;

  /** The name of the imaging view (e.g., lateral or antero-posterior). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  view?: CodeableConcept;

  /** Who/what the media is a record of. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The encounter during which the media was acquired. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** The date and time this media was collected, expressed as a dateTime. */
  @IsOptional()
  @IsString()
  createdDateTime?: string;

  /** The date and time this media was collected, expressed as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  createdPeriod?: Period;

  /** The date and time this resource was last updated (instant). */
  @IsOptional()
  @IsString()
  issued?: string;

  /** The person who administered the collection of the media. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  operator?: Reference;

  /** Describes why the event occurred in coded or textual form. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Indicates the site on the subject's body where the observation was made (e.g., the anatomic location). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept;

  /** The name of the device/manufacturer of the device that was used to make the recording. */
  @IsOptional()
  @IsString()
  deviceName?: string;

  /** The device used to collect the media. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  device?: Reference;

  /** Height of the image in pixels (photo/video). */
  @IsOptional()
  @IsNumber()
  height?: number;

  /** Width of the image in pixels (photo/video). */
  @IsOptional()
  @IsNumber()
  width?: number;

  /** The number of frames in a photo. Used with multi-frame images. */
  @IsOptional()
  @IsNumber()
  frames?: number;

  /** The duration of the recording in seconds. For video and audio. */
  @IsOptional()
  @IsNumber()
  duration?: number;

  /** The actual content of the media, an inline or direct URL reference to the media file. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  content?: Attachment;

  /** Comments made about the media by the performer, subject, or other participants. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Creates a new {@link Media} instance. @param props - Initial property values. */
  constructor(props?: Partial<Media>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link Identifier} to the {@link Media.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Media.basedOn basedOn} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addBasedOn(item: Reference): this {
    if (!this.basedOn) {
      this.basedOn = [];
    }

    this.basedOn.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Media.partOf partOf} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addPartOf(item: Reference): this {
    if (!this.partOf) {
      this.partOf = [];
    }

    this.partOf.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link Media.reasonCode reasonCode} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addReasonCode(item: CodeableConcept): this {
    if (!this.reasonCode) {
      this.reasonCode = [];
    }

    this.reasonCode.push(item);

    return this;
  }

  /** Adds a {@link Annotation} to the {@link Media.note note} array. @param item - The {@link Annotation} to add. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }
}
