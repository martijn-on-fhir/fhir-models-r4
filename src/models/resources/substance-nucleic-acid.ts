import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';

/** Backbone element for SubstanceNucleicAcid. */
export class SubstanceNucleicAcidSubunitLinkage extends BackboneElement {

  /** The entity that links the sugar residues together. */
  @IsOptional()
  @IsString()
  connectivity?: string;

  /** Each linkage will be registered as a fragment and can be used to identify linkage positions. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** Used to identify the name of the linkage. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Residues shall be captured as described in 5.3.6.8.3. */
  @IsOptional()
  @IsString()
  residueSite?: string;

  /** Creates a new SubstanceNucleicAcidSubunitLinkage. @param props - Initial values. */
  constructor(props?: Partial<SubstanceNucleicAcidSubunitLinkage>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for SubstanceNucleicAcid. */
export class SubstanceNucleicAcidSubunitSugar extends BackboneElement {

  /** The Substance ID of the sugar or sugar-like component that makes up the nucleotide. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** The name of the sugar or sugar-like component that makes up the nucleotide. */
  @IsOptional()
  @IsString()
  name?: string;

  /** The residues that contain a given sugar will be captured. */
  @IsOptional()
  @IsString()
  residueSite?: string;

  /** Creates a new SubstanceNucleicAcidSubunitSugar. @param props - Initial values. */
  constructor(props?: Partial<SubstanceNucleicAcidSubunitSugar>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for SubstanceNucleicAcid. */
export class SubstanceNucleicAcidSubunit extends BackboneElement {

  /** Index of linear sequences of nucleic acids in order of decreasing length. */
  @IsOptional()
  @IsNumber()
  subunit?: number;

  /** Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. */
  @IsOptional()
  @IsString()
  sequence?: string;

  /** The length of the sequence shall be captured. */
  @IsOptional()
  @IsNumber()
  length?: number;

  /** The nucleotide sequence shall be provided in the 5'-3' direction. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  sequenceAttachment?: Attachment;

  /** The nucleotide present at the 5' terminal shall be specified based on a controlled vocabulary. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  fivePrime?: CodeableConcept;

  /** The nucleotide present at the 3' terminal shall be specified based on a controlled vocabulary. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  threePrime?: CodeableConcept;

  /** The linkages between sugar residues will also be captured. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceNucleicAcidSubunitLinkage)
  linkage?: SubstanceNucleicAcidSubunitLinkage[];

  /** 5.3.6.8.1 Sugar ID (Mandatory). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceNucleicAcidSubunitSugar)
  sugar?: SubstanceNucleicAcidSubunitSugar[];

  /** Creates a new SubstanceNucleicAcidSubunit. @param props - Initial values. */
  constructor(props?: Partial<SubstanceNucleicAcidSubunit>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the linkage array. @returns This instance for chaining. */
  addLinkage(item: SubstanceNucleicAcidSubunitLinkage): this {
    if (!this.linkage) {
      this.linkage = [];
    }

    this.linkage.push(item);

    return this;
  }

  /** Adds an item to the sugar array. @returns This instance for chaining. */
  addSugar(item: SubstanceNucleicAcidSubunitSugar): this {
    if (!this.sugar) {
      this.sugar = [];
    }

    this.sugar.push(item);

    return this;
  }
}

/** FHIR R4 SubstanceNucleicAcid — nucleic acids are defined by three distinct elements: the base, sugar and linkage. */
export class SubstanceNucleicAcid extends DomainResource {

  readonly resourceType = 'SubstanceNucleicAcid';

  /** The type of the sequence shall be specified based on a controlled vocabulary. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  sequenceType?: CodeableConcept;

  /** The number of linear sequences of nucleotides linked through phosphodiester bonds. */
  @IsOptional()
  @IsNumber()
  numberOfSubunits?: number;

  /** The area of hybridisation shall be described if applicable for double stranded RNA or DNA. */
  @IsOptional()
  @IsString()
  areaOfHybridisation?: string;

  /** The type of oligonucleotide sequence (e.g., antisense, siRNA, or other). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  oligoNucleotideType?: CodeableConcept;

  /** Subunits are listed in order of decreasing length. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceNucleicAcidSubunit)
  subunit?: SubstanceNucleicAcidSubunit[];

  /** Creates a new SubstanceNucleicAcid. @param props - Initial values. */
  constructor(props?: Partial<SubstanceNucleicAcid>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the subunit array. @returns This instance for chaining. */
  addSubunit(item: SubstanceNucleicAcidSubunit): this {
    if (!this.subunit) {
      this.subunit = [];
    }

    this.subunit.push(item);

    return this;
  }
}
