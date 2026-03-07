import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Age } from '../datatypes/age.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Dosage } from '../datatypes/dosage.js';
import { Duration } from '../datatypes/duration.js';
import { Expression } from '../datatypes/expression.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Range } from '../datatypes/range.js';
import { Reference } from '../datatypes/reference.js';
import { RelatedArtifact } from '../datatypes/related-artifact.js';
import { Timing } from '../datatypes/timing.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { PublicationStatus } from '../enums/publication-status.js';
import { RequestPriority } from '../enums/request-priority.js';

/** Backbone element for ActivityDefinition — who should participate in the action. */
export class ActivityDefinitionParticipant extends BackboneElement {

  /** The type of participant in the action. */
  @IsOptional()
  @IsString()
  type?: string;

  /** The role the participant should play in performing the action. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /** Creates a new ActivityDefinitionParticipant. @param props - Initial values. */
  constructor(props?: Partial<ActivityDefinitionParticipant>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ActivityDefinition — dynamic values for the definition. */
export class ActivityDefinitionDynamicValue extends BackboneElement {

  /** The path to the element to be customized. */
  @IsOptional()
  @IsString()
  path?: string;

  /** An expression specifying the value of the customized element. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  expression?: Expression;

  /** Creates a new ActivityDefinitionDynamicValue. @param props - Initial values. */
  constructor(props?: Partial<ActivityDefinitionDynamicValue>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 ActivityDefinition — a shareable definition of a clinical activity to be performed. */
export class ActivityDefinition extends DomainResource {

  /** The FHIR resource type string. */
  readonly resourceType = 'ActivityDefinition';

  /** Canonical identifier for this activity definition. */
  @IsOptional()
  @IsString()
  url?: string;

  /** Additional identifiers for the activity definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Business version of the activity definition. */
  @IsOptional()
  @IsString()
  version?: string;

  /** Computer-friendly name for this activity definition. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Human-friendly name for this activity definition. */
  @IsOptional()
  @IsString()
  title?: string;

  /** Subordinate title of the activity definition. */
  @IsOptional()
  @IsString()
  subtitle?: string;

  /** The publication status of the activity definition (draft | active | retired | unknown). */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** Whether the activity definition is for testing purposes. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** Type of individual the activity definition is intended for, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  subjectCodeableConcept?: CodeableConcept;

  /** Type of individual the activity definition is intended for, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subjectReference?: Reference;

  /** Date the activity definition was last changed. */
  @IsOptional()
  @IsString()
  date?: string;

  /** Name of the publisher of the activity definition. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details for the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** Natural language description of the activity definition. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Context of use for the activity definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** Intended jurisdiction for the activity definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Why this activity definition is defined. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** Describes the clinical usage of the activity definition. */
  @IsOptional()
  @IsString()
  usage?: string;

  /** Use and/or publishing restrictions for the activity definition. */
  @IsOptional()
  @IsString()
  copyright?: string;

  /** When the activity definition was approved by the publisher. */
  @IsOptional()
  @IsString()
  approvalDate?: string;

  /** When the activity definition was last reviewed. */
  @IsOptional()
  @IsString()
  lastReviewDate?: string;

  /** The period during which the activity definition is effective. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /** Descriptive topics related to the content of the activity definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  topic?: CodeableConcept[];

  /** Who authored the content of the activity definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  author?: ContactDetail[];

  /** Who edited the content of the activity definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  editor?: ContactDetail[];

  /** Who reviewed the content of the activity definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  reviewer?: ContactDetail[];

  /** Who endorsed the content of the activity definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  endorser?: ContactDetail[];

  /** Related artifacts such as documentation or evidence. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RelatedArtifact)
  relatedArtifact?: RelatedArtifact[];

  /** Logic libraries referenced by the activity definition. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  library?: string[];

  /** The type of resource that is the subject of the activity definition. */
  @IsOptional()
  @IsString()
  kind?: string;

  /** Profile that the resulting resource must conform to. */
  @IsOptional()
  @IsString()
  profile?: string;

  /** Coded definition of the activity to be performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** Indicates the level of authority intent. */
  @IsOptional()
  @IsString()
  intent?: string;

  /** Indicates how quickly the activity should be addressed. */
  @IsOptional()
  @IsEnum(RequestPriority)
  priority?: RequestPriority;

  /** Whether the activity should NOT be performed. */
  @IsOptional()
  @IsBoolean()
  doNotPerform?: boolean;

  /** When the activity is to occur, as a Timing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  timingTiming?: Timing;

  /** When the activity is to occur, as a dateTime. */
  @IsOptional()
  @IsString()
  timingDateTime?: string;

  /** When the activity is to occur, as an Age. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Age)
  timingAge?: Age;

  /** When the activity is to occur, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  timingPeriod?: Period;

  /** When the activity is to occur, as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  timingRange?: Range;

  /** When the activity is to occur, as a Duration. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  timingDuration?: Duration;

  /** Where the activity should take place. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /** Indicates who should participate in performing the action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ActivityDefinitionParticipant)
  participant?: ActivityDefinitionParticipant[];

  /** What product is administered/supplied, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  productReference?: Reference;

  /** What product is administered/supplied, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  productCodeableConcept?: CodeableConcept;

  /** How much of the product is administered/supplied. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** Detailed dosage instructions for the activity. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Dosage)
  dosage?: Dosage[];

  /** Body site(s) on which the procedure is performed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept[];

  /** What specimens are required to perform this action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  specimenRequirement?: Reference[];

  /** What observations are required to perform this action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  observationRequirement?: Reference[];

  /** What observations must be produced by this action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  observationResultRequirement?: Reference[];

  /** Transform to apply to produce the desired resource. */
  @IsOptional()
  @IsString()
  transform?: string;

  /** Dynamic values to set on the resulting resource. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ActivityDefinitionDynamicValue)
  dynamicValue?: ActivityDefinitionDynamicValue[];

  /** Creates a new ActivityDefinition. @param props - Initial values. */
  constructor(props?: Partial<ActivityDefinition>) {
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

  /** Adds an item to the contact array. @returns This instance for chaining. */
  addContact(item: ContactDetail): this {
    if (!this.contact) {
      this.contact = [];
    }

    this.contact.push(item);

    return this;
  }

  /** Adds an item to the useContext array. @returns This instance for chaining. */
  addUseContext(item: UsageContext): this {
    if (!this.useContext) {
      this.useContext = [];
    }

    this.useContext.push(item);

    return this;
  }

  /** Adds an item to the jurisdiction array. @returns This instance for chaining. */
  addJurisdiction(item: CodeableConcept): this {
    if (!this.jurisdiction) {
      this.jurisdiction = [];
    }

    this.jurisdiction.push(item);

    return this;
  }

  /** Adds an item to the topic array. @returns This instance for chaining. */
  addTopic(item: CodeableConcept): this {
    if (!this.topic) {
      this.topic = [];
    }

    this.topic.push(item);

    return this;
  }

  /** Adds an item to the author array. @returns This instance for chaining. */
  addAuthor(item: ContactDetail): this {
    if (!this.author) {
      this.author = [];
    }

    this.author.push(item);

    return this;
  }

  /** Adds an item to the editor array. @returns This instance for chaining. */
  addEditor(item: ContactDetail): this {
    if (!this.editor) {
      this.editor = [];
    }

    this.editor.push(item);

    return this;
  }

  /** Adds an item to the reviewer array. @returns This instance for chaining. */
  addReviewer(item: ContactDetail): this {
    if (!this.reviewer) {
      this.reviewer = [];
    }

    this.reviewer.push(item);

    return this;
  }

  /** Adds an item to the endorser array. @returns This instance for chaining. */
  addEndorser(item: ContactDetail): this {
    if (!this.endorser) {
      this.endorser = [];
    }

    this.endorser.push(item);

    return this;
  }

  /** Adds an item to the relatedArtifact array. @returns This instance for chaining. */
  addRelatedArtifact(item: RelatedArtifact): this {
    if (!this.relatedArtifact) {
      this.relatedArtifact = [];
    }

    this.relatedArtifact.push(item);

    return this;
  }

  /** Adds an item to the library array. @returns This instance for chaining. */
  addLibrary(item: string): this {
    if (!this.library) {
      this.library = [];
    }

    this.library.push(item);

    return this;
  }

  /** Adds an item to the participant array. @returns This instance for chaining. */
  addParticipant(item: ActivityDefinitionParticipant): this {
    if (!this.participant) {
      this.participant = [];
    }

    this.participant.push(item);

    return this;
  }

  /** Adds an item to the dosage array. @returns This instance for chaining. */
  addDosage(item: Dosage): this {
    if (!this.dosage) {
      this.dosage = [];
    }

    this.dosage.push(item);

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

  /** Adds an item to the specimenRequirement array. @returns This instance for chaining. */
  addSpecimenRequirement(item: Reference): this {
    if (!this.specimenRequirement) {
      this.specimenRequirement = [];
    }

    this.specimenRequirement.push(item);

    return this;
  }

  /** Adds an item to the observationRequirement array. @returns This instance for chaining. */
  addObservationRequirement(item: Reference): this {
    if (!this.observationRequirement) {
      this.observationRequirement = [];
    }

    this.observationRequirement.push(item);

    return this;
  }

  /** Adds an item to the observationResultRequirement array. @returns This instance for chaining. */
  addObservationResultRequirement(item: Reference): this {
    if (!this.observationResultRequirement) {
      this.observationResultRequirement = [];
    }

    this.observationResultRequirement.push(item);

    return this;
  }

  /** Adds an item to the dynamicValue array. @returns This instance for chaining. */
  addDynamicValue(item: ActivityDefinitionDynamicValue): this {
    if (!this.dynamicValue) {
      this.dynamicValue = [];
    }

    this.dynamicValue.push(item);

    return this;
  }
}
