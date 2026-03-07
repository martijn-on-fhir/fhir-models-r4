import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';

/** Backbone element for SubstanceSourceMaterial. */
export class SubstanceSourceMaterialFractionDescription extends BackboneElement {

  /** This element is capturing information about the fraction of a plant part, or human plasma for fractionation. */
  @IsOptional()
  @IsString()
  fraction?: string;

  /** The specific type of the material constituting the component. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  materialType?: CodeableConcept;

  /** Creates a new SubstanceSourceMaterialFractionDescription. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSourceMaterialFractionDescription>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for SubstanceSourceMaterial. */
export class SubstanceSourceMaterialOrganismAuthor extends BackboneElement {

  /** The type of author of an organism species shall be specified. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  authorType?: CodeableConcept;

  /** The author of an organism species shall be specified. */
  @IsOptional()
  @IsString()
  authorDescription?: string;

  /** Creates a new SubstanceSourceMaterialOrganismAuthor. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSourceMaterialOrganismAuthor>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for SubstanceSourceMaterial. */
export class SubstanceSourceMaterialOrganismHybrid extends BackboneElement {

  /** The identifier of the maternal species constituting the hybrid organism shall be specified. */
  @IsOptional()
  @IsString()
  maternalOrganismId?: string;

  /** The name of the maternal species constituting the hybrid organism shall be specified. */
  @IsOptional()
  @IsString()
  maternalOrganismName?: string;

  /** The identifier of the paternal species constituting the hybrid organism shall be specified. */
  @IsOptional()
  @IsString()
  paternalOrganismId?: string;

  /** The name of the paternal species constituting the hybrid organism shall be specified. */
  @IsOptional()
  @IsString()
  paternalOrganismName?: string;

  /** The hybrid type of an organism shall be specified. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  hybridType?: CodeableConcept;

  /** Creates a new SubstanceSourceMaterialOrganismHybrid. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSourceMaterialOrganismHybrid>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for SubstanceSourceMaterial. */
export class SubstanceSourceMaterialOrganismOrganismGeneral extends BackboneElement {

  /** The kingdom of an organism shall be specified. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  kingdom?: CodeableConcept;

  /** The phylum of an organism shall be specified. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  phylum?: CodeableConcept;

  /** The class of an organism shall be specified. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  class?: CodeableConcept;

  /** The order of an organism shall be specified. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  order?: CodeableConcept;

  /** Creates a new SubstanceSourceMaterialOrganismOrganismGeneral. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSourceMaterialOrganismOrganismGeneral>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for SubstanceSourceMaterial. */
export class SubstanceSourceMaterialOrganism extends BackboneElement {

  /** The family of an organism shall be specified. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  family?: CodeableConcept;

  /** The genus of an organism shall be specified. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  genus?: CodeableConcept;

  /** The species of an organism shall be specified. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  species?: CodeableConcept;

  /** The intraspecific type of an organism shall be specified. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  intraspecificType?: CodeableConcept;

  /** The intraspecific description of an organism shall be specified. */
  @IsOptional()
  @IsString()
  intraspecificDescription?: string;

  /** Author type and author description for this organism. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSourceMaterialOrganismAuthor)
  author?: SubstanceSourceMaterialOrganismAuthor[];

  /** Hybrid information for this organism. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceSourceMaterialOrganismHybrid)
  hybrid?: SubstanceSourceMaterialOrganismHybrid;

  /** General taxonomic information for this organism. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceSourceMaterialOrganismOrganismGeneral)
  organismGeneral?: SubstanceSourceMaterialOrganismOrganismGeneral;

  /** Creates a new SubstanceSourceMaterialOrganism. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSourceMaterialOrganism>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the author array. @returns This instance for chaining. */
  addAuthor(item: SubstanceSourceMaterialOrganismAuthor): this {
    if (!this.author) {
      this.author = [];
    }

    this.author.push(item);

    return this;
  }
}

/** Backbone element for SubstanceSourceMaterial. */
export class SubstanceSourceMaterialPartDescription extends BackboneElement {

