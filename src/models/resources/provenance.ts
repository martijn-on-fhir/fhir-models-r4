import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { Signature } from '../datatypes/signature.js';
import { ProvenanceEntityRole } from '../enums/provenance-entity-role.js';

/** Backbone element for Provenance representing an actor taking a role in an activity. */
export class ProvenanceAgent extends BackboneElement {

  /** The participation the agent had with respect to the activity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The function of the agent with respect to the activity. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  role?: CodeableConcept[];

  /** The individual, device, or organization that participated in the event. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  who?: Reference;

  /** The individual, device, or organization for whom the change was made. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  onBehalfOf?: Reference;

  /** Creates a new ProvenanceAgent. @param props - Initial values. */
  constructor(props?: Partial<ProvenanceAgent>) {
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
}

/** Backbone element for Provenance representing an entity used in the activity. */
export class ProvenanceEntity extends BackboneElement {

  /** How the entity was used during the activity. */
  @IsOptional()
  @IsEnum(ProvenanceEntityRole)
  role?: ProvenanceEntityRole;

  /** Identity of the entity used, which must be a Resource or a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  what?: Reference;

  /** The entity is attributed to an agent to express the agent's responsibility for that entity. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProvenanceAgent)
  agent?: ProvenanceAgent[];

  /** Creates a new ProvenanceEntity. @param props - Initial values. */
  constructor(props?: Partial<ProvenanceEntity>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the agent array. @returns This instance for chaining. */
  addAgent(item: ProvenanceAgent): this {
    if (!this.agent) {
      this.agent = [];
    }

    this.agent.push(item);

    return this;
  }
}

/** FHIR R4 Provenance — Provenance of a resource, tracking who, what, when, where, and why. */
export class Provenance extends DomainResource {

  readonly resourceType = 'Provenance';

  /** The Reference(s) that were generated or updated by the activity described in this resource. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  target?: Reference[];

  /** The period during which the activity occurred, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  occurredPeriod?: Period;

  /** The period during which the activity occurred, as a dateTime. */
  @IsOptional()
  @IsString()
  occurredDateTime?: string;

  /** The instant of time at which the activity was recorded. */
  @IsOptional()
  @IsString()
  recorded?: string;

  /** Policy or plan the activity was defined by. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  policy?: string[];

  /** Where the activity occurred, if relevant. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /** The reason that the activity was taking place. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reason?: CodeableConcept[];

  /** An activity is something that occurs over a period of time and acts upon or with entities. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  activity?: CodeableConcept;

  /** An actor taking a role in an activity for which it can be assigned some degree of responsibility. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProvenanceAgent)
  agent?: ProvenanceAgent[];

  /** An entity used in this activity. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProvenanceEntity)
  entity?: ProvenanceEntity[];

  /** A digital signature on the target Reference(s). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Signature)
  signature?: Signature[];

  /** Creates a new Provenance. @param props - Initial values. */
  constructor(props?: Partial<Provenance>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the target array. @returns This instance for chaining. */
  addTarget(item: Reference): this {
    if (!this.target) {
      this.target = [];
    }

    this.target.push(item);

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

  /** Adds an item to the reason array. @returns This instance for chaining. */
  addReason(item: CodeableConcept): this {
    if (!this.reason) {
      this.reason = [];
    }

    this.reason.push(item);

    return this;
  }

  /** Adds an item to the agent array. @returns This instance for chaining. */
  addAgent(item: ProvenanceAgent): this {
    if (!this.agent) {
      this.agent = [];
    }

    this.agent.push(item);

    return this;
  }

  /** Adds an item to the entity array. @returns This instance for chaining. */
  addEntity(item: ProvenanceEntity): this {
    if (!this.entity) {
      this.entity = [];
    }

    this.entity.push(item);

    return this;
  }

  /** Adds an item to the signature array. @returns This instance for chaining. */
  addSignature(item: Signature): this {
    if (!this.signature) {
      this.signature = [];
    }

    this.signature.push(item);

    return this;
  }
}
