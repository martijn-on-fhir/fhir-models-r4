import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';

/** Backbone element for SubstanceProtein. */
export class SubstanceProteinSubunit extends BackboneElement {

  /** Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. */
  @IsOptional()
  @IsNumber()
  subunit?: number;

  /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end. */
  @IsOptional()
  @IsString()
  sequence?: string;

  /** Length of linear sequences of amino acids contained in the subunit. */
  @IsOptional()
  @IsNumber()
  length?: number;

  /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  sequenceAttachment?: Attachment;

  /** Unique identifier for molecular fragment modification based on the ISO 11238 substance identifier. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  nTerminalModificationId?: Identifier;

  /** The name of the fragment modified at the N-terminal of the SubstanceProtein. */
  @IsOptional()
  @IsString()
  nTerminalModification?: string;

  /** Unique identifier for molecular fragment modification based on the ISO 11238 substance identifier. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  cTerminalModificationId?: Identifier;

  /** The modification at the C-terminal shall be specified. */
  @IsOptional()
  @IsString()
  cTerminalModification?: string;

  /** Creates a new SubstanceProteinSubunit. @param props - Initial values. */
  constructor(props?: Partial<SubstanceProteinSubunit>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 SubstanceProtein — a SubstanceProtein is defined as a single unit of a linear amino acid sequence. */
export class SubstanceProtein extends DomainResource {

  readonly resourceType = 'SubstanceProtein';

  /** The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  sequenceType?: CodeableConcept;

  /** Number of linear sequences of amino acids linked through peptide bonds. */
  @IsOptional()
  @IsNumber()
  numberOfSubunits?: number;

  /** The disulphide bond between two cysteine residues either on the same subunit or on two different subunits. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  disulfideLinkage?: string[];

  /** This subclause refers to the description of each subunit constituting the SubstanceProtein. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceProteinSubunit)
  subunit?: SubstanceProteinSubunit[];

  /** Creates a new SubstanceProtein. @param props - Initial values. */
  constructor(props?: Partial<SubstanceProtein>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the disulfideLinkage array. @returns This instance for chaining. */
  addDisulfideLinkage(item: string): this {
    if (!this.disulfideLinkage) {
      this.disulfideLinkage = [];
    }

    this.disulfideLinkage.push(item);

    return this;
  }

  /** Adds an item to the subunit array. @returns This instance for chaining. */
  addSubunit(item: SubstanceProteinSubunit): this {
    if (!this.subunit) {
      this.subunit = [];
    }

    this.subunit.push(item);

    return this;
  }
}
