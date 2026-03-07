import { Type } from 'class-transformer';
import { IsOptional, IsBoolean, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Address } from '../datatypes/address.js';
import { Attachment } from '../datatypes/attachment.js';
import { ContactPoint } from '../datatypes/contact-point.js';
import { HumanName } from '../datatypes/human-name.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';
import { AdministrativeGender } from '../enums/administrative-gender.js';
import { IdentityAssuranceLevel } from '../enums/identity-assurance-level.js';

/** Backbone element for {@link Person.link}. */
export class PersonLink extends BackboneElement {

  /** The resource to which this actual person is associated. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  target?: Reference;

  /** Level of assurance that this link is associated with the target resource. */
  @IsOptional()
  @IsEnum(IdentityAssuranceLevel)
  assurance?: IdentityAssuranceLevel;

  /** Creates a new {@link PersonLink} instance. @param props - Initial property values. */
  constructor(props?: Partial<PersonLink>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 Person resource — demographics and administrative information about a person independent of a specific health-related context. */
export class Person extends DomainResource {

  readonly resourceType = 'Person';

  /** Identifier for a person within a particular scope. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** A name associated with the person. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HumanName)
  name?: HumanName[];

  /** A contact detail for the person, e.g. a telephone number or an email address. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /** Administrative gender of the person. */
  @IsOptional()
  @IsEnum(AdministrativeGender)
  gender?: AdministrativeGender;

  /** The birth date for the person. */
  @IsOptional()
  @IsString()
  birthDate?: string;

  /** One or more addresses for the person. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Address)
  address?: Address[];

  /** An image that can be displayed as a thumbnail of the person to enhance the identification of the individual. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  photo?: Attachment;

  /** The organization that is the custodian of the person record. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  managingOrganization?: Reference;

  /** Whether this person's record is in active use. */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  /** Link to a resource that concerns the same actual person. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PersonLink)
  link?: PersonLink[];

  /** Creates a new {@link Person} instance. @param props - Initial property values. */
  constructor(props?: Partial<Person>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link Person.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link HumanName} to the {@link Person.name name} array. @param item - The {@link HumanName} to add. @returns This instance for chaining. */
  addName(item: HumanName): this {
    if (!this.name) {
      this.name = [];
    }

    this.name.push(item);

    return this;
  }

  /** Adds a {@link ContactPoint} to the {@link Person.telecom telecom} array. @param item - The {@link ContactPoint} to add. @returns This instance for chaining. */
  addTelecom(item: ContactPoint): this {
    if (!this.telecom) {
      this.telecom = [];
    }

    this.telecom.push(item);

    return this;
  }

  /** Adds an {@link Address} to the {@link Person.address address} array. @param item - The {@link Address} to add. @returns This instance for chaining. */
  addAddress(item: Address): this {
    if (!this.address) {
      this.address = [];
    }

    this.address.push(item);

    return this;
  }

  /** Adds a {@link PersonLink} to the {@link Person.link link} array. @param item - The {@link PersonLink} to add. @returns This instance for chaining. */
  addLink(item: PersonLink): this {
    if (!this.link) {
      this.link = [];
    }

    this.link.push(item);

    return this;
  }
}
