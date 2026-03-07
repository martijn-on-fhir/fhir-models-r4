import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Money } from '../datatypes/money.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { Timing } from '../datatypes/timing.js';
import { ChargeItemStatus } from '../enums/charge-item-status.js';

/** Backbone element for {@link ChargeItem.performer}. */
export class ChargeItemPerformer extends BackboneElement {

  /** Describes the type of performance or participation, e.g., primary surgeon, anesthesiologist. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  function?: CodeableConcept;

  /** The device, practitioner, or organization who performed or participated in the charged service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  actor?: Reference;

  /** Creates a new {@link ChargeItemPerformer} instance. @param props - Initial property values. */
  constructor(props?: Partial<ChargeItemPerformer>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 ChargeItem resource — the resource ChargeItem describes the provision of healthcare provider products for a certain patient,
 * therefore referring not only to the product, but containing in addition details of the provision, like date, time,
 * amounts and participating organizations and persons. */
export class ChargeItem extends DomainResource {

  /** The type of resource this is. Always 'ChargeItem'. */
  readonly resourceType = 'ChargeItem';

  /** Identifiers assigned to this charge item by the performer or other systems. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** References to external URIs that define this charge item. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  definitionUri?: string[];

  /** References to canonical URLs of ChargeItemDefinition resources that apply to this charge item. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  definitionCanonical?: string[];

  /** The current state of the charge item. Uses the ChargeItemStatus value set. */
  @IsOptional()
  @IsEnum(ChargeItemStatus)
  status?: ChargeItemStatus;

  /** ChargeItems can be grouped to larger ChargeItems covering the complete transaction. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /** A code that identifies the charge, like a billing code. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The individual or set of individuals the action is being or was performed on. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The encounter or episode of care that establishes the context for this charge item. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  context?: Reference;

  /** Date/time(s) or duration when the charged service was applied. Expressed as a dateTime. */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  /** Date/time(s) or duration when the charged service was applied. Expressed as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  occurrencePeriod?: Period;

  /** Date/time(s) or duration when the charged service was applied. Expressed as a Timing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  occurrenceTiming?: Timing;

  /** Indicates who or what performed or participated in the charged service. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChargeItemPerformer)
  performer?: ChargeItemPerformer[];

  /** The organization requesting the service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  performingOrganization?: Reference;

  /** The organization performing the service. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  requestingOrganization?: Reference;

  /** The financial cost center that permits the tracking of charge attribution. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  costCenter?: Reference;

  /** Quantity of which the charge item has been serviced. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** The anatomical location where the related service has been applied. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  bodysite?: CodeableConcept[];

  /** Factor overriding the factor determined by the rules associated with the code. */
  @IsOptional()
  @IsNumber()
  factorOverride?: number;

  /** Total price of the charge overriding the list price associated with the code. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  priceOverride?: Money;

  /** If the list price or the rule-based factor associated with the code is overridden, this attribute can capture a text to indicate the reason for this action. */
  @IsOptional()
  @IsString()
  overrideReason?: string;

  /** The device, practitioner, etc. who entered the charge item. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  enterer?: Reference;

  /** Date the charge item was entered. */
  @IsOptional()
  @IsString()
  enteredDate?: string;

  /** Describes why the event occurred in coded or textual form. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reason?: CodeableConcept[];

  /** Indicated the rendered service that caused this charge. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  service?: Reference[];

  /** Identifies the device, food, drug or other product being charged either by type code or reference to an instance. Expressed as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  productReference?: Reference;

  /** Identifies the device, food, drug or other product being charged either by type code or reference to an instance. Expressed as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  productCodeableConcept?: CodeableConcept;

  /** Account into which this ChargeItem is placed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  account?: Reference[];

  /** Comments made about the event by the performer, subject or other participants. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Further information supporting this charge. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supportingInformation?: Reference[];

  /** Creates a new {@link ChargeItem} instance. @param props - Initial property values. */
  constructor(props?: Partial<ChargeItem>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link ChargeItem.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a URI string to the {@link ChargeItem.definitionUri definitionUri} array. @param item - The URI string to add. @returns This instance for chaining. */
  addDefinitionUri(item: string): this {
    if (!this.definitionUri) {
      this.definitionUri = [];
    }

    this.definitionUri.push(item);

    return this;
  }

  /** Adds a canonical string to the {@link ChargeItem.definitionCanonical definitionCanonical} array. @param item - The canonical string to add. @returns This instance for chaining. */
  addDefinitionCanonical(item: string): this {
    if (!this.definitionCanonical) {
      this.definitionCanonical = [];
    }

    this.definitionCanonical.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link ChargeItem.partOf partOf} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addPartOf(item: Reference): this {
    if (!this.partOf) {
      this.partOf = [];
    }

    this.partOf.push(item);

    return this;
  }

  /** Adds a {@link ChargeItemPerformer} to the {@link ChargeItem.performer performer} array. @param item - The {@link ChargeItemPerformer} to add. @returns This instance for chaining. */
  addPerformer(item: ChargeItemPerformer): this {
    if (!this.performer) {
      this.performer = [];
    }

    this.performer.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link ChargeItem.bodysite bodysite} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addBodysite(item: CodeableConcept): this {
    if (!this.bodysite) {
      this.bodysite = [];
    }

    this.bodysite.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link ChargeItem.reason reason} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addReason(item: CodeableConcept): this {
    if (!this.reason) {
      this.reason = [];
    }

    this.reason.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link ChargeItem.service service} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addService(item: Reference): this {
    if (!this.service) {
      this.service = [];
    }

    this.service.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link ChargeItem.account account} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addAccount(item: Reference): this {
    if (!this.account) {
      this.account = [];
    }

    this.account.push(item);

    return this;
  }

  /** Adds an {@link Annotation} to the {@link ChargeItem.note note} array. @param item - The {@link Annotation} to add. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link ChargeItem.supportingInformation supportingInformation} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addSupportingInformation(item: Reference): this {
    if (!this.supportingInformation) {
      this.supportingInformation = [];
    }

    this.supportingInformation.push(item);

    return this;
  }
}
