import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { OrientationType } from '../enums/orientation-type.js';
import { SequenceType } from '../enums/sequence-type.js';
import { StrandType } from '../enums/strand-type.js';

/** Backbone element for MolecularSequence. */
export class MolecularSequenceReferenceSeq extends BackboneElement {

  /** Structural unit composed of a nucleic acid molecule. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  chromosome?: CodeableConcept;

  /** The Genome Build used for reference, following GRCh build versions. */
  @IsOptional()
  @IsString()
  genomeBuild?: string;

  /** Sense of nucleic acid (Strand Orientation). */
  @IsOptional()
  @IsEnum(OrientationType)
  orientation?: OrientationType;

  /** Reference identifier of reference sequence submitted to NCBI. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  referenceSeqId?: CodeableConcept;

  /** A pointer to another MolecularSequence as reference sequence. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  referenceSeqPointer?: Reference;

  /** A string-based representation of the reference sequence. */
  @IsOptional()
  @IsString()
  referenceSeqString?: string;

  /** An absolute reference to a strand (watson or crick). */
  @IsOptional()
  @IsEnum(StrandType)
  strand?: StrandType;

  /** Start position of the window on the reference sequence (0-based inclusive). */
  @IsOptional()
  @IsNumber()
  windowStart?: number;

  /** End position of the window on the reference sequence (0-based exclusive). */
  @IsOptional()
  @IsNumber()
  windowEnd?: number;

