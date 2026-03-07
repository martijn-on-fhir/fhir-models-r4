import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
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

/** Backbone element for Practitioner representing qualifications and certifications. */
export class PractitionerQualification extends BackboneElement {

  /** An identifier for this qualification for the practitioner. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Coded representation of the qualification. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** Period during which the qualification is valid. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Organization that regulates and issues the qualification. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  issuer?: Reference;

  /** Creates a new PractitionerQualification. @param props - Initial values. */
  constructor(props?: Partial<PractitionerQualification>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the identifier array. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }
}

/** FHIR R4 Practitioner — A person who is directly or indirectly involved in the provisioning of healthcare. */
export class Practitioner extends DomainResource {

  readonly resourceType = 'Practitioner';

  /** An identifier that applies to this person in this role. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Whether this practitioner's record is in active use. */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  /** The name(s) associated with the practitioner. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HumanName)
  name?: HumanName[];

  /** A contact detail for the practitioner, e.g. a telephone number or an email address. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /** Address(es) of the practitioner that are not role specific. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Address)
  address?: Address[];

  /** Administrative gender of the practitioner. */
  @IsOptional()
  @IsEnum(AdministrativeGender)
  gender?: AdministrativeGender;

  /** The date of birth for the practitioner. */
  @IsOptional()
  @IsString()
  birthDate?: string;

  /** Image of the person. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Attachment)
  photo?: Attachment[];

  /** The official certifications, training, and licenses that authorize or pertain to the provision of care. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PractitionerQualification)
  qualification?: PractitionerQualification[];

  /** A language the practitioner can use in patient communication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  communication?: CodeableConcept[];

  /** Creates a new Practitioner. @param props - Initial values. */
  constructor(props?: Partial<Practitioner>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the identifier array. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds an item to the name array. @returns This instance for chaining. */
  addName(item: HumanName): this {
    if (!this.name) {
      this.name = [];
    }

    this.name.push(item);

    return this;
  }

  /** Adds an item to the telecom array. @returns This instance for chaining. */
  addTelecom(item: ContactPoint): this {
    if (!this.telecom) {
      this.telecom = [];
    }

    this.telecom.push(item);

    return this;
  }

  /** Adds an item to the address array. @returns This instance for chaining. */
  addAddress(item: Address): this {
    if (!this.address) {
      this.address = [];
    }

    this.address.push(item);

    return this;
  }

  /** Adds an item to the photo array. @returns This instance for chaining. */
  addPhoto(item: Attachment): this {
    if (!this.photo) {
      this.photo = [];
    }

    this.photo.push(item);

    return this;
  }

  /** Adds an item to the qualification array. @returns This instance for chaining. */
  addQualification(item: PractitionerQualification): this {
    if (!this.qualification) {
      this.qualification = [];
    }

    this.qualification.push(item);

    return this;
  }

  /** Adds an item to the communication array. @returns This instance for chaining. */
  addCommunication(item: CodeableConcept): this {
    if (!this.communication) {
      this.communication = [];
    }

    this.communication.push(item);

    return this;
  }
}
