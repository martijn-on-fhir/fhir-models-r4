import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsNumber, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Range } from '../datatypes/range.js';
import { Reference } from '../datatypes/reference.js';
import { GroupType } from '../enums/group-type.js';

/** Backbone element for {@link Group.characteristic}. */
export class GroupCharacteristic extends BackboneElement {

  /** A code that identifies the kind of trait being asserted. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The value of the trait that holds (or does not hold) for members of the group, expressed as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  valueCodeableConcept?: CodeableConcept;

  /** The value of the trait that holds (or does not hold) for members of the group, expressed as a boolean. */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  /** The value of the trait that holds (or does not hold) for members of the group, expressed as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /** The value of the trait that holds (or does not hold) for members of the group, expressed as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  valueRange?: Range;

  /** The value of the trait that holds (or does not hold) for members of the group, expressed as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /** If true, indicates the characteristic is one that is NOT held by members of the group. */
  @IsOptional()
  @IsBoolean()
  exclude?: boolean;

  /** The period over which the characteristic is tested. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Creates a new {@link GroupCharacteristic} instance. @param props - Initial property values. */
  constructor(props?: Partial<GroupCharacteristic>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link Group.member}. */
export class GroupMember extends BackboneElement {

  /** A reference to the entity that is a member of the group, such as a Patient, Practitioner, or Device. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  entity?: Reference;

  /** The period that the member was in the group, if known. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** A flag to indicate that the member is no longer in the group, but previously may have been a member. */
  @IsOptional()
  @IsBoolean()
  inactive?: boolean;

  /** Creates a new {@link GroupMember} instance. @param props - Initial property values. */
  constructor(props?: Partial<GroupMember>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 Group resource — represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act independently. */
export class Group extends DomainResource {

  /** The type of FHIR resource. */
  readonly resourceType = 'Group';

  /** A unique business identifier for this group. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Indicates whether the record for the group is available for use or is merely being retained for historical purposes. */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  /** Identifies the broad classification of the kind of resources the group includes. */
  @IsOptional()
  @IsEnum(GroupType)
  type?: GroupType;

  /** If true, indicates that the resource refers to a specific group of real individuals. If false, the group defines a set of intended individuals. */
  @IsOptional()
  @IsBoolean()
  actual?: boolean;

  /** Provides a specific type of resource the group includes, e.g. "cow", "syringe", etc. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** A label assigned to the group for human identification and communication. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A count of the number of resource instances that are part of the group. */
  @IsOptional()
  @IsNumber()
  quantity?: number;

  /** Entity responsible for defining and maintaining Group characteristics and/or registered members. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  managingEntity?: Reference;

  /** Identifies traits whose presence or absence is shared by members of the group. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GroupCharacteristic)
  characteristic?: GroupCharacteristic[];

  /** Identifies the resource instances that are members of the group. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GroupMember)
  member?: GroupMember[];

  /** Creates a new {@link Group} instance. @param props - Initial property values. */
  constructor(props?: Partial<Group>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link Group.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link GroupCharacteristic} to the {@link Group.characteristic characteristic} array. @param item - The {@link GroupCharacteristic} to add. @returns This instance for chaining. */
  addCharacteristic(item: GroupCharacteristic): this {
    if (!this.characteristic) {
      this.characteristic = [];
    }

    this.characteristic.push(item);

    return this;
  }

  /** Adds a {@link GroupMember} to the {@link Group.member member} array. @param item - The {@link GroupMember} to add. @returns This instance for chaining. */
  addMember(item: GroupMember): this {
    if (!this.member) {
      this.member = [];
    }

    this.member.push(item);

    return this;
  }
}
