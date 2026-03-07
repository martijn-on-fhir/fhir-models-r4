import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsArray, IsEnum, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Address } from '../datatypes/address.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactPoint } from '../datatypes/contact-point.js';
import { HumanName } from '../datatypes/human-name.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { AdministrativeGender } from '../enums/administrative-gender.js';

/** Backbone element for {@link RelatedPerson.communication}. */
export class RelatedPersonCommunication extends BackboneElement {

  /** The language which can be used to communicate with the person about his or her health. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  language?: CodeableConcept;

  /** Indicates whether this language is the preferred language for communicating about health. */
  @IsOptional()
  @IsBoolean()
  preferred?: boolean;

  /** Creates a new {@link RelatedPersonCommunication} instance. @param props - Initial property values. */
  constructor(props?: Partial<RelatedPersonCommunication>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

export class RelatedPerson extends DomainResource {

  readonly resourceType = 'RelatedPerson';

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  relationship?: CodeableConcept[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HumanName)
  name?: HumanName[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  @IsOptional()
  @IsEnum(AdministrativeGender)
  gender?: AdministrativeGender;

  @IsOptional()
  @IsString()
  birthDate?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Address)
  address?: Address[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Attachment)
  photo?: Attachment[];

  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RelatedPersonCommunication)
  communication?: RelatedPersonCommunication[];

  constructor(props?: Partial<RelatedPerson>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  addRelationship(item: CodeableConcept): this {
    if (!this.relationship) {
      this.relationship = [];
    }

    this.relationship.push(item);

    return this;
  }

  addName(item: HumanName): this {
    if (!this.name) {
      this.name = [];
    }

    this.name.push(item);

    return this;
  }

  addTelecom(item: ContactPoint): this {
    if (!this.telecom) {
      this.telecom = [];
    }

    this.telecom.push(item);

    return this;
  }

  addAddress(item: Address): this {
    if (!this.address) {
      this.address = [];
    }

    this.address.push(item);

    return this;
  }

  addPhoto(item: Attachment): this {
    if (!this.photo) {
      this.photo = [];
    }

    this.photo.push(item);

    return this;
  }

  addCommunication(item: RelatedPersonCommunication): this {
    if (!this.communication) {
      this.communication = [];
    }

    this.communication.push(item);

    return this;
  }
}
