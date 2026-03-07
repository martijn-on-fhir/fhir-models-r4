import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { ConsentDataMeaning } from '../enums/consent-data-meaning.js';
import { ConsentProvisionType } from '../enums/consent-provision-type.js';
import { ConsentState } from '../enums/consent-state.js';

/** Backbone element for Consent — policies covered by this consent. */
export class ConsentPolicy extends BackboneElement {

  /** Enforcement source for the policy. */
  @IsOptional()
  @IsString()
  authority?: string;

  /** Specific policy covered by this consent. */
  @IsOptional()
  @IsString()
  uri?: string;

  /** Creates a new ConsentPolicy. @param props - Initial values. */
  constructor(props?: Partial<ConsentPolicy>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Consent — consent verification details. */
export class ConsentVerification extends BackboneElement {

  /** Has been verified. */
  @IsOptional()
  @IsBoolean()
  verified?: boolean;

  /** Person who verified the consent. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  verifiedWith?: Reference;

  /** When consent was verified. */
  @IsOptional()
  @IsString()
  verificationDate?: string;

  /** Creates a new ConsentVerification. @param props - Initial values. */
  constructor(props?: Partial<ConsentVerification>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Consent — who or what is controlled by this rule. */
export class ConsentProvisionActor extends BackboneElement {

  /** How the individual is involved. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /** Resource for the actor or group. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  reference?: Reference;

  /** Creates a new ConsentProvisionActor. @param props - Initial values. */
  constructor(props?: Partial<ConsentProvisionActor>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Consent — data controlled by this rule. */
export class ConsentProvisionData extends BackboneElement {

  /** How the resource reference is interpreted (instance | related | dependents | authoredby). */
  @IsOptional()
  @IsEnum(ConsentDataMeaning)
  meaning?: ConsentDataMeaning;

  /** The actual data reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  reference?: Reference;

  /** Creates a new ConsentProvisionData. @param props - Initial values. */
  constructor(props?: Partial<ConsentProvisionData>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Consent — constraints to the base consent policy. */
export class ConsentProvision extends BackboneElement {

  /** Whether the provision denies or permits (deny | permit). */
  @IsOptional()
  @IsEnum(ConsentProvisionType)
  type?: ConsentProvisionType;

  /** Timeframe for this rule. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Who or what is controlled by this rule. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConsentProvisionActor)
  actor?: ConsentProvisionActor[];

  /** Actions controlled by this rule. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  action?: CodeableConcept[];

  /** Security labels that define affected resources. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  securityLabel?: Coding[];

  /** Context of activities covered by this rule. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  purpose?: Coding[];

  /** E.g., resource type, profile, CDA, etc. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  class?: Coding[];

  /** E.g., LOINC or SNOMED CT code, etc. in the content. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /** Timeframe for data controlled by this rule. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  dataPeriod?: Period;

  /** Data controlled by this rule. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConsentProvisionData)
  data?: ConsentProvisionData[];

  /** Nested provisions (exceptions to the base policy). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConsentProvision)
  provision?: ConsentProvision[];

  /** Creates a new ConsentProvision. @param props - Initial values. */
  constructor(props?: Partial<ConsentProvision>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the actor array. @returns This instance for chaining. */
  addActor(item: ConsentProvisionActor): this {
    if (!this.actor) {
      this.actor = [];
    }

    this.actor.push(item);

    return this;
  }

  /** Adds an item to the action array. @returns This instance for chaining. */
  addAction(item: CodeableConcept): this {
    if (!this.action) {
      this.action = [];
    }

    this.action.push(item);

    return this;
  }

  /** Adds an item to the securityLabel array. @returns This instance for chaining. */
  addSecurityLabel(item: Coding): this {
    if (!this.securityLabel) {
      this.securityLabel = [];
    }

    this.securityLabel.push(item);

    return this;
  }

  /** Adds an item to the purpose array. @returns This instance for chaining. */
  addPurpose(item: Coding): this {
    if (!this.purpose) {
      this.purpose = [];
    }

    this.purpose.push(item);

    return this;
  }

  /** Adds an item to the class array. @returns This instance for chaining. */
  addClass(item: Coding): this {
    if (!this.class) {
      this.class = [];
    }

    this.class.push(item);

    return this;
  }

  /** Adds an item to the code array. @returns This instance for chaining. */
  addCode(item: CodeableConcept): this {
    if (!this.code) {
      this.code = [];
    }

    this.code.push(item);

    return this;
  }

  /** Adds an item to the data array. @returns This instance for chaining. */
  addData(item: ConsentProvisionData): this {
    if (!this.data) {
      this.data = [];
    }

    this.data.push(item);

    return this;
  }

  /** Adds an item to the provision array. @returns This instance for chaining. */
  addProvision(item: ConsentProvision): this {
    if (!this.provision) {
      this.provision = [];
    }

    this.provision.push(item);

    return this;
  }
}

/** FHIR R4 Consent — a record of a healthcare consumer's choices regarding data sharing. */
export class Consent extends DomainResource {

  /** The FHIR resource type string. */
  readonly resourceType = 'Consent';

  /** Business identifiers assigned to this consent. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Indicates the current state of this consent (draft | proposed | active | rejected | inactive | entered-in-error). */
  @IsOptional()
  @IsEnum(ConsentState)
  status?: ConsentState;

  /** Which of the four areas this resource covers (adr | research | patient-privacy | treatment). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  scope?: CodeableConcept;

  /** Classification of the consent statement. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** Who the consent applies to. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /** When this consent was created or indexed. */
  @IsOptional()
  @IsString()
  dateTime?: string;

  /** Who is agreeing to the policy and rules. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  performer?: Reference[];

  /** Custodian of the consent. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  organization?: Reference[];

  /** Source from which this consent is taken, as an Attachment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  sourceAttachment?: Attachment;

  /** Source from which this consent is taken, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  sourceReference?: Reference;

  /** Policies covered by this consent. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConsentPolicy)
  policy?: ConsentPolicy[];

  /** Regulation that this consents to. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  policyRule?: CodeableConcept;

  /** Consent verification details. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConsentVerification)
  verification?: ConsentVerification[];

  /** Constraints to the base consent policy. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ConsentProvision)
  provision?: ConsentProvision;

  /** Creates a new Consent. @param props - Initial values. */
  constructor(props?: Partial<Consent>) {
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

  /** Adds an item to the category array. @returns This instance for chaining. */
  addCategory(item: CodeableConcept): this {
    if (!this.category) {
      this.category = [];
    }

    this.category.push(item);

    return this;
  }

  /** Adds an item to the performer array. @returns This instance for chaining. */
  addPerformer(item: Reference): this {
    if (!this.performer) {
      this.performer = [];
    }

    this.performer.push(item);

    return this;
  }

  /** Adds an item to the organization array. @returns This instance for chaining. */
  addOrganization(item: Reference): this {
    if (!this.organization) {
      this.organization = [];
    }

    this.organization.push(item);

    return this;
  }

  /** Adds an item to the policy array. @returns This instance for chaining. */
  addPolicy(item: ConsentPolicy): this {
    if (!this.policy) {
      this.policy = [];
    }

    this.policy.push(item);

    return this;
  }

  /** Adds an item to the verification array. @returns This instance for chaining. */
  addVerification(item: ConsentVerification): this {
    if (!this.verification) {
      this.verification = [];
    }

    this.verification.push(item);

    return this;
  }
}
