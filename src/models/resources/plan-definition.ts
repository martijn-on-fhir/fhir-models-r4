import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Age } from '../datatypes/age.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { DataRequirement } from '../datatypes/data-requirement.js';
import { Duration } from '../datatypes/duration.js';
import { Expression } from '../datatypes/expression.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Range } from '../datatypes/range.js';
import { Reference } from '../datatypes/reference.js';
import { RelatedArtifact } from '../datatypes/related-artifact.js';
import { Timing } from '../datatypes/timing.js';
import { TriggerDefinition } from '../datatypes/trigger-definition.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { ActionConditionKind } from '../enums/action-condition-kind.js';
import { ActionRelationshipType } from '../enums/action-relationship-type.js';
import { PublicationStatus } from '../enums/publication-status.js';
import { RequestPriority } from '../enums/request-priority.js';

/** Backbone element for PlanDefinition representing a target for a goal. */
export class PlanDefinitionGoalTarget extends BackboneElement {

  /** The parameter whose value is to be tracked. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  measure?: CodeableConcept;

  /** The target value of the measure to be achieved as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  detailQuantity?: Quantity;

  /** The target value of the measure to be achieved as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  detailRange?: Range;

  /** The target value of the measure to be achieved as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  detailCodeableConcept?: CodeableConcept;

  /** Indicates the timeframe after the start of the goal in which the goal should be met. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  due?: Duration;

  /** Creates a new PlanDefinitionGoalTarget. @param props - Initial values. */
  constructor(props?: Partial<PlanDefinitionGoalTarget>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for PlanDefinition representing a desired outcome of the plan. */
export class PlanDefinitionGoal extends BackboneElement {

  /** Indicates a category the goal falls within. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /** Human-readable and/or coded description of a specific desired objective of care. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  description?: CodeableConcept;

  /** Identifies the expected level of importance associated with reaching/sustaining the defined goal. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  priority?: CodeableConcept;

  /** The event after which the goal should begin being pursued. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  start?: CodeableConcept;

  /** Identifies problems, conditions, issues, or concerns the goal is intended to address. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  addresses?: CodeableConcept[];

  /** Didactic or other informational resources associated with the goal. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RelatedArtifact)
  documentation?: RelatedArtifact[];

  /** Indicates what should be done and within what timeframe. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlanDefinitionGoalTarget)
  target?: PlanDefinitionGoalTarget[];

  /** Creates a new PlanDefinitionGoal. @param props - Initial values. */
  constructor(props?: Partial<PlanDefinitionGoal>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the addresses array. @returns This instance for chaining. */
  addAddresses(item: CodeableConcept): this {
    if (!this.addresses) {
      this.addresses = [];
    }

    this.addresses.push(item);

    return this;
  }

  /** Adds an item to the documentation array. @returns This instance for chaining. */
  addDocumentation(item: RelatedArtifact): this {
    if (!this.documentation) {
      this.documentation = [];
    }

    this.documentation.push(item);

    return this;
  }

  /** Adds an item to the target array. @returns This instance for chaining. */
  addTarget(item: PlanDefinitionGoalTarget): this {
    if (!this.target) {
      this.target = [];
    }

    this.target.push(item);

    return this;
  }
}

/** Backbone element for PlanDefinition representing a condition for an action. */
export class PlanDefinitionActionCondition extends BackboneElement {

  /** The kind of condition (applicability, start, or stop). */
  @IsOptional()
  @IsEnum(ActionConditionKind)
  kind?: ActionConditionKind;

  /** An expression that returns true or false, indicating the condition is satisfied. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  expression?: Expression;

  /** Creates a new PlanDefinitionActionCondition. @param props - Initial values. */
  constructor(props?: Partial<PlanDefinitionActionCondition>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for PlanDefinition representing a relationship to another action. */
export class PlanDefinitionActionRelatedAction extends BackboneElement {

  /** The element id of the related action. */
  @IsOptional()
  @IsString()
  actionId?: string;

  /** The relationship of this action to the related action. */
  @IsOptional()
  @IsEnum(ActionRelationshipType)
  relationship?: ActionRelationshipType;

  /** A duration offset for the relationship expressed as a Duration. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  offsetDuration?: Duration;

  /** A duration offset for the relationship expressed as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  offsetRange?: Range;

  /** Creates a new PlanDefinitionActionRelatedAction. @param props - Initial values. */
  constructor(props?: Partial<PlanDefinitionActionRelatedAction>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for PlanDefinition representing a participant in an action. */
export class PlanDefinitionActionParticipant extends BackboneElement {

  /** The type of participant in the action. */
  @IsOptional()
  @IsString()
  type?: string;

  /** The role the participant should play in performing the described action. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /** Creates a new PlanDefinitionActionParticipant. @param props - Initial values. */
  constructor(props?: Partial<PlanDefinitionActionParticipant>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for PlanDefinition representing a dynamic value to set during action execution. */
export class PlanDefinitionActionDynamicValue extends BackboneElement {

  /** The path to the element to be customized. */
  @IsOptional()
  @IsString()
  path?: string;

  /** An expression specifying the value of the customized element. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  expression?: Expression;

  /** Creates a new PlanDefinitionActionDynamicValue. @param props - Initial values. */
  constructor(props?: Partial<PlanDefinitionActionDynamicValue>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for PlanDefinition representing an action or group of actions to be taken. */
export class PlanDefinitionAction extends BackboneElement {

  /** A user-visible prefix for the action. */
  @IsOptional()
  @IsString()
  prefix?: string;

  /** The title of the action displayed to a user. */
  @IsOptional()
  @IsString()
  title?: string;

  /** A brief description of the action used to provide a summary to display to the user. */
  @IsOptional()
  @IsString()
  description?: string;

  /** A text equivalent of the action to be performed. */
  @IsOptional()
  @IsString()
  textEquivalent?: string;

  /** Indicates how quickly the action should be addressed with respect to other actions. */
  @IsOptional()
  @IsEnum(RequestPriority)
  priority?: RequestPriority;

  /** A code that provides meaning for the action or action group. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /** A description of why this action is necessary or appropriate. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reason?: CodeableConcept[];

  /** Didactic or other informational resources associated with the action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RelatedArtifact)
  documentation?: RelatedArtifact[];

  /** Identifies goals that this action supports. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  goalId?: string[];

  /** A code or group definition that describes the intended subject of the action as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  subjectCodeableConcept?: CodeableConcept;

  /** A code or group definition that describes the intended subject of the action as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subjectReference?: Reference;

  /** A description of when the action should be triggered. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TriggerDefinition)
  trigger?: TriggerDefinition[];

  /** An expression that describes applicability criteria or start/stop conditions for the action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlanDefinitionActionCondition)
  condition?: PlanDefinitionActionCondition[];

  /** Defines input data requirements for the action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DataRequirement)
  input?: DataRequirement[];

  /** Defines the outputs of the action, if any. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DataRequirement)
  output?: DataRequirement[];

  /** A relationship to another action such as before or after. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlanDefinitionActionRelatedAction)
  relatedAction?: PlanDefinitionActionRelatedAction[];

  /** An optional value describing when the action should be performed as a dateTime. */
  @IsOptional()
  @IsString()
  timingDateTime?: string;

  /** An optional value describing when the action should be performed as an Age. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Age)
  timingAge?: Age;

  /** An optional value describing when the action should be performed as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  timingPeriod?: Period;

  /** An optional value describing when the action should be performed as a Duration. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  timingDuration?: Duration;

  /** An optional value describing when the action should be performed as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  timingRange?: Range;

  /** An optional value describing when the action should be performed as a Timing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  timingTiming?: Timing;

  /** Indicates who should participate in performing the action described. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlanDefinitionActionParticipant)
  participant?: PlanDefinitionActionParticipant[];

  /** The type of action to perform (create, update, remove). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Defines the grouping behavior for the action and its children. */
  @IsOptional()
  @IsString()
  groupingBehavior?: string;

  /** Defines the selection behavior for the action and its children. */
  @IsOptional()
  @IsString()
  selectionBehavior?: string;

  /** Defines the required behavior for the action. */
  @IsOptional()
  @IsString()
  requiredBehavior?: string;

  /** Defines whether the action should usually be preselected. */
  @IsOptional()
  @IsString()
  precheckBehavior?: string;

  /** Defines whether the action can be selected multiple times. */
  @IsOptional()
  @IsString()
  cardinalityBehavior?: string;

  /** A reference to an ActivityDefinition or PlanDefinition resource as a canonical URL. */
  @IsOptional()
  @IsString()
  definitionCanonical?: string;

  /** A reference to an ActivityDefinition or PlanDefinition resource as a URI. */
  @IsOptional()
  @IsString()
  definitionUri?: string;

  /** A reference to a StructureMap resource that defines a transform to produce action outputs. */
  @IsOptional()
  @IsString()
  transform?: string;

  /** Customizations that should be applied to the statically defined resource. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlanDefinitionActionDynamicValue)
  dynamicValue?: PlanDefinitionActionDynamicValue[];

  /** Sub actions that are contained within the action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlanDefinitionAction)
  action?: PlanDefinitionAction[];

  /** Creates a new PlanDefinitionAction. @param props - Initial values. */
  constructor(props?: Partial<PlanDefinitionAction>) {
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

  /** Adds an item to the reason array. @returns This instance for chaining. */
  addReason(item: CodeableConcept): this {
    if (!this.reason) {
      this.reason = [];
    }

    this.reason.push(item);

    return this;
  }

  /** Adds an item to the documentation array. @returns This instance for chaining. */
  addDocumentation(item: RelatedArtifact): this {
    if (!this.documentation) {
      this.documentation = [];
    }

    this.documentation.push(item);

    return this;
  }

  /** Adds an item to the goalId array. @returns This instance for chaining. */
  addGoalId(item: string): this {
    if (!this.goalId) {
      this.goalId = [];
    }

    this.goalId.push(item);

    return this;
  }

  /** Adds an item to the trigger array. @returns This instance for chaining. */
  addTrigger(item: TriggerDefinition): this {
    if (!this.trigger) {
      this.trigger = [];
    }

    this.trigger.push(item);

    return this;
  }

  /** Adds an item to the condition array. @returns This instance for chaining. */
  addCondition(item: PlanDefinitionActionCondition): this {
    if (!this.condition) {
      this.condition = [];
    }

    this.condition.push(item);

    return this;
  }

  /** Adds an item to the input array. @returns This instance for chaining. */
  addInput(item: DataRequirement): this {
    if (!this.input) {
      this.input = [];
    }

    this.input.push(item);

    return this;
  }

  /** Adds an item to the output array. @returns This instance for chaining. */
  addOutput(item: DataRequirement): this {
    if (!this.output) {
      this.output = [];
    }

    this.output.push(item);

    return this;
  }

  /** Adds an item to the relatedAction array. @returns This instance for chaining. */
  addRelatedAction(item: PlanDefinitionActionRelatedAction): this {
    if (!this.relatedAction) {
      this.relatedAction = [];
    }

    this.relatedAction.push(item);

    return this;
  }

  /** Adds an item to the participant array. @returns This instance for chaining. */
  addParticipant(item: PlanDefinitionActionParticipant): this {
    if (!this.participant) {
      this.participant = [];
    }

    this.participant.push(item);

    return this;
  }

  /** Adds an item to the dynamicValue array. @returns This instance for chaining. */
  addDynamicValue(item: PlanDefinitionActionDynamicValue): this {
    if (!this.dynamicValue) {
      this.dynamicValue = [];
    }

    this.dynamicValue.push(item);

    return this;
  }

  /** Adds an item to the action array. @returns This instance for chaining. */
  addAction(item: PlanDefinitionAction): this {
    if (!this.action) {
      this.action = [];
    }

    this.action.push(item);

    return this;
  }
}

/** FHIR R4 PlanDefinition — A pre-defined group of actions to be taken in particular circumstances. */
export class PlanDefinition extends DomainResource {

  readonly resourceType = 'PlanDefinition';

  /** An absolute URI that is used to identify this plan definition. */
  @IsOptional()
  @IsString()
  url?: string;

  /** A formal identifier that is used to identify this plan definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The identifier that is used to identify this version of the plan definition. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the plan definition. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short, descriptive, user-friendly title for the plan definition. */
  @IsOptional()
  @IsString()
  title?: string;

  /** An explanatory or alternate title for the plan definition. */
  @IsOptional()
  @IsString()
  subtitle?: string;

  /** A high-level category for the plan definition that distinguishes the kinds of systems that would be interested. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The status of this plan definition (draft, active, retired, unknown). */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** A Boolean value to indicate that this plan definition is for testing purposes. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** A code or group definition that describes the intended subject of the plan definition as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  subjectCodeableConcept?: CodeableConcept;

  /** A code or group definition that describes the intended subject of the plan definition as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subjectReference?: Reference;

  /** The date (and optionally time) when the plan definition was published. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization or individual that published the plan definition. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details to assist a user in finding and communicating with the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the plan definition. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The content was developed with a focus and intent of supporting the contexts that are listed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the plan definition is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Explanation of why this plan definition is needed and why it has been designed as it has. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** A detailed description of how the plan definition is used from a clinical perspective. */
  @IsOptional()
  @IsString()
  usage?: string;

  /** A copyright statement relating to the plan definition. */
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

  /** The period during which the plan definition content was or is planned to be in active use. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /** Descriptive topics related to the content of the plan definition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  topic?: CodeableConcept[];

  /** An individiual or organization primarily involved in the creation of the content. */
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

  /** An individual or organization responsible for officially endorsing the content. */
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

  /** A reference to a Library resource containing any formal logic used by the plan definition. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  library?: string[];

  /** Goals that describe what the activities within the plan are intended to achieve. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlanDefinitionGoal)
  goal?: PlanDefinitionGoal[];

  /** An action or group of actions to be taken as part of the plan. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlanDefinitionAction)
  action?: PlanDefinitionAction[];

  /** Creates a new PlanDefinition. @param props - Initial values. */
  constructor(props?: Partial<PlanDefinition>) {
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

  /** Adds an item to the goal array. @returns This instance for chaining. */
  addGoal(item: PlanDefinitionGoal): this {
    if (!this.goal) {
      this.goal = [];
    }

    this.goal.push(item);

    return this;
  }

  /** Adds an item to the action array. @returns This instance for chaining. */
  addAction(item: PlanDefinitionAction): this {
    if (!this.action) {
      this.action = [];
    }

    this.action.push(item);

    return this;
  }
}
