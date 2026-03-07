import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { SubstanceAmount } from '../datatypes/substance-amount.js';

/** Backbone element for SubstancePolymer. */
export class SubstancePolymerMonomerSetStartingMaterial extends BackboneElement {

  /** The type of substance for this starting material. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  material?: CodeableConcept;

  /** The type of the starting material. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Whether the starting material is defining for the substance. */
  @IsOptional()
  @IsBoolean()
  isDefining?: boolean;

  /** A percentage or amount of the starting material. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceAmount)
  amount?: SubstanceAmount;

  /** Creates a new SubstancePolymerMonomerSetStartingMaterial. @param props - Initial values. */
  constructor(props?: Partial<SubstancePolymerMonomerSetStartingMaterial>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for SubstancePolymer. */
export class SubstancePolymerMonomerSet extends BackboneElement {

  /** Captures the type of ratio of the substiuent moieties in the polymer. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  ratioType?: CodeableConcept;

  /** The starting materials used in the synthesis of the polymer. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstancePolymerMonomerSetStartingMaterial)
  startingMaterial?: SubstancePolymerMonomerSetStartingMaterial[];

  /** Creates a new SubstancePolymerMonomerSet. @param props - Initial values. */
  constructor(props?: Partial<SubstancePolymerMonomerSet>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the startingMaterial array. @returns This instance for chaining. */
  addStartingMaterial(item: SubstancePolymerMonomerSetStartingMaterial): this {
    if (!this.startingMaterial) {
      this.startingMaterial = [];
    }

    this.startingMaterial.push(item);

    return this;
  }
}

/** Backbone element for SubstancePolymer. */
export class SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends BackboneElement {

  /** The degree of polymerisation type. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  degree?: CodeableConcept;

  /** An amount of substance used to describe the degree of polymerisation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceAmount)
  amount?: SubstanceAmount;

  /** Creates a new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation. @param props - Initial values. */
  constructor(props?: Partial<SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for SubstancePolymer. */
export class SubstancePolymerRepeatRepeatUnitStructuralRepresentation extends BackboneElement {

  /** The type of structural representation. */
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

  /** Creates a new SubstancePolymerRepeatRepeatUnitStructuralRepresentation. @param props - Initial values. */
  constructor(props?: Partial<SubstancePolymerRepeatRepeatUnitStructuralRepresentation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for SubstancePolymer. */
export class SubstancePolymerRepeatRepeatUnit extends BackboneElement {

  /** The orientation of the polymerisation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  orientationOfPolymerisation?: CodeableConcept;

  /** The repeating unit of the polymer. */
  @IsOptional()
  @IsString()
  repeatUnit?: string;

  /** Number of repeats of this unit. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceAmount)
  amount?: SubstanceAmount;

  /** Applies to homopolymer and block co-polymers to define degree of polymerisation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation)
  degreeOfPolymerisation?: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[];

  /** A graphical structure for this SRU. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstancePolymerRepeatRepeatUnitStructuralRepresentation)
  structuralRepresentation?: SubstancePolymerRepeatRepeatUnitStructuralRepresentation[];

  /** Creates a new SubstancePolymerRepeatRepeatUnit. @param props - Initial values. */
  constructor(props?: Partial<SubstancePolymerRepeatRepeatUnit>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the degreeOfPolymerisation array. @returns This instance for chaining. */
  addDegreeOfPolymerisation(item: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation): this {
    if (!this.degreeOfPolymerisation) {
      this.degreeOfPolymerisation = [];
    }

    this.degreeOfPolymerisation.push(item);

    return this;
  }

  /** Adds an item to the structuralRepresentation array. @returns This instance for chaining. */
  addStructuralRepresentation(item: SubstancePolymerRepeatRepeatUnitStructuralRepresentation): this {
    if (!this.structuralRepresentation) {
      this.structuralRepresentation = [];
    }

    this.structuralRepresentation.push(item);

    return this;
  }
}

/** Backbone element for SubstancePolymer. */
export class SubstancePolymerRepeat extends BackboneElement {

  /** Number of units in the repeat. */
  @IsOptional()
  @IsString()
  numberOfUnits?: number;

  /** The average molecular formula for the polymer. */
  @IsOptional()
  @IsString()
  averageMolecularFormula?: string;

  /** How the quantitative amount of Structural Repeat Units is captured. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  repeatUnitAmountType?: CodeableConcept;

  /** An SRU - Structural Repeat Unit. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstancePolymerRepeatRepeatUnit)
  repeatUnit?: SubstancePolymerRepeatRepeatUnit[];

  /** Creates a new SubstancePolymerRepeat. @param props - Initial values. */
  constructor(props?: Partial<SubstancePolymerRepeat>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the repeatUnit array. @returns This instance for chaining. */
  addRepeatUnit(item: SubstancePolymerRepeatRepeatUnit): this {
    if (!this.repeatUnit) {
      this.repeatUnit = [];
    }

    this.repeatUnit.push(item);

    return this;
  }
}

/** FHIR R4 SubstancePolymer — todo. */
export class SubstancePolymer extends DomainResource {

  readonly resourceType = 'SubstancePolymer';

  /** Overall type of the polymer. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  class?: CodeableConcept;

  /** Polymer geometry, e.g., comblike or linear. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  geometry?: CodeableConcept;

  /** Descibes the copolymer sequence type (for example comblike or linear). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  copolymerConnectivity?: CodeableConcept[];

  /** A general comment or description of any modifications to the polymer. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  modification?: string[];

  /** Describes monomer or monomer combination that constitutes the polymer. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstancePolymerMonomerSet)
  monomerSet?: SubstancePolymerMonomerSet[];

  /** Specifies and quantifies the repeated units and their configuration. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstancePolymerRepeat)
  repeat?: SubstancePolymerRepeat[];

  /** Creates a new SubstancePolymer. @param props - Initial values. */
  constructor(props?: Partial<SubstancePolymer>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the copolymerConnectivity array. @returns This instance for chaining. */
  addCopolymerConnectivity(item: CodeableConcept): this {
    if (!this.copolymerConnectivity) {
      this.copolymerConnectivity = [];
    }

    this.copolymerConnectivity.push(item);

    return this;
  }

  /** Adds an item to the modification array. @returns This instance for chaining. */
  addModification(item: string): this {
    if (!this.modification) {
      this.modification = [];
    }

    this.modification.push(item);

    return this;
  }

  /** Adds an item to the monomerSet array. @returns This instance for chaining. */
  addMonomerSet(item: SubstancePolymerMonomerSet): this {
    if (!this.monomerSet) {
      this.monomerSet = [];
    }

    this.monomerSet.push(item);

    return this;
  }

  /** Adds an item to the repeat array. @returns This instance for chaining. */
  addRepeat(item: SubstancePolymerRepeat): this {
    if (!this.repeat) {
      this.repeat = [];
    }

    this.repeat.push(item);

    return this;
  }
}
