import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for MedicinalProductAuthorization. */
export class MedicinalProductAuthorizationJurisdictionalAuthorization extends BackboneElement {

  /** Business identifiers for the jurisdictional authorization. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Country of authorization. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  country?: CodeableConcept;

  /** Jurisdiction within a country. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** The legal status of supply in a jurisdiction or region. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  legalStatusOfSupply?: CodeableConcept;

  /** The start and expected end date of the authorization. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  validityPeriod?: Period;

  /** Creates a new MedicinalProductAuthorizationJurisdictionalAuthorization. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductAuthorizationJurisdictionalAuthorization>) {
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

  /** Adds an item to the jurisdiction array. @returns This instance for chaining. */
  addJurisdiction(item: CodeableConcept): this {
    if (!this.jurisdiction) {
      this.jurisdiction = [];
    }

    this.jurisdiction.push(item);

    return this;
  }
}

/** Backbone element for MedicinalProductAuthorization. */
export class MedicinalProductAuthorizationProcedure extends BackboneElement {

  /** Identifier for this procedure. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** Type of procedure. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Date of procedure as a period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  datePeriod?: Period;

  /** Date of procedure as a dateTime. */
  @IsOptional()
  @IsString()
  dateDateTime?: string;

  /** Applictions submitted to obtain a marketing authorization. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductAuthorizationProcedure)
  application?: MedicinalProductAuthorizationProcedure[];

  /** Creates a new MedicinalProductAuthorizationProcedure. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductAuthorizationProcedure>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the application array. @returns This instance for chaining. */
  addApplication(item: MedicinalProductAuthorizationProcedure): this {
    if (!this.application) {
      this.application = [];
    }

    this.application.push(item);

    return this;
  }
}

/** FHIR R4 MedicinalProductAuthorization — the regulatory authorization of a medicinal product. */
export class MedicinalProductAuthorization extends DomainResource {

  /** The FHIR resource type. */
  readonly resourceType = 'MedicinalProductAuthorization';

  /** Business identifier for the marketing authorization. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The medicinal product that is being authorized. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The country in which the marketing authorization has been granted. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  country?: CodeableConcept[];

  /** Jurisdiction within a country. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** The status of the marketing authorization. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /** The date at which the given status became applicable. */
  @IsOptional()
  @IsString()
  statusDate?: string;

  /** The date when a suspended authorization was restored. */
  @IsOptional()
  @IsString()
  restoreDate?: string;

  /** The beginning of the time period in which the authorization is effective. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  validityPeriod?: Period;

  /** A period of time after authorization before generic product applicants can submit applications. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  dataExclusivityPeriod?: Period;

  /** The date when the first authorization was granted by a Medicines Regulatory Agency. */
  @IsOptional()
  @IsString()
  dateOfFirstAuthorization?: string;

  /** Date of first marketing authorization for a company's new medicinal product in any country in the world. */
  @IsOptional()
  @IsString()
  internationalBirthDate?: string;

  /** The legal framework against which this authorization is granted. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  legalBasis?: CodeableConcept;

  /** Authorization in areas within a country. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductAuthorizationJurisdictionalAuthorization)
  jurisdictionalAuthorization?: MedicinalProductAuthorizationJurisdictionalAuthorization[];

  /** Marketing authorization holder. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  holder?: Reference;

  /** Medicines Regulatory Agency. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  regulator?: Reference;

  /** The regulatory procedure for granting or amending a marketing authorization. */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicinalProductAuthorizationProcedure)
  procedure?: MedicinalProductAuthorizationProcedure;

  /** Creates a new MedicinalProductAuthorization. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductAuthorization>) {
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

  /** Adds an item to the country array. @returns This instance for chaining. */
  addCountry(item: CodeableConcept): this {
    if (!this.country) {
      this.country = [];
    }

    this.country.push(item);

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

  /** Adds an item to the jurisdictionalAuthorization array. @returns This instance for chaining. */
  addJurisdictionalAuthorization(item: MedicinalProductAuthorizationJurisdictionalAuthorization): this {
    if (!this.jurisdictionalAuthorization) {
      this.jurisdictionalAuthorization = [];
    }

    this.jurisdictionalAuthorization.push(item);

    return this;
  }
}
