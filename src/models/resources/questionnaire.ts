import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { EnableWhenBehavior } from '../enums/enable-when-behavior.js';
import { PublicationStatus } from '../enums/publication-status.js';
import { QuestionnaireItemType } from '../enums/questionnaire-item-type.js';

/** Backbone element for Questionnaire. */
export class QuestionnaireItemEnableWhen extends BackboneElement {

  /** The linkId for the question whose answer or lack of answer triggers enabling/disabling. */
  @IsOptional()
  @IsString()
  question?: string;

  /** Specifies the criteria by which the question is enabled. */
  @IsOptional()
  @IsString()
  operator?: string;

  /** The answer for the referenced question as a boolean. */
  @IsOptional()
  @IsBoolean()
  answerBoolean?: boolean;

  /** The answer for the referenced question as a decimal. */
  @IsOptional()
  @IsNumber()
  answerDecimal?: number;

  /** The answer for the referenced question as an integer. */
  @IsOptional()
  @IsNumber()
  answerInteger?: number;

  /** The answer for the referenced question as a date. */
  @IsOptional()
  @IsString()
  answerDate?: string;

  /** The answer for the referenced question as a dateTime. */
  @IsOptional()
  @IsString()
  answerDateTime?: string;

  /** The answer for the referenced question as a time. */
  @IsOptional()
  @IsString()
  answerTime?: string;

  /** The answer for the referenced question as a string. */
  @IsOptional()
  @IsString()
  answerString?: string;

