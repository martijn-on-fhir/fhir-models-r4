import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
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
import { LinkType } from '../enums/link-type.js';

/** Backbone element for {@link Patient.contact}. */
export class PatientContact extends BackboneElement {

  /** The nature of the relationship between the patient and the contact person. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  relationship?: CodeableConcept[];

  /** A name associated with the contact person. */
  @IsOptional()
  @ValidateNested()
  @Type(() => HumanName)
  name?: HumanName;

  /** A contact detail for the person, e.g. a telephone number or an email address. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /** Address for the contact person. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  address?: Address;

  /** Administrative gender of the contact person. */
  @IsOptional()
  @IsEnum(AdministrativeGender)
  gender?: AdministrativeGender;

  /** Organization on behalf of which the contact is acting or for which the contact is working. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  organization?: Reference;

  /** The period during which this contact person is valid to be contacted relating to this patient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Creates a new {@link PatientContact} instance. @param props - Initial property values. */
  constructor(props?: Partial<PatientContact>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link CodeableConcept} to the {@link PatientContact.relationship relationship} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addRelationship(item: CodeableConcept): this {
    if (!this.relationship) {
      this.relationship = [];
    }

    this.relationship.push(item);

    return this;
  }

  /** Adds a {@link ContactPoint} to the {@link PatientContact.telecom telecom} array. @param item - The {@link ContactPoint} to add. @returns This instance for chaining. */
  addTelecom(item: ContactPoint): this {
    if (!this.telecom) {
      this.telecom = [];
    }

    this.telecom.push(item);

    return this;
  }
}

/** Backbone element for {@link Patient.communication}. */
export class PatientCommunication extends BackboneElement {

  /** The language which can be used to communicate with the patient about his or her health. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  language?: CodeableConcept;

  /** Indicates whether or not the patient prefers this language (over other languages the patient masters up to a certain level). */
  @IsOptional()
  @IsBoolean()
  preferred?: boolean;

  /** Creates a new {@link PatientCommunication} instance. @param props - Initial property values. */
  constructor(props?: Partial<PatientCommunication>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link Patient.link}. */
export class PatientLink extends BackboneElement {

  /** The other patient resource or related person resource that the link refers to. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  other?: Reference;

  /** The type of link between this patient resource and another patient resource. */
  @IsOptional()
  @IsEnum(LinkType)
  type?: LinkType;

  /** Creates a new {@link PatientLink} instance. @param props - Initial property values. */
  constructor(props?: Partial<PatientLink>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 Patient resource — demographics and other administrative information about an individual receiving care or other health-related services. */
export class Patient extends DomainResource {

  readonly resourceType = 'Patient';

  /** An identifier for this patient. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Whether this patient record is in active use. */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  /** A name associated with the individual. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HumanName)
  name?: HumanName[];

  /** A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /** Administrative gender of the patient. */
  @IsOptional()
  @IsEnum(AdministrativeGender)
  gender?: AdministrativeGender;

  /** The date of birth for the individual. */
  @IsOptional()
  @IsString()
  birthDate?: string;

  /** Indicates if the individual is deceased or not (boolean). */
  @IsOptional()
  @IsBoolean()
  deceasedBoolean?: boolean;

  /** Indicates if the individual is deceased or not (dateTime). */
  @IsOptional()
  @IsString()
  deceasedDateTime?: string;

  /** An address for the individual. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Address)
  address?: Address[];

  /** The patient's most recent marital (civil) status. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  maritalStatus?: CodeableConcept;

  /** Indicates whether the patient is part of a multiple birth (boolean). */
  @IsOptional()
  @IsBoolean()
  multipleBirthBoolean?: boolean;

  /** Indicates the actual birth order in a multiple birth (integer). */
  @IsOptional()
  @IsNumber()
  multipleBirthInteger?: number;

  /** Image of the patient. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Attachment)
  photo?: Attachment[];

  /** A contact party (e.g. guardian, partner, friend) for the patient. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PatientContact)
  contact?: PatientContact[];

  /** A language which may be used to communicate with the patient about his or her health. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PatientCommunication)
  communication?: PatientCommunication[];

  /** Patient's nominated care provider. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  generalPractitioner?: Reference[];

  /** Organization that is the custodian of the patient record. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  managingOrganization?: Reference;

  /** Link to another patient resource that concerns the same actual patient. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PatientLink)
  link?: PatientLink[];

  /** Creates a new {@link Patient} instance. @param props - Initial property values. */
  constructor(props?: Partial<Patient>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link Patient.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link HumanName} to the {@link Patient.name name} array. @param item - The {@link HumanName} to add. @returns This instance for chaining. */
  addName(item: HumanName): this {
    if (!this.name) {
      this.name = [];
    }

    this.name.push(item);

    return this;
  }

  /** Adds a {@link ContactPoint} to the {@link Patient.telecom telecom} array. @param item - The {@link ContactPoint} to add. @returns This instance for chaining. */
  addTelecom(item: ContactPoint): this {
    if (!this.telecom) {
      this.telecom = [];
    }

    this.telecom.push(item);

    return this;
  }

  /** Adds an {@link Address} to the {@link Patient.address address} array. @param item - The {@link Address} to add. @returns This instance for chaining. */
  addAddress(item: Address): this {
    if (!this.address) {
      this.address = [];
    }

    this.address.push(item);

    return this;
  }

  /** Adds an {@link Attachment} to the {@link Patient.photo photo} array. @param item - The {@link Attachment} to add. @returns This instance for chaining. */
  addPhoto(item: Attachment): this {
    if (!this.photo) {
      this.photo = [];
    }

    this.photo.push(item);

    return this;
  }

  /** Adds a {@link PatientContact} to the {@link Patient.contact contact} array. @param item - The {@link PatientContact} to add. @returns This instance for chaining. */
  addContact(item: PatientContact): this {
    if (!this.contact) {
      this.contact = [];
    }

    this.contact.push(item);

    return this;
  }

  /** Adds a {@link PatientCommunication} to the {@link Patient.communication communication} array. @param item - The {@link PatientCommunication} to add. @returns This instance for chaining. */
  addCommunication(item: PatientCommunication): this {
    if (!this.communication) {
      this.communication = [];
    }

    this.communication.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Patient.generalPractitioner generalPractitioner} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addGeneralPractitioner(item: Reference): this {
    if (!this.generalPractitioner) {
      this.generalPractitioner = [];
    }

    this.generalPractitioner.push(item);

    return this;
  }

  /** Adds a {@link PatientLink} to the {@link Patient.link link} array. @param item - The {@link PatientLink} to add. @returns This instance for chaining. */
  addLink(item: PatientLink): this {
    if (!this.link) {
      this.link = [];
    }

    this.link.push(item);

    return this;
  }
}
