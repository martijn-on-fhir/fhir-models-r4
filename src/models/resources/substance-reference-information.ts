import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Quantity } from '../datatypes/quantity.js';
import { Range } from '../datatypes/range.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for SubstanceReferenceInformation. */
export class SubstanceReferenceInformationGene extends BackboneElement {

  /** Where the gene sequence originated. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  geneSequenceOrigin?: CodeableConcept;

  /** The specific gene identified. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  gene?: CodeableConcept;

  /** Supporting literature references. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  source?: Reference[];

  /** Creates a new SubstanceReferenceInformationGene. @param props - Initial values. */
  constructor(props?: Partial<SubstanceReferenceInformationGene>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the source array. @returns This instance for chaining. */
  addSource(item: Reference): this {
    if (!this.source) {
      this.source = [];
    }

    this.source.push(item);

    return this;
  }
}

/** Backbone element for SubstanceReferenceInformation. */
export class SubstanceReferenceInformationGeneElement extends BackboneElement {

  /** The type of gene element. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The element identifier. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  element?: Identifier;

  /** Supporting literature references. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  source?: Reference[];

  /** Creates a new SubstanceReferenceInformationGeneElement. @param props - Initial values. */
  constructor(props?: Partial<SubstanceReferenceInformationGeneElement>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the source array. @returns This instance for chaining. */
  addSource(item: Reference): this {
    if (!this.source) {
      this.source = [];
    }

    this.source.push(item);

    return this;
  }
}

/** Backbone element for SubstanceReferenceInformation. */
export class SubstanceReferenceInformationClassification extends BackboneElement {

  /** The domain of the classification. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  domain?: CodeableConcept;

  /** The classification value. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  classification?: CodeableConcept;

  /** The subtype of the classification. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  subtype?: CodeableConcept[];

  /** Supporting literature references. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  source?: Reference[];

  /** Creates a new SubstanceReferenceInformationClassification. @param props - Initial values. */
  constructor(props?: Partial<SubstanceReferenceInformationClassification>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the subtype array. @returns This instance for chaining. */
  addSubtype(item: CodeableConcept): this {
    if (!this.subtype) {
      this.subtype = [];
    }

    this.subtype.push(item);

    return this;
  }

  /** Adds an item to the source array. @returns This instance for chaining. */
  addSource(item: Reference): this {
    if (!this.source) {
      this.source = [];
    }

    this.source.push(item);

    return this;
  }
}

/** Backbone element for SubstanceReferenceInformation. */
export class SubstanceReferenceInformationTarget extends BackboneElement {

  /** The target identifier. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  target?: Identifier;

  /** The type of target. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The type of interaction between the substance and the target. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  interaction?: CodeableConcept;

  /** The organism for which the target was identified. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  organism?: CodeableConcept;

  /** The type of organism. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  organismType?: CodeableConcept;

  /** The amount as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  amountQuantity?: Quantity;

  /** The amount as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  amountRange?: Range;

  /** The amount as a string. */
  @IsOptional()
  @IsString()
  amountString?: string;

  /** The type of the amount. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  amountType?: CodeableConcept;

  /** Supporting literature references. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  source?: Reference[];

  /** Creates a new SubstanceReferenceInformationTarget. @param props - Initial values. */
  constructor(props?: Partial<SubstanceReferenceInformationTarget>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the source array. @returns This instance for chaining. */
  addSource(item: Reference): this {
    if (!this.source) {
      this.source = [];
    }

    this.source.push(item);

    return this;
  }
}

/** FHIR R4 SubstanceReferenceInformation — todo. */
export class SubstanceReferenceInformation extends DomainResource {

  readonly resourceType = 'SubstanceReferenceInformation';

  /** Todo. */
  @IsOptional()
  @IsString()
  comment?: string;

  /** Gene information. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceReferenceInformationGene)
  gene?: SubstanceReferenceInformationGene[];

  /** Gene element information. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceReferenceInformationGeneElement)
  geneElement?: SubstanceReferenceInformationGeneElement[];

  /** Classification information. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceReferenceInformationClassification)
  classification?: SubstanceReferenceInformationClassification[];

  /** Target information. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceReferenceInformationTarget)
  target?: SubstanceReferenceInformationTarget[];

  /** Creates a new SubstanceReferenceInformation. @param props - Initial values. */
  constructor(props?: Partial<SubstanceReferenceInformation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the gene array. @returns This instance for chaining. */
  addGene(item: SubstanceReferenceInformationGene): this {
    if (!this.gene) {
      this.gene = [];
    }

    this.gene.push(item);

    return this;
  }

  /** Adds an item to the geneElement array. @returns This instance for chaining. */
  addGeneElement(item: SubstanceReferenceInformationGeneElement): this {
    if (!this.geneElement) {
      this.geneElement = [];
    }

    this.geneElement.push(item);

    return this;
  }

  /** Adds an item to the classification array. @returns This instance for chaining. */
  addClassification(item: SubstanceReferenceInformationClassification): this {
    if (!this.classification) {
      this.classification = [];
    }

    this.classification.push(item);

    return this;
  }

  /** Adds an item to the target array. @returns This instance for chaining. */
  addTarget(item: SubstanceReferenceInformationTarget): this {
    if (!this.target) {
      this.target = [];
    }

    this.target.push(item);

    return this;
  }
}
