import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { ContactPoint } from '../datatypes/contact-point.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { EndpointStatus } from '../enums/endpoint-status.js';

/** FHIR R4 Endpoint — the technical details of an endpoint that can be used for electronic services. */
export class Endpoint extends DomainResource {

  /** Resource type constant. */
  readonly resourceType = 'Endpoint';

  /** Business identifiers for this endpoint. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The endpoint status represents the general expected availability of the endpoint. */
  @IsOptional()
  @IsEnum(EndpointStatus)
  status?: EndpointStatus;

  /** A coded value that represents the technical details of the usage of this endpoint. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  connectionType?: Coding;

  /** A friendly name that this endpoint can be referred to with. */
  @IsOptional()
  @IsString()
  name?: string;

  /** The organization that manages this endpoint. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  managingOrganization?: Reference;

  /** Contact details for a human to contact about the subscription. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  contact?: ContactPoint[];

  /** The interval during which the endpoint is expected to be operational. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** The payload type describes the acceptable content that can be communicated on the endpoint. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  payloadType?: CodeableConcept[];

  /** The mime type to send the payload in. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  payloadMimeType?: string[];

  /** The uri that describes the actual end-point to connect to. */
  @IsOptional()
  @IsString()
  address?: string;

  /** Additional headers or information to send as part of the notification. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  header?: string[];

  /** Creates a new Endpoint. @param props - Initial values. */
  constructor(props?: Partial<Endpoint>) {
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

  /** Adds an item to the contact array. @returns This instance for chaining. */
  addContact(item: ContactPoint): this {
    if (!this.contact) {
      this.contact = [];
    }

    this.contact.push(item);

    return this;
  }

  /** Adds an item to the payloadType array. @returns This instance for chaining. */
  addPayloadType(item: CodeableConcept): this {
    if (!this.payloadType) {
      this.payloadType = [];
    }

    this.payloadType.push(item);

    return this;
  }

  /** Adds an item to the payloadMimeType array. @returns This instance for chaining. */
  addPayloadMimeType(item: string): this {
    if (!this.payloadMimeType) {
      this.payloadMimeType = [];
    }

    this.payloadMimeType.push(item);

    return this;
  }

  /** Adds an item to the header array. @returns This instance for chaining. */
  addHeader(item: string): this {
    if (!this.header) {
      this.header = [];
    }

    this.header.push(item);

    return this;
  }
}
