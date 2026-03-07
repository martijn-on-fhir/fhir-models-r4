import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Expression } from '../datatypes/expression.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { RelatedArtifact } from '../datatypes/related-artifact.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for {@link MeasureGroup.population}. */
export class MeasureGroupPopulation extends BackboneElement {

  /** The type of population, such as initial, numerator, denominator, etc. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The human-readable description of this population criteria. */
  @IsOptional()
  @IsString()
  description?: string;

  /** An expression that specifies the criteria for the population, typically the name of an expression defined in a library. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  criteria?: Expression;

  /** Creates a new {@link MeasureGroupPopulation} instance. @param props - Initial property values. */
  constructor(props?: Partial<MeasureGroupPopulation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link MeasureGroupStratifier.component}. */
export class MeasureGroupStratifierComponent extends BackboneElement {

  /** Indicates a meaning for the stratifier component. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The human-readable description of this stratifier component criteria. */
  @IsOptional()
  @IsString()
  description?: string;

  /** An expression that specifies the criteria for this component of the stratifier. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  criteria?: Expression;

  /** Creates a new {@link MeasureGroupStratifierComponent} instance. @param props - Initial property values. */
  constructor(props?: Partial<MeasureGroupStratifierComponent>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link MeasureGroup.stratifier}. */
export class MeasureGroupStratifier extends BackboneElement {

  /** Indicates a meaning for the stratifier. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The human-readable description of this stratifier criteria. */
  @IsOptional()
  @IsString()
  description?: string;

  /** An expression that specifies the criteria for the stratifier. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  criteria?: Expression;

  /** A component of the stratifier criteria for the measure report, specified as either an additional code or an additional expression. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureGroupStratifierComponent)
  component?: MeasureGroupStratifierComponent[];

  /** Creates a new {@link MeasureGroupStratifier} instance. @param props - Initial property values. */
  constructor(props?: Partial<MeasureGroupStratifier>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link MeasureGroupStratifierComponent} to the {@link MeasureGroupStratifier.component component} array. @param item - The {@link MeasureGroupStratifierComponent} to add. @returns This instance for chaining. */
  addComponent(item: MeasureGroupStratifierComponent): this {
    if (!this.component) {
      this.component = [];
    }

    this.component.push(item);

    return this;
  }
}

/** Backbone element for {@link Measure.group}. */
export class MeasureGroup extends BackboneElement {

  /** Indicates a meaning for the group, which can be used to identify it when referenced in the measure definition. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The human-readable description of this population group. */
  @IsOptional()
  @IsString()
  description?: string;

  /** A population criteria for the measure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureGroupPopulation)
  population?: MeasureGroupPopulation[];

  /** The stratifier criteria for the measure report, specified as either the name of a valid CQL expression within a referenced library or a valid FHIR Resource Path. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureGroupStratifier)
  stratifier?: MeasureGroupStratifier[];

  /** Creates a new {@link MeasureGroup} instance. @param props - Initial property values. */
  constructor(props?: Partial<MeasureGroup>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link MeasureGroupPopulation} to the {@link MeasureGroup.population population} array. @param item - The {@link MeasureGroupPopulation} to add. @returns This instance for chaining. */
  addPopulation(item: MeasureGroupPopulation): this {
    if (!this.population) {
      this.population = [];
    }

    this.population.push(item);

    return this;
  }

  /** Adds a {@link MeasureGroupStratifier} to the {@link MeasureGroup.stratifier stratifier} array. @param item - The {@link MeasureGroupStratifier} to add. @returns This instance for chaining. */
  addStratifier(item: MeasureGroupStratifier): this {
    if (!this.stratifier) {
      this.stratifier = [];
    }

    this.stratifier.push(item);

    return this;
  }
}

/** FHIR R4 Measure resource — represents a structured, computable definition of a health-related measure such as a clinical quality measure, public health indicator, or population health analytic. */
export class Measure extends DomainResource {

  /** The FHIR resource type, always "Measure". */
  readonly resourceType = 'Measure';

  /** An absolute URI that identifies this measure globally. */
  @IsOptional()
  @IsString()
  url?: string;

