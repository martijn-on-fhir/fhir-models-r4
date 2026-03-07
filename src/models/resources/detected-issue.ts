import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { DetectedIssueSeverity } from '../enums/detected-issue-severity.js';
import { ObservationStatus } from '../enums/observation-status.js';

/** Backbone element for DetectedIssue. */
export class DetectedIssueEvidence extends BackboneElement {

  /** Manifestation or symptom codes. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  /** Supporting information for the evidence. */
  detail?: Reference[];

  /** Creates a new DetectedIssueEvidence. @param props - Initial values. */
  constructor(props?: Partial<DetectedIssueEvidence>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the code array. @returns This instance for chaining. */
  addCode(item: CodeableConcept): this {
    if (!this.code) {
      this.code = [];
    }

    this.code.push(item);

    return this;
  }

  /** Adds an item to the detail array. @returns This instance for chaining. */
  addDetail(item: Reference): this {
    if (!this.detail) {
      this.detail = [];
    }

    this.detail.push(item);

    return this;
  }
}

/** Backbone element for DetectedIssue. */
export class DetectedIssueMitigation extends BackboneElement {

  /** Action taken to mitigate the issue. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  action?: CodeableConcept;

  /** Date the mitigation action was taken. */
  @IsOptional()
  @IsString()
  date?: string;

  /** Who performed the mitigation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /** Creates a new DetectedIssueMitigation. @param props - Initial values. */
  constructor(props?: Partial<DetectedIssueMitigation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 DetectedIssue — a clinical issue identified during a patient's care. */
export class DetectedIssue extends DomainResource {

  /** Resource type constant. */
  readonly resourceType = 'DetectedIssue';

  /** Business identifiers assigned to this detected issue. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The status of the detected issue. */
  @IsOptional()
  @IsEnum(ObservationStatus)
  status?: ObservationStatus;

  /** Identifies the general type of issue identified. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** Indicates the degree of importance associated with the identified issue. */
  @IsOptional()
  @IsEnum(DetectedIssueSeverity)
  severity?: DetectedIssueSeverity;

  /** The patient whose record the detected issue is associated with. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /** The date or period when the detected issue was identified, as a dateTime. */
  @IsOptional()
  @IsString()
  identifiedDateTime?: string;

  /** The date or period when the detected issue was identified, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  identifiedPeriod?: Period;

  /** Individual or device responsible for the issue being raised. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /** Indicates the resource representing the current activity or proposed activity that is potentially problematic. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  implicated?: Reference[];

  /** Supporting evidence or manifestations that provide the basis for the detected issue. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DetectedIssueEvidence)
  evidence?: DetectedIssueEvidence[];

  /** A textual explanation of the detected issue. */
  @IsOptional()
  @IsString()
  detail?: string;

  /** The literature, knowledge-base or similar reference that describes the propensity for the detected issue. */
  @IsOptional()
  @IsString()
  reference?: string;

  /** Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DetectedIssueMitigation)
  mitigation?: DetectedIssueMitigation[];

  /** Creates a new DetectedIssue. @param props - Initial values. */
  constructor(props?: Partial<DetectedIssue>) {
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

  /** Adds an item to the implicated array. @returns This instance for chaining. */
  addImplicated(item: Reference): this {
    if (!this.implicated) {
      this.implicated = [];
    }

    this.implicated.push(item);

    return this;
  }

  /** Adds an item to the evidence array. @returns This instance for chaining. */
  addEvidence(item: DetectedIssueEvidence): this {
    if (!this.evidence) {
      this.evidence = [];
    }

    this.evidence.push(item);

    return this;
  }

  /** Adds an item to the mitigation array. @returns This instance for chaining. */
  addMitigation(item: DetectedIssueMitigation): this {
    if (!this.mitigation) {
      this.mitigation = [];
    }

    this.mitigation.push(item);

    return this;
  }
}
