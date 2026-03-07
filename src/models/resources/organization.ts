import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Address } from '../datatypes/address.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactPoint } from '../datatypes/contact-point.js';
import { HumanName } from '../datatypes/human-name.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for {@link Organization.contact}. */
export class OrganizationContact extends BackboneElement {

  /** Indicates a purpose for which the contact can be reached. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  purpose?: CodeableConcept;

  /** A name associated with the contact. */
  @IsOptional()
  @ValidateNested()
  @Type(() => HumanName)
  name?: HumanName;

  /** A contact detail (e.g. a telephone number or an email address) by which the party may be contacted. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /** Visiting or postal addresses for the contact. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  address?: Address;

  /** Creates a new {@link OrganizationContact} instance. @param props - Initial property values. */
  constructor(props?: Partial<OrganizationContact>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link ContactPoint} to the {@link OrganizationContact.telecom telecom} array. @param item - The {@link ContactPoint} to add. @returns This instance for chaining. */
  addTelecom(item: ContactPoint): this {
    if (!this.telecom) {
      this.telecom = [];
    }

    this.telecom.push(item);

    return this;
  }
}

/** FHIR R4 Organization resource — a formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action. */
export class Organization extends DomainResource {

  readonly resourceType = 'Organization';

  /** Identifier for the organization that is used to identify the organization across multiple disparate systems. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Whether the organization's record is still in active use. */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  /** The kind(s) of organization that this is. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /** A name associated with the organization. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A list of alternate names that the organization is known as, or was known as in the past. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  alias?: string[];

  /** A contact detail for the organization. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /** An address for the organization. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Address)
  address?: Address[];

  /** The organization of which this organization forms a part. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  partOf?: Reference;

  /** Contact for the organization for a certain purpose. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrganizationContact)
  contact?: OrganizationContact[];

  /** Technical endpoints providing access to services operated by the organization. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  endpoint?: Reference[];

  /** Creates a new {@link Organization} instance. @param props - Initial property values. */
  constructor(props?: Partial<Organization>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link Organization.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link Organization.type type} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addType(item: CodeableConcept): this {
    if (!this.type) {
      this.type = [];
    }

    this.type.push(item);

    return this;
  }

  /** Adds a string to the {@link Organization.alias alias} array. @param item - The alias string to add. @returns This instance for chaining. */
  addAlias(item: string): this {
    if (!this.alias) {
      this.alias = [];
    }

    this.alias.push(item);

    return this;
  }

  /** Adds a {@link ContactPoint} to the {@link Organization.telecom telecom} array. @param item - The {@link ContactPoint} to add. @returns This instance for chaining. */
  addTelecom(item: ContactPoint): this {
    if (!this.telecom) {
      this.telecom = [];
    }

    this.telecom.push(item);

    return this;
  }

  /** Adds an {@link Address} to the {@link Organization.address address} array. @param item - The {@link Address} to add. @returns This instance for chaining. */
  addAddress(item: Address): this {
    if (!this.address) {
      this.address = [];
    }

    this.address.push(item);

    return this;
  }

  /** Adds an {@link OrganizationContact} to the {@link Organization.contact contact} array. @param item - The {@link OrganizationContact} to add. @returns This instance for chaining. */
  addContact(item: OrganizationContact): this {
    if (!this.contact) {
      this.contact = [];
    }

    this.contact.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Organization.endpoint endpoint} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addEndpoint(item: Reference): this {
    if (!this.endpoint) {
      this.endpoint = [];
    }

    this.endpoint.push(item);

    return this;
  }
}