  /** A formal identifier that is used to identify this measure when it is represented in other contexts. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The identifier that is used to identify this version of the measure. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the measure. This name should be usable as an identifier for the module. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short, descriptive, user-friendly title for the measure. */
  @IsOptional()
  @IsString()
  title?: string;

  /** An explanatory or alternate title for the measure giving additional information about its content. */
  @IsOptional()
  @IsString()
  subtitle?: string;

  /** The status of this measure (draft, active, retired, unknown). */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** A Boolean value to indicate that this measure is authored for testing purposes and is not intended for genuine usage. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** The intended subjects for the measure, expressed as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  subjectCodeableConcept?: CodeableConcept;

  /** The intended subjects for the measure, expressed as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subjectReference?: Reference;

  /** The date (and optionally time) when the measure was published. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization or individual that published the measure. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details to assist a user in finding and communicating with the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the measure from a consumer's perspective. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The content was developed with a focus and intent of supporting the contexts that are listed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the measure is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Explanation of why this measure is needed and why it has been designed as it has. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** A detailed description, from a clinical perspective, of how the measure is used. */
  @IsOptional()
  @IsString()
  usage?: string;

  /** A copyright statement relating to the measure and/or its contents. */
  @IsOptional()
  @IsString()
  copyright?: string;

  /** The date on which the resource content was approved by the publisher. */
  @IsOptional()
  @IsString()
  approvalDate?: string;

  /** The date on which the resource content was last reviewed. */
  @IsOptional()
  @IsString()
  lastReviewDate?: string;

  /** The period during which the measure content was or is planned to be in active use. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /** Descriptive topics related to the content of the measure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  topic?: CodeableConcept[];

  /** An individiual or organization primarily involved in the creation and maintenance of the content. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  author?: ContactDetail[];

  /** An individual or organization primarily responsible for internal coherence of the content. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  editor?: ContactDetail[];

  /** An individual or organization primarily responsible for review of some aspect of the content. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  reviewer?: ContactDetail[];

  /** An individual or organization responsible for officially endorsing the content for use in some setting. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  endorser?: ContactDetail[];

  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RelatedArtifact)
  relatedArtifact?: RelatedArtifact[];

  /** A reference to a Library resource containing the formal logic used by the measure. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  library?: string[];

  /** Notices and disclaimers regarding the use of the measure or related to intellectual property. */
  @IsOptional()
  @IsString()
  disclaimer?: string;

  /** Indicates how the calculation is performed for the measure, including proportion, ratio, continuous-variable, and cohort. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  scoring?: CodeableConcept;

  /** If this is a composite measure, the scoring method used to combine the component measures. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  compositeScoring?: CodeableConcept;

  /** Indicates whether the measure is used to examine a process, an outcome over time, a patient-reported outcome, or a structure measure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /** A description of the risk adjustment factors that may impact the resulting score. */
  @IsOptional()
  @IsString()
  riskAdjustment?: string;

  /** Describes how to combine the information calculated based on logic in each of several populations into one summarized result. */
  @IsOptional()
  @IsString()
  rateAggregation?: string;

  /** Provides a succinct statement of the need for the measure. */
  @IsOptional()
  @IsString()
  rationale?: string;

  /** Provides a summary of relevant clinical guidelines or other clinical recommendations supporting the measure. */
  @IsOptional()
  @IsString()
  clinicalRecommendationStatement?: string;

  /** Information on whether an increase or decrease in score is the preferred result. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  improvementNotation?: CodeableConcept;

  /** Provides a description of an individual term used within the measure. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  definition?: string[];

  /** Additional guidance for the measure including how it can be used in a clinical context, and the intent of the measure. */
  @IsOptional()
  @IsString()
  guidance?: string;

  /** A group of population criteria for the measure. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureGroup)
  group?: MeasureGroup[];

  /** The supplemental data criteria for the measure report, specified as either the name of a valid CQL expression within a referenced library, or a valid FHIR Resource Path. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureGroupPopulation)
  supplementalData?: MeasureGroupPopulation[];

  /** Creates a new {@link Measure} instance. @param props - Initial property values. */
  constructor(props?: Partial<Measure>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link Identifier} to the {@link Measure.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link ContactDetail} to the {@link Measure.contact contact} array. @param item - The {@link ContactDetail} to add. @returns This instance for chaining. */
  addContact(item: ContactDetail): this {
    if (!this.contact) {
      this.contact = [];
    }

    this.contact.push(item);

    return this;
  }

