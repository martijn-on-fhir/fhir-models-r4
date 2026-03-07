import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Reference } from '../datatypes/reference.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for ImplementationGuide. */
export class ImplementationGuideDependsOn extends BackboneElement {

  /** A canonical reference to the implementation guide depended on. */
  @IsOptional()
  @IsString()
  uri?: string;

  /** The NPM package name for the implementation guide. */
  @IsOptional()
  @IsString()
  packageId?: string;

  /** The version of the IG that is depended on. */
  @IsOptional()
  @IsString()
  version?: string;

  /** Creates a new ImplementationGuideDependsOn. @param props - Initial values. */
  constructor(props?: Partial<ImplementationGuideDependsOn>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ImplementationGuide. */
export class ImplementationGuideGlobal extends BackboneElement {

  /** The type of resource that all instances must conform to. */
  @IsOptional()
  @IsString()
  type?: string;

  /** A reference to the profile that all instances must conform to. */
  @IsOptional()
  @IsString()
  profile?: string;

  /** Creates a new ImplementationGuideGlobal. @param props - Initial values. */
  constructor(props?: Partial<ImplementationGuideGlobal>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ImplementationGuide. */
export class ImplementationGuideDefinitionGrouping extends BackboneElement {

  /** The human-readable title to display for the package of resources. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Human readable text describing the package. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Creates a new ImplementationGuideDefinitionGrouping. @param props - Initial values. */
  constructor(props?: Partial<ImplementationGuideDefinitionGrouping>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ImplementationGuide. */
export class ImplementationGuideDefinitionResource extends BackboneElement {

  /** Where this resource is found. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  reference?: Reference;

  /** Versions this applies to (if not all). */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  fhirVersion?: string[];

  /** A human assigned name for the resource. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A description of the reason that a resource has been included. */
  @IsOptional()
  @IsString()
  description?: string;

  /** If true or a canonical URL, indicates the resource is an example as a boolean. */
  @IsOptional()
  @IsBoolean()
  exampleBoolean?: boolean;

  /** If true or a canonical URL, indicates the resource is an example as a canonical. */
  @IsOptional()
  @IsString()
  exampleCanonical?: string;

  /** Reference to the id of the grouping this resource belongs to. */
  @IsOptional()
  @IsString()
  groupingId?: string;

  /** Creates a new ImplementationGuideDefinitionResource. @param props - Initial values. */
  constructor(props?: Partial<ImplementationGuideDefinitionResource>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the fhirVersion array. @returns This instance for chaining. */
  addFhirVersion(item: string): this {
    if (!this.fhirVersion) {
      this.fhirVersion = [];
    }

    this.fhirVersion.push(item);

    return this;
  }
}

/** Backbone element for ImplementationGuide. */
export class ImplementationGuideDefinitionPage extends BackboneElement {

  /** The source address for the page as a URL. */
  @IsOptional()
  @IsString()
  nameUrl?: string;

  /** The source address for the page as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  nameReference?: Reference;

  /** A short title used to represent this page in navigational structures. */
  @IsOptional()
  @IsString()
  title?: string;

  /** A code that indicates how the page is generated. */
  @IsOptional()
  @IsString()
  generation?: string;

  /** Nested pages/sections under this page. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideDefinitionPage)
  page?: ImplementationGuideDefinitionPage[];

  /** Creates a new ImplementationGuideDefinitionPage. @param props - Initial values. */
  constructor(props?: Partial<ImplementationGuideDefinitionPage>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the page array. @returns This instance for chaining. */
  addPage(item: ImplementationGuideDefinitionPage): this {
    if (!this.page) {
      this.page = [];
    }

    this.page.push(item);

    return this;
  }
}

/** Backbone element for ImplementationGuide. */
export class ImplementationGuideDefinitionTemplate extends BackboneElement {

  /** Type of template specified. */
  @IsOptional()
  @IsString()
  code?: string;

  /** The source location for the template. */
  @IsOptional()
  @IsString()
  source?: string;

  /** The scope in which the template applies. */
  @IsOptional()
  @IsString()
  scope?: string;

  /** Creates a new ImplementationGuideDefinitionTemplate. @param props - Initial values. */
  constructor(props?: Partial<ImplementationGuideDefinitionTemplate>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ImplementationGuide. */
export class ImplementationGuideDefinitionParameter extends BackboneElement {

  /** A code that defines the parameter. */
  @IsOptional()
  @IsString()
  code?: string;

  /** Value for named type. */
  @IsOptional()
  @IsString()
  value?: string;

  /** Creates a new ImplementationGuideDefinitionParameter. @param props - Initial values. */
  constructor(props?: Partial<ImplementationGuideDefinitionParameter>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ImplementationGuide. */
export class ImplementationGuideDefinition extends BackboneElement {

  /** A logical group of resources. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideDefinitionGrouping)
  grouping?: ImplementationGuideDefinitionGrouping[];

  /** A resource that is part of the implementation guide. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideDefinitionResource)
  resource?: ImplementationGuideDefinitionResource[];

  /** A page or section in the implementation guide. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ImplementationGuideDefinitionPage)
  page?: ImplementationGuideDefinitionPage;

  /** Defines how IG is built by tools. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideDefinitionParameter)
  parameter?: ImplementationGuideDefinitionParameter[];

  /** A template for building resources. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideDefinitionTemplate)
  template?: ImplementationGuideDefinitionTemplate[];

  /** Creates a new ImplementationGuideDefinition. @param props - Initial values. */
  constructor(props?: Partial<ImplementationGuideDefinition>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the grouping array. @returns This instance for chaining. */
  addGrouping(item: ImplementationGuideDefinitionGrouping): this {
    if (!this.grouping) {
      this.grouping = [];
    }

    this.grouping.push(item);

    return this;
  }

  /** Adds an item to the resource array. @returns This instance for chaining. */
  addResource(item: ImplementationGuideDefinitionResource): this {
    if (!this.resource) {
      this.resource = [];
    }

    this.resource.push(item);

    return this;
  }

  /** Adds an item to the parameter array. @returns This instance for chaining. */
  addParameter(item: ImplementationGuideDefinitionParameter): this {
    if (!this.parameter) {
      this.parameter = [];
    }

    this.parameter.push(item);

    return this;
  }

  /** Adds an item to the template array. @returns This instance for chaining. */
  addTemplate(item: ImplementationGuideDefinitionTemplate): this {
    if (!this.template) {
      this.template = [];
    }

    this.template.push(item);

    return this;
  }
}

/** Backbone element for ImplementationGuide. */
export class ImplementationGuideManifestResource extends BackboneElement {

  /** Where this resource is found. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  reference?: Reference;

  /** If true or a canonical URL, indicates the resource is an example as a boolean. */
  @IsOptional()
  @IsBoolean()
  exampleBoolean?: boolean;

  /** If true or a canonical URL, indicates the resource is an example as a canonical. */
  @IsOptional()
  @IsString()
  exampleCanonical?: string;

  /** The relative path for primary page for this resource within the IG. */
  @IsOptional()
  @IsString()
  relativePath?: string;

  /** Creates a new ImplementationGuideManifestResource. @param props - Initial values. */
  constructor(props?: Partial<ImplementationGuideManifestResource>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ImplementationGuide. */
export class ImplementationGuideManifestPage extends BackboneElement {

  /** Relative path to the page. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Label for the page intended for human display. */
  @IsOptional()
  @IsString()
  title?: string;

  /** The name of an anchor available on the page. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  anchor?: string[];

  /** Creates a new ImplementationGuideManifestPage. @param props - Initial values. */
  constructor(props?: Partial<ImplementationGuideManifestPage>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the anchor array. @returns This instance for chaining. */
  addAnchor(item: string): this {
    if (!this.anchor) {
      this.anchor = [];
    }

    this.anchor.push(item);

    return this;
  }
}

/** Backbone element for ImplementationGuide. */
export class ImplementationGuideManifest extends BackboneElement {

  /** A pointer to official web page, PDF, or other rendering of the implementation guide. */
  @IsOptional()
  @IsString()
  rendering?: string;

  /** A resource that is part of the implementation guide. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideManifestResource)
  resource?: ImplementationGuideManifestResource[];

  /** Information about a page within the IG. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideManifestPage)
  page?: ImplementationGuideManifestPage[];

  /** Indicates a relative path to an image that exists within the IG. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  image?: string[];

  /** Indicates the relative path of an additional non-page, non-image file that is part of the IG. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  other?: string[];

  /** Creates a new ImplementationGuideManifest. @param props - Initial values. */
  constructor(props?: Partial<ImplementationGuideManifest>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the resource array. @returns This instance for chaining. */
  addResource(item: ImplementationGuideManifestResource): this {
    if (!this.resource) {
      this.resource = [];
    }

    this.resource.push(item);

    return this;
  }

  /** Adds an item to the page array. @returns This instance for chaining. */
  addPage(item: ImplementationGuideManifestPage): this {
    if (!this.page) {
      this.page = [];
    }

    this.page.push(item);

    return this;
  }

  /** Adds an item to the image array. @returns This instance for chaining. */
  addImage(item: string): this {
    if (!this.image) {
      this.image = [];
    }

    this.image.push(item);

    return this;
  }

  /** Adds an item to the other array. @returns This instance for chaining. */
  addOther(item: string): this {
    if (!this.other) {
      this.other = [];
    }

    this.other.push(item);

    return this;
  }
}

/** FHIR R4 ImplementationGuide — a set of rules about how FHIR is used to solve a particular problem. */
export class ImplementationGuide extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'ImplementationGuide';

  /** An absolute URI that is used to identify this implementation guide. */
  @IsOptional()
  @IsString()
  url?: string;

  /** The identifier that is used to identify this version of the implementation guide. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the implementation guide. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short, descriptive, user-friendly title for the implementation guide. */
  @IsOptional()
  @IsString()
  title?: string;

  /** The status of this implementation guide (draft | active | retired | unknown). */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** A Boolean value to indicate that this implementation guide is for testing purposes. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** The date this version of the implementation guide was published. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization or individual that published the implementation guide. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details for the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the implementation guide. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The content was developed with a focus and intent of supporting the contexts that are listed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the implementation guide is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** A copyright statement relating to the implementation guide. */
  @IsOptional()
  @IsString()
  copyright?: string;

  /** The NPM package name for this implementation guide. */
  @IsOptional()
  @IsString()
  packageId?: string;

  /** The license that applies to this implementation guide. */
  @IsOptional()
  @IsString()
  license?: string;

  /** The version(s) of the FHIR specification on which this ImplementationGuide is based. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  fhirVersion?: string[];

  /** Another implementation guide that this implementation depends on. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideDependsOn)
  dependsOn?: ImplementationGuideDependsOn[];

  /** A set of profiles that all resources covered by this implementation guide must conform to. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideGlobal)
  global?: ImplementationGuideGlobal[];

  /** The information needed by an IG publisher tool to publish the IG. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ImplementationGuideDefinition)
  definition?: ImplementationGuideDefinition;

  /** Information about an assembled implementation guide. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ImplementationGuideManifest)
  manifest?: ImplementationGuideManifest;

  /** Creates a new ImplementationGuide. @param props - Initial values. */
  constructor(props?: Partial<ImplementationGuide>) {
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

  /** Adds an item to the fhirVersion array. @returns This instance for chaining. */
  addFhirVersion(item: string): this {
    if (!this.fhirVersion) {
      this.fhirVersion = [];
    }

    this.fhirVersion.push(item);

    return this;
  }

  /** Adds an item to the dependsOn array. @returns This instance for chaining. */
  addDependsOn(item: ImplementationGuideDependsOn): this {
    if (!this.dependsOn) {
      this.dependsOn = [];
    }

    this.dependsOn.push(item);

    return this;
  }

  /** Adds an item to the global array. @returns This instance for chaining. */
  addGlobal(item: ImplementationGuideGlobal): this {
    if (!this.global) {
      this.global = [];
    }

    this.global.push(item);

    return this;
  }
}
