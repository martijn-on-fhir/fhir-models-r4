import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Duration } from '../datatypes/duration.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { SimpleQuantity } from '../datatypes/simple-quantity.js';
import { SpecimenStatus } from '../enums/specimen-status.js';

/** Backbone element for Specimen. */
export class SpecimenCollection extends BackboneElement {

  /** Person who collected the specimen. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  collector?: Reference;

  /** Time when specimen was collected, as a dateTime. */
  @IsOptional()
  @IsString()
  collectedDateTime?: string;

  /** Time when specimen was collected, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  collectedPeriod?: Period;

  /** The span of time over which the collection of a specimen took place. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  duration?: Duration;

  /** The quantity of specimen collected. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  quantity?: SimpleQuantity;

  /** A coded value specifying the technique used to collect the specimen. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /** Anatomical location from which the specimen was collected. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept;

  /** Whether or not the collector's fasting status, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  fastingStatusCodeableConcept?: CodeableConcept;

  /** Whether or not the collector's fasting status, as a Duration. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  fastingStatusDuration?: Duration;

  /** Creates a new SpecimenCollection. @param props - Initial values. */
  constructor(props?: Partial<SpecimenCollection>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Specimen. */
export class SpecimenProcessing extends BackboneElement {

  /** Textual description of the processing procedure. */
  @IsOptional()
  @IsString()
  description?: string;

  /** A coded value specifying the procedure used to process the specimen. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  procedure?: CodeableConcept;

  /** Material used in the processing step. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  additive?: Reference[];

  /** A record of the time or period when the specimen processing occurred, as a dateTime. */
  @IsOptional()
  @IsString()
  timeDateTime?: string;

  /** A record of the time or period when the specimen processing occurred, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  timePeriod?: Period;

  /** Creates a new SpecimenProcessing. @param props - Initial values. */
  constructor(props?: Partial<SpecimenProcessing>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the additive array. @returns This instance for chaining. */
  addAdditive(item: Reference): this {
    if (!this.additive) {
      this.additive = [];
    }

    this.additive.push(item);

    return this;
  }
}

/** Backbone element for Specimen. */
export class SpecimenContainer extends BackboneElement {

  /** Identifiers associated with the container. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Textual description of the container. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The type of container associated with the specimen. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The capacity (volume or other measure) the container may contain. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  capacity?: SimpleQuantity;

  /** The quantity of specimen in the container. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  specimenQuantity?: SimpleQuantity;

  /** Introduced substance to preserve, maintain, or enhance the specimen, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  additiveCodeableConcept?: CodeableConcept;

  /** Introduced substance to preserve, maintain, or enhance the specimen, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  additiveReference?: Reference;

  /** Creates a new SpecimenContainer. @param props - Initial values. */
  constructor(props?: Partial<SpecimenContainer>) {
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
}

/** FHIR R4 Specimen — a sample to be used for analysis. */
export class Specimen extends DomainResource {

  readonly resourceType = 'Specimen';

  /** Identifiers associated with this specimen. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The identifier assigned by the lab when accessioning specimen(s). */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  accessionIdentifier?: Identifier;

  /** The availability of the specimen. */
  @IsOptional()
  @IsEnum(SpecimenStatus)
  status?: SpecimenStatus;

  /** The kind of material that forms the specimen. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Where the specimen came from, such as the patient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** Time when specimen was received for processing or testing. */
  @IsOptional()
  @IsString()
  receivedTime?: string;

  /** Reference to the parent specimen(s) from which this specimen was derived. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  parent?: Reference[];

  /** Details concerning a service request that required a specimen to be collected. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  request?: Reference[];

  /** Details concerning the specimen collection. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SpecimenCollection)
  collection?: SpecimenCollection;

  /** Details concerning processing and processing steps for the specimen. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpecimenProcessing)
  processing?: SpecimenProcessing[];

  /** The container holding the specimen. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpecimenContainer)
  container?: SpecimenContainer[];

  /** A mode or state of being that describes the nature of the specimen. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  condition?: CodeableConcept[];

  /** To communicate any details or issues about the specimen. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Creates a new Specimen. @param props - Initial values. */
  constructor(props?: Partial<Specimen>) {
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

  /** Adds an item to the parent array. @returns This instance for chaining. */
  addParent(item: Reference): this {
    if (!this.parent) {
      this.parent = [];
    }

    this.parent.push(item);

    return this;
  }

  /** Adds an item to the request array. @returns This instance for chaining. */
  addRequest(item: Reference): this {
    if (!this.request) {
      this.request = [];
    }

    this.request.push(item);

    return this;
  }

  /** Adds an item to the processing array. @returns This instance for chaining. */
  addProcessing(item: SpecimenProcessing): this {
    if (!this.processing) {
      this.processing = [];
    }

    this.processing.push(item);

    return this;
  }

  /** Adds an item to the container array. @returns This instance for chaining. */
  addContainer(item: SpecimenContainer): this {
    if (!this.container) {
      this.container = [];
    }

    this.container.push(item);

    return this;
  }

  /** Adds an item to the condition array. @returns This instance for chaining. */
  addCondition(item: CodeableConcept): this {
    if (!this.condition) {
      this.condition = [];
    }

    this.condition.push(item);

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
}
