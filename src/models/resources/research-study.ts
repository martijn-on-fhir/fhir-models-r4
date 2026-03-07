import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { RelatedArtifact } from '../datatypes/related-artifact.js';
import { ResearchStudyStatus } from '../enums/research-study-status.js';

/** Backbone element for ResearchStudy. */
export class ResearchStudyArm extends BackboneElement {

  /** The label for this arm of the study. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Categorization of the study arm (e.g., experimental, active comparator). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** A succinct description of the arm's path through the study. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Creates a new ResearchStudyArm. @param props - Initial values. */
  constructor(props?: Partial<ResearchStudyArm>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ResearchStudy. */
export class ResearchStudyObjective extends BackboneElement {

  /** A human-readable label for the objective. */
  @IsOptional()
  @IsString()
  name?: string;

  /** The kind of study objective (e.g., primary, secondary, exploratory). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Creates a new ResearchStudyObjective. @param props - Initial values. */
  constructor(props?: Partial<ResearchStudyObjective>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 ResearchStudy — a process where a researcher or organization plans and executes a scientific study. */
export class ResearchStudy extends DomainResource {

  readonly resourceType = 'ResearchStudy';

  /** Identifiers assigned to this research study by the sponsor or other systems. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** A short human-readable label for the study. */
  @IsOptional()
  @IsString()
  title?: string;

  /** The set of steps expected to be performed as part of the execution of the study. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  protocol?: Reference[];

  /** A larger research study of which this particular study is a component or step. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /** The current state of the study. */
  @IsOptional()
  @IsEnum(ResearchStudyStatus)
  status?: ResearchStudyStatus;

  /** The type of study based upon the intent of the study's activities. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  primaryPurposeType?: CodeableConcept;

  /** The stage in the progression of a therapy from initial experimental use to post-market evaluation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  phase?: CodeableConcept;

  /** Codes categorizing the type of study. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** The medication, food, therapy, or other product under investigation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  focus?: CodeableConcept[];

  /** The condition that is the focus of the study. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  condition?: CodeableConcept[];

  /** Contact details to assist a user in learning more about or engaging with the study. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** Citations, references, and other related documents. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RelatedArtifact)
  relatedArtifact?: RelatedArtifact[];

  /** Key terms to aid in searching for or filtering the study. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  keyword?: CodeableConcept[];

  /** Indicates a country, state, or other region where the study is taking place. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  location?: CodeableConcept[];

  /** A full description of how the study is being conducted. */
  @IsOptional()
  @IsString()
  description?: string;

  /** References to the Group that defines the criteria for and quantity of subjects participating in the study. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  enrollment?: Reference[];

  /** Identifies the start date and the expected or actual end date for the study. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** An organization that initiates the investigation and is legally responsible for the study. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  sponsor?: Reference;

  /** A researcher in a study who oversees multiple aspects of the study. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  principalInvestigator?: Reference;

  /** A facility in which study activities are conducted. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  site?: Reference[];

  /** A description and/or code explaining the premature termination of the study. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  reasonStopped?: CodeableConcept;

  /** Comments made about the study by the performer, subject, or other participants. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Describes an expected sequence of events for one of the participants of a study. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ResearchStudyArm)
  arm?: ResearchStudyArm[];

  /** A goal that the study is aiming to achieve. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ResearchStudyObjective)
  objective?: ResearchStudyObjective[];

  /** Creates a new ResearchStudy. @param props - Initial values. */
  constructor(props?: Partial<ResearchStudy>) {
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

  /** Adds an item to the protocol array. @returns This instance for chaining. */
  addProtocol(item: Reference): this {
    if (!this.protocol) {
      this.protocol = [];
    }

    this.protocol.push(item);

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
  addFocus(item: CodeableConcept): this {
    if (!this.focus) {
      this.focus = [];
    }

    this.focus.push(item);

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

  /** Adds an item to the contact array. @returns This instance for chaining. */
  addContact(item: ContactDetail): this {
    if (!this.contact) {
      this.contact = [];
    }

    this.contact.push(item);

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

  /** Adds an item to the keyword array. @returns This instance for chaining. */
  addKeyword(item: CodeableConcept): this {
    if (!this.keyword) {
      this.keyword = [];
    }

    this.keyword.push(item);

    return this;
  }

  /** Adds an item to the location array. @returns This instance for chaining. */
  addLocation(item: CodeableConcept): this {
    if (!this.location) {
      this.location = [];
    }

    this.location.push(item);

    return this;
  }

  /** Adds an item to the enrollment array. @returns This instance for chaining. */
  addEnrollment(item: Reference): this {
    if (!this.enrollment) {
      this.enrollment = [];
    }

    this.enrollment.push(item);

    return this;
  }

  /** Adds an item to the site array. @returns This instance for chaining. */
  addSite(item: Reference): this {
    if (!this.site) {
      this.site = [];
    }

    this.site.push(item);

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

  /** Adds an item to the arm array. @returns This instance for chaining. */
  addArm(item: ResearchStudyArm): this {
    if (!this.arm) {
      this.arm = [];
    }

    this.arm.push(item);

    return this;
  }

  /** Adds an item to the objective array. @returns This instance for chaining. */
  addObjective(item: ResearchStudyObjective): this {
    if (!this.objective) {
      this.objective = [];
    }

    this.objective.push(item);

    return this;
  }
}
