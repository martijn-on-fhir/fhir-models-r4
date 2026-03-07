import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Quantity } from '../datatypes/quantity.js';
import { Range } from '../datatypes/range.js';
import { Ratio } from '../datatypes/ratio.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for SubstanceSpecification. */
export class SubstanceSpecificationMoiety extends BackboneElement {

  /** Role that the moiety is playing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /** Identifier by which this moiety substance is known. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** Textual name for this moiety substance. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Stereochemistry type. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  stereochemistry?: CodeableConcept;

  /** Optical activity type. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  opticalActivity?: CodeableConcept;

  /** Molecular formula. */
  @IsOptional()
  @IsString()
  molecularFormula?: string;

  /** Quantitative value for this moiety as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  amountQuantity?: Quantity;

  /** Quantitative value for this moiety as a string. */
  @IsOptional()
  @IsString()
  amountString?: string;

  /** Creates a new SubstanceSpecificationMoiety. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSpecificationMoiety>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for SubstanceSpecification. */
export class SubstanceSpecificationProperty extends BackboneElement {

  /** A category for this property, e.g., Physical, Chemical, Enzymatic. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** Property type e.g., dissolution combinator. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** Parameters that were used in the measurement of a property. */
  @IsOptional()
  @IsString()
  parameters?: string;

  /** A substance upon which a defining property depends as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  definingSubstanceReference?: Reference;

  /** A substance upon which a defining property depends as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  definingSubstanceCodeableConcept?: CodeableConcept;

  /** Quantitative value for this property as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  amountQuantity?: Quantity;

  /** Quantitative value for this property as a string. */
  @IsOptional()
  @IsString()
  amountString?: string;

  /** Creates a new SubstanceSpecificationProperty. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSpecificationProperty>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for SubstanceSpecification. */
export class SubstanceSpecificationStructureIsotopeMolecularWeight extends BackboneElement {

  /** The method by which the molecular weight was determined. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /** Type of molecular weight such as exact, average, weight average. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Used to capture quantitative values for a variety of elements. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  amount?: Quantity;

  /** Creates a new SubstanceSpecificationStructureIsotopeMolecularWeight. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSpecificationStructureIsotopeMolecularWeight>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for SubstanceSpecification. */
export class SubstanceSpecificationStructureIsotope extends BackboneElement {

  /** Substance identifier for each non-natural or radioisotope. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** Substance name for each non-natural or radioisotope. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  name?: CodeableConcept;

  /** The type of isotopic substitution present in a single substance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  substitution?: CodeableConcept;

  /** Half life - for a radioactive substance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  halfLife?: Quantity;

  /** The molecular weight or weight range for this isotope. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceSpecificationStructureIsotopeMolecularWeight)
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;

  /** Creates a new SubstanceSpecificationStructureIsotope. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSpecificationStructureIsotope>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for SubstanceSpecification. */
export class SubstanceSpecificationStructureRepresentation extends BackboneElement {

  /** The type of structure representation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The structural representation as text string in a format, e.g., InChI or SMILES. */
  @IsOptional()
  @IsString()
  representation?: string;

  /** An attached file with the structural representation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  attachment?: Attachment;

  /** Creates a new SubstanceSpecificationStructureRepresentation. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSpecificationStructureRepresentation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for SubstanceSpecification. */
export class SubstanceSpecificationStructure extends BackboneElement {

  /** Stereochemistry type. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  stereochemistry?: CodeableConcept;

  /** Optical activity type. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  opticalActivity?: CodeableConcept;

  /** Molecular formula. */
  @IsOptional()
  @IsString()
  molecularFormula?: string;

  /** Specified per moiety according to the Hill system. */
  @IsOptional()
  @IsString()
  molecularFormulaByMoiety?: string;

