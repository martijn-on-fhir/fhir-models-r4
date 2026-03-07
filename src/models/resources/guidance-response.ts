import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';
import { GuidanceResponseStatus } from '../enums/guidance-response-status.js';

/** FHIR R4 GuidanceResponse resource — a container for the results of a decision support evaluation, providing the output of the evaluation along with any associated data. */
export class GuidanceResponse extends DomainResource {

  /** The type of FHIR resource. */
  readonly resourceType = 'GuidanceResponse';

  /** The identifier of the request associated with this response. If an identifier was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  requestIdentifier?: Identifier;

  /** Allows a service to provide unique, business identifiers for the response. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** An identifier, CodeableConcept, or canonical reference to the guidance that was requested. Expressed as a URI. */
  @IsOptional()
  @IsString()
  moduleUri?: string;

  /** An identifier, CodeableConcept, or canonical reference to the guidance that was requested. Expressed as a canonical reference. */
  @IsOptional()
  @IsString()
  moduleCanonical?: string;

  /** An identifier, CodeableConcept, or canonical reference to the guidance that was requested. Expressed as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  moduleCodeableConcept?: CodeableConcept;

  /** The status of the response. If the evaluation is completed successfully, the status will indicate success. */
  @IsOptional()
  @IsEnum(GuidanceResponseStatus)
  status?: GuidanceResponseStatus;

  /** The patient for which the request was processed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The encounter during which this response was created or to which the creation of this record is tightly associated. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** Indicates when the guidance response was processed. */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  /** Provides a reference to the device that performed the guidance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  performer?: Reference;

  /** Describes the reason for the guidance response in coded or textual form. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Indicates the reason the request was initiated, typically as references to other resources. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** Provides a mechanism to communicate additional information about the response. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Messages resulting from the evaluation of the artifact or artifacts. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  evaluationMessage?: Reference[];

  /** The output parameters of the evaluation, if any. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  outputParameters?: Reference;

  /** The actions, if any, produced by the evaluation of the artifact. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  result?: Reference;

  /** If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  dataRequirement?: Reference[];

  /** Creates a new {@link GuidanceResponse} instance. @param props - Initial property values. */
  constructor(props?: Partial<GuidanceResponse>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link GuidanceResponse.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link GuidanceResponse.reasonCode reasonCode} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addReasonCode(item: CodeableConcept): this {
    if (!this.reasonCode) {
      this.reasonCode = [];
    }

    this.reasonCode.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link GuidanceResponse.reasonReference reasonReference} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addReasonReference(item: Reference): this {
    if (!this.reasonReference) {
      this.reasonReference = [];
    }

    this.reasonReference.push(item);

    return this;
  }

  /** Adds an {@link Annotation} to the {@link GuidanceResponse.note note} array. @param item - The {@link Annotation} to add. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link GuidanceResponse.evaluationMessage evaluationMessage} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addEvaluationMessage(item: Reference): this {
    if (!this.evaluationMessage) {
      this.evaluationMessage = [];
    }

    this.evaluationMessage.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link GuidanceResponse.dataRequirement dataRequirement} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addDataRequirement(item: Reference): this {
    if (!this.dataRequirement) {
      this.dataRequirement = [];
    }

    this.dataRequirement.push(item);

    return this;
  }
}
