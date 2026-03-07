import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Period } from '../datatypes/period.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { NamingSystemIdentifierType } from '../enums/naming-system-identifier-type.js';
import { NamingSystemType } from '../enums/naming-system-type.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for NamingSystem. */
export class NamingSystemUniqueId extends BackboneElement {

  /** Identifies the unique identifier scheme used for this particular identifier. */
  @IsOptional()
  @IsEnum(NamingSystemIdentifierType)
  type?: NamingSystemIdentifierType;

  /** The string that should be sent over the wire to identify the code system or identifier system. */
  @IsOptional()
  @IsString()
  value?: string;

  /** Indicates whether this identifier is the preferred identifier of this type. */
  @IsOptional()
  @IsBoolean()
  preferred?: boolean;

  /** Notes about the past or intended usage of this identifier. */
  @IsOptional()
  @IsString()
  comment?: string;

  /** Identifies the period of time over which this identifier is considered appropriate to use. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Creates a new NamingSystemUniqueId. @param props - Initial values. */
  constructor(props?: Partial<NamingSystemUniqueId>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 NamingSystem — a curated namespace that issues unique symbols within that namespace. */
export class NamingSystem extends DomainResource {

  readonly resourceType = 'NamingSystem';

  /** A natural language name identifying the naming system. */
  @IsOptional()
  @IsString()
  name?: string;

  /** The status of this naming system (draft, active, retired, unknown). */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** Indicates the purpose for the naming system (codesystem, identifier, root). */
  @IsOptional()
  @IsEnum(NamingSystemType)
  kind?: NamingSystemType;

  /** The date this resource was last changed. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization that published the naming system. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details for the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** The name of the organization that is responsible for issuing identifiers. */
  @IsOptional()
  @IsString()
  responsible?: string;

  /** Categorizes a naming system for easier search by grouping related naming systems. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** A free text natural language description of the naming system. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The content was developed with a focus and intent of supporting the specified contexts. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the naming system applies. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Provides guidance on the use of the namespace. */
  @IsOptional()
  @IsString()
  usage?: string;

  /** Unique identifiers used for the naming system. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NamingSystemUniqueId)
  uniqueId?: NamingSystemUniqueId[];

  /** Creates a new NamingSystem. @param props - Initial values. */
  constructor(props?: Partial<NamingSystem>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the contact array. @returns This instance for chaining. */
  addContact(item: ContactDetail): this {
    if (!this.contact) {
      this.contact = [];
    }

    this.contact.push(item);

    return this;
  }

  /** Adds an item to the useContext array. @returns This instance for chaining. */
  addUseContext(item: UsageContext): this {
    if (!this.useContext) {
      this.useContext = [];
    }

    this.useContext.push(item);

    return this;
  }

  /** Adds an item to the jurisdiction array. @returns This instance for chaining. */
  addJurisdiction(item: CodeableConcept): this {
    if (!this.jurisdiction) {
      this.jurisdiction = [];
    }

    this.jurisdiction.push(item);

    return this;
  }

  /** Adds an item to the uniqueId array. @returns This instance for chaining. */
  addUniqueId(item: NamingSystemUniqueId): this {
    if (!this.uniqueId) {
      this.uniqueId = [];
    }

    this.uniqueId.push(item);

    return this;
  }
}