  /** Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationStructureIsotope)
  isotope?: SubstanceSpecificationStructureIsotope[];

  /** The molecular weight or weight range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceSpecificationStructureIsotopeMolecularWeight)
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;

  /** Supporting literature references. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  source?: Reference[];

  /** Molecular structural representation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationStructureRepresentation)
  representation?: SubstanceSpecificationStructureRepresentation[];

  /** Creates a new SubstanceSpecificationStructure. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSpecificationStructure>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the isotope array. @returns This instance for chaining. */
  addIsotope(item: SubstanceSpecificationStructureIsotope): this {
    if (!this.isotope) {
      this.isotope = [];
    }

    this.isotope.push(item);

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

  /** Adds an item to the representation array. @returns This instance for chaining. */
  addRepresentation(item: SubstanceSpecificationStructureRepresentation): this {
    if (!this.representation) {
      this.representation = [];
    }

    this.representation.push(item);

    return this;
  }
}

/** Backbone element for SubstanceSpecification. */
export class SubstanceSpecificationCode extends BackboneElement {

  /** The specific code. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** Status of the code assignment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /** The date at which the code status is changed as part of the terminology maintenance. */
  @IsOptional()
  @IsString()
  statusDate?: string;

  /** Any comment can be provided in this field. */
  @IsOptional()
  @IsString()
  comment?: string;

  /** Supporting literature references. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  source?: Reference[];

  /** Creates a new SubstanceSpecificationCode. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSpecificationCode>) {
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

/** Backbone element for SubstanceSpecification. */
export class SubstanceSpecificationNameOfficial extends BackboneElement {

  /** Which authority uses this official name. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  authority?: CodeableConcept;

  /** The status of the official name. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /** Date of official name change. */
  @IsOptional()
  @IsString()
  date?: string;

  /** Creates a new SubstanceSpecificationNameOfficial. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSpecificationNameOfficial>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for SubstanceSpecification. */
export class SubstanceSpecificationName extends BackboneElement {

  /** The actual name. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Name type. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The status of the name. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /** If this is the preferred name for this substance. */
  @IsOptional()
  @IsBoolean()
  preferred?: boolean;

  /** Language of the name. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  language?: CodeableConcept[];

  /** The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  domain?: CodeableConcept[];

  /** The jurisdiction where this name applies. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** A synonym of this name. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationName)
  synonym?: SubstanceSpecificationName[];

  /** A translation for this name. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationName)
  translation?: SubstanceSpecificationName[];

  /** Details of the official nature of this name. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationNameOfficial)
  official?: SubstanceSpecificationNameOfficial[];

  /** Supporting literature references. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  source?: Reference[];

  /** Creates a new SubstanceSpecificationName. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSpecificationName>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the language array. @returns This instance for chaining. */
  addLanguage(item: CodeableConcept): this {
    if (!this.language) {
      this.language = [];
    }

    this.language.push(item);

    return this;
  }

