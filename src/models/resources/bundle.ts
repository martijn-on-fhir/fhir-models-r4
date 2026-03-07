import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { Resource } from '../base/resource.js';
import { Identifier } from '../datatypes/identifier.js';
import { BundleType } from '../enums/bundle-type.js';
import { HTTPVerb } from '../enums/http-verb.js';
import { SearchEntryMode } from '../enums/search-entry-mode.js';

/** Backbone element for Bundle — links related to this bundle. */
export class BundleLink extends BackboneElement {

  /** How the link relates to the bundle (e.g., self, next, previous). */
  @IsOptional()
  @IsString()
  relation?: string;

  /** Reference details for the link. */
  @IsOptional()
  @IsString()
  url?: string;

  /** Creates a new BundleLink. @param props - Initial values. */
  constructor(props?: Partial<BundleLink>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Bundle — search-related information for an entry. */
export class BundleEntrySearch extends BackboneElement {

  /** Why this entry is in the result set (match | include | outcome). */
  @IsOptional()
  @IsEnum(SearchEntryMode)
  mode?: SearchEntryMode;

  /** Search ranking between 0 and 1. */
  @IsOptional()
  @IsNumber()
  score?: number;

  /** Creates a new BundleEntrySearch. @param props - Initial values. */
  constructor(props?: Partial<BundleEntrySearch>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Bundle — additional execution information for transactions. */
export class BundleEntryRequest extends BackboneElement {

  /** HTTP method for the request (GET | HEAD | POST | PUT | DELETE | PATCH). */
  @IsOptional()
  @IsEnum(HTTPVerb)
  method?: HTTPVerb;

  /** URL for the HTTP equivalent of this entry. */
  @IsOptional()
  @IsString()
  url?: string;

  /** For managing cache currency (ETag-based). */
  @IsOptional()
  @IsString()
  ifNoneMatch?: string;

  /** For managing cache currency (date-based). */
  @IsOptional()
  @IsString()
  ifModifiedSince?: string;

  /** For managing update contention. */
  @IsOptional()
  @IsString()
  ifMatch?: string;

  /** For conditional creates. */
  @IsOptional()
  @IsString()
  ifNoneExist?: string;

  /** Creates a new BundleEntryRequest. @param props - Initial values. */
  constructor(props?: Partial<BundleEntryRequest>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Bundle — results of execution for transaction/batch entries. */
export class BundleEntryResponse extends BackboneElement {

  /** Status response code (text with optional HTTP code). */
  @IsOptional()
  @IsString()
  status?: string;

  /** The location of the created or updated resource. */
  @IsOptional()
  @IsString()
  location?: string;

  /** The ETag for the resource. */
  @IsOptional()
  @IsString()
  etag?: string;

  /** Server-set last modified date. */
  @IsOptional()
  @IsString()
  lastModified?: string;

  /** OperationOutcome with hints and warnings. */
  @IsOptional()
  outcome?: Resource;

  /** Creates a new BundleEntryResponse. @param props - Initial values. */
  constructor(props?: Partial<BundleEntryResponse>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Bundle — an entry in the bundle. */
export class BundleEntry extends BackboneElement {

  /** Links related to this entry. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BundleLink)
  link?: BundleLink[];

  /** URI for the resource in the entry. */
  @IsOptional()
  @IsString()
  fullUrl?: string;

  /** A resource in the bundle entry. */
  @IsOptional()
  resource?: Resource;

  /** Search-related information for this entry. */
  @IsOptional()
  @ValidateNested()
  @Type(() => BundleEntrySearch)
  search?: BundleEntrySearch;

  /** Additional execution information for transaction/batch operations. */
  @IsOptional()
  @ValidateNested()
  @Type(() => BundleEntryRequest)
  request?: BundleEntryRequest;

  /** Results of execution for transaction/batch operations. */
  @IsOptional()
  @ValidateNested()
  @Type(() => BundleEntryResponse)
  response?: BundleEntryResponse;

  /** Creates a new BundleEntry. @param props - Initial values. */
  constructor(props?: Partial<BundleEntry>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the link array. @returns This instance for chaining. */
  addLink(item: BundleLink): this {
    if (!this.link) {
      this.link = [];
    }

    this.link.push(item);

    return this;
  }
}

/** FHIR R4 Bundle — a container for a collection of resources. */
export class Bundle extends Resource {

  /** The FHIR resource type string. */
  readonly resourceType = 'Bundle';

  /** Persistent identifier for the bundle. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** The purpose of the bundle (document | message | transaction | etc.). */
  @IsOptional()
  @IsEnum(BundleType)
  type?: BundleType;

  /** When the bundle was assembled. */
  @IsOptional()
  @IsString()
  timestamp?: string;

  /** Total number of matching resources (for search bundles). */
  @IsOptional()
  @IsNumber()
  total?: number;

  /** Links related to this bundle. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BundleLink)
  link?: BundleLink[];

  /** Entries in the bundle. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BundleEntry)
  entry?: BundleEntry[];

  /** Digital signature for the bundle. */
  @IsOptional()
  signature?: any;

  /** Creates a new Bundle. @param props - Initial values. */
  constructor(props?: Partial<Bundle>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the link array. @returns This instance for chaining. */
  addLink(item: BundleLink): this {
    if (!this.link) {
      this.link = [];
    }

    this.link.push(item);

    return this;
  }

  /** Adds an item to the entry array. @returns This instance for chaining. */
  addEntry(item: BundleEntry): this {
    if (!this.entry) {
      this.entry = [];
    }

    this.entry.push(item);

    return this;
  }
}