  /** Adds a {@link UsageContext} to the {@link Measure.useContext useContext} array. @param item - The {@link UsageContext} to add. @returns This instance for chaining. */
  addUseContext(item: UsageContext): this {
    if (!this.useContext) {
      this.useContext = [];
    }

    this.useContext.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link Measure.jurisdiction jurisdiction} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addJurisdiction(item: CodeableConcept): this {
    if (!this.jurisdiction) {
      this.jurisdiction = [];
    }

    this.jurisdiction.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link Measure.topic topic} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addTopic(item: CodeableConcept): this {
    if (!this.topic) {
      this.topic = [];
    }

    this.topic.push(item);

    return this;
  }

  /** Adds a {@link ContactDetail} to the {@link Measure.author author} array. @param item - The {@link ContactDetail} to add. @returns This instance for chaining. */
  addAuthor(item: ContactDetail): this {
    if (!this.author) {
      this.author = [];
    }

    this.author.push(item);

    return this;
  }

  /** Adds a {@link ContactDetail} to the {@link Measure.editor editor} array. @param item - The {@link ContactDetail} to add. @returns This instance for chaining. */
  addEditor(item: ContactDetail): this {
    if (!this.editor) {
      this.editor = [];
    }

    this.editor.push(item);

    return this;
  }

  /** Adds a {@link ContactDetail} to the {@link Measure.reviewer reviewer} array. @param item - The {@link ContactDetail} to add. @returns This instance for chaining. */
  addReviewer(item: ContactDetail): this {
    if (!this.reviewer) {
      this.reviewer = [];
    }

    this.reviewer.push(item);

    return this;
  }

  /** Adds a {@link ContactDetail} to the {@link Measure.endorser endorser} array. @param item - The {@link ContactDetail} to add. @returns This instance for chaining. */
  addEndorser(item: ContactDetail): this {
    if (!this.endorser) {
      this.endorser = [];
    }

    this.endorser.push(item);

    return this;
  }

  /** Adds a {@link RelatedArtifact} to the {@link Measure.relatedArtifact relatedArtifact} array. @param item - The {@link RelatedArtifact} to add. @returns This instance for chaining. */
  addRelatedArtifact(item: RelatedArtifact): this {
    if (!this.relatedArtifact) {
      this.relatedArtifact = [];
    }

    this.relatedArtifact.push(item);

    return this;
  }

  /** Adds a canonical URI string to the {@link Measure.library library} array. @param item - The canonical URI string to add. @returns This instance for chaining. */
  addLibrary(item: string): this {
    if (!this.library) {
      this.library = [];
    }

    this.library.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link Measure.type type} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addType(item: CodeableConcept): this {
    if (!this.type) {
      this.type = [];
    }

    this.type.push(item);

    return this;
  }

  /** Adds a definition string to the {@link Measure.definition definition} array. @param item - The definition string to add. @returns This instance for chaining. */
  addDefinition(item: string): this {
    if (!this.definition) {
      this.definition = [];
    }

    this.definition.push(item);

    return this;
  }

  /** Adds a {@link MeasureGroup} to the {@link Measure.group group} array. @param item - The {@link MeasureGroup} to add. @returns This instance for chaining. */
  addGroup(item: MeasureGroup): this {
    if (!this.group) {
      this.group = [];
    }

    this.group.push(item);

    return this;
  }

  /** Adds a {@link MeasureGroupPopulation} to the {@link Measure.supplementalData supplementalData} array. @param item - The {@link MeasureGroupPopulation} to add. @returns This instance for chaining. */
  addSupplementalData(item: MeasureGroupPopulation): this {
    if (!this.supplementalData) {
      this.supplementalData = [];
    }

    this.supplementalData.push(item);

    return this;
  }
}
