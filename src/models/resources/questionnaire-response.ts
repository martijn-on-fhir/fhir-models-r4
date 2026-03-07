import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Attachment } from '../datatypes/attachment.js';
import { Coding } from '../datatypes/coding.js';
import { Identifier } from '../datatypes/identifier.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { QuestionnaireResponseStatus } from '../enums/questionnaire-response-status.js';

/** Backbone element for QuestionnaireResponse. */
export class QuestionnaireResponseItemAnswer extends BackboneElement {

  /** The answer value as a boolean. */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  /** The answer value as a decimal. */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /** The answer value as an integer. */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /** The answer value as a date. */
  @IsOptional()
  @IsString()
  valueDate?: string;

  /** The answer value as a dateTime. */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  /** The answer value as a time. */
  @IsOptional()
  @IsString()
  valueTime?: string;

  /** The answer value as a string. */
  @IsOptional()
  @IsString()
  valueString?: string;

  /** The answer value as a URI. */
  @IsOptional()
  @IsString()
  valueUri?: string;

  /** The answer value as an Attachment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  valueAttachment?: Attachment;

  /** The answer value as a Coding. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  valueCoding?: Coding;

  /** The answer value as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /** The answer value as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /** Nested groups and/or questions found within this particular answer. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireResponseItem)
  item?: QuestionnaireResponseItem[];

  /** Creates a new QuestionnaireResponseItemAnswer. @param props - Initial values. */
  constructor(props?: Partial<QuestionnaireResponseItemAnswer>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the item array. @returns This instance for chaining. */
  addItem(item: QuestionnaireResponseItem): this {
    if (!this.item) {
      this.item = [];
    }

    this.item.push(item);

    return this;
  }
}

/** Backbone element for QuestionnaireResponse. */
export class QuestionnaireResponseItem extends BackboneElement {

  /** The item from the Questionnaire that corresponds to this item in the response. */
  @IsOptional()
  @IsString()
  linkId?: string;

  /** A reference to an ElementDefinition that provides the details for the item. */
  @IsOptional()
  @IsString()
  definition?: string;

  /** Text that is displayed above the contents of the group or as the text of the question. */
  @IsOptional()
  @IsString()
  text?: string;

  /** The respondent's answer(s) to the question. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireResponseItemAnswer)
  answer?: QuestionnaireResponseItemAnswer[];

  /** Questions or sub-groups nested beneath a question or group. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireResponseItem)
  item?: QuestionnaireResponseItem[];

  /** Creates a new QuestionnaireResponseItem. @param props - Initial values. */
  constructor(props?: Partial<QuestionnaireResponseItem>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the answer array. @returns This instance for chaining. */
  addAnswer(item: QuestionnaireResponseItemAnswer): this {
    if (!this.answer) {
      this.answer = [];
    }

    this.answer.push(item);

    return this;
  }

  /** Adds an item to the item array. @returns This instance for chaining. */
  addItem(item: QuestionnaireResponseItem): this {
    if (!this.item) {
      this.item = [];
    }

    this.item.push(item);

    return this;
  }
}

/** FHIR R4 QuestionnaireResponse — a structured set of answers to a set of questions. */
export class QuestionnaireResponse extends DomainResource {

  readonly resourceType = 'QuestionnaireResponse';

  /** A business identifier assigned to a particular completed questionnaire. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** The order, proposal, or plan that is fulfilled by this questionnaire response. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /** A procedure or observation that this questionnaire was performed as part of. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /** The Questionnaire that defines and organizes the questions for which answers are being provided. */
  @IsOptional()
  @IsString()
  questionnaire?: string;

  /** The position of the questionnaire response within its overall lifecycle. */
  @IsOptional()
  @IsEnum(QuestionnaireResponseStatus)
  status?: QuestionnaireResponseStatus;

  /** The subject of the questionnaire response. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The encounter during which this questionnaire response was created or to which it is relevant. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** The date and/or time that this set of answers were last changed. */
  @IsOptional()
  @IsString()
  authored?: string;

  /** Person who received and recorded the answers. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /** The person who answered the questions about the subject. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  source?: Reference;

  /** A group or question item from the original questionnaire for which answers are provided. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireResponseItem)
  item?: QuestionnaireResponseItem[];

  /** Creates a new QuestionnaireResponse. @param props - Initial values. */
  constructor(props?: Partial<QuestionnaireResponse>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the basedOn array. @returns This instance for chaining. */
  addBasedOn(item: Reference): this {
    if (!this.basedOn) {
      this.basedOn = [];
    }

    this.basedOn.push(item);

    return this;
  }

  /** Adds an item to the partOf array. @returns This instance for chaining. */
  addPartOf(item: Reference): this {
    if (!this.partOf) {
      this.partOf = [];
    }

    this.partOf.push(item);

    return this;
  }

  /** Adds an item to the item array. @returns This instance for chaining. */
  addItem(item: QuestionnaireResponseItem): this {
    if (!this.item) {
      this.item = [];
    }

    this.item.push(item);

    return this;
  }
}
