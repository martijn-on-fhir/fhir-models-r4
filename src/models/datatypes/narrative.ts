import { IsOptional, IsString, IsEnum } from 'class-validator';
import { Element } from '../base/element.js';
import { NarrativeStatus } from '../enums/narrative-status.js';

/** FHIR R4 Narrative — A human-readable summary of the resource conveying the essential clinical and business information. */
export class Narrative extends Element {

  /** The status of the narrative (generated, extensions, additional, empty). */
  @IsOptional()
  @IsEnum(NarrativeStatus)
  status?: NarrativeStatus;

  /** The actual narrative content, a stripped-down version of XHTML. */
  @IsOptional()
  @IsString()
  div?: string;

  /** Creates a new Narrative. @param props - Initial values. */
  constructor(props?: Partial<Narrative>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
