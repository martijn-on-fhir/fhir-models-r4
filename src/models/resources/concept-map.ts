import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Identifier } from '../datatypes/identifier.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { ConceptMapEquivalence } from '../enums/concept-map-equivalence.js';
import { ConceptMapGroupUnmappedMode } from '../enums/concept-map-group-unmapped-mode.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for ConceptMap — a property value required for a target mapping to apply. */
export class ConceptMapGroupElementTargetDependsOn extends BackboneElement {

  /** Reference to a property that holds a value the map depends on. */
  @IsOptional()
  @IsString()
  property?: string;

  /** Code system for the dependency code (if needed). */
  @IsOptional()
  @IsString()
  system?: string;

  /** Value of the property referred to. */
  @IsOptional()
  @IsString()
  value?: string;

  /** Display for the code. */
  @IsOptional()
  @IsString()
  display?: string;

  /** Creates a new ConceptMapGroupElementTargetDependsOn. @param props - Initial values. */
  constructor(props?: Partial<ConceptMapGroupElementTargetDependsOn>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ConceptMap — target concept in the target system. */
export class ConceptMapGroupElementTarget extends BackboneElement {

  /** Code in the target system. */
  @IsOptional()
  @IsString()
  code?: string;

  /** Display for the code. */
  @IsOptional()
  @IsString()
  display?: string;

  /** The equivalence between the source and target concepts. */
  @IsOptional()
  @IsEnum(ConceptMapEquivalence)
  equivalence?: ConceptMapEquivalence;

  /** Description of status or issues in mapping. */
  @IsOptional()
  @IsString()
  comment?: string;

  /** Other elements required for this mapping. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConceptMapGroupElementTargetDependsOn)
  dependsOn?: ConceptMapGroupElementTargetDependsOn[];

  /** Other concepts that this mapping also produces. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConceptMapGroupElementTargetDependsOn)
  product?: ConceptMapGroupElementTargetDependsOn[];

  /** Creates a new ConceptMapGroupElementTarget. @param props - Initial values. */
  constructor(props?: Partial<ConceptMapGroupElementTarget>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the dependsOn array. @returns This instance for chaining. */
  addDependsOn(item: ConceptMapGroupElementTargetDependsOn): this {
    if (!this.dependsOn) {
      this.dependsOn = [];
    }

    this.dependsOn.push(item);

    return this;
  }

  /** Adds an item to the product array. @returns This instance for chaining. */
  addProduct(item: ConceptMapGroupElementTargetDependsOn): this {
    if (!this.product) {
      this.product = [];
    }

    this.product.push(item);

    return this;
  }
}

/** Backbone element for ConceptMap — mappings for a concept from the source set. */
export class ConceptMapGroupElement extends BackboneElement {

  /** Code in the source system. */
  @IsOptional()
  @IsString()
  code?: string;

  /** Display for the code. */
  @IsOptional()
  @IsString()
  display?: string;

  /** Concept in target system for the element. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConceptMapGroupElementTarget)
  target?: ConceptMapGroupElementTarget[];

  /** Creates a new ConceptMapGroupElement. @param props - Initial values. */
  constructor(props?: Partial<ConceptMapGroupElement>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the target array. @returns This instance for chaining. */
  addTarget(item: ConceptMapGroupElementTarget): this {
    if (!this.target) {
      this.target = [];
    }

    this.target.push(item);

    return this;
  }
}

/** Backbone element for ConceptMap — what to do when there is no mapping for the source concept. */
export class ConceptMapGroupUnmapped extends BackboneElement {

  /** Defines which action to take if there is no match (provided | fixed | other-map). */
  @IsOptional()
  @IsEnum(ConceptMapGroupUnmappedMode)
  mode?: ConceptMapGroupUnmappedMode;

  /** Fixed code when mode is fixed. */
  @IsOptional()
  @IsString()
  code?: string;

  /** Display for the code. */
  @IsOptional()
  @IsString()
  display?: string;

  /** Canonical reference to an additional ConceptMap to use when mode is other-map. */
  @IsOptional()
  @IsString()
  url?: string;

  /** Creates a new ConceptMapGroupUnmapped. @param props - Initial values. */
  constructor(props?: Partial<ConceptMapGroupUnmapped>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ConceptMap — same source and target systems. */
export class ConceptMapGroup extends BackboneElement {

  /** Source system where concepts to be mapped are defined. */
  @IsOptional()
  @IsString()
  source?: string;

  /** Specific version of the source code system. */
  @IsOptional()
  @IsString()
  sourceVersion?: string;

  /** Target system that the concepts are mapped to. */
  @IsOptional()
  @IsString()
  target?: string;

  /** Specific version of the target code system. */
  @IsOptional()
  @IsString()
  targetVersion?: string;

  /** Mappings for a concept from the source set. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConceptMapGroupElement)
  element?: ConceptMapGroupElement[];

  /** What to do when there is no mapping for the source concept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ConceptMapGroupUnmapped)
  unmapped?: ConceptMapGroupUnmapped;

  /** Creates a new ConceptMapGroup. @param props - Initial values. */
  constructor(props?: Partial<ConceptMapGroup>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the element array. @returns This instance for chaining. */
  addElement(item: ConceptMapGroupElement): this {
    if (!this.element) {
      this.element = [];
    }

    this.element.push(item);

    return this;
  }
}

/** FHIR R4 ConceptMap — a statement of relationships from one set of concepts to another. */
export class ConceptMap extends DomainResource {

  /** The FHIR resource type string. */
  readonly resourceType = 'ConceptMap';

  /** Canonical identifier for this concept map. */
  @IsOptional()
  @IsString()
  url?: string;

  /** Additional identifier for the concept map. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** Business version of the concept map. */
  @IsOptional()
  @IsString()
  version?: string;

  /** Computer-friendly name for the concept map. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Human-friendly name for the concept map. */
  @IsOptional()
  @IsString()
  title?: string;

  /** Publication status (draft | active | retired | unknown). */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** For testing purposes, not real usage. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** Date last changed. */
  @IsOptional()
  @IsString()
  date?: string;

  /** Name of the publisher. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details for the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** Natural language description of the concept map. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Context the content is intended to support. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** Intended jurisdiction for the concept map. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Why this concept map is defined. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** Use and/or publishing restrictions. */
  @IsOptional()
  @IsString()
  copyright?: string;

  /** The source value set that contains the concepts being mapped, as a URI. */
  @IsOptional()
  @IsString()
  sourceUri?: string;

  /** The source value set that contains the concepts being mapped, as a canonical URL. */
  @IsOptional()
  @IsString()
  sourceCanonical?: string;

  /** The target value set which provides context for the mappings, as a URI. */
  @IsOptional()
  @IsString()
  targetUri?: string;

  /** The target value set which provides context for the mappings, as a canonical URL. */
  @IsOptional()
  @IsString()
  targetCanonical?: string;

  /** Groups of mappings between source and target systems. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConceptMapGroup)
  group?: ConceptMapGroup[];

  /** Creates a new ConceptMap. @param props - Initial values. */
  constructor(props?: Partial<ConceptMap>) {
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

  /** Adds an item to the group array. @returns This instance for chaining. */
  addGroup(item: ConceptMapGroup): this {
    if (!this.group) {
      this.group = [];
    }

    this.group.push(item);

    return this;
  }
}
