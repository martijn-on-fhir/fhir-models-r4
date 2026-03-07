import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { IssueSeverity } from '../enums/issue-severity.js';
import { IssueType } from '../enums/issue-type.js';

/** Backbone element for OperationOutcome. */
export class OperationOutcomeIssue extends BackboneElement {

  /** Indicates whether the issue indicates a variation from successful processing. */
  @IsOptional()
  @IsEnum(IssueSeverity)
  severity?: IssueSeverity;

  /** Describes the type of the issue. */
  @IsOptional()
  @IsEnum(IssueType)
  code?: IssueType;

  /** Additional details about the error or warning. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  details?: CodeableConcept;

  /** Additional diagnostic information about the issue. */
  @IsOptional()
  @IsString()
  diagnostics?: string;

  /** This element is deprecated; use expression instead, a simple XPath limited to element names. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  location?: string[];

  /** A FHIRPath expression that identifies the element in the resource that caused the issue. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  expression?: string[];

  /** Creates a new OperationOutcomeIssue. @param props - Initial values. */
  constructor(props?: Partial<OperationOutcomeIssue>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the location array. @returns This instance for chaining. */
  addLocation(item: string): this {
    if (!this.location) {
      this.location = [];
    }

    this.location.push(item);

    return this;
  }

  /** Adds an item to the expression array. @returns This instance for chaining. */
  addExpression(item: string): this {
    if (!this.expression) {
      this.expression = [];
    }

    this.expression.push(item);

    return this;
  }
}

/** FHIR R4 OperationOutcome — a collection of error, warning, or information messages from a system action. */
export class OperationOutcome extends DomainResource {

  readonly resourceType = 'OperationOutcome';

  /** An error, warning, or information message that results from a system action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OperationOutcomeIssue)
  issue?: OperationOutcomeIssue[];

  /** Creates a new OperationOutcome. @param props - Initial values. */
  constructor(props?: Partial<OperationOutcome>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the issue array. @returns This instance for chaining. */
  addIssue(item: OperationOutcomeIssue): this {
    if (!this.issue) {
      this.issue = [];
    }

    this.issue.push(item);

    return this;
  }
}
