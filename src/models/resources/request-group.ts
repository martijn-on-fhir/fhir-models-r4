import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Duration } from '../datatypes/duration.js';
import { Expression } from '../datatypes/expression.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Range } from '../datatypes/range.js';
import { Reference } from '../datatypes/reference.js';
import { RelatedArtifact } from '../datatypes/related-artifact.js';
import { Timing } from '../datatypes/timing.js';
import { ActionConditionKind } from '../enums/action-condition-kind.js';
import { ActionRelationshipType } from '../enums/action-relationship-type.js';
import { RequestIntent } from '../enums/request-intent.js';
import { RequestPriority } from '../enums/request-priority.js';
import { RequestStatus } from '../enums/request-status.js';

/** Backbone element for RequestGroup. */
export class RequestGroupActionCondition extends BackboneElement {

  /** The kind of condition (applicability, start, stop). */
  @IsOptional()
  @IsEnum(ActionConditionKind)
  kind?: ActionConditionKind;

  /** An expression that returns true or false, indicating whether the condition is satisfied. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  expression?: Expression;

  /** Creates a new RequestGroupActionCondition. @param props - Initial values. */
  constructor(props?: Partial<RequestGroupActionCondition>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for RequestGroup. */
export class RequestGroupActionRelatedAction extends BackboneElement {

  /** The element id of the action this is related to. */
  @IsOptional()
  @IsString()
  actionId?: string;

  /** The relationship of this action to the related action. */
  @IsOptional()
  @IsEnum(ActionRelationshipType)
  relationship?: ActionRelationshipType;

  /** A duration or range of durations to apply to the relationship as a Duration. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  offsetDuration?: Duration;

  /** A duration or range of durations to apply to the relationship as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  offsetRange?: Range;

  /** Creates a new RequestGroupActionRelatedAction. @param props - Initial values. */
  constructor(props?: Partial<RequestGroupActionRelatedAction>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for RequestGroup. */
export class RequestGroupAction extends BackboneElement {

  /** A user-visible prefix for the action. */
  @IsOptional()
  @IsString()
  prefix?: string;

  /** The title of the action displayed to a user. */
  @IsOptional()
  @IsString()
  title?: string;

  /** A short description of the action used to provide a summary. */
  @IsOptional()
  @IsString()
  description?: string;

  /** A text equivalent of the action to be performed. */
  @IsOptional()
  @IsString()
  textEquivalent?: string;

  /** Indicates how quickly the action should be addressed with respect to other actions. */
  @IsOptional()
  @IsString()
  priority?: string;

  /** A code that provides meaning for the action or action group. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /** Didactic or other informational resources associated with the action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RelatedArtifact)
  documentation?: RelatedArtifact[];

  /** An expression that describes applicability criteria or start/stop conditions for the action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RequestGroupActionCondition)
  condition?: RequestGroupActionCondition[];

  /** A relationship to another action such as before or after. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RequestGroupActionRelatedAction)
  relatedAction?: RequestGroupActionRelatedAction[];

  /** An optional value describing when the action should be performed as a dateTime. */
  @IsOptional()
  @IsString()
  timingDateTime?: string;

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

  /** The participant that should perform or be responsible for this action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  participant?: Reference[];

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

  /** The resource that is the target of the action. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  resource?: Reference;

  /** Sub actions. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RequestGroupAction)
  action?: RequestGroupAction[];

  /** Creates a new RequestGroupAction. @param props - Initial values. */
  constructor(props?: Partial<RequestGroupAction>) {
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

  /** Adds an item to the documentation array. @returns This instance for chaining. */
  addDocumentation(item: RelatedArtifact): this {
    if (!this.documentation) {
      this.documentation = [];
    }

    this.documentation.push(item);

    return this;
  }

  /** Adds an item to the condition array. @returns This instance for chaining. */
  addCondition(item: RequestGroupActionCondition): this {
    if (!this.condition) {
      this.condition = [];
    }

    this.condition.push(item);

    return this;
  }

  /** Adds an item to the relatedAction array. @returns This instance for chaining. */
  addRelatedAction(item: RequestGroupActionRelatedAction): this {
    if (!this.relatedAction) {
      this.relatedAction = [];
    }

    this.relatedAction.push(item);

    return this;
  }

  /** Adds an item to the participant array. @returns This instance for chaining. */
  addParticipant(item: Reference): this {
    if (!this.participant) {
      this.participant = [];
    }

    this.participant.push(item);

    return this;
  }

  /** Adds an item to the action array. @returns This instance for chaining. */
  addAction(item: RequestGroupAction): this {
    if (!this.action) {
      this.action = [];
    }

    this.action.push(item);

    return this;
  }
}

/** FHIR R4 RequestGroup — a group of related requests that can be used to capture intended activities. */
export class RequestGroup extends DomainResource {

  readonly resourceType = 'RequestGroup';

  /** Allows a service to provide a unique, business identifier for the request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** A canonical URL referencing a FHIR-defined protocol or guideline. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesCanonical?: string[];

  /** A URL referencing an externally defined protocol or guideline. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesUri?: string[];

  /** A plan, proposal, or order that is fulfilled by this request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** Completed or terminated request(s) whose function is taken by this new request. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  replaces?: Reference[];

  /** A shared identifier common to all requests that were authorized at the same time. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  groupIdentifier?: Identifier;

  /** The current state of the request. */
  @IsOptional()
  @IsEnum(RequestStatus)
  status?: RequestStatus;

  /** Indicates the level of authority/intentionality associated with the request. */
  @IsOptional()
  @IsEnum(RequestIntent)
  intent?: RequestIntent;

  /** Indicates how quickly the request should be addressed with respect to other requests. */
  @IsOptional()
  @IsEnum(RequestPriority)
  priority?: RequestPriority;

  /** A code that identifies what the overall request group is. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The subject for which the request group was created. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** Describes the context of the request group, if any. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** Indicates when the request group was created. */
  @IsOptional()
  @IsString()
  authoredOn?: string;

  /** Provides a reference to the author of the request group. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /** Describes the reason for the request group in coded or textual form. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Indicates another resource whose existence justifies this request group. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** Provides a mechanism to communicate additional information about the response. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** The actions, if any, produced by the evaluation of the artifact. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RequestGroupAction)
  action?: RequestGroupAction[];

  /** Creates a new RequestGroup. @param props - Initial values. */
  constructor(props?: Partial<RequestGroup>) {
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

  /** Adds an item to the replaces array. @returns This instance for chaining. */
  addReplaces(item: Reference): this {
    if (!this.replaces) {
      this.replaces = [];
    }

    this.replaces.push(item);

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

  /** Adds an item to the action array. @returns This instance for chaining. */
  addAction(item: RequestGroupAction): this {
    if (!this.action) {
      this.action = [];
    }

    this.action.push(item);

    return this;
  }
}
