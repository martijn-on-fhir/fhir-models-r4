import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { Element, Extension } from './element.js';

/** FHIR R4 BackboneElement — Base definition for all elements defined in a resource that can contain additional elements with modifier semantics. */
export class BackboneElement extends Element {

  /** Creates a new BackboneElement. @param props - Initial values. */
  constructor(props?: Partial<BackboneElement>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Extensions that cannot be ignored even if unrecognized, modifying the meaning of the element. */
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Extension)
  modifierExtension?: Extension[];

  /** Adds an item to the modifierExtension array. @returns This instance for chaining. */
  addModifierExtension(item: Extension): this {
    if (!this.modifierExtension) {
      this.modifierExtension = [];
    }

    this.modifierExtension.push(item);

    return this;
  }
}
