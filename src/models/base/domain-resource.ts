import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { Narrative } from '../datatypes/narrative.js';
import { Extension } from './element.js';
import { Resource } from './resource.js';

/** FHIR R4 DomainResource — A resource that includes narrative, extensions, and contained resources. */
export class DomainResource extends Resource {

  /** Creates a new DomainResource. @param props - Initial values. */
  constructor(props?: Partial<DomainResource>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** A human-readable narrative that contains a summary of the resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Narrative)
  text?: Narrative;

  /** Resources contained inline within this resource. */
  @IsOptional()
  contained?: Resource[];

  /** Additional content defined by implementations that extends the base resource. */
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Extension)
  extension?: Extension[];

  /** Extensions that cannot be ignored even if unrecognized, modifying the meaning of the element. */
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Extension)
  modifierExtension?: Extension[];

  /** Adds an item to the contained array. @returns This instance for chaining. */
  addContained(item: Resource): this {
    if (!this.contained) {
      this.contained = [];
    }

    this.contained.push(item);

    return this;
  }

  /** Adds an item to the extension array. @returns This instance for chaining. */
  addExtension(item: Extension): this {
    if (!this.extension) {
      this.extension = [];
    }

    this.extension.push(item);

    return this;
  }

  /** Adds an item to the modifierExtension array. @returns This instance for chaining. */
  addModifierExtension(item: Extension): this {
    if (!this.modifierExtension) {
      this.modifierExtension = [];
    }

    this.modifierExtension.push(item);

    return this;
  }
}
