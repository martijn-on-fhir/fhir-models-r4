import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { AuditEventAction } from '../enums/audit-event-action.js';
import { AuditEventAgentNetworkType } from '../enums/audit-event-agent-network-type.js';
import { AuditEventOutcome } from '../enums/audit-event-outcome.js';

/** Backbone element for AuditEvent — network access point details of the agent. */
export class AuditEventAgentNetwork extends BackboneElement {

  /** Identifier for the network access point of the user device. */
  @IsOptional()
  @IsString()
  address?: string;

  /** The type of network access point. */
  @IsOptional()
  @IsEnum(AuditEventAgentNetworkType)
  type?: AuditEventAgentNetworkType;

  /** Creates a new AuditEventAgentNetwork. @param props - Initial values. */
  constructor(props?: Partial<AuditEventAgentNetwork>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for AuditEvent — actor involved in the event. */
export class AuditEventAgent extends BackboneElement {

  /** How the agent participated in the event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Agent role in the event. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  role?: CodeableConcept[];

  /** Identifier of who participated. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  who?: Reference;

  /** Alternative user identity. */
  @IsOptional()
  @IsString()
  altId?: string;

  /** Human-friendly name for the agent. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Whether the user is the requestor. */
  @IsOptional()
  @IsBoolean()
  requestor?: boolean;

  /** Where the event occurred. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /** Policy that authorized the event. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  policy?: string[];

  /** Type of media involved in the event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  media?: Coding;

  /** Logical network location for application activity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => AuditEventAgentNetwork)
  network?: AuditEventAgentNetwork;

  /** Reason given for this agent involvement. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  purposeOfUse?: CodeableConcept[];

  /** Creates a new AuditEventAgent. @param props - Initial values. */
  constructor(props?: Partial<AuditEventAgent>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the role array. @returns This instance for chaining. */
  addRole(item: CodeableConcept): this {
    if (!this.role) {
      this.role = [];
    }

    this.role.push(item);

    return this;
  }

  /** Adds an item to the policy array. @returns This instance for chaining. */
  addPolicy(item: string): this {
    if (!this.policy) {
      this.policy = [];
    }

    this.policy.push(item);

    return this;
  }

  /** Adds an item to the purposeOfUse array. @returns This instance for chaining. */
  addPurposeOfUse(item: CodeableConcept): this {
    if (!this.purposeOfUse) {
      this.purposeOfUse = [];
    }

    this.purposeOfUse.push(item);

    return this;
  }
}

/** Backbone element for AuditEvent — audit event reporter. */
export class AuditEventSource extends BackboneElement {

  /** Logical source location within the enterprise. */
  @IsOptional()
  @IsString()
  site?: string;

  /** The identity of source detecting the event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  observer?: Reference;

  /** The type of source where event originated. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  type?: Coding[];

  /** Creates a new AuditEventSource. @param props - Initial values. */
  constructor(props?: Partial<AuditEventSource>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the type array. @returns This instance for chaining. */
  addType(item: Coding): this {
    if (!this.type) {
      this.type = [];
    }

    this.type.push(item);

    return this;
  }
}

/** Backbone element for AuditEvent — additional information about the entity. */
export class AuditEventEntityDetail extends BackboneElement {

  /** Name of the property. */
  @IsOptional()
  @IsString()
  type?: string;

  /** Property value, as a string. */
  @IsOptional()
  @IsString()
  valueString?: string;

  /** Property value, as a base64Binary. */
  @IsOptional()
  @IsString()
  valueBase64Binary?: string;

  /** Creates a new AuditEventEntityDetail. @param props - Initial values. */
  constructor(props?: Partial<AuditEventEntityDetail>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for AuditEvent — specific instances of data or objects accessed. */
export class AuditEventEntity extends BackboneElement {

  /** Identifies a specific instance of the entity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  what?: Reference;

  /** The type of the object that was involved. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  type?: Coding;

  /** What role the entity played in the event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  role?: Coding;

  /** Life-cycle stage for the entity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  lifecycle?: Coding;

  /** Security labels on the entity. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  securityLabel?: Coding[];

  /** Descriptor for the entity. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Text that describes the entity in more detail. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Query parameters for the entity. */
  @IsOptional()
  @IsString()
  query?: string;

  /** Additional information about the entity. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AuditEventEntityDetail)
  detail?: AuditEventEntityDetail[];

  /** Creates a new AuditEventEntity. @param props - Initial values. */
  constructor(props?: Partial<AuditEventEntity>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the securityLabel array. @returns This instance for chaining. */
  addSecurityLabel(item: Coding): this {
    if (!this.securityLabel) {
      this.securityLabel = [];
    }

    this.securityLabel.push(item);

    return this;
  }

  /** Adds an item to the detail array. @returns This instance for chaining. */
  addDetail(item: AuditEventEntityDetail): this {
    if (!this.detail) {
      this.detail = [];
    }

    this.detail.push(item);

    return this;
  }
}

/** FHIR R4 AuditEvent — a record of an event made for security purposes. */
export class AuditEvent extends DomainResource {

  /** The FHIR resource type string. */
  readonly resourceType = 'AuditEvent';

  /** Identifier for a specific audited event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  type?: Coding;

  /** More specific type/id for the event. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  subtype?: Coding[];

  /** Type of action performed during the event. */
  @IsOptional()
  @IsEnum(AuditEventAction)
  action?: AuditEventAction;

  /** When the activity occurred. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** When the activity was recorded. */
  @IsOptional()
  @IsString()
  recorded?: string;

  /** Whether the event succeeded or failed. */
  @IsOptional()
  @IsEnum(AuditEventOutcome)
  outcome?: AuditEventOutcome;

  /** Description of the event outcome. */
  @IsOptional()
  @IsString()
  outcomeDesc?: string;

  /** The purposeOfUse of the event. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  purposeOfEvent?: CodeableConcept[];

  /** Actor involved in the event. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AuditEventAgent)
  agent?: AuditEventAgent[];

  /** Audit event reporter. */
  @IsOptional()
  @ValidateNested()
  @Type(() => AuditEventSource)
  source?: AuditEventSource;

  /** Data or objects used in the event. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AuditEventEntity)
  entity?: AuditEventEntity[];

  /** Creates a new AuditEvent. @param props - Initial values. */
  constructor(props?: Partial<AuditEvent>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the subtype array. @returns This instance for chaining. */
  addSubtype(item: Coding): this {
    if (!this.subtype) {
      this.subtype = [];
    }

    this.subtype.push(item);

    return this;
  }

  /** Adds an item to the purposeOfEvent array. @returns This instance for chaining. */
  addPurposeOfEvent(item: CodeableConcept): this {
    if (!this.purposeOfEvent) {
      this.purposeOfEvent = [];
    }

    this.purposeOfEvent.push(item);

    return this;
  }

  /** Adds an item to the agent array. @returns This instance for chaining. */
  addAgent(item: AuditEventAgent): this {
    if (!this.agent) {
      this.agent = [];
    }

    this.agent.push(item);

    return this;
  }

  /** Adds an item to the entity array. @returns This instance for chaining. */
  addEntity(item: AuditEventEntity): this {
    if (!this.entity) {
      this.entity = [];
    }

    this.entity.push(item);

    return this;
  }
}