  /** Entity of anatomical origin of source material within an organism. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  part?: CodeableConcept;

  /** The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  partLocation?: CodeableConcept;

  /** Creates a new SubstanceSourceMaterialPartDescription. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSourceMaterialPartDescription>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 SubstanceSourceMaterial — source material shall capture information on the taxonomic and anatomical origins. */
export class SubstanceSourceMaterial extends DomainResource {

  readonly resourceType = 'SubstanceSourceMaterial';

  /** General high level classification of the source material specific to the origin of the material. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  sourceMaterialClass?: CodeableConcept;

  /** The type of the source material shall be specified based on a controlled vocabulary. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  sourceMaterialType?: CodeableConcept;

  /** The state of the source material when extracted. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  sourceMaterialState?: CodeableConcept;

  /** The unique identifier associated with the source material parent organism. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  organismId?: Identifier;

  /** The organism accepted Scientific name shall be provided. */
  @IsOptional()
  @IsString()
  organismName?: string;

  /** The parent of the herbal drug Ginkgo biloba, Currentname Ginkgo biloba,, Degree of Coverage 0%. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  parentSubstanceId?: Identifier[];

  /** The parent substance of the Herbal Drug, or Alarm Substance. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  parentSubstanceName?: string[];

  /** The country where the plant material is harvested or the countries where the plasma is sourced from. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  countryOfOrigin?: CodeableConcept[];

  /** The place/region where the plant is harvested or the places/regions where the animal source material has its habitat. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  geographicalLocation?: string[];

  /** Stage of life for animals, plants, insects and microorganisms. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  developmentStage?: CodeableConcept;

  /** Many complex materials are fractions of parts of plants, animals, or minerals. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSourceMaterialFractionDescription)
  fractionDescription?: SubstanceSourceMaterialFractionDescription[];

  /** This subclause describes the organism which the substance is derived from. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceSourceMaterialOrganism)
  organism?: SubstanceSourceMaterialOrganism;

  /** To do. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSourceMaterialPartDescription)
  partDescription?: SubstanceSourceMaterialPartDescription[];

  /** Creates a new SubstanceSourceMaterial. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSourceMaterial>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the parentSubstanceId array. @returns This instance for chaining. */
  addParentSubstanceId(item: Identifier): this {
    if (!this.parentSubstanceId) {
      this.parentSubstanceId = [];
    }

    this.parentSubstanceId.push(item);

    return this;
  }

  /** Adds an item to the parentSubstanceName array. @returns This instance for chaining. */
  addParentSubstanceName(item: string): this {
    if (!this.parentSubstanceName) {
      this.parentSubstanceName = [];
    }

    this.parentSubstanceName.push(item);

    return this;
  }

  /** Adds an item to the countryOfOrigin array. @returns This instance for chaining. */
  addCountryOfOrigin(item: CodeableConcept): this {
    if (!this.countryOfOrigin) {
      this.countryOfOrigin = [];
    }

    this.countryOfOrigin.push(item);

    return this;
  }

  /** Adds an item to the geographicalLocation array. @returns This instance for chaining. */
  addGeographicalLocation(item: string): this {
    if (!this.geographicalLocation) {
      this.geographicalLocation = [];
    }

    this.geographicalLocation.push(item);

    return this;
  }

  /** Adds an item to the fractionDescription array. @returns This instance for chaining. */
  addFractionDescription(item: SubstanceSourceMaterialFractionDescription): this {
    if (!this.fractionDescription) {
      this.fractionDescription = [];
    }

    this.fractionDescription.push(item);

    return this;
  }

  /** Adds an item to the partDescription array. @returns This instance for chaining. */
  addPartDescription(item: SubstanceSourceMaterialPartDescription): this {
    if (!this.partDescription) {
      this.partDescription = [];
    }

    this.partDescription.push(item);

    return this;
  }
}
