import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { PublicationStatus } from '../enums/publication-status.js';
import { SearchParamType } from '../enums/search-param-type.js';

/** Backbone element for SearchParameter. */
export class SearchParameterComponent extends BackboneElement {

  /** The definition of the search parameter that describes this part. */
  @IsOptional()
  @IsString()
  definition?: string;

  /** A sub-expression that extracts values from the outcome of the component definition. */
  @IsOptional()
  @IsString()
  expression?: string;

  /** Creates a new SearchParameterComponent. @param props - Initial values. */
  constructor(props?: Partial<SearchParameterComponent>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 SearchParameter — a search parameter that defines a named search item used to search/filter resources. */
export class SearchParameter extends DomainResource {

  readonly resourceType = 'SearchParameter';

  /** An absolute URI that identifies this search parameter uniquely. */
  @IsOptional()
  @IsString()
  url?: string;

  /** The business version of the search parameter. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the search parameter. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Where this search parameter is originally defined. */
  @IsOptional()
  @IsString()
  derivedFrom?: string;

  /** The publication status of the search parameter. */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** Whether this search parameter is for testing purposes rather than real usage. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** The date the search parameter was last changed. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization or individual that published the search parameter. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details for the publisher of the search parameter. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A natural language description of the search parameter. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The context in which the search parameter content is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the search parameter is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Explanation of why this search parameter is needed. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** The code used in the URL or the parameter name in a parameters resource for this search parameter. */
  @IsOptional()
  @IsString()
  code?: string;

  /** The base resource type(s) that this search parameter is defined on. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  base?: string[];

  /** The type of value that a search parameter may contain. */
  @IsOptional()
  @IsEnum(SearchParamType)
  type?: SearchParamType;

  /** A FHIRPath expression that returns a set of elements for the search parameter. */
  @IsOptional()
  @IsString()
  expression?: string;

  /** An XPath expression that returns a set of elements for the search parameter. */
  @IsOptional()
  @IsString()
  xpath?: string;

  /** How the search parameter relates to the set of elements returned by evaluating the xpath. */
  @IsOptional()
  @IsString()
  xpathUsage?: string;

  /** Types of resource that this search parameter can be used against. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  target?: string[];

  /** Whether multiple values are allowed for each time the parameter exists. */
  @IsOptional()
  @IsBoolean()
  multipleOr?: boolean;

  /** Whether multiple parameters are allowed. */
  @IsOptional()
  @IsBoolean()
  multipleAnd?: boolean;

  /** Comparators supported for the search parameter. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  comparator?: string[];

  /** A modifier supported for the search parameter. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  modifier?: string[];

  /** Contains the names of any search parameters which may be chained to the containing search parameter. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  chain?: string[];

  /** Used to define the parts of a composite search parameter. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SearchParameterComponent)
  component?: SearchParameterComponent[];

  /** Creates a new SearchParameter. @param props - Initial values. */
  constructor(props?: Partial<SearchParameter>) {
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

  /** Adds an item to the base array. @returns This instance for chaining. */
  addBase(item: string): this {
    if (!this.base) {
      this.base = [];
    }

    this.base.push(item);

    return this;
  }

  /** Adds an item to the target array. @returns This instance for chaining. */
  addTarget(item: string): this {
    if (!this.target) {
      this.target = [];
    }

    this.target.push(item);

    return this;
  }

  /** Adds an item to the comparator array. @returns This instance for chaining. */
  addComparator(item: string): this {
    if (!this.comparator) {
      this.comparator = [];
    }

    this.comparator.push(item);

    return this;
  }

  /** Adds an item to the modifier array. @returns This instance for chaining. */
  addModifier(item: string): this {
    if (!this.modifier) {
      this.modifier = [];
    }

    this.modifier.push(item);

    return this;
  }

  /** Adds an item to the chain array. @returns This instance for chaining. */
  addChain(item: string): this {
    if (!this.chain) {
      this.chain = [];
    }

    this.chain.push(item);

    return this;
  }

  /** Adds an item to the component array. @returns This instance for chaining. */
  addComponent(item: SearchParameterComponent): this {
    if (!this.component) {
      this.component = [];
    }

    this.component.push(item);

    return this;
  }
}
