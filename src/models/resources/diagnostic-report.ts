import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { DiagnosticReportStatus } from '../enums/diagnostic-report-status.js';

/** Backbone element for DiagnosticReport. */
export class DiagnosticReportMedia extends BackboneElement {

  /** A comment about the image. */
  @IsOptional()
  @IsString()
  comment?: string;

  /** Reference to the image source. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  link?: Reference;

  /** Creates a new DiagnosticReportMedia. @param props - Initial values. */
  constructor(props?: Partial<DiagnosticReportMedia>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 DiagnosticReport — the findings and interpretation of diagnostic tests. */
export class DiagnosticReport extends DomainResource {

  /** Resource type constant. */
  readonly resourceType = 'DiagnosticReport';

  /** Business identifiers for this report. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Details concerning a service requested. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** The status of the diagnostic report. */
  @IsOptional()
  @IsEnum(DiagnosticReportStatus)
  status?: DiagnosticReportStatus;

  /** A code that classifies the clinical discipline, department or diagnostic service. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** A code or name that describes this diagnostic report. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The subject of the report, usually the patient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The healthcare event which this report is about. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** The clinically relevant time for this report, as a dateTime. */
  @IsOptional()
  @IsString()
  effectiveDateTime?: string;

  /** The clinically relevant time for this report, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /** The date and time that this version of the report was made available. */
  @IsOptional()
  @IsString()
  issued?: string;

  /** The diagnostic service that is responsible for issuing the report. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  performer?: Reference[];

  /** The practitioner or organization that is responsible for the report's conclusions. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  resultsInterpreter?: Reference[];

  /** Details about the specimens on which this diagnostic report is based. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  specimen?: Reference[];

  /** Observations that are part of this diagnostic report. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  result?: Reference[];

  /** One or more links to full details of any imaging performed during the diagnostic investigation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  imagingStudy?: Reference[];

  /** A list of key images associated with this report. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DiagnosticReportMedia)
  media?: DiagnosticReportMedia[];

  /** Concise and clinically contextualized summary conclusion of the diagnostic report. */
  @IsOptional()
  @IsString()
  conclusion?: string;

  /** One or more codes that represent the summary conclusion of the diagnostic report. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  conclusionCode?: CodeableConcept[];

  /** Rich text representation of the entire result as issued by the diagnostic service. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Attachment)
  presentedForm?: Attachment[];

  /** Creates a new DiagnosticReport. @param props - Initial values. */
  constructor(props?: Partial<DiagnosticReport>) {
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

  /** Adds an item to the basedOn array. @returns This instance for chaining. */
  addBasedOn(item: Reference): this {
    if (!this.basedOn) {
      this.basedOn = [];
    }

    this.basedOn.push(item);

    return this;
  }

  /** Adds an item to the category array. @returns This instance for chaining. */
  addCategory(item: CodeableConcept): this {
    if (!this.category) {
      this.category = [];
    }

    this.category.push(item);

    return this;
  }

  /** Adds an item to the performer array. @returns This instance for chaining. */
  addPerformer(item: Reference): this {
    if (!this.performer) {
      this.performer = [];
    }

    this.performer.push(item);

    return this;
  }

  /** Adds an item to the resultsInterpreter array. @returns This instance for chaining. */
  addResultsInterpreter(item: Reference): this {
    if (!this.resultsInterpreter) {
      this.resultsInterpreter = [];
    }

    this.resultsInterpreter.push(item);

    return this;
  }

  /** Adds an item to the specimen array. @returns This instance for chaining. */
  addSpecimen(item: Reference): this {
    if (!this.specimen) {
      this.specimen = [];
    }

    this.specimen.push(item);

    return this;
  }

  /** Adds an item to the result array. @returns This instance for chaining. */
  addResult(item: Reference): this {
    if (!this.result) {
      this.result = [];
    }

    this.result.push(item);

    return this;
  }

  /** Adds an item to the imagingStudy array. @returns This instance for chaining. */
  addImagingStudy(item: Reference): this {
    if (!this.imagingStudy) {
      this.imagingStudy = [];
    }

    this.imagingStudy.push(item);

    return this;
  }

  /** Adds an item to the media array. @returns This instance for chaining. */
  addMedia(item: DiagnosticReportMedia): this {
    if (!this.media) {
      this.media = [];
    }

    this.media.push(item);

    return this;
  }

  /** Adds an item to the conclusionCode array. @returns This instance for chaining. */
  addConclusionCode(item: CodeableConcept): this {
    if (!this.conclusionCode) {
      this.conclusionCode = [];
    }

    this.conclusionCode.push(item);

    return this;
  }

  /** Adds an item to the presentedForm array. @returns This instance for chaining. */
  addPresentedForm(item: Attachment): this {
    if (!this.presentedForm) {
      this.presentedForm = [];
    }

    this.presentedForm.push(item);

    return this;
  }
}
