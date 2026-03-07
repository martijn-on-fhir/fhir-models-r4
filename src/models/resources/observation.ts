import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsNumber, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Range } from '../datatypes/range.js';
import { Ratio } from '../datatypes/ratio.js';
import { Reference } from '../datatypes/reference.js';
import { ObservationStatus } from '../enums/observation-status.js';

/** Backbone element for Observation. */
export class ObservationReferenceRange extends BackboneElement {

  /** The value of the low bound of the reference range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  low?: Quantity;

  /** The value of the high bound of the reference range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  high?: Quantity;

  /** Codes to indicate the what part of the targeted reference population it applies to. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Codes to indicate the target population this reference range applies to. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  appliesTo?: CodeableConcept[];

  /** The age at which this reference range is applicable. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  age?: Range;

  /** Text based reference range in an observation. */
  @IsOptional()
  @IsString()
  text?: string;

  /** Creates a new ObservationReferenceRange. @param props - Initial values. */
  constructor(props?: Partial<ObservationReferenceRange>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the appliesTo array. @returns This instance for chaining. */
  addAppliesTo(item: CodeableConcept): this {
    if (!this.appliesTo) {
      this.appliesTo = [];
    }

    this.appliesTo.push(item);

    return this;
  }
}

/** Backbone element for Observation. */
export class ObservationComponent extends BackboneElement {

  /** Describes what was observed, sometimes called the observation name. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The component result value as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /** The component result value as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  valueCodeableConcept?: CodeableConcept;

  /** The component result value as a string. */
  @IsOptional()
  @IsString()
  valueString?: string;

  /** The component result value as a boolean. */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  /** The component result value as an integer. */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /** The component result value as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  valueRange?: Range;

  /** The component result value as a Ratio. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  valueRatio?: Ratio;

  /** The component result value as a dateTime. */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  /** The component result value as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  valuePeriod?: Period;

  /** The component result value as a time. */
  @IsOptional()
  @IsString()
  valueTime?: string;

  /** Provides a reason why the expected value in the component is missing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  dataAbsentReason?: CodeableConcept;

  /** A categorical assessment of an observation value. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  interpretation?: CodeableConcept[];

  /** Guidance on how to interpret the component value. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationReferenceRange)
  referenceRange?: ObservationReferenceRange[];

  /** Creates a new ObservationComponent. @param props - Initial values. */
  constructor(props?: Partial<ObservationComponent>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the interpretation array. @returns This instance for chaining. */
  addInterpretation(item: CodeableConcept): this {
    if (!this.interpretation) {
      this.interpretation = [];
    }

    this.interpretation.push(item);

    return this;
  }

  /** Adds an item to the referenceRange array. @returns This instance for chaining. */
  addReferenceRange(item: ObservationReferenceRange): this {
    if (!this.referenceRange) {
      this.referenceRange = [];
    }

    this.referenceRange.push(item);

    return this;
  }
}

/** FHIR R4 Observation — measurements and simple assertions made about a patient or other subject. */
export class Observation extends DomainResource {

  readonly resourceType = 'Observation';

  /** A unique identifier assigned to this observation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** A plan, proposal, or order that is fulfilled by this observation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** A larger event of which this particular observation is a component or step. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /** The status of the result value. */
  @IsOptional()
  @IsEnum(ObservationStatus)
  status?: ObservationStatus;

  /** A code that classifies the general type of observation being made. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** Describes what was observed, sometimes called the observation name. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The patient or group the observation is about. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The actual focus of an observation when it is not the patient of record. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  focus?: Reference[];

  /** The healthcare event during which this observation is made. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** The time or time-period the observed value is asserted as being true (as a dateTime). */
  @IsOptional()
  @IsString()
  effectiveDateTime?: string;

  /** The time or time-period the observed value is asserted as being true (as a Period). */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /** The time or time-period the observed value is asserted as being true (as an instant). */
  @IsOptional()
  @IsString()
  effectiveInstant?: string;

  /** The date and time this version of the observation was made available. */
  @IsOptional()
  @IsString()
  issued?: string;

  /** Who is responsible for the observation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  performer?: Reference[];

  /** The result value as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /** The result value as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  valueCodeableConcept?: CodeableConcept;

  /** The result value as a string. */
  @IsOptional()
  @IsString()
  valueString?: string;

  /** The result value as a boolean. */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  /** The result value as an integer. */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /** The result value as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  valueRange?: Range;

  /** The result value as a Ratio. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  valueRatio?: Ratio;

  /** The result value as a dateTime. */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  /** The result value as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  valuePeriod?: Period;

  /** The result value as a time. */
  @IsOptional()
  @IsString()
  valueTime?: string;

  /** Provides a reason why the expected value in the element is missing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  dataAbsentReason?: CodeableConcept;

  /** A categorical assessment of an observation value. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  interpretation?: CodeableConcept[];

  /** Comments about the observation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Indicates the site on the subject's body where the observation was made. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept;

  /** Indicates the mechanism used to perform the observation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /** The specimen that was used when this observation was made. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  specimen?: Reference;

  /** The device used to generate the observation data. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  device?: Reference;

  /** Guidance on how to interpret the value by comparison to a normal or recommended range. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationReferenceRange)
  referenceRange?: ObservationReferenceRange[];

  /** This observation is a group observation that has related member observations. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  hasMember?: Reference[];

  /** The target resource from which this observation value is derived. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  derivedFrom?: Reference[];

  /** Some observations have multiple component observations. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationComponent)
  component?: ObservationComponent[];

  /** Creates a new Observation. @param props - Initial values. */
  constructor(props?: Partial<Observation>) {
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

  /** Adds an item to the partOf array. @returns This instance for chaining. */
  addPartOf(item: Reference): this {
    if (!this.partOf) {
      this.partOf = [];
    }

    this.partOf.push(item);

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

  /** Adds an item to the focus array. @returns This instance for chaining. */
  addFocus(item: Reference): this {
    if (!this.focus) {
      this.focus = [];
    }

    this.focus.push(item);

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

  /** Adds an item to the interpretation array. @returns This instance for chaining. */
  addInterpretation(item: CodeableConcept): this {
    if (!this.interpretation) {
      this.interpretation = [];
    }

    this.interpretation.push(item);

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

  /** Adds an item to the referenceRange array. @returns This instance for chaining. */
  addReferenceRange(item: ObservationReferenceRange): this {
    if (!this.referenceRange) {
      this.referenceRange = [];
    }

    this.referenceRange.push(item);

    return this;
  }

  /** Adds an item to the hasMember array. @returns This instance for chaining. */
  addHasMember(item: Reference): this {
    if (!this.hasMember) {
      this.hasMember = [];
    }

    this.hasMember.push(item);

    return this;
  }

  /** Adds an item to the derivedFrom array. @returns This instance for chaining. */
  addDerivedFrom(item: Reference): this {
    if (!this.derivedFrom) {
      this.derivedFrom = [];
    }

    this.derivedFrom.push(item);

    return this;
  }

  /** Adds an item to the component array. @returns This instance for chaining. */
  addComponent(item: ObservationComponent): this {
    if (!this.component) {
      this.component = [];
    }

    this.component.push(item);

    return this;
  }
}
