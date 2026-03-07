import { Type } from 'class-transformer';
import { IsOptional, IsBoolean, IsArray, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactPoint } from '../datatypes/contact-point.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';

/** FHIR R4 OrganizationAffiliation resource — defines a role an organization plays within an inter-organizational relationship. */
export class OrganizationAffiliation extends DomainResource {

  readonly resourceType = 'OrganizationAffiliation';

  /** Business identifiers that are specific to this role. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Whether this organization affiliation record is in active use. */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  /** The period during which the participatingOrganization is affiliated with the primary organization. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Organization where the role is available (primary organization). */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  organization?: Reference;

  /** The Organizaton that provides or performs the role(s) in this affiliation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  participatingOrganization?: Reference;

  /** Health insurance provider network(s) in which the participatingOrganization provides the role's services at the primary organization's location(s). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  network?: Reference[];

  /** Definition of the role the participatingOrganization plays in the association. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /** Specific specialty of the participatingOrganization in the context of the role. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  specialty?: CodeableConcept[];

  /** The location(s) at which the role occurs. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  location?: Reference[];

  /** Healthcare services provided through the role. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  healthcareService?: Reference[];

  /** Contact details at the participatingOrganization relevant to this affiliation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /** Technical endpoints providing access to services operated by the participatingOrganization in this role. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  endpoint?: Reference[];

  /** Creates a new {@link OrganizationAffiliation} instance. @param props - Initial property values. */
  constructor(props?: Partial<OrganizationAffiliation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link OrganizationAffiliation.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link OrganizationAffiliation.network network} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addNetwork(item: Reference): this {
    if (!this.network) {
      this.network = [];
    }

    this.network.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link OrganizationAffiliation.code code} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addCode(item: CodeableConcept): this {
    if (!this.code) {
      this.code = [];
    }

    this.code.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link OrganizationAffiliation.specialty specialty} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addSpecialty(item: CodeableConcept): this {
    if (!this.specialty) {
      this.specialty = [];
    }

    this.specialty.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link OrganizationAffiliation.location location} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addLocation(item: Reference): this {
    if (!this.location) {
      this.location = [];
    }

    this.location.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link OrganizationAffiliation.healthcareService healthcareService} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addHealthcareService(item: Reference): this {
    if (!this.healthcareService) {
      this.healthcareService = [];
    }

    this.healthcareService.push(item);

    return this;
  }

  /** Adds a {@link ContactPoint} to the {@link OrganizationAffiliation.telecom telecom} array. @param item - The {@link ContactPoint} to add. @returns This instance for chaining. */
  addTelecom(item: ContactPoint): this {
    if (!this.telecom) {
      this.telecom = [];
    }

    this.telecom.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link OrganizationAffiliation.endpoint endpoint} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addEndpoint(item: Reference): this {
    if (!this.endpoint) {
      this.endpoint = [];
    }

    this.endpoint.push(item);

    return this;
  }
}
