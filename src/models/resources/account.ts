import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { AccountStatus } from '../enums/account-status.js';

/** Backbone element for Account — coverage information for the account. */
export class AccountCoverage extends BackboneElement {

  /** Reference to the party responsible for payment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  coverage?: Reference;

  /** Relative order of the coverage for the account. */
  @IsOptional()
  @IsNumber()
  priority?: number;

  /** Creates a new AccountCoverage. @param props - Initial values. */
  constructor(props?: Partial<AccountCoverage>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Account — parties responsible for balances. */
export class AccountGuarantor extends BackboneElement {

  /** Reference to the responsible entity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  party?: Reference;

  /** Whether the guarantor credit is on hold. */
  @IsOptional()
  @IsBoolean()
  onHold?: boolean;

  /** Time period during which the guarantor is effective. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Creates a new AccountGuarantor. @param props - Initial values. */
  constructor(props?: Partial<AccountGuarantor>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 Account — tracks charges, costs, and balances for a patient or group. */
export class Account extends DomainResource {

  /** The FHIR resource type string. */
  readonly resourceType = 'Account';

  /** Business identifiers assigned to this account. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Current status of the account (active | inactive | entered-in-error | on-hold | unknown). */
  @IsOptional()
  @IsEnum(AccountStatus)
  status?: AccountStatus;

  /** Categorization of the account for reporting and searching. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Human-readable label for the account. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Identifies the entity which incurs the expenses. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  subject?: Reference[];

  /** The date range of services associated with this account. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  servicePeriod?: Period;

  /** The party(s) responsible for covering the cost of this account. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AccountCoverage)
  coverage?: AccountCoverage[];

  /** Organization responsible for the account. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  owner?: Reference;

  /** Human-readable explanation of the account. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The parties responsible for balancing the account if other sources do not cover. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AccountGuarantor)
  guarantor?: AccountGuarantor[];

  /** Reference to a parent account. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  partOf?: Reference;

  /** Creates a new Account. @param props - Initial values. */
  constructor(props?: Partial<Account>) {
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

  /** Adds an item to the subject array. @returns This instance for chaining. */
  addSubject(item: Reference): this {
    if (!this.subject) {
      this.subject = [];
    }

    this.subject.push(item);

    return this;
  }

  /** Adds an item to the coverage array. @returns This instance for chaining. */
  addCoverage(item: AccountCoverage): this {
    if (!this.coverage) {
      this.coverage = [];
    }

    this.coverage.push(item);

    return this;
  }

  /** Adds an item to the guarantor array. @returns This instance for chaining. */
  addGuarantor(item: AccountGuarantor): this {
    if (!this.guarantor) {
      this.guarantor = [];
    }

    this.guarantor.push(item);

    return this;
  }
}
