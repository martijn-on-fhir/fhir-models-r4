import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Reference } from '../datatypes/reference.js';
import { Signature } from '../datatypes/signature.js';
import { Timing } from '../datatypes/timing.js';
import { VerificationResultStatus } from '../enums/verification-result-status.js';

/** Backbone element for VerificationResult. */
export class VerificationResultPrimarySource extends BackboneElement {

  /** Reference to the primary source. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  who?: Reference;

  /** Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship Verify, etc). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /** Method for communicating with the primary source (manual; API; Push). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  communicationMethod?: CodeableConcept[];

  /** Status of the validation of the target against the primary source (successful; failed; unknown). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  validationStatus?: CodeableConcept;

  /** When the target was validated against the primary source. */
  @IsOptional()
  @IsString()
  validationDate?: string;

  /** Ability of the primary source to push updates/alerts (yes; no; undetermined). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  canPushUpdates?: CodeableConcept;

  /** Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  pushTypeAvailable?: CodeableConcept[];

  /** Creates a new VerificationResultPrimarySource. @param props - Initial values. */
  constructor(props?: Partial<VerificationResultPrimarySource>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the type array. @returns This instance for chaining. */
  addType(item: CodeableConcept): this {
    if (!this.type) {
      this.type = [];
    }

    this.type.push(item);

    return this;
  }

  /** Adds an item to the communicationMethod array. @returns This instance for chaining. */
  addCommunicationMethod(item: CodeableConcept): this {
    if (!this.communicationMethod) {
      this.communicationMethod = [];
    }

    this.communicationMethod.push(item);

    return this;
  }

  /** Adds an item to the pushTypeAvailable array. @returns This instance for chaining. */
  addPushTypeAvailable(item: CodeableConcept): this {
    if (!this.pushTypeAvailable) {
      this.pushTypeAvailable = [];
    }

    this.pushTypeAvailable.push(item);

    return this;
  }
}

/** Backbone element for VerificationResult. */
export class VerificationResultAttestation extends BackboneElement {

  /** The individual or organization attesting to information. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  who?: Reference;

  /** When the who is asserting on behalf of another (organization or individual). */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  onBehalfOf?: Reference;

  /** The method by which attested information was submitted/retrieved. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  communicationMethod?: CodeableConcept;

  /** The date the information was attested to. */
  @IsOptional()
  @IsString()
  date?: string;

  /** A digital identity certificate associated with the attestation source. */
  @IsOptional()
  @IsString()
  sourceIdentityCertificate?: string;

  /** A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source. */
  @IsOptional()
  @IsString()
  proxyIdentityCertificate?: string;

  /** Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Signature)
  proxySignature?: Signature;

  /** Signed assertion by the attestation source that they have attested to the information. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Signature)
  sourceSignature?: Signature;

  /** Creates a new VerificationResultAttestation. @param props - Initial values. */
  constructor(props?: Partial<VerificationResultAttestation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for VerificationResult. */
export class VerificationResultValidator extends BackboneElement {

  /** Reference to the organization validating information. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  organization?: Reference;

  /** A digital identity certificate associated with the validator. */
  @IsOptional()
  @IsString()
  identityCertificate?: string;

  /** Signed assertion by the validator that they have validated the information. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Signature)
  attestationSignature?: Signature;

  /** Creates a new VerificationResultValidator. @param props - Initial values. */
  constructor(props?: Partial<VerificationResultValidator>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 VerificationResult — describes validation requirements, source(s), status and dates for one or more elements. */
export class VerificationResult extends DomainResource {

  readonly resourceType = 'VerificationResult';

  /** A resource that was validated. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  target?: Reference[];

  /** The fhirpath location(s) within the resource that was validated. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  targetLocation?: string[];

  /** The frequency with which the target must be validated (none; initial; periodic). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  need?: CodeableConcept;

  /** The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed). */
  @IsOptional()
  @IsEnum(VerificationResultStatus)
  status?: VerificationResultStatus;

  /** When the validation status was updated. */
  @IsOptional()
  @IsString()
  statusDate?: string;

  /** What the target is validated against (nothing; primary source; multiple sources). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  validationType?: CodeableConcept;

  /** The primary process by which the target is validated. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  validationProcess?: CodeableConcept[];

  /** Frequency of revalidation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  frequency?: Timing;

  /** The date/time validation was last completed (including failed validations). */
  @IsOptional()
  @IsString()
  lastPerformed?: string;

  /** The date when target is next validated, if appropriate. */
  @IsOptional()
  @IsString()
  nextScheduled?: string;

  /** The result if validation fails (fatal; warning; record only; none). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  failureAction?: CodeableConcept;

  /** Information about the primary source(s) involved in validation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VerificationResultPrimarySource)
  primarySource?: VerificationResultPrimarySource[];

  /** Information about the entity attesting to information. */
  @IsOptional()
  @ValidateNested()
  @Type(() => VerificationResultAttestation)
  attestation?: VerificationResultAttestation;

  /** Information about the entity validating information. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VerificationResultValidator)
  validator?: VerificationResultValidator[];

  /** Creates a new VerificationResult. @param props - Initial values. */
  constructor(props?: Partial<VerificationResult>) {
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

  /** Adds an item to the targetLocation array. @returns This instance for chaining. */
  addTargetLocation(item: string): this {
    if (!this.targetLocation) {
      this.targetLocation = [];
    }

    this.targetLocation.push(item);

    return this;
  }

  /** Adds an item to the validationProcess array. @returns This instance for chaining. */
  addValidationProcess(item: CodeableConcept): this {
    if (!this.validationProcess) {
      this.validationProcess = [];
    }

    this.validationProcess.push(item);

    return this;
  }

  /** Adds an item to the primarySource array. @returns This instance for chaining. */
  addPrimarySource(item: VerificationResultPrimarySource): this {
    if (!this.primarySource) {
      this.primarySource = [];
    }

    this.primarySource.push(item);

    return this;
  }

  /** Adds an item to the validator array. @returns This instance for chaining. */
  addValidator(item: VerificationResultValidator): this {
    if (!this.validator) {
      this.validator = [];
    }

    this.validator.push(item);

    return this;
  }
}
