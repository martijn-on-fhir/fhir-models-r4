import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsOptional, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Reference } from '../datatypes/reference.js';
import { LinkageType } from '../enums/linkage-type.js';

/** Backbone element for Linkage. */
export class LinkageItem extends BackboneElement {

  /** Distinguishes which item is source of truth and which items are alternates or historical. */
  @IsOptional()
  @IsEnum(LinkageType)
  type?: LinkageType;

  /** The resource instance being linked as part of the group. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  resource?: Reference;

  /** Creates a new LinkageItem. @param props - Initial values. */
  constructor(props?: Partial<LinkageItem>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 Linkage — identifies two or more records that are believed to refer to the same real-world occurrence. */
export class Linkage extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'Linkage';

  /** Indicates whether the asserted set of linkages are considered to be active. */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  /** Identifies the user or organization responsible for asserting the linkages. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /** Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LinkageItem)
  item?: LinkageItem[];

  /** Creates a new Linkage. @param props - Initial values. */
  constructor(props?: Partial<Linkage>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the item array. @returns This instance for chaining. */
  addItem(item: LinkageItem): this {
    if (!this.item) {
      this.item = [];
    }

    this.item.push(item);

    return this;
  }
}
