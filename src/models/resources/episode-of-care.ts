import { Type } from 'class-transformer';
import { IsOptional, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { EpisodeOfCareStatus } from '../enums/episode-of-care-status.js';

/** Backbone element for {@link EpisodeOfCare.statusHistory}. */
export class EpisodeOfCareStatusHistory extends BackboneElement {

  /** The status of the episode of care during the indicated period. */
  @IsOptional()
  @IsEnum(EpisodeOfCareStatus)
  status?: EpisodeOfCareStatus;

  /** The period during this EpisodeOfCare that the specific status applied. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Creates a new {@link EpisodeOfCareStatusHistory} instance. @param props - Initial property values. */
  constructor(props?: Partial<EpisodeOfCareStatusHistory>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link EpisodeOfCare.diagnosis}. */
export class EpisodeOfCareDiagnosis extends BackboneElement {

  /** A reference to the condition that is the reason for the episode of care. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  condition?: Reference;

  /** Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /** Ranking of the diagnosis (for each role type). */
  @IsOptional()
  rank?: number;

  /** Creates a new {@link EpisodeOfCareDiagnosis} instance. @param props - Initial property values. */
  constructor(props?: Partial<EpisodeOfCareDiagnosis>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 EpisodeOfCare resource — an association between a patient and an organization/healthcare provider(s) during which time encounters may occur. */
export class EpisodeOfCare extends DomainResource {

  /** The type of FHIR resource. */
  readonly resourceType = 'EpisodeOfCare';

  /** Business identifiers assigned to this episode of care by the performer or other systems. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The current status of the episode of care. */
  @IsOptional()
  @IsEnum(EpisodeOfCareStatus)
  status?: EpisodeOfCareStatus;

  /** The history of statuses that the EpisodeOfCare has been through without requiring a new resource instance. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EpisodeOfCareStatusHistory)
  statusHistory?: EpisodeOfCareStatusHistory[];

  /** A classification of the type of episode of care. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /** The list of diagnosis relevant to this episode of care. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EpisodeOfCareDiagnosis)
  diagnosis?: EpisodeOfCareDiagnosis[];

  /** The patient who is the focus of this episode of care. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /** The organization that has assumed the specific responsibilities for the specified duration. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  managingOrganization?: Reference;

  /** The interval during which the managing organization assumes the defined responsibility. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Referral request(s) that are fulfilled by this EpisodeOfCare, incoming referrals. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  referralRequest?: Reference[];

  /** The practitioner that is the care manager/care coordinator for this patient. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  careManager?: Reference;

  /** The list of practitioners that may be facilitating this episode of care for specific purposes. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  team?: Reference[];

  /** The set of accounts that may be used for billing for this EpisodeOfCare. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  account?: Reference[];

  /** Creates a new {@link EpisodeOfCare} instance. @param props - Initial property values. */
  constructor(props?: Partial<EpisodeOfCare>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link EpisodeOfCare.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds an {@link EpisodeOfCareStatusHistory} to the {@link EpisodeOfCare.statusHistory statusHistory} array. @param item - The {@link EpisodeOfCareStatusHistory} to add. @returns This instance for chaining. */
  addStatusHistory(item: EpisodeOfCareStatusHistory): this {
    if (!this.statusHistory) {
      this.statusHistory = [];
    }

    this.statusHistory.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link EpisodeOfCare.type type} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addType(item: CodeableConcept): this {
    if (!this.type) {
      this.type = [];
    }

    this.type.push(item);

    return this;
  }

  /** Adds an {@link EpisodeOfCareDiagnosis} to the {@link EpisodeOfCare.diagnosis diagnosis} array. @param item - The {@link EpisodeOfCareDiagnosis} to add. @returns This instance for chaining. */
  addDiagnosis(item: EpisodeOfCareDiagnosis): this {
    if (!this.diagnosis) {
      this.diagnosis = [];
    }

    this.diagnosis.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link EpisodeOfCare.referralRequest referralRequest} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addReferralRequest(item: Reference): this {
    if (!this.referralRequest) {
      this.referralRequest = [];
    }

    this.referralRequest.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link EpisodeOfCare.team team} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addTeam(item: Reference): this {
    if (!this.team) {
      this.team = [];
    }

    this.team.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link EpisodeOfCare.account account} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addAccount(item: Reference): this {
    if (!this.account) {
      this.account = [];
    }

    this.account.push(item);

    return this;
  }
}
