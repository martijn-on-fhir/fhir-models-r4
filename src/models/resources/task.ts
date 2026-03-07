import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { TaskIntent } from '../enums/task-intent.js';
import { TaskStatus } from '../enums/task-status.js';

/** Backbone element for Task. */
export class TaskRestriction extends BackboneElement {

  /** Indicates the number of times the requested action should occur. */
  @IsOptional()
  @IsNumber()
  repetitions?: number;

  /** Over what time-period is fulfillment sought. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** For requests that are targeted to more than one potential recipient/target, to identify who is fulfillment is sought for. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  recipient?: Reference[];

  /** Creates a new TaskRestriction. @param props - Initial values. */
  constructor(props?: Partial<TaskRestriction>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the recipient array. @returns This instance for chaining. */
  addRecipient(item: Reference): this {
    if (!this.recipient) {
      this.recipient = [];
    }

    this.recipient.push(item);

    return this;
  }
}

/** Backbone element for Task. */
export class TaskInput extends BackboneElement {

  /** A code or description indicating how the input is intended to be used as part of the task execution. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The value of the input parameter as a string. */
  @IsOptional()
  @IsString()
  valueString?: string;

  /** The value of the input parameter as a boolean. */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  /** The value of the input parameter as an integer. */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /** The value of the input parameter as a date. */
  @IsOptional()
  @IsString()
  valueDate?: string;

  /** The value of the input parameter as a dateTime. */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  /** The value of the input parameter as a time. */
  @IsOptional()
  @IsString()
  valueTime?: string;

  /** The value of the input parameter as a URI. */
  @IsOptional()
  @IsString()
  valueUri?: string;

  /** The value of the input parameter as a URL. */
  @IsOptional()
  @IsString()
  valueUrl?: string;

  /** The value of the input parameter as a canonical URL. */
  @IsOptional()
  @IsString()
  valueCanonical?: string;

  /** The value of the input parameter as base64 binary. */
  @IsOptional()
  @IsString()
  valueBase64Binary?: string;

  /** The value of the input parameter as an instant. */
  @IsOptional()
  @IsString()
  valueInstant?: string;

  /** The value of the input parameter as markdown. */
  @IsOptional()
  @IsString()
  valueMarkdown?: string;

  /** The value of the input parameter as an OID. */
  @IsOptional()
  @IsString()
  valueOid?: string;

  /** The value of the input parameter as a UUID. */
  @IsOptional()
  @IsString()
  valueUuid?: string;

  /** The value of the input parameter as an id. */
  @IsOptional()
  @IsString()
  valueId?: string;

  /** The value of the input parameter as an unsigned integer. */
  @IsOptional()
  @IsNumber()
  valueUnsignedInt?: number;

  /** The value of the input parameter as a positive integer. */
  @IsOptional()
  @IsNumber()
  valuePositiveInt?: number;

  /** The value of the input parameter as a decimal. */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /** The value of the input parameter as a code. */
  @IsOptional()
  @IsString()
  valueCode?: string;

