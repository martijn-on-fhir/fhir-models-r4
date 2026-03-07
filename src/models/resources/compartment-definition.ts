import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { CompartmentType } from '../enums/compartment-type.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for {@link CompartmentDefinition.resource}. */
export class CompartmentDefinitionResource extends BackboneElement {

  /** The name of a resource supported by the server. */
  @IsOptional()
  @IsString()
  code?: string;

  /** The name of a search parameter that represents the link to the compartment. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  param?: string[];

  /** Additional documentation about the resource and compartment. */
  @IsOptional()
  @IsString()
  documentation?: string;

  /** Creates a new {@link CompartmentDefinitionResource} instance. @param props - Initial property values. */
  constructor(props?: Partial<CompartmentDefinitionResource>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a search parameter name string to the {@link CompartmentDefinitionResource.param param} array. @param item - The search parameter name string to add. @returns This instance for chaining. */
  addParam(item: string): this {
    if (!this.param) {
      this.param = [];
    }

    this.param.push(item);

    return this;
  }
}

/** FHIR R4 CompartmentDefinition resource — a compartment definition that defines how resources are accessed on a server, specifying which resource types are in the compartment and the search parameters used to determine membership. */
export class CompartmentDefinition extends DomainResource {

  /** The type of resource this is. Always 'CompartmentDefinition'. */
  readonly resourceType = 'CompartmentDefinition';

  /** An absolute URI that is used to identify this compartment definition when it is referenced. */
  @IsOptional()
  @IsString()
  url?: string;

  /** The identifier that is used to identify this version of the compartment definition. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the compartment definition. */
  @IsOptional()
  @IsString()
  name?: string;

  /** The status of this compartment definition. Uses the PublicationStatus value set. */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** A Boolean value to indicate that this compartment definition is authored for testing purposes. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** The date on which the resource content was last revised or approved. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization or individual that published the compartment definition. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details to assist a user in finding and communicating with the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the compartment definition from a consumer's perspective. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The content was developed with a focus and intent of supporting the contexts that are listed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** Explanation of why this compartment definition is needed and why it has been designed as it has. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** Which compartment this definition describes. Uses the CompartmentType value set. */
  @IsOptional()
  @IsEnum(CompartmentType)
  code?: CompartmentType;

  /** Whether the search syntax is supported. */
  @IsOptional()
  @IsBoolean()
  search?: boolean;

  /** Information about how a resource is related to the compartment. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompartmentDefinitionResource)
  resource?: CompartmentDefinitionResource[];

  /** Creates a new {@link CompartmentDefinition} instance. @param props - Initial property values. */
  constructor(props?: Partial<CompartmentDefinition>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link ContactDetail} to the {@link CompartmentDefinition.contact contact} array. @param item - The {@link ContactDetail} to add. @returns This instance for chaining. */
  addContact(item: ContactDetail): this {
    if (!this.contact) {
      this.contact = [];
    }

    this.contact.push(item);

    return this;
  }

  /** Adds a {@link UsageContext} to the {@link CompartmentDefinition.useContext useContext} array. @param item - The {@link UsageContext} to add. @returns This instance for chaining. */
  addUseContext(item: UsageContext): this {
    if (!this.useContext) {
      this.useContext = [];
    }

    this.useContext.push(item);

    return this;
  }

  /** Adds a {@link CompartmentDefinitionResource} to the {@link CompartmentDefinition.resource resource} array. @param item - The {@link CompartmentDefinitionResource} to add. @returns This instance for chaining. */
  addResource(item: CompartmentDefinitionResource): this {
    if (!this.resource) {
      this.resource = [];
    }

    this.resource.push(item);

    return this;
  }
}