  /** The answer for the referenced question as a Coding. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  answerCoding?: Coding;

  /** The answer for the referenced question as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  answerQuantity?: Quantity;

  /** The answer for the referenced question as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  answerReference?: Reference;

  /** Creates a new QuestionnaireItemEnableWhen. @param props - Initial values. */
  constructor(props?: Partial<QuestionnaireItemEnableWhen>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Questionnaire. */
export class QuestionnaireItemAnswerOption extends BackboneElement {

  /** The answer option value as an integer. */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /** The answer option value as a date. */
  @IsOptional()
  @IsString()
  valueDate?: string;

  /** The answer option value as a time. */
  @IsOptional()
  @IsString()
  valueTime?: string;

  /** The answer option value as a string. */
  @IsOptional()
  @IsString()
  valueString?: string;

  /** The answer option value as a Coding. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  valueCoding?: Coding;

  /** The answer option value as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /** Indicates whether the answer value is selected when the list of possible answers is initially shown. */
  @IsOptional()
  @IsBoolean()
  initialSelected?: boolean;

  /** Creates a new QuestionnaireItemAnswerOption. @param props - Initial values. */
  constructor(props?: Partial<QuestionnaireItemAnswerOption>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Questionnaire. */
export class QuestionnaireItemInitial extends BackboneElement {

  /** The initial value as a boolean. */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  /** The initial value as a decimal. */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /** The initial value as an integer. */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /** The initial value as a date. */
  @IsOptional()
  @IsString()
  valueDate?: string;

  /** The initial value as a dateTime. */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  /** The initial value as a time. */
  @IsOptional()
  @IsString()
  valueTime?: string;

  /** The initial value as a string. */
  @IsOptional()
  @IsString()
  valueString?: string;

  /** The initial value as a URI. */
  @IsOptional()
  @IsString()
  valueUri?: string;

  /** The initial value as an Attachment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  valueAttachment?: Attachment;

  /** The initial value as a Coding. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  valueCoding?: Coding;

  /** The initial value as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /** The initial value as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /** Creates a new QuestionnaireItemInitial. @param props - Initial values. */
  constructor(props?: Partial<QuestionnaireItemInitial>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for Questionnaire. */
export class QuestionnaireItem extends BackboneElement {

  /** An identifier that is unique within the Questionnaire. */
  @IsOptional()
  @IsString()
  linkId?: string;

  /** This refers to an ElementDefinition that provides formal definition for the item. */
  @IsOptional()
  @IsString()
  definition?: string;

  /** A terminology code that corresponds to this group or question. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  code?: Coding[];

  /** A short label for a particular group, question, or set of display text. */
  @IsOptional()
  @IsString()
  prefix?: string;

  /** The name of a section, the text of a question, or text content for a display item. */
  @IsOptional()
  @IsString()
  text?: string;

  /** The type of questionnaire item this is. */
  @IsOptional()
  @IsEnum(QuestionnaireItemType)
  type?: QuestionnaireItemType;

  /** A constraint indicating that this item should only be enabled under certain conditions. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireItemEnableWhen)
  enableWhen?: QuestionnaireItemEnableWhen[];

  /** Controls how multiple enableWhen values are interpreted. */
  @IsOptional()
  @IsEnum(EnableWhenBehavior)
  enableBehavior?: EnableWhenBehavior;

  /** An indication that this item must be filled out in order to complete the questionnaire. */
  @IsOptional()
  @IsBoolean()
  required?: boolean;

  /** An indication that this item may occur multiple times in the response. */
  @IsOptional()
  @IsBoolean()
  repeats?: boolean;

  /** An indication that the value cannot be changed by a human respondent. */
  @IsOptional()
  @IsBoolean()
  readOnly?: boolean;

  /** The maximum number of characters that are permitted in the answer. */
  @IsOptional()
  @IsNumber()
  maxLength?: number;

  /** A reference to a value set containing a list of codes for possible answers. */
  @IsOptional()
  @IsString()
  answerValueSet?: string;

  /** One of the permitted answers for a question item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireItemAnswerOption)
  answerOption?: QuestionnaireItemAnswerOption[];

  /** One or more values that should be pre-populated in the answer when initially rendering the item. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireItemInitial)
  initial?: QuestionnaireItemInitial[];

  /** Text, questions, and other groups to be nested beneath a question or group. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireItem)
  item?: QuestionnaireItem[];

  /** Creates a new QuestionnaireItem. @param props - Initial values. */
  constructor(props?: Partial<QuestionnaireItem>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the code array. @returns This instance for chaining. */
  addCode(item: Coding): this {
    if (!this.code) {
      this.code = [];
    }

    this.code.push(item);

    return this;
  }

  /** Adds an item to the enableWhen array. @returns This instance for chaining. */
  addEnableWhen(item: QuestionnaireItemEnableWhen): this {
    if (!this.enableWhen) {
      this.enableWhen = [];
    }

    this.enableWhen.push(item);

    return this;
  }

  /** Adds an item to the answerOption array. @returns This instance for chaining. */
  addAnswerOption(item: QuestionnaireItemAnswerOption): this {
    if (!this.answerOption) {
      this.answerOption = [];
    }

    this.answerOption.push(item);

    return this;
  }

  /** Adds an item to the initial array. @returns This instance for chaining. */
  addInitial(item: QuestionnaireItemInitial): this {
    if (!this.initial) {
      this.initial = [];
    }

    this.initial.push(item);

    return this;
  }

  /** Adds an item to the item array. @returns This instance for chaining. */
  addItem(item: QuestionnaireItem): this {
    if (!this.item) {
      this.item = [];
    }

    this.item.push(item);

    return this;
  }
}

/** FHIR R4 Questionnaire — a structured set of questions intended to guide the collection of answers. */
export class Questionnaire extends DomainResource {

  readonly resourceType = 'Questionnaire';

  /** An absolute URI that is used to identify this questionnaire. */
  @IsOptional()
  @IsString()
  url?: string;

  /** A formal identifier that is used to identify this questionnaire. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The identifier that is used to identify this version of the questionnaire. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the questionnaire. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short, descriptive, user-friendly title for the questionnaire. */
  @IsOptional()
  @IsString()
  title?: string;

  /** The URL of a Questionnaire that this Questionnaire is based on. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  derivedFrom?: string[];

  /** The status of this questionnaire (draft, active, retired, unknown). */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** Whether this questionnaire is for testing purposes. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** The types of subjects that can be the subject of responses created for the questionnaire. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  subjectType?: string[];

  /** The date this resource was last changed. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization that published the questionnaire. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details for the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the questionnaire. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The content was developed with a focus and intent of supporting the specified contexts. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the questionnaire applies. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Explanation of why this questionnaire is needed. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** A copyright statement relating to the questionnaire. */
  @IsOptional()
  @IsString()
  copyright?: string;

  /** The date on which the resource content was approved by the publisher. */
  @IsOptional()
  @IsString()
  approvalDate?: string;

  /** The date on which the resource content was last reviewed. */
  @IsOptional()
  @IsString()
  lastReviewDate?: string;

  /** The period during which the questionnaire content was or is planned to be in active use. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /** An identifier for this question or group of questions in a particular terminology. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  code?: Coding[];

  /** A particular question, question grouping, or display text within the questionnaire. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireItem)
  item?: QuestionnaireItem[];

  /** Creates a new Questionnaire. @param props - Initial values. */
  constructor(props?: Partial<Questionnaire>) {
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

  /** Adds an item to the derivedFrom array. @returns This instance for chaining. */
  addDerivedFrom(item: string): this {
    if (!this.derivedFrom) {
      this.derivedFrom = [];
    }

    this.derivedFrom.push(item);

    return this;
  }

  /** Adds an item to the subjectType array. @returns This instance for chaining. */
  addSubjectType(item: string): this {
    if (!this.subjectType) {
      this.subjectType = [];
    }

    this.subjectType.push(item);

    return this;
  }

  /** Adds an item to the contact array. @returns This instance for chaining. */
  addContact(item: ContactDetail): this {
    if (!this.contact) {
      this.contact = [];
    }

    this.contact.push(item);

    return this;
  }

  /** Adds an item to the useContext array. @returns This instance for chaining. */
  addUseContext(item: UsageContext): this {
    if (!this.useContext) {
      this.useContext = [];
    }

    this.useContext.push(item);

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

  /** Adds an item to the code array. @returns This instance for chaining. */
  addCode(item: Coding): this {
    if (!this.code) {
      this.code = [];
    }

    this.code.push(item);

    return this;
  }

  /** Adds an item to the item array. @returns This instance for chaining. */
  addItem(item: QuestionnaireItem): this {
    if (!this.item) {
      this.item = [];
    }

    this.item.push(item);

    return this;
  }
}
