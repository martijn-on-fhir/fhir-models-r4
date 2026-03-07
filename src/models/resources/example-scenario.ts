import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Identifier } from '../datatypes/identifier.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { ExampleScenarioActorType } from '../enums/example-scenario-actor-type.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for ExampleScenario. */
export class ExampleScenarioActor extends BackboneElement {

  /** A unique string within the scenario identifying the actor. */
  @IsOptional()
  @IsString()
  actorId?: string;

  /** The type of actor — person or entity. */
  @IsOptional()
  @IsEnum(ExampleScenarioActorType)
  type?: ExampleScenarioActorType;

  /** The name of the actor as shown in the page. */
  @IsOptional()
  @IsString()
  name?: string;

  /** The description of the actor. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Creates a new ExampleScenarioActor. @param props - Initial values. */
  constructor(props?: Partial<ExampleScenarioActor>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ExampleScenario. */
export class ExampleScenarioInstanceContainedInstance extends BackboneElement {

  /** Each resource contained in the instance. */
  @IsOptional()
  @IsString()
  resourceId?: string;

  /** A specific version of a resource contained in the instance. */
  @IsOptional()
  @IsString()
  versionId?: string;

  /** Creates a new ExampleScenarioInstanceContainedInstance. @param props - Initial values. */
  constructor(props?: Partial<ExampleScenarioInstanceContainedInstance>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ExampleScenario. */
export class ExampleScenarioInstanceVersion extends BackboneElement {

  /** The identifier of a specific version of the resource. */
  @IsOptional()
  @IsString()
  versionId?: string;

  /** The description of the resource version. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Creates a new ExampleScenarioInstanceVersion. @param props - Initial values. */
  constructor(props?: Partial<ExampleScenarioInstanceVersion>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ExampleScenario. */
export class ExampleScenarioInstance extends BackboneElement {

  /** The id of the resource for referencing. */
  @IsOptional()
  @IsString()
  resourceId?: string;

  /** The type of the resource. */
  @IsOptional()
  @IsString()
  resourceType?: string;

  /** A short name for the resource instance. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Human-friendly description of the resource instance. */
  @IsOptional()
  @IsString()
  description?: string;

  /** A specific version of the resource. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioInstanceVersion)
  version?: ExampleScenarioInstanceVersion[];

  /** Resources contained in the instance (e.g. the observations contained in a bundle). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioInstanceContainedInstance)
  containedInstance?: ExampleScenarioInstanceContainedInstance[];

  /** Creates a new ExampleScenarioInstance. @param props - Initial values. */
  constructor(props?: Partial<ExampleScenarioInstance>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the version array. @returns This instance for chaining. */
  addVersion(item: ExampleScenarioInstanceVersion): this {
    if (!this.version) {
      this.version = [];
    }

    this.version.push(item);

    return this;
  }

  /** Adds an item to the containedInstance array. @returns This instance for chaining. */
  addContainedInstance(item: ExampleScenarioInstanceContainedInstance): this {
    if (!this.containedInstance) {
      this.containedInstance = [];
    }

    this.containedInstance.push(item);

    return this;
  }
}

/** Backbone element for ExampleScenario. */
export class ExampleScenarioProcessStepOperation extends BackboneElement {

  /** The sequential number of the interaction. */
  @IsOptional()
  @IsString()
  number?: string;

  /** The type of operation (e.g. CRUD). */
  @IsOptional()
  @IsString()
  type?: string;

  /** The human-friendly name of the interaction. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Who starts the transaction. */
  @IsOptional()
  @IsString()
  initiator?: string;

  /** Who receives the transaction. */
  @IsOptional()
  @IsString()
  receiver?: string;

  /** A comment to be inserted in the diagram. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Whether the initiator is deactivated right after the transaction. */
  @IsOptional()
  @IsBoolean()
  initiatorActive?: boolean;

  /** Whether the receiver is deactivated right after the transaction. */
  @IsOptional()
  @IsBoolean()
  receiverActive?: boolean;

  /** Each resource instance used by the initiator. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ExampleScenarioInstanceContainedInstance)
  request?: ExampleScenarioInstanceContainedInstance;

  /** Each resource instance used by the responder. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ExampleScenarioInstanceContainedInstance)
  response?: ExampleScenarioInstanceContainedInstance;

  /** Creates a new ExampleScenarioProcessStepOperation. @param props - Initial values. */
  constructor(props?: Partial<ExampleScenarioProcessStepOperation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for ExampleScenario. */
export class ExampleScenarioProcessStepAlternative extends BackboneElement {

  /** The label to display for the alternative that gives a sense of the circumstance. */
  @IsOptional()
  @IsString()
  title?: string;

  /** A human-readable description of the alternative explaining when the alternative should occur. */
  @IsOptional()
  @IsString()
  description?: string;

  /** What happens in each alternative option. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioProcessStep)
  step?: ExampleScenarioProcessStep[];

  /** Creates a new ExampleScenarioProcessStepAlternative. @param props - Initial values. */
  constructor(props?: Partial<ExampleScenarioProcessStepAlternative>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the step array. @returns This instance for chaining. */
  addStep(item: ExampleScenarioProcessStep): this {
    if (!this.step) {
      this.step = [];
    }

    this.step.push(item);

    return this;
  }
}

/** Backbone element for ExampleScenario. */
export class ExampleScenarioProcessStep extends BackboneElement {

  /** Nested processes within this step. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioProcess)
  process?: ExampleScenarioProcess[];

  /** If there is a pause in the flow. */
  @IsOptional()
  @IsBoolean()
  pause?: boolean;

  /** Each interaction or activity within the step. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ExampleScenarioProcessStepOperation)
  operation?: ExampleScenarioProcessStepOperation;

  /** Indicates an alternative step that can be taken instead of the operations on the base step. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioProcessStepAlternative)
  alternative?: ExampleScenarioProcessStepAlternative[];

  /** Creates a new ExampleScenarioProcessStep. @param props - Initial values. */
  constructor(props?: Partial<ExampleScenarioProcessStep>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the process array. @returns This instance for chaining. */
  addProcess(item: ExampleScenarioProcess): this {
    if (!this.process) {
      this.process = [];
    }

    this.process.push(item);

    return this;
  }

  /** Adds an item to the alternative array. @returns This instance for chaining. */
  addAlternative(item: ExampleScenarioProcessStepAlternative): this {
    if (!this.alternative) {
      this.alternative = [];
    }

    this.alternative.push(item);

    return this;
  }
}

/** Backbone element for ExampleScenario. */
export class ExampleScenarioProcess extends BackboneElement {

  /** The diagram title of the group of operations. */
  @IsOptional()
  @IsString()
  title?: string;

  /** A longer description of the group of operations. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Description of initial status before the process starts. */
  @IsOptional()
  @IsString()
  preConditions?: string;

  /** Description of final status after the process ends. */
  @IsOptional()
  @IsString()
  postConditions?: string;

  /** Each step of the process. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioProcessStep)
  step?: ExampleScenarioProcessStep[];

  /** Creates a new ExampleScenarioProcess. @param props - Initial values. */
  constructor(props?: Partial<ExampleScenarioProcess>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the step array. @returns This instance for chaining. */
  addStep(item: ExampleScenarioProcessStep): this {
    if (!this.step) {
      this.step = [];
    }

    this.step.push(item);

    return this;
  }
}

/** FHIR R4 ExampleScenario — defines a set of interrelated actors and activities to convey a healthcare scenario. */
export class ExampleScenario extends DomainResource {

  /** Resource type constant. */
  readonly resourceType = 'ExampleScenario';

  /** An absolute URI that identifies this example scenario. */
  @IsOptional()
  @IsString()
  url?: string;

  /** Business identifiers assigned to this example scenario. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Business version of the example scenario. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the example scenario. */
  @IsOptional()
  @IsString()
  name?: string;

  /** The status of this example scenario (draft, active, retired, unknown). */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** Whether the example scenario is for testing purposes only. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** The date this resource was last changed. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization or individual that published the example scenario. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details for the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** The content was developed with a focus and intent of supporting the contexts that are listed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the example scenario is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** A copyright statement relating to the example scenario. */
  @IsOptional()
  @IsString()
  copyright?: string;

  /** What the example scenario is about and what it is used for. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** Actor participating in the resource. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioActor)
  actor?: ExampleScenarioActor[];

  /** Each resource and each version that is present in the workflow. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioInstance)
  instance?: ExampleScenarioInstance[];

  /** Each major process — a group of operations. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioProcess)
  process?: ExampleScenarioProcess[];

  /** Another nested workflow. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  workflow?: string[];

  /** Creates a new ExampleScenario. @param props - Initial values. */
  constructor(props?: Partial<ExampleScenario>) {
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

  /** Adds an item to the actor array. @returns This instance for chaining. */
  addActor(item: ExampleScenarioActor): this {
    if (!this.actor) {
      this.actor = [];
    }

    this.actor.push(item);

    return this;
  }

  /** Adds an item to the instance array. @returns This instance for chaining. */
  addInstance(item: ExampleScenarioInstance): this {
    if (!this.instance) {
      this.instance = [];
    }

    this.instance.push(item);

    return this;
  }

  /** Adds an item to the process array. @returns This instance for chaining. */
  addProcess(item: ExampleScenarioProcess): this {
    if (!this.process) {
      this.process = [];
    }

    this.process.push(item);

    return this;
  }

  /** Adds an item to the workflow array. @returns This instance for chaining. */
  addWorkflow(item: string): this {
    if (!this.workflow) {
      this.workflow = [];
    }

    this.workflow.push(item);

    return this;
  }
}
