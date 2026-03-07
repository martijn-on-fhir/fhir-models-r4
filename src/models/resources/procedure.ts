import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Age } from '../datatypes/age.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Range } from '../datatypes/range.js';
import { Reference } from '../datatypes/reference.js';
import { EventStatus } from '../enums/event-status.js';

/** Backbone element for Procedure representing the people who performed the procedure. */
export class ProcedurePerformer extends BackboneElement {

  /** Distinguishes the type of involvement of the performer in the procedure. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  function?: CodeableConcept;

  /** The practitioner who was involved in the procedure. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  actor?: Reference;

  /** The organization the device or practitioner was acting on behalf of. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  onBehalfOf?: Reference;

  /** Creates a new ProcedurePerformer. @param props - Initial values. */
  constructor(props?: Partial<ProcedurePerformer>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Procedure representing a device that was changed during the procedure. */
export class ProcedureFocalDevice extends BackboneElement {

  /** The kind of change that happened to the device during the procedure. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  action?: CodeableConcept;

  /** The device that was manipulated (changed) during the procedure. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  manipulated?: Reference;

  /** Creates a new ProcedureFocalDevice. @param props - Initial values. */
  constructor(props?: Partial<ProcedureFocalDevice>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 Procedure — An action that is or was performed on or for a patient. */
export class Procedure extends DomainResource {

  readonly resourceType = 'Procedure';

  /** Business identifiers assigned to this procedure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The URL pointing to a FHIR-defined protocol or guideline that this procedure conforms to. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesCanonical?: string[];

  /** The URL pointing to an externally maintained protocol or guideline. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesUri?: string[];

  /** A reference to a resource that contains details of the request for this procedure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** A larger event of which this particular procedure is a component or step. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /** A code specifying the state of the procedure. */
  @IsOptional()
  @IsEnum(EventStatus)
  status?: EventStatus;

  /** Captures the reason for the current state of the procedure. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  statusReason?: CodeableConcept;

  /** A code that classifies the procedure for searching, sorting, and display purposes. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** The specific procedure that is performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The person, animal, or group on which the procedure was performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The Encounter during which this Procedure was created or performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** Estimated or actual date/time the procedure was performed, as a dateTime. */
  @IsOptional()
  @IsString()
  performedDateTime?: string;

  /** Estimated or actual date/time the procedure was performed, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  performedPeriod?: Period;

  /** Estimated or actual date/time the procedure was performed, as a string. */
  @IsOptional()
  @IsString()
  performedString?: string;

  /** Estimated or actual date/time the procedure was performed, as an Age. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Age)
  performedAge?: Age;

  /** Estimated or actual date/time the procedure was performed, as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  performedRange?: Range;

  /** Individual who recorded the record and takes responsibility for its content. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  recorder?: Reference;

  /** Individual who is making the procedure statement. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  asserter?: Reference;

  /** Limited to real participants rather than combos of real and devices. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProcedurePerformer)
  performer?: ProcedurePerformer[];

  /** The location where the procedure actually happened. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /** The coded reason why the procedure was performed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** The justification of why the procedure was performed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** Detailed and structured anatomical location information. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept[];

  /** The outcome of the procedure. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  outcome?: CodeableConcept;

  /** This could be a histology result, pathology report, surgical report, etc. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  report?: Reference[];

  /** Any complications that occurred during the procedure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  complication?: CodeableConcept[];

  /** A reference to a condition resource that is the complication detail. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  complicationDetail?: Reference[];

  /** If the procedure required specific follow up. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  followUp?: CodeableConcept[];

  /** Any other notes and comments about the procedure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** A device that is implanted, removed, or otherwise manipulated as a focal portion of the procedure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProcedureFocalDevice)
  focalDevice?: ProcedureFocalDevice[];

  /** Identifies medications, devices, and any other substance used as part of the procedure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  usedReference?: Reference[];

  /** Identifies coded items that were used as part of the procedure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  usedCode?: CodeableConcept[];

  /** Creates a new Procedure. @param props - Initial values. */
  constructor(props?: Partial<Procedure>) {
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

  /** Adds an item to the instantiatesCanonical array. @returns This instance for chaining. */
  addInstantiatesCanonical(item: string): this {
    if (!this.instantiatesCanonical) {
      this.instantiatesCanonical = [];
    }

    this.instantiatesCanonical.push(item);

    return this;
  }

  /** Adds an item to the instantiatesUri array. @returns This instance for chaining. */
  addInstantiatesUri(item: string): this {
    if (!this.instantiatesUri) {
      this.instantiatesUri = [];
    }

    this.instantiatesUri.push(item);

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

  /** Adds an item to the partOf array. @returns This instance for chaining. */
  addPartOf(item: Reference): this {
    if (!this.partOf) {
      this.partOf = [];
    }

    this.partOf.push(item);

    return this;
  }

  /** Adds an item to the performer array. @returns This instance for chaining. */
  addPerformer(item: ProcedurePerformer): this {
    if (!this.performer) {
      this.performer = [];
    }

    this.performer.push(item);

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

  /** Adds an item to the bodySite array. @returns This instance for chaining. */
  addBodySite(item: CodeableConcept): this {
    if (!this.bodySite) {
      this.bodySite = [];
    }

    this.bodySite.push(item);

    return this;
  }

  /** Adds an item to the report array. @returns This instance for chaining. */
  addReport(item: Reference): this {
    if (!this.report) {
      this.report = [];
    }

    this.report.push(item);

    return this;
  }

  /** Adds an item to the complication array. @returns This instance for chaining. */
  addComplication(item: CodeableConcept): this {
    if (!this.complication) {
      this.complication = [];
    }

    this.complication.push(item);

    return this;
  }

  /** Adds an item to the complicationDetail array. @returns This instance for chaining. */
  addComplicationDetail(item: Reference): this {
    if (!this.complicationDetail) {
      this.complicationDetail = [];
    }

    this.complicationDetail.push(item);

    return this;
  }

  /** Adds an item to the followUp array. @returns This instance for chaining. */
  addFollowUp(item: CodeableConcept): this {
    if (!this.followUp) {
      this.followUp = [];
    }

    this.followUp.push(item);

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

  /** Adds an item to the focalDevice array. @returns This instance for chaining. */
  addFocalDevice(item: ProcedureFocalDevice): this {
    if (!this.focalDevice) {
      this.focalDevice = [];
    }

    this.focalDevice.push(item);

    return this;
  }

  /** Adds an item to the usedReference array. @returns This instance for chaining. */
  addUsedReference(item: Reference): this {
    if (!this.usedReference) {
      this.usedReference = [];
    }

    this.usedReference.push(item);

    return this;
  }

  /** Adds an item to the usedCode array. @returns This instance for chaining. */
  addUsedCode(item: CodeableConcept): this {
    if (!this.usedCode) {
      this.usedCode = [];
    }

    this.usedCode.push(item);

    return this;
  }
}