  /** Creates a new MolecularSequenceReferenceSeq. @param props - Initial values. */
  constructor(props?: Partial<MolecularSequenceReferenceSeq>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for MolecularSequence. */
export class MolecularSequenceVariant extends BackboneElement {

  /** Start position of the variant on the reference sequence. */
  @IsOptional()
  @IsNumber()
  start?: number;

  /** End position of the variant on the reference sequence. */
  @IsOptional()
  @IsNumber()
  end?: number;

  /** An allele that was observed in the patient. */
  @IsOptional()
  @IsString()
  observedAllele?: string;

  /** An allele that was expected as the reference. */
  @IsOptional()
  @IsString()
  referenceAllele?: string;

  /** Extended CIGAR string for aligning the sequence with reference bases. */
  @IsOptional()
  @IsString()
  cigar?: string;

  /** A pointer to an Observation containing variant information. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  variantPointer?: Reference;

  /** Creates a new MolecularSequenceVariant. @param props - Initial values. */
  constructor(props?: Partial<MolecularSequenceVariant>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for MolecularSequence. */
export class MolecularSequenceQualityRoc extends BackboneElement {

  /** Genotype quality score. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  score?: number[];

  /** The number of true positives. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  numTP?: number[];

  /** The number of false positives. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  numFP?: number[];

  /** The number of false negatives. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  numFN?: number[];

  /** Calculated precision values. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  precision?: number[];

  /** Calculated sensitivity values. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  sensitivity?: number[];

  /** Calculated fScore values. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  fMeasure?: number[];

  /** Creates a new MolecularSequenceQualityRoc. @param props - Initial values. */
  constructor(props?: Partial<MolecularSequenceQualityRoc>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the score array. @returns This instance for chaining. */
  addScore(item: number): this {
    if (!this.score) {
      this.score = [];
    }

    this.score.push(item);

    return this;
  }

  /** Adds an item to the numTP array. @returns This instance for chaining. */
  addNumTP(item: number): this {
    if (!this.numTP) {
      this.numTP = [];
    }

    this.numTP.push(item);

    return this;
  }

  /** Adds an item to the numFP array. @returns This instance for chaining. */
  addNumFP(item: number): this {
    if (!this.numFP) {
      this.numFP = [];
    }

    this.numFP.push(item);

    return this;
  }

  /** Adds an item to the numFN array. @returns This instance for chaining. */
  addNumFN(item: number): this {
    if (!this.numFN) {
      this.numFN = [];
    }

    this.numFN.push(item);

    return this;
  }

  /** Adds an item to the precision array. @returns This instance for chaining. */
  addPrecision(item: number): this {
    if (!this.precision) {
      this.precision = [];
    }

    this.precision.push(item);

    return this;
  }

  /** Adds an item to the sensitivity array. @returns This instance for chaining. */
  addSensitivity(item: number): this {
    if (!this.sensitivity) {
      this.sensitivity = [];
    }

    this.sensitivity.push(item);

    return this;
  }

  /** Adds an item to the fMeasure array. @returns This instance for chaining. */
  addFMeasure(item: number): this {
    if (!this.fMeasure) {
      this.fMeasure = [];
    }

    this.fMeasure.push(item);

    return this;
  }
}

/** Backbone element for MolecularSequence. */
export class MolecularSequenceQuality extends BackboneElement {

  /** Indel / snp / frameshift / unmatched quality type. */
  @IsOptional()
  @IsString()
  type?: string;

  /** Gold standard sequence used for comparing against. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  standardSequence?: CodeableConcept;

  /** Start position of the sequence. */
  @IsOptional()
  @IsNumber()
  start?: number;

  /** End position of the sequence. */
  @IsOptional()
  @IsNumber()
  end?: number;

  /** The score of each quality result. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  score?: Quantity;

  /** Method used to compute the quality. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /** True positives from the perspective of the truth data. */
  @IsOptional()
  @IsNumber()
  truthTP?: number;

  /** True positives from the perspective of the query data. */
  @IsOptional()
  @IsNumber()
  queryTP?: number;

  /** False negatives (missed variants). */
  @IsOptional()
  @IsNumber()
  truthFN?: number;

  /** False positives. */
  @IsOptional()
  @IsNumber()
  queryFP?: number;

  /** The number of false positives where the non-REF alleles in the truth and query call sets match. */
  @IsOptional()
  @IsNumber()
  gtFP?: number;

  /** QUERY.TP / (QUERY.TP + QUERY.FP). */
  @IsOptional()
  @IsNumber()
  precision?: number;

  /** TRUTH.TP / (TRUTH.TP + TRUTH.FN). */
  @IsOptional()
  @IsNumber()
  recall?: number;

  /** Harmonic mean of recall and precision. */
  @IsOptional()
  @IsNumber()
  fScore?: number;

  /** Receiver operator characteristic (ROC) curve. */
  @IsOptional()
  @ValidateNested()
  @Type(() => MolecularSequenceQualityRoc)
  roc?: MolecularSequenceQualityRoc;

  /** Creates a new MolecularSequenceQuality. @param props - Initial values. */
  constructor(props?: Partial<MolecularSequenceQuality>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for MolecularSequence. */
export class MolecularSequenceRepository extends BackboneElement {

  /** Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource. */
  @IsOptional()
  @IsString()
  type?: string;

  /** URI of an external repository. */
  @IsOptional()
  @IsString()
  url?: string;

  /** Name of the repository. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Identifier of the dataset in the external repository. */
  @IsOptional()
  @IsString()
  datasetId?: string;

  /** Identifier of the variantset in the external repository. */
  @IsOptional()
  @IsString()
  variantsetId?: string;

  /** Identifier of the read in the external repository. */
  @IsOptional()
  @IsString()
  readsetId?: string;

  /** Creates a new MolecularSequenceRepository. @param props - Initial values. */
  constructor(props?: Partial<MolecularSequenceRepository>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for MolecularSequence. */
export class MolecularSequenceStructureVariantOuter extends BackboneElement {

  /** Structural variant outer start. */
  @IsOptional()
  @IsNumber()
  start?: number;

  /** Structural variant outer end. */
  @IsOptional()
  @IsNumber()
  end?: number;

  /** Creates a new MolecularSequenceStructureVariantOuter. @param props - Initial values. */
  constructor(props?: Partial<MolecularSequenceStructureVariantOuter>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for MolecularSequence. */
export class MolecularSequenceStructureVariantInner extends BackboneElement {

  /** Structural variant inner start. */
  @IsOptional()
  @IsNumber()
  start?: number;

  /** Structural variant inner end. */
  @IsOptional()
  @IsNumber()
  end?: number;

  /** Creates a new MolecularSequenceStructureVariantInner. @param props - Initial values. */
  constructor(props?: Partial<MolecularSequenceStructureVariantInner>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for MolecularSequence. */
export class MolecularSequenceStructureVariant extends BackboneElement {

  /** Information about chromosome structure variation DNA change type. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  variantType?: CodeableConcept;

  /** Used to indicate if the outer and inner start-end values have the same meaning. */
  @IsOptional()
  @IsBoolean()
  exact?: boolean;

  /** Length of the variant chromosome. */
  @IsOptional()
  @IsNumber()
  length?: number;

  /** Structural variant outer. */
  @IsOptional()
  @ValidateNested()
  @Type(() => MolecularSequenceStructureVariantOuter)
  outer?: MolecularSequenceStructureVariantOuter;

  /** Structural variant inner. */
  @IsOptional()
  @ValidateNested()
  @Type(() => MolecularSequenceStructureVariantInner)
  inner?: MolecularSequenceStructureVariantInner;

  /** Creates a new MolecularSequenceStructureVariant. @param props - Initial values. */
  constructor(props?: Partial<MolecularSequenceStructureVariant>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 MolecularSequence — raw data describing a biological sequence. */
export class MolecularSequence extends DomainResource {

  readonly resourceType = 'MolecularSequence';

  /** A unique identifier for this particular sequence instance. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Amino acid / cDNA transcript / RNA sequence type. */
  @IsOptional()
  @IsEnum(SequenceType)
  type?: SequenceType;

  /** Whether the sequence is 0-based or 1-based. */
  @IsOptional()
  @IsNumber()
  coordinateSystem?: number;

  /** The patient whose sequencing results are described by this resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /** Specimen used for sequencing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  specimen?: Reference;

  /** The method for sequencing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  device?: Reference;

  /** The organization or lab that should be responsible for the result. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  performer?: Reference;

  /** The number of copies of the sequence of interest. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** A sequence used as reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => MolecularSequenceReferenceSeq)
  referenceSeq?: MolecularSequenceReferenceSeq;

  /** The definition of variant here originates from Sequence Ontology. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MolecularSequenceVariant)
  variant?: MolecularSequenceVariant[];

  /** Sequence that was observed. */
  @IsOptional()
  @IsString()
  observedSeq?: string;

  /** An experimental feature attribute that defines the quality of the feature. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MolecularSequenceQuality)
  quality?: MolecularSequenceQuality[];

  /** Coverage (reads) used for determining the variant. */
  @IsOptional()
  @IsNumber()
  readCoverage?: number;

  /** External repository which contains further details about the data. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MolecularSequenceRepository)
  repository?: MolecularSequenceRepository[];

  /** Pointer to next atomic sequence. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  pointer?: Reference[];

  /** Information about chromosome structure variation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MolecularSequenceStructureVariant)
  structureVariant?: MolecularSequenceStructureVariant[];

  /** Creates a new MolecularSequence. @param props - Initial values. */
  constructor(props?: Partial<MolecularSequence>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the identifier array. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds an item to the variant array. @returns This instance for chaining. */
  addVariant(item: MolecularSequenceVariant): this {
    if (!this.variant) {
      this.variant = [];
    }

    this.variant.push(item);

    return this;
  }

  /** Adds an item to the quality array. @returns This instance for chaining. */
  addQuality(item: MolecularSequenceQuality): this {
    if (!this.quality) {
      this.quality = [];
    }

    this.quality.push(item);

    return this;
  }

  /** Adds an item to the repository array. @returns This instance for chaining. */
  addRepository(item: MolecularSequenceRepository): this {
    if (!this.repository) {
      this.repository = [];
    }

    this.repository.push(item);

    return this;
  }

  /** Adds an item to the pointer array. @returns This instance for chaining. */
  addPointer(item: Reference): this {
    if (!this.pointer) {
      this.pointer = [];
    }

    this.pointer.push(item);

    return this;
  }

  /** Adds an item to the structureVariant array. @returns This instance for chaining. */
  addStructureVariant(item: MolecularSequenceStructureVariant): this {
    if (!this.structureVariant) {
      this.structureVariant = [];
    }

    this.structureVariant.push(item);

    return this;
  }
}