  /** Adds an item to the domain array. @returns This instance for chaining. */
  addDomain(item: CodeableConcept): this {
    if (!this.domain) {
      this.domain = [];
    }

    this.domain.push(item);

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

  /** Adds an item to the synonym array. @returns This instance for chaining. */
  addSynonym(item: SubstanceSpecificationName): this {
    if (!this.synonym) {
      this.synonym = [];
    }

    this.synonym.push(item);

    return this;
  }

  /** Adds an item to the translation array. @returns This instance for chaining. */
  addTranslation(item: SubstanceSpecificationName): this {
    if (!this.translation) {
      this.translation = [];
    }

    this.translation.push(item);

    return this;
  }

  /** Adds an item to the official array. @returns This instance for chaining. */
  addOfficial(item: SubstanceSpecificationNameOfficial): this {
    if (!this.official) {
      this.official = [];
    }

    this.official.push(item);

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

/** Backbone element for SubstanceSpecification. */
export class SubstanceSpecificationRelationship extends BackboneElement {

  /** A pointer to another substance, as a resource or just a representational code. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  substanceReference?: Reference;

  /** A pointer to another substance, as a resource or just a representational code. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  substanceCodeableConcept?: CodeableConcept;

  /** For example "salt to parent", "active moiety", "starting material". */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  relationship?: CodeableConcept;

  /** For use when the numeric. */
  @IsOptional()
  @IsBoolean()
  isDefining?: boolean;

  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of active substance in relation to the parent substance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  amountQuantity?: Quantity;

  /** A numeric factor for the relationship as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  amountRange?: Range;

  /** A numeric factor for the relationship as a Ratio. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  amountRatio?: Ratio;

  /** A numeric factor for the relationship as a string. */
  @IsOptional()
  @IsString()
  amountString?: string;

  /** For use when the numeric ratio low limit. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  amountRatioLowLimit?: Ratio;

  /** An operator for the amount, for example "average", "approximately", "less than". */
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

  /** Creates a new SubstanceSpecificationRelationship. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSpecificationRelationship>) {
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

/** FHIR R4 SubstanceSpecification — the detailed description of a substance, typically at a level beyond what is used for prescribing. */
export class SubstanceSpecification extends DomainResource {

  readonly resourceType = 'SubstanceSpecification';

  /** Identifier by which this substance is known. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** High level categorization, e.g., polymer or nucleic acid. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Status of substance within the catalogue e.g., approved. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /** If the substance applies to only human or veterinary use. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  domain?: CodeableConcept;

  /** Textual description of the substance. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Supporting literature. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  source?: Reference[];

  /** Textual comment about this record of a substance. */
  @IsOptional()
  @IsString()
  comment?: string;

  /** Moiety, entity of interest of the molecule. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationMoiety)
  moiety?: SubstanceSpecificationMoiety[];

  /** General specifications for this substance, including how it is related to other substances. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationProperty)
  property?: SubstanceSpecificationProperty[];

  /** General information detailing this substance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  referenceInformation?: Reference;

  /** Structural information. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceSpecificationStructure)
  structure?: SubstanceSpecificationStructure;

  /** Codes associated with the substance. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationCode)
  code?: SubstanceSpecificationCode[];

  /** Names applicable to this substance. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationName)
  name?: SubstanceSpecificationName[];

  /** The molecular weight or weight range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceSpecificationStructureIsotopeMolecularWeight)
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight[];

  /** A link between this substance and another, with details of the relationship. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationRelationship)
  relationship?: SubstanceSpecificationRelationship[];

  /** Data items specific to nucleic acids. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  nucleicAcid?: Reference;

  /** Data items specific to polymers. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  polymer?: Reference;

  /** Data items specific to proteins. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  protein?: Reference;

  /** Material or taxonomic/anatomical source for a substance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  sourceMaterial?: Reference;

  /** Creates a new SubstanceSpecification. @param props - Initial values. */
  constructor(props?: Partial<SubstanceSpecification>) {
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

  /** Adds an item to the moiety array. @returns This instance for chaining. */
  addMoiety(item: SubstanceSpecificationMoiety): this {
    if (!this.moiety) {
      this.moiety = [];
    }

    this.moiety.push(item);

    return this;
  }

  /** Adds an item to the property array. @returns This instance for chaining. */
  addProperty(item: SubstanceSpecificationProperty): this {
    if (!this.property) {
      this.property = [];
    }

    this.property.push(item);

    return this;
  }

  /** Adds an item to the code array. @returns This instance for chaining. */
  addCode(item: SubstanceSpecificationCode): this {
    if (!this.code) {
      this.code = [];
    }

    this.code.push(item);

    return this;
  }

  /** Adds an item to the name array. @returns This instance for chaining. */
  addName(item: SubstanceSpecificationName): this {
    if (!this.name) {
      this.name = [];
    }

    this.name.push(item);

    return this;
  }

  /** Adds an item to the molecularWeight array. @returns This instance for chaining. */
  addMolecularWeight(item: SubstanceSpecificationStructureIsotopeMolecularWeight): this {
    if (!this.molecularWeight) {
      this.molecularWeight = [];
    }

    this.molecularWeight.push(item);

    return this;
  }

  /** Adds an item to the relationship array. @returns This instance for chaining. */
  addRelationship(item: SubstanceSpecificationRelationship): this {
    if (!this.relationship) {
      this.relationship = [];
    }

    this.relationship.push(item);

    return this;
  }
}
