import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for GraphDefinition. */
export class GraphDefinitionLinkTargetCompartment extends BackboneElement {

  /** Defines how the compartment rule is used. */
  @IsOptional()
  @IsString()
  use?: string;

  /** Identifies the compartment. */
  @IsOptional()
  @IsString()
  code?: string;

  /** Identical | matching | different | no-rule | custom. */
  @IsOptional()
  @IsString()
  rule?: string;

  /** Custom rule, as a FHIRPath expression. */
  @IsOptional()
  @IsString()
  expression?: string;

  /** Documentation for FHIRPath expression. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Creates a new GraphDefinitionLinkTargetCompartment. @param props - Initial values. */
  constructor(props?: Partial<GraphDefinitionLinkTargetCompartment>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for GraphDefinition. */
export class GraphDefinitionLinkTarget extends BackboneElement {

  /** Type of resource this link refers to. */
  @IsOptional()
  @IsString()
  type?: string;

  /** A set of parameters to look up. */
  @IsOptional()
  @IsString()
  params?: string;

  /** Profile for the target resource. */
  @IsOptional()
  @IsString()
  profile?: string;

  /** Compartment consistency rules. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GraphDefinitionLinkTargetCompartment)
  compartment?: GraphDefinitionLinkTargetCompartment[];

  /** Additional links from target resource. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GraphDefinitionLink)
  link?: GraphDefinitionLink[];

  /** Creates a new GraphDefinitionLinkTarget. @param props - Initial values. */
  constructor(props?: Partial<GraphDefinitionLinkTarget>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the compartment array. @returns This instance for chaining. */
  addCompartment(item: GraphDefinitionLinkTargetCompartment): this {
    if (!this.compartment) {
      this.compartment = [];
    }

    this.compartment.push(item);

    return this;
  }

  /** Adds an item to the link array. @returns This instance for chaining. */
  addLink(item: GraphDefinitionLink): this {
    if (!this.link) {
      this.link = [];
    }

    this.link.push(item);

    return this;
  }
}

/** Backbone element for GraphDefinition. */
export class GraphDefinitionLink extends BackboneElement {

  /** A FHIR expression that identifies one of FHIR References to other resources. */
  @IsOptional()
  @IsString()
  path?: string;

  /** Which slice (if profiled). */
  @IsOptional()
  @IsString()
  sliceName?: string;

  /** Minimum occurrences for this link. */
  @IsOptional()
  @IsNumber()
  min?: number;

  /** Maximum occurrences for this link. */
  @IsOptional()
  @IsString()
  max?: string;

  /** Why this link is specified. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Potential target for the link. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GraphDefinitionLinkTarget)
  target?: GraphDefinitionLinkTarget[];

  /** Creates a new GraphDefinitionLink. @param props - Initial values. */
  constructor(props?: Partial<GraphDefinitionLink>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the target array. @returns This instance for chaining. */
  addTarget(item: GraphDefinitionLinkTarget): this {
    if (!this.target) {
      this.target = [];
    }

    this.target.push(item);

    return this;
  }
}

/** FHIR R4 GraphDefinition — a formal computable definition of a graph of resources. */
export class GraphDefinition extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'GraphDefinition';

  /** Canonical identifier for this graph definition, represented as a URI. */
  @IsOptional()
  @IsString()
  url?: string;

  /** The identifier that is used to identify this version of the graph definition. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the graph definition. */
  @IsOptional()
  @IsString()
  name?: string;

  /** The status of this graph definition (draft | active | retired | unknown). */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** A Boolean value to indicate that this graph definition is for testing purposes. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** The date this version of the graph definition was published. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization or individual that published the graph definition. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details for the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the graph definition. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The content was developed with a focus and intent of supporting the contexts that are listed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the graph definition is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Explanation of why this graph definition is needed. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** The type of FHIR resource at which instances of this graph start. */
  @IsOptional()
  @IsString()
  start?: string;

  /** The profile that describes the use of the base resource. */
  @IsOptional()
  @IsString()
  profile?: string;

  /** Links this graph makes rules about. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GraphDefinitionLink)
  link?: GraphDefinitionLink[];

  /** Creates a new GraphDefinition. @param props - Initial values. */
  constructor(props?: Partial<GraphDefinition>) {
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

  /** Adds an item to the link array. @returns This instance for chaining. */
  addLink(item: GraphDefinitionLink): this {
    if (!this.link) {
      this.link = [];
    }

    this.link.push(item);

    return this;
  }
}