  /** The value of the input parameter as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /** The value of the input parameter as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  valueCodeableConcept?: CodeableConcept;

  /** The value of the input parameter as an Identifier. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  valueIdentifier?: Identifier;

  /** The value of the input parameter as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  valuePeriod?: Period;

  /** Creates a new TaskInput. @param props - Initial values. */
  constructor(props?: Partial<TaskInput>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Task. */
export class TaskOutput extends BackboneElement {

  /** The name of the Output parameter. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The value of the output parameter as a string. */
  @IsOptional()
  @IsString()
  valueString?: string;

  /** The value of the output parameter as a boolean. */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  /** The value of the output parameter as an integer. */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /** The value of the output parameter as a date. */
  @IsOptional()
  @IsString()
  valueDate?: string;

  /** The value of the output parameter as a dateTime. */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  /** The value of the output parameter as a time. */
  @IsOptional()
  @IsString()
  valueTime?: string;

  /** The value of the output parameter as a URI. */
  @IsOptional()
  @IsString()
  valueUri?: string;

  /** The value of the output parameter as a URL. */
  @IsOptional()
  @IsString()
  valueUrl?: string;

  /** The value of the output parameter as a canonical URL. */
  @IsOptional()
  @IsString()
  valueCanonical?: string;

  /** The value of the output parameter as base64 binary. */
  @IsOptional()
  @IsString()
  valueBase64Binary?: string;

  /** The value of the output parameter as an instant. */
  @IsOptional()
  @IsString()
  valueInstant?: string;

  /** The value of the output parameter as markdown. */
  @IsOptional()
  @IsString()
  valueMarkdown?: string;

  /** The value of the output parameter as an OID. */
  @IsOptional()
  @IsString()
  valueOid?: string;

  /** The value of the output parameter as a UUID. */
  @IsOptional()
  @IsString()
  valueUuid?: string;

  /** The value of the output parameter as an id. */
  @IsOptional()
  @IsString()
  valueId?: string;

  /** The value of the output parameter as an unsigned integer. */
  @IsOptional()
  @IsNumber()
  valueUnsignedInt?: number;

  /** The value of the output parameter as a positive integer. */
  @IsOptional()
  @IsNumber()
  valuePositiveInt?: number;

  /** The value of the output parameter as a decimal. */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /** The value of the output parameter as a code. */
  @IsOptional()
  @IsString()
  valueCode?: string;

  /** The value of the output parameter as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /** The value of the output parameter as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  valueCodeableConcept?: CodeableConcept;

  /** The value of the output parameter as an Identifier. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  valueIdentifier?: Identifier;

  /** The value of the output parameter as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  valuePeriod?: Period;

  /** Creates a new TaskOutput. @param props - Initial values. */
  constructor(props?: Partial<TaskOutput>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 Task — a task to be performed. */
export class Task extends DomainResource {

  readonly resourceType = 'Task';

  /** The business identifier for this task. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition. */
  @IsOptional()
  @IsString()
  instantiatesCanonical?: string;

  /** The URL pointing to an externally maintained protocol, guideline, orderset or other definition. */
  @IsOptional()
  @IsString()
  instantiatesUri?: string;

  /** BasedOn refers to a higher-level authorization that triggered the creation of the task. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** An identifier that links together multiple tasks and other requests that were created in the same context. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  groupIdentifier?: Identifier;

  /** Task that this particular task is part of. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /** The current status of the task. */
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  /** An explanation as to why this task is held, failed, was refused, etc. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  statusReason?: CodeableConcept;

  /** Contains business-specific nuances of the business state. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  businessStatus?: CodeableConcept;

  /** Indicates the "level" of actionability associated with the Task. */
  @IsOptional()
  @IsEnum(TaskIntent)
  intent?: TaskIntent;

  /** Indicates how quickly the Task should be addressed with respect to other requests. */
  @IsOptional()
  @IsString()
  priority?: string;

  /** A name or code (or both) briefly describing what the task involves. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** A free-text description of what is to be performed. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The request being actioned or the resource being manipulated by this task. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  focus?: Reference;

  /** The entity who benefits from the performance of the service specified in the task. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  for?: Reference;

  /** The healthcare event (e.g., a patient and healthcare provider interaction) during which this task was created. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** Identifies the time action was first taken against the task and not the time of the most recent update. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  executionPeriod?: Period;

  /** The date and time this task was created. */
  @IsOptional()
  @IsString()
  authoredOn?: string;

  /** The date and time of last modification to this task. */
  @IsOptional()
  @IsString()
  lastModified?: string;

  /** The creator of the task. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  requester?: Reference;

  /** The kind of participant that should perform the task. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  performerType?: CodeableConcept[];

  /** Individual organization or Device currently responsible for task execution. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  owner?: Reference;

  /** Principal physical location where the this task is performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /** A description or code indicating why this task needs to be performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept;

  /** A resource reference indicating why this task needs to be performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  reasonReference?: Reference;

  /** Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  insurance?: Reference[];

  /** Free-text information captured about the task as it progresses. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Links to Provenance records for past versions of this Task that identify key state transitions or updates. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  relevantHistory?: Reference[];

  /** If the Task.focus is a request resource and the task is seeking fulfillment, this element identifies any limitations on what parts of the referenced request should be actioned. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TaskRestriction)
  restriction?: TaskRestriction;

  /** Additional information that may be needed in the execution of the task. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TaskInput)
  input?: TaskInput[];

  /** Outputs produced by the Task. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TaskOutput)
  output?: TaskOutput[];

  /** Creates a new Task. @param props - Initial values. */
  constructor(props?: Partial<Task>) {
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

  /** Adds an item to the performerType array. @returns This instance for chaining. */
  addPerformerType(item: CodeableConcept): this {
    if (!this.performerType) {
      this.performerType = [];
    }

    this.performerType.push(item);

    return this;
  }

  /** Adds an item to the insurance array. @returns This instance for chaining. */
  addInsurance(item: Reference): this {
    if (!this.insurance) {
      this.insurance = [];
    }

    this.insurance.push(item);

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

  /** Adds an item to the relevantHistory array. @returns This instance for chaining. */
  addRelevantHistory(item: Reference): this {
    if (!this.relevantHistory) {
      this.relevantHistory = [];
    }

    this.relevantHistory.push(item);

    return this;
  }

  /** Adds an item to the input array. @returns This instance for chaining. */
  addInput(item: TaskInput): this {
    if (!this.input) {
      this.input = [];
    }

    this.input.push(item);

    return this;
  }

  /** Adds an item to the output array. @returns This instance for chaining. */
  addOutput(item: TaskOutput): this {
    if (!this.output) {
      this.output = [];
    }

    this.output.push(item);

    return this;
  }
}
