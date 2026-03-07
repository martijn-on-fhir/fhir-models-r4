import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { ClinicalImpressionStatus } from '../enums/clinical-impression-status.js';

/** Backbone element for {@link ClinicalImpression.investigation}. */
export class ClinicalImpressionInvestigation extends BackboneElement {

  /** A name/code for the group ("set") of investigations. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** A record of a specific investigation that was undertaken. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  item?: Reference[];

  /** Creates a new {@link ClinicalImpressionInvestigation} instance. @param props - Initial property values. */
  constructor(props?: Partial<ClinicalImpressionInvestigation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link Reference} to the {@link ClinicalImpressionInvestigation.item item} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addItem(item: Reference): this {
    if (!this.item) {
      this.item = [];
    }

    this.item.push(item);

    return this;
  }
}

/** Backbone element for {@link ClinicalImpression.finding}. */
export class ClinicalImpressionFinding extends BackboneElement {

  /** Specific text or code for the finding or diagnosis, which may include ruled-out or resolved conditions. Expressed as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  itemCodeableConcept?: CodeableConcept;

  /** Specific reference for the finding or diagnosis, which may include ruled-out or resolved conditions. Expressed as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  itemReference?: Reference;

  /** Which investigations support the finding or diagnosis. */
  @IsOptional()
  @IsString()
  basis?: string;

  /** Creates a new {@link ClinicalImpressionFinding} instance. @param props - Initial property values. */
  constructor(props?: Partial<ClinicalImpressionFinding>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 ClinicalImpression resource — a record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. */
export class ClinicalImpression extends DomainResource {

  /** The type of resource this is. Always 'ClinicalImpression'. */
  readonly resourceType = 'ClinicalImpression';

  /** Business identifiers assigned to this clinical impression by the performer or other systems. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Identifies the workflow status of the assessment. Uses the ClinicalImpressionStatus value set. */
  @IsOptional()
  @IsEnum(ClinicalImpressionStatus)
  status?: ClinicalImpressionStatus;

  /** Captures the reason for the current state of the clinical impression. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  statusReason?: CodeableConcept;

  /** Categorizes the type of clinical assessment performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** A summary of the context and/or cause of the assessment in a human-readable form. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The patient or group of individuals assessed as part of this clinical impression. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The Encounter during which this ClinicalImpression was created or to which the creation of this record is tightly associated. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** The point in time or period over which the subject was assessed. Expressed as a dateTime. */
  @IsOptional()
  @IsString()
  effectiveDateTime?: string;

  /** The point in time or period over which the subject was assessed. Expressed as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /** Indicates when the documentation of the assessment was complete. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The clinician performing the assessment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  assessor?: Reference;

  /** A reference to the last assessment that was conducted on this patient, which can be used to compare changes over time. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  previous?: Reference;

  /** A list of the relevant problems/conditions for a patient. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  problem?: Reference[];

  /** One or more sets of investigations (tests, procedures, etc.) that are part of the assessment. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClinicalImpressionInvestigation)
  investigation?: ClinicalImpressionInvestigation[];

  /** Reference to a specific published clinical protocol that was followed during this assessment. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  protocol?: string[];

  /** A text summary of the investigations and the diagnosis. */
  @IsOptional()
  @IsString()
  summary?: string;

  /** Specific findings or diagnoses that were considered likely or relevant to ongoing treatment. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClinicalImpressionFinding)
  finding?: ClinicalImpressionFinding[];

  /** Estimate of likely outcome. Expressed as CodeableConcepts. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  prognosisCodeableConcept?: CodeableConcept[];

  /** RiskAssessment expressing the estimate of likely outcome. Expressed as References. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  prognosisReference?: Reference[];

  /** Information supporting the clinical impression. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supportingInfo?: Reference[];

  /** Commentary about the impression, typically recorded after the impression itself was made. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Creates a new {@link ClinicalImpression} instance. @param props - Initial property values. */
  constructor(props?: Partial<ClinicalImpression>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link ClinicalImpression.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link ClinicalImpression.problem problem} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addProblem(item: Reference): this {
    if (!this.problem) {
      this.problem = [];
    }

    this.problem.push(item);

    return this;
  }

  /** Adds a {@link ClinicalImpressionInvestigation} to the {@link ClinicalImpression.investigation investigation} array. @param item - The {@link ClinicalImpressionInvestigation} to add. @returns This instance for chaining. */
  addInvestigation(item: ClinicalImpressionInvestigation): this {
    if (!this.investigation) {
      this.investigation = [];
    }

    this.investigation.push(item);

    return this;
  }

  /** Adds a URI string to the {@link ClinicalImpression.protocol protocol} array. @param item - The URI string to add. @returns This instance for chaining. */
  addProtocol(item: string): this {
    if (!this.protocol) {
      this.protocol = [];
    }

    this.protocol.push(item);

    return this;
  }

  /** Adds a {@link ClinicalImpressionFinding} to the {@link ClinicalImpression.finding finding} array. @param item - The {@link ClinicalImpressionFinding} to add. @returns This instance for chaining. */
  addFinding(item: ClinicalImpressionFinding): this {
    if (!this.finding) {
      this.finding = [];
    }

    this.finding.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link ClinicalImpression.prognosisCodeableConcept prognosisCodeableConcept} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addPrognosisCodeableConcept(item: CodeableConcept): this {
    if (!this.prognosisCodeableConcept) {
      this.prognosisCodeableConcept = [];
    }

    this.prognosisCodeableConcept.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link ClinicalImpression.prognosisReference prognosisReference} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addPrognosisReference(item: Reference): this {
    if (!this.prognosisReference) {
      this.prognosisReference = [];
    }

    this.prognosisReference.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link ClinicalImpression.supportingInfo supportingInfo} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addSupportingInfo(item: Reference): this {
    if (!this.supportingInfo) {
      this.supportingInfo = [];
    }

    this.supportingInfo.push(item);

    return this;
  }

  /** Adds an {@link Annotation} to the {@link ClinicalImpression.note note} array. @param item - The {@link Annotation} to add. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }
}
