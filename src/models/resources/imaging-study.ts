import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';
import { ImagingStudyStatus } from '../enums/imaging-study-status.js';

/** Backbone element for ImagingStudy. */
export class ImagingStudySeriesPerformer extends BackboneElement {

  /** Distinguishes the type of involvement of the performer in the series. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  function?: CodeableConcept;

  /** Indicates who or what performed the series. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  actor?: Reference;

  /** Creates a new ImagingStudySeriesPerformer. @param props - Initial values. */
  constructor(props?: Partial<ImagingStudySeriesPerformer>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ImagingStudy. */
export class ImagingStudySeriesInstance extends BackboneElement {

  /** The DICOM SOP Instance UID for this image or other DICOM content. */
  @IsOptional()
  @IsString()
  uid?: string;

  /** DICOM instance type. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  sopClass?: Coding;

  /** The number of instance in the series. */
  @IsOptional()
  @IsNumber()
  number?: number;

  /** The description of the instance. */
  @IsOptional()
  @IsString()
  title?: string;

  /** Creates a new ImagingStudySeriesInstance. @param props - Initial values. */
  constructor(props?: Partial<ImagingStudySeriesInstance>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ImagingStudy. */
export class ImagingStudySeries extends BackboneElement {

  /** The DICOM Series Instance UID for the series. */
  @IsOptional()
  @IsString()
  uid?: string;

  /** The numeric identifier of this series in the study. */
  @IsOptional()
  @IsNumber()
  number?: number;

  /** The modality of this series sequence. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  modality?: Coding;

  /** A description of the series. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Number of SOP Instances in the Study. */
  @IsOptional()
  @IsNumber()
  numberOfInstances?: number;

  /** The network service providing access for the series. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  endpoint?: Reference[];

  /** The anatomic structures examined. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  bodySite?: Coding;

  /** The laterality of the body part examined. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  laterality?: Coding;

  /** The specimen imaged, e.g., for whole slide imaging of a biopsy. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  specimen?: Reference[];

  /** The date and time the series was started. */
  @IsOptional()
  @IsString()
  started?: string;

  /** Indicates who or what performed the series and what they did. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImagingStudySeriesPerformer)
  performer?: ImagingStudySeriesPerformer[];

  /** A single SOP instance within the series. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImagingStudySeriesInstance)
  instance?: ImagingStudySeriesInstance[];

  /** Creates a new ImagingStudySeries. @param props - Initial values. */
  constructor(props?: Partial<ImagingStudySeries>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the endpoint array. @returns This instance for chaining. */
  addEndpoint(item: Reference): this {
    if (!this.endpoint) {
      this.endpoint = [];
    }

    this.endpoint.push(item);

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

  /** Adds an item to the performer array. @returns This instance for chaining. */
  addPerformer(item: ImagingStudySeriesPerformer): this {
    if (!this.performer) {
      this.performer = [];
    }

    this.performer.push(item);

    return this;
  }

  /** Adds an item to the instance array. @returns This instance for chaining. */
  addInstance(item: ImagingStudySeriesInstance): this {
    if (!this.instance) {
      this.instance = [];
    }

    this.instance.push(item);

    return this;
  }
}

/** FHIR R4 ImagingStudy — representation of the content produced in a DICOM imaging study. */
export class ImagingStudy extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'ImagingStudy';

  /** Identifiers for the imaging study. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The current state of the ImagingStudy. */
  @IsOptional()
  @IsEnum(ImagingStudyStatus)
  status?: ImagingStudyStatus;

  /** A list of all the series-level modalities used in the study. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  modality?: Coding[];

  /** The subject, typically a patient, of the imaging study. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The healthcare event during which this imaging study was performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** Date and time the study started. */
  @IsOptional()
  @IsString()
  started?: string;

  /** A list of the diagnostic requests that resulted in this imaging study being performed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** The requesting/referring physician. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  referrer?: Reference;

  /** Who read the study and interpreted the images or other content. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  interpreter?: Reference[];

  /** The network service providing access (e.g., query, view, or retrieval) for the study. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  endpoint?: Reference[];

  /** Number of Series in the Study. */
  @IsOptional()
  @IsNumber()
  numberOfSeries?: number;

  /** Number of SOP Instances in Study. */
  @IsOptional()
  @IsNumber()
  numberOfInstances?: number;

  /** The procedure which this ImagingStudy was part of. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  procedureReference?: Reference;

  /** The code for the performed procedure type. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  procedureCode?: CodeableConcept[];

  /** The principal physical location where the ImagingStudy was performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /** Description of clinical condition indicating why the ImagingStudy was requested. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Indicates another resource whose existence justifies this Study. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** Per the recommended DICOM mapping, this element is derived from the Study Description attribute. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** The Imaging Manager description of the study. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Each study has one or more series of images or other content. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImagingStudySeries)
  series?: ImagingStudySeries[];

  /** Creates a new ImagingStudy. @param props - Initial values. */
  constructor(props?: Partial<ImagingStudy>) {
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

  /** Adds an item to the modality array. @returns This instance for chaining. */
  addModality(item: Coding): this {
    if (!this.modality) {
      this.modality = [];
    }

    this.modality.push(item);

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

  /** Adds an item to the interpreter array. @returns This instance for chaining. */
  addInterpreter(item: Reference): this {
    if (!this.interpreter) {
      this.interpreter = [];
    }

    this.interpreter.push(item);

    return this;
  }

  /** Adds an item to the endpoint array. @returns This instance for chaining. */
  addEndpoint(item: Reference): this {
    if (!this.endpoint) {
      this.endpoint = [];
    }

    this.endpoint.push(item);

    return this;
  }

  /** Adds an item to the procedureCode array. @returns This instance for chaining. */
  addProcedureCode(item: CodeableConcept): this {
    if (!this.procedureCode) {
      this.procedureCode = [];
    }

    this.procedureCode.push(item);

    return this;
  }

  /** Adds an item to the reasonCode array. @returns This instance for chaining. */
  addReasonCode(item: CodeableConcept): this {
    if (!this.reasonCode) {
      this.reasonCode = [];
    }

    this.reasonCode.push(item);

    return this;
  }

  /** Adds an item to the reasonReference array. @returns This instance for chaining. */
  addReasonReference(item: Reference): this {
    if (!this.reasonReference) {
      this.reasonReference = [];
    }

    this.reasonReference.push(item);

    return this;
  }

  /** Adds an item to the note array. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }

  /** Adds an item to the series array. @returns This instance for chaining. */
  addSeries(item: ImagingStudySeries): this {
    if (!this.series) {
      this.series = [];
    }

    this.series.push(item);

    return this;
  }
}
