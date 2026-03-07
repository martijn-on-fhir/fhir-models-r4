import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { Identifier } from '../datatypes/identifier.js';
import { Money } from '../datatypes/money.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Reference } from '../datatypes/reference.js';
import { Signature } from '../datatypes/signature.js';

/** Backbone element for {@link Contract.contentDefinition}. */
export class ContractContentDefinition extends BackboneElement {

  /** Precusory content structure and use, i.e., a boilerplate, template, application for a contract such as an insurance policy or benefits under a program. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Detailed content type of the precusory content, e.g., occupation or functional role. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  subType?: CodeableConcept;

  /** The individual or organization that published the Contract precursor content. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  publisher?: Reference;

  /** The date (and optionally time) when the contract content definition was published. */
  @IsOptional()
  @IsString()
  publicationDate?: string;

  /** Status of publication of the contract content definition, e.g., draft, active, retired, unknown. */
  @IsOptional()
  @IsString()
  publicationStatus?: string;

  /** A copyright statement relating to the contract content definition and/or its contents. */
  @IsOptional()
  @IsString()
  copyright?: string;

  /** Creates a new {@link ContractContentDefinition} instance. @param props - Initial property values. */
  constructor(props?: Partial<ContractContentDefinition>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link ContractTerm.securityLabel}. */
export class ContractTermSecurityLabel extends BackboneElement {

  /** Number used to link this term or term element to the applicable security label. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  number?: number[];

  /** Security label privacy tag that specifies the level of confidentiality protection required for the term and/or term elements. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  classification?: Coding;

  /** Security label privacy tag that specifies the applicable privacy and security policies governing the term and/or term elements. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  category?: Coding[];

  /** Security label privacy tag that specifies the manner in which term and/or term elements are to be protected. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  control?: Coding[];

  /** Creates a new {@link ContractTermSecurityLabel} instance. @param props - Initial property values. */
  constructor(props?: Partial<ContractTermSecurityLabel>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a number to the {@link ContractTermSecurityLabel.number number} array. @param item - The number to add. @returns This instance for chaining. */
  addNumber(item: number): this {
    if (!this.number) {
      this.number = [];
    }

    this.number.push(item);

    return this;
  }

  /** Adds a {@link Coding} to the {@link ContractTermSecurityLabel.category category} array. @param item - The {@link Coding} to add. @returns This instance for chaining. */
  addCategory(item: Coding): this {
    if (!this.category) {
      this.category = [];
    }

    this.category.push(item);

    return this;
  }

  /** Adds a {@link Coding} to the {@link ContractTermSecurityLabel.control control} array. @param item - The {@link Coding} to add. @returns This instance for chaining. */
  addControl(item: Coding): this {
    if (!this.control) {
      this.control = [];
    }

    this.control.push(item);

    return this;
  }
}

/** Backbone element for {@link ContractTermOffer.party}. */
export class ContractTermOfferParty extends BackboneElement {

  /** Participant in the offer. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reference?: Reference[];

  /** How the party participates in the offer. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /** Creates a new {@link ContractTermOfferParty} instance. @param props - Initial property values. */
  constructor(props?: Partial<ContractTermOfferParty>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link Reference} to the {@link ContractTermOfferParty.reference reference} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addReference(item: Reference): this {
    if (!this.reference) {
      this.reference = [];
    }

    this.reference.push(item);

    return this;
  }
}

/** Backbone element for {@link ContractTermOffer.answer}. */
export class ContractTermOfferAnswer extends BackboneElement {

  /** Response to an offer clause or question text, which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warranty duration, or whether combeli is combeli of combeli combeli. Boolean value. */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  /** Response to an offer clause or question text as a decimal value. */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /** Response to an offer clause or question text as an integer value. */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /** Response to an offer clause or question text as a date value. */
  @IsOptional()
  @IsString()
  valueDate?: string;

  /** Response to an offer clause or question text as a dateTime value. */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  /** Response to an offer clause or question text as a time value. */
  @IsOptional()
  @IsString()
  valueTime?: string;

  /** Response to an offer clause or question text as a string value. */
  @IsOptional()
  @IsString()
  valueString?: string;

  /** Response to an offer clause or question text as a URI value. */
  @IsOptional()
  @IsString()
  valueUri?: string;

  /** Response to an offer clause or question text as an Attachment value. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  valueAttachment?: Attachment;

  /** Response to an offer clause or question text as a Coding value. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  valueCoding?: Coding;

  /** Response to an offer clause or question text as a Quantity value. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /** Response to an offer clause or question text as a Reference value. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /** Creates a new {@link ContractTermOfferAnswer} instance. @param props - Initial property values. */
  constructor(props?: Partial<ContractTermOfferAnswer>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link ContractTerm.offer}. */
export class ContractTermOffer extends BackboneElement {

  /** Unique identifier for this particular Contract Provision. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Offer Recipient. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermOfferParty)
  party?: ContractTermOfferParty[];

  /** The owner of an asset has the residual control rights over the asset. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  topic?: Reference;

  /** Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g., life combeli, entity combeli combeli. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Type of choice made by accepting party with respect to an offer made by an offeror/grantee. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  decision?: CodeableConcept;

  /** How the decision about a Contract Provision was conveyed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  decisionMode?: CodeableConcept[];

  /** Response to offer text. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermOfferAnswer)
  answer?: ContractTermOfferAnswer[];

  /** Human readable form of this Contract Offer. */
  @IsOptional()
  @IsString()
  text?: string;

  /** The id of the clause or question text of the offer in the referenced questionnaire/response. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  linkId?: string[];

  /** Security labels that protects the offer. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  securityLabelNumber?: number[];

  /** Creates a new {@link ContractTermOffer} instance. @param props - Initial property values. */
  constructor(props?: Partial<ContractTermOffer>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link ContractTermOffer.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link ContractTermOfferParty} to the {@link ContractTermOffer.party party} array. @param item - The {@link ContractTermOfferParty} to add. @returns This instance for chaining. */
  addParty(item: ContractTermOfferParty): this {
    if (!this.party) {
      this.party = [];
    }

    this.party.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link ContractTermOffer.decisionMode decisionMode} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addDecisionMode(item: CodeableConcept): this {
    if (!this.decisionMode) {
      this.decisionMode = [];
    }

    this.decisionMode.push(item);

    return this;
  }

  /** Adds a {@link ContractTermOfferAnswer} to the {@link ContractTermOffer.answer answer} array. @param item - The {@link ContractTermOfferAnswer} to add. @returns This instance for chaining. */
  addAnswer(item: ContractTermOfferAnswer): this {
    if (!this.answer) {
      this.answer = [];
    }

    this.answer.push(item);

    return this;
  }

  /** Adds a linkId string to the {@link ContractTermOffer.linkId linkId} array. @param item - The string to add. @returns This instance for chaining. */
  addLinkId(item: string): this {
    if (!this.linkId) {
      this.linkId = [];
    }

    this.linkId.push(item);

    return this;
  }

  /** Adds a security label number to the {@link ContractTermOffer.securityLabelNumber securityLabelNumber} array. @param item - The number to add. @returns This instance for chaining. */
  addSecurityLabelNumber(item: number): this {
    if (!this.securityLabelNumber) {
      this.securityLabelNumber = [];
    }

    this.securityLabelNumber.push(item);

    return this;
  }
}

/** Backbone element for {@link ContractTermAsset.context}. */
export class ContractTermAssetContext extends BackboneElement {

  /** Asset context reference may include the creator, custodian, or owning Person or Organization. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  reference?: Reference;

  /** Coded representation of the context generally or of the referenced entity. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /** Context description. */
  @IsOptional()
  @IsString()
  text?: string;

  /** Creates a new {@link ContractTermAssetContext} instance. @param props - Initial property values. */
  constructor(props?: Partial<ContractTermAssetContext>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link CodeableConcept} to the {@link ContractTermAssetContext.code code} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addCode(item: CodeableConcept): this {
    if (!this.code) {
      this.code = [];
    }

    this.code.push(item);

    return this;
  }
}

/** Backbone element for {@link ContractTermAsset.valuedItem}. */
export class ContractTermAssetValuedItem extends BackboneElement {

  /** Specific type of Contract Valued Item that may be priced, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  entityCodeableConcept?: CodeableConcept;

  /** Specific type of Contract Valued Item that may be priced, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  entityReference?: Reference;

  /** Identifies a Contract Valued Item instance. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** Indicates the time during which this Contract ValuedItem information is effective. */
  @IsOptional()
  @IsString()
  effectiveTime?: string;

  /** Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /** A Contract Valued Item unit valuation measure. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  unitPrice?: Money;

  /** A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /** An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. */
  @IsOptional()
  @IsNumber()
  points?: number;

  /** Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  net?: Money;

  /** Terms of valuation. */
  @IsOptional()
  @IsString()
  payment?: string;

  /** When payment is due. */
  @IsOptional()
  @IsString()
  paymentDate?: string;

  /** Who will make payment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  responsible?: Reference;

  /** Who will receive payment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  recipient?: Reference;

  /** Id of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  linkId?: string[];

  /** A set of security labels that define which terms are controlled by this condition. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  securityLabelNumber?: number[];

  /** Creates a new {@link ContractTermAssetValuedItem} instance. @param props - Initial property values. */
  constructor(props?: Partial<ContractTermAssetValuedItem>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a linkId string to the {@link ContractTermAssetValuedItem.linkId linkId} array. @param item - The string to add. @returns This instance for chaining. */
  addLinkId(item: string): this {
    if (!this.linkId) {
      this.linkId = [];
    }

    this.linkId.push(item);

    return this;
  }

  /** Adds a security label number to the {@link ContractTermAssetValuedItem.securityLabelNumber securityLabelNumber} array. @param item - The number to add. @returns This instance for chaining. */
  addSecurityLabelNumber(item: number): this {
    if (!this.securityLabelNumber) {
      this.securityLabelNumber = [];
    }

    this.securityLabelNumber.push(item);

    return this;
  }
}

/** Backbone element for {@link ContractTerm.asset}. */
export class ContractTermAsset extends BackboneElement {

  /** Differentiates the kind of the asset. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  scope?: CodeableConcept;

  /** Target entity type about which the term may be concerned. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /** Associated entities. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  typeReference?: Reference[];

  /** May be a subtype or part of an offered asset. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  subtype?: CodeableConcept[];

  /** Specifies the applicability of the term to an asset resource instance, and target context for the asset. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  relationship?: Coding;

  /** Circumstance of the asset. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermAssetContext)
  context?: ContractTermAssetContext[];

  /** Description of the quality and completeness of the asset that may be a factor in its valuation. */
  @IsOptional()
  @IsString()
  condition?: string;

  /** Type of Asset availability for use or ownership. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  periodType?: CodeableConcept[];

  /** Asset relevant contractual time period. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Period)
  period?: Period[];

  /** Time period of asset use. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Period)
  usePeriod?: Period[];

  /** Clause or question text (Term) pertaining to the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract. */
  @IsOptional()
  @IsString()
  text?: string;

  /** Id of the clause or question text about the asset in the referenced form or QuestionnaireResponse. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  linkId?: string[];

  /** Response to assets. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermOfferAnswer)
  answer?: ContractTermOfferAnswer[];

  /** Security labels that protects the asset. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  securityLabelNumber?: number[];

  /** Contract Valued Item List. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermAssetValuedItem)
  valuedItem?: ContractTermAssetValuedItem[];

  /** Creates a new {@link ContractTermAsset} instance. @param props - Initial property values. */
  constructor(props?: Partial<ContractTermAsset>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link CodeableConcept} to the {@link ContractTermAsset.type type} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addType(item: CodeableConcept): this {
    if (!this.type) {
      this.type = [];
    }

    this.type.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link ContractTermAsset.typeReference typeReference} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addTypeReference(item: Reference): this {
    if (!this.typeReference) {
      this.typeReference = [];
    }

    this.typeReference.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link ContractTermAsset.subtype subtype} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addSubtype(item: CodeableConcept): this {
    if (!this.subtype) {
      this.subtype = [];
    }

    this.subtype.push(item);

    return this;
  }

  /** Adds a {@link ContractTermAssetContext} to the {@link ContractTermAsset.context context} array. @param item - The {@link ContractTermAssetContext} to add. @returns This instance for chaining. */
  addContext(item: ContractTermAssetContext): this {
    if (!this.context) {
      this.context = [];
    }

    this.context.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link ContractTermAsset.periodType periodType} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addPeriodType(item: CodeableConcept): this {
    if (!this.periodType) {
      this.periodType = [];
    }

    this.periodType.push(item);

    return this;
  }

  /** Adds a {@link Period} to the {@link ContractTermAsset.period period} array. @param item - The {@link Period} to add. @returns This instance for chaining. */
  addPeriod(item: Period): this {
    if (!this.period) {
      this.period = [];
    }

    this.period.push(item);

    return this;
  }

  /** Adds a {@link Period} to the {@link ContractTermAsset.usePeriod usePeriod} array. @param item - The {@link Period} to add. @returns This instance for chaining. */
  addUsePeriod(item: Period): this {
    if (!this.usePeriod) {
      this.usePeriod = [];
    }

    this.usePeriod.push(item);

    return this;
  }

  /** Adds a linkId string to the {@link ContractTermAsset.linkId linkId} array. @param item - The string to add. @returns This instance for chaining. */
  addLinkId(item: string): this {
    if (!this.linkId) {
      this.linkId = [];
    }

    this.linkId.push(item);

    return this;
  }

  /** Adds a {@link ContractTermOfferAnswer} to the {@link ContractTermAsset.answer answer} array. @param item - The {@link ContractTermOfferAnswer} to add. @returns This instance for chaining. */
  addAnswer(item: ContractTermOfferAnswer): this {
    if (!this.answer) {
      this.answer = [];
    }

    this.answer.push(item);

    return this;
  }

  /** Adds a security label number to the {@link ContractTermAsset.securityLabelNumber securityLabelNumber} array. @param item - The number to add. @returns This instance for chaining. */
  addSecurityLabelNumber(item: number): this {
    if (!this.securityLabelNumber) {
      this.securityLabelNumber = [];
    }

    this.securityLabelNumber.push(item);

    return this;
  }

  /** Adds a {@link ContractTermAssetValuedItem} to the {@link ContractTermAsset.valuedItem valuedItem} array. @param item - The {@link ContractTermAssetValuedItem} to add. @returns This instance for chaining. */
  addValuedItem(item: ContractTermAssetValuedItem): this {
    if (!this.valuedItem) {
      this.valuedItem = [];
    }

    this.valuedItem.push(item);

    return this;
  }
}

/** Backbone element for {@link ContractTermAction.subject}. */
export class ContractTermActionSubject extends BackboneElement {

  /** The entity the action is performed or not performed on or for. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reference?: Reference[];

  /** Role type of agent assigned roles in this Contract. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /** Creates a new {@link ContractTermActionSubject} instance. @param props - Initial property values. */
  constructor(props?: Partial<ContractTermActionSubject>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link Reference} to the {@link ContractTermActionSubject.reference reference} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addReference(item: Reference): this {
    if (!this.reference) {
      this.reference = [];
    }

    this.reference.push(item);

    return this;
  }
}

/** Backbone element for {@link ContractTerm.action}. */
export class ContractTermAction extends BackboneElement {

  /** True if the term prohibits the action. */
  @IsOptional()
  @IsBoolean()
  doNotPerform?: boolean;

  /** Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Entity of the action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermActionSubject)
  subject?: ContractTermActionSubject[];

  /** Reason or purpose for the action stipulated by this Contract Provision. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  intent?: CodeableConcept;

  /** Id of the clause or question text related to this action in the referenced form or QuestionnaireResponse. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  linkId?: string[];

  /** Current state of the term action. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /** Encounter or Episode with primary association to specified term activity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  context?: Reference;

  /** Id of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  contextLinkId?: string[];

  /** When action happens, as a dateTime. */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  /** When action happens, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  occurrencePeriod?: Period;

  /** Who or what initiated the action and has responsibility for its activation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  requester?: Reference[];

  /** Id of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  requesterLinkId?: string[];

  /** The type of individual that is desired or required to perform or not perform the action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  performerType?: CodeableConcept[];

  /** The type of role or competency of an individual desired or required to perform or not perform the action. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  performerRole?: CodeableConcept;

  /** Indicates who or what is being asked to perform (or not perform) the action. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  performer?: Reference;

  /** Id of the clause or question text related to the performer of this action in the referenced form or QuestionnaireResponse. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  performerLinkId?: string[];

  /** Rationale for the action to be performed or not performed, described as a code. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Indicates another resource whose existence justifies permitting or not permitting this action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** Describes why the action is to be performed or not performed in textual form. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  reason?: string[];

  /** Id of the clause or question text related to the reason of this action in the referenced form or QuestionnaireResponse. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  reasonLinkId?: string[];

  /** Comments made about the term action made by the requester, performer, subject or other participants. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Security labels that protects the action. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  securityLabelNumber?: number[];

  /** Creates a new {@link ContractTermAction} instance. @param props - Initial property values. */
  constructor(props?: Partial<ContractTermAction>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link ContractTermActionSubject} to the {@link ContractTermAction.subject subject} array. @param item - The {@link ContractTermActionSubject} to add. @returns This instance for chaining. */
  addSubject(item: ContractTermActionSubject): this {
    if (!this.subject) {
      this.subject = [];
    }

    this.subject.push(item);

    return this;
  }

  /** Adds a linkId string to the {@link ContractTermAction.linkId linkId} array. @param item - The string to add. @returns This instance for chaining. */
  addLinkId(item: string): this {
    if (!this.linkId) {
      this.linkId = [];
    }

    this.linkId.push(item);

    return this;
  }

  /** Adds a contextLinkId string to the {@link ContractTermAction.contextLinkId contextLinkId} array. @param item - The string to add. @returns This instance for chaining. */
  addContextLinkId(item: string): this {
    if (!this.contextLinkId) {
      this.contextLinkId = [];
    }

    this.contextLinkId.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link ContractTermAction.requester requester} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addRequester(item: Reference): this {
    if (!this.requester) {
      this.requester = [];
    }

    this.requester.push(item);

    return this;
  }

  /** Adds a requesterLinkId string to the {@link ContractTermAction.requesterLinkId requesterLinkId} array. @param item - The string to add. @returns This instance for chaining. */
  addRequesterLinkId(item: string): this {
    if (!this.requesterLinkId) {
      this.requesterLinkId = [];
    }

    this.requesterLinkId.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link ContractTermAction.performerType performerType} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addPerformerType(item: CodeableConcept): this {
    if (!this.performerType) {
      this.performerType = [];
    }

    this.performerType.push(item);

    return this;
  }

  /** Adds a performerLinkId string to the {@link ContractTermAction.performerLinkId performerLinkId} array. @param item - The string to add. @returns This instance for chaining. */
  addPerformerLinkId(item: string): this {
    if (!this.performerLinkId) {
      this.performerLinkId = [];
    }

    this.performerLinkId.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link ContractTermAction.reasonCode reasonCode} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addReasonCode(item: CodeableConcept): this {
    if (!this.reasonCode) {
      this.reasonCode = [];
    }

    this.reasonCode.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link ContractTermAction.reasonReference reasonReference} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addReasonReference(item: Reference): this {
    if (!this.reasonReference) {
      this.reasonReference = [];
    }

    this.reasonReference.push(item);

    return this;
  }

  /** Adds a reason string to the {@link ContractTermAction.reason reason} array. @param item - The string to add. @returns This instance for chaining. */
  addReason(item: string): this {
    if (!this.reason) {
      this.reason = [];
    }

    this.reason.push(item);

    return this;
  }

  /** Adds a reasonLinkId string to the {@link ContractTermAction.reasonLinkId reasonLinkId} array. @param item - The string to add. @returns This instance for chaining. */
  addReasonLinkId(item: string): this {
    if (!this.reasonLinkId) {
      this.reasonLinkId = [];
    }

    this.reasonLinkId.push(item);

    return this;
  }

  /** Adds an {@link Annotation} to the {@link ContractTermAction.note note} array. @param item - The {@link Annotation} to add. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }

  /** Adds a security label number to the {@link ContractTermAction.securityLabelNumber securityLabelNumber} array. @param item - The number to add. @returns This instance for chaining. */
  addSecurityLabelNumber(item: number): this {
    if (!this.securityLabelNumber) {
      this.securityLabelNumber = [];
    }

    this.securityLabelNumber.push(item);

    return this;
  }
}

/** Backbone element for {@link Contract.term}. */
export class ContractTerm extends BackboneElement {

  /** Unique identifier for this particular Contract Provision. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** When this Contract Provision was issued. */
  @IsOptional()
  @IsString()
  issued?: string;

  /** Relevant time or time-period when this Contract Provision is applicable. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  applies?: Period;

  /** The entity that the term applies to, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  topicCodeableConcept?: CodeableConcept;

  /** The entity that the term applies to, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  topicReference?: Reference;

  /** A legal clause or condition contained within a contract that requires one or both parties to perform a particular requirement by some specified time or prevents one or both parties from performing a particular requirement by some specified time. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** A specialized legal clause or condition based on overarching contract type. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  subType?: CodeableConcept;

  /** Statement of a provision in a policy or a contract. */
  @IsOptional()
  @IsString()
  text?: string;

  /** Security labels that protect the handling of information about the term and its elements. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermSecurityLabel)
  securityLabel?: ContractTermSecurityLabel[];

  /** The matter of concern in the context of this provision of the agreeement. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ContractTermOffer)
  offer?: ContractTermOffer;

  /** Contract Term Asset List. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermAsset)
  asset?: ContractTermAsset[];

  /** An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermAction)
  action?: ContractTermAction[];

  /** Nested group of Contract Provisions. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTerm)
  group?: ContractTerm[];

  /** Creates a new {@link ContractTerm} instance. @param props - Initial property values. */
  constructor(props?: Partial<ContractTerm>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link ContractTermSecurityLabel} to the {@link ContractTerm.securityLabel securityLabel} array. @param item - The {@link ContractTermSecurityLabel} to add. @returns This instance for chaining. */
  addSecurityLabel(item: ContractTermSecurityLabel): this {
    if (!this.securityLabel) {
      this.securityLabel = [];
    }

    this.securityLabel.push(item);

    return this;
  }

  /** Adds a {@link ContractTermAsset} to the {@link ContractTerm.asset asset} array. @param item - The {@link ContractTermAsset} to add. @returns This instance for chaining. */
  addAsset(item: ContractTermAsset): this {
    if (!this.asset) {
      this.asset = [];
    }

    this.asset.push(item);

    return this;
  }

  /** Adds a {@link ContractTermAction} to the {@link ContractTerm.action action} array. @param item - The {@link ContractTermAction} to add. @returns This instance for chaining. */
  addAction(item: ContractTermAction): this {
    if (!this.action) {
      this.action = [];
    }

    this.action.push(item);

    return this;
  }

  /** Adds a {@link ContractTerm} to the {@link ContractTerm.group group} array. @param item - The {@link ContractTerm} to add. @returns This instance for chaining. */
  addGroup(item: ContractTerm): this {
    if (!this.group) {
      this.group = [];
    }

    this.group.push(item);

    return this;
  }
}

/** Backbone element for {@link Contract.signer}. */
export class ContractSigner extends BackboneElement {

  /** Role of this Contract signer, e.g., notary, co-signer. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  type?: Coding;

  /** Party which is a signatory to this Contract. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  party?: Reference;

  /** Legally binding Contract DSIG signature contents in Base64. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Signature)
  signature?: Signature[];

  /** Creates a new {@link ContractSigner} instance. @param props - Initial property values. */
  constructor(props?: Partial<ContractSigner>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link Signature} to the {@link ContractSigner.signature signature} array. @param item - The {@link Signature} to add. @returns This instance for chaining. */
  addSignature(item: Signature): this {
    if (!this.signature) {
      this.signature = [];
    }

    this.signature.push(item);

    return this;
  }
}

/** Backbone element for {@link Contract.friendly}. */
export class ContractFriendly extends BackboneElement {

  /** Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability, as an Attachment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  contentAttachment?: Attachment;

  /** Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  contentReference?: Reference;

  /** Creates a new {@link ContractFriendly} instance. @param props - Initial property values. */
  constructor(props?: Partial<ContractFriendly>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link Contract.legal}. */
export class ContractLegal extends BackboneElement {

  /** Contract legal text in human renderable form, as an Attachment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  contentAttachment?: Attachment;

  /** Contract legal text in human renderable form, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  contentReference?: Reference;

  /** Creates a new {@link ContractLegal} instance. @param props - Initial property values. */
  constructor(props?: Partial<ContractLegal>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link Contract.rule}. */
export class ContractRule extends BackboneElement {

  /** Computable Contract conveyed using a policy rule language (e.g., XACML, DKAL, SecPal), as an Attachment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  contentAttachment?: Attachment;

  /** Computable Contract conveyed using a policy rule language (e.g., XACML, DKAL, SecPal), as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  contentReference?: Reference;

  /** Creates a new {@link ContractRule} instance. @param props - Initial property values. */
  constructor(props?: Partial<ContractRule>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** FHIR R4 Contract resource — legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export class Contract extends DomainResource {

  /** The FHIR resource type string for Contract. */
  readonly resourceType = 'Contract';

  /** Unique identifier for this Contract or a derivative that references a Source Contract. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** Canonical identifier for this contract, represented as a URI (globally unique). */
  @IsOptional()
  @IsString()
  url?: string;

  /** An edition identifier used for business purposes to label business significant variants. */
  @IsOptional()
  @IsString()
  version?: string;

  /** The status of the resource instance. */
  @IsOptional()
  @IsString()
  status?: string;

  /** Legal states of the formation of a legal instrument, which is a formally combeli recognized by a combeli combeli. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  legalState?: CodeableConcept;

  /** The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  instantiatesCanonical?: Reference;

  /** The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract. */
  @IsOptional()
  @IsString()
  instantiatesUri?: string;

  /** The minimal content derived from the basal information source at a specific stage in its lifecycle. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  contentDerivative?: CodeableConcept;

  /** When this Contract was issued. */
  @IsOptional()
  @IsString()
  issued?: string;

  /** Relevant time or time-period when this Contract is applicable. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  applies?: Period;

  /** Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  expirationType?: CodeableConcept;

  /** The target entity impacted by or of interest to parties to the agreement. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  subject?: Reference[];

  /** A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  authority?: Reference[];

  /** Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  domain?: Reference[];

  /** Sites in which the contract is complied with, exercised, or in force. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  site?: Reference[];

  /** A natural language name identifying this Contract definition, derivative, or instance in any legal state. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state. */
  @IsOptional()
  @IsString()
  title?: string;

  /** An explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state. */
  @IsOptional()
  @IsString()
  subtitle?: string;

  /** Alternative representation of the title for this Contract definition, derivative, or instance in any legal state, e.g., a domain-specific contract number related to legislation. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  alias?: string[];

  /** The individual or organization that authored the Contract definition, derivative, or instance in any legal state. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /** A selector of legal concerns for this Contract definition, derivative, or instance in any legal state. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  scope?: CodeableConcept;

  /** Narrows the range of legal concerns to focus on the achievement of specific contractual objectives, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  topicCodeableConcept?: CodeableConcept;

  /** Narrows the range of legal concerns to focus on the achievement of specific contractual objectives, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  topicReference?: Reference;

  /** A high-level category for the legal instrument, whether combeli or combeli, covering the broad area to which the instrument applies. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract's scope. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  subType?: CodeableConcept[];

  /** Precusory content developed with a focus and target of the Contract, which provides context for how the Contract is made. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ContractContentDefinition)
  contentDefinition?: ContractContentDefinition;

  /** One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTerm)
  term?: ContractTerm[];

  /** Information that may be needed by/relevant to the performer in their execution of this term action. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supportingInfo?: Reference[];

  /** Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  relevantHistory?: Reference[];

  /** Parties with legal standing in the Contract, including combeli combeli, combeli combeli, and combeli combeli such as combeli combeli. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractSigner)
  signer?: ContractSigner[];

  /** The "patient friendly language" versionof the Contract in whole or in parts. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractFriendly)
  friendly?: ContractFriendly[];

  /** List of Legal CLI expressions or representations of this Contract. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractLegal)
  legal?: ContractLegal[];

  /** List of Computable Policy Rule Language Representations of this Contract. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractRule)
  rule?: ContractRule[];

  /** Legally binding contract, as an Attachment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  legallyBindingAttachment?: Attachment;

  /** Legally binding contract, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  legallyBindingReference?: Reference;

  /** Creates a new {@link Contract} instance. @param props - Initial property values. */
  constructor(props?: Partial<Contract>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link Contract.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Contract.subject subject} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addSubject(item: Reference): this {
    if (!this.subject) {
      this.subject = [];
    }

    this.subject.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Contract.authority authority} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addAuthority(item: Reference): this {
    if (!this.authority) {
      this.authority = [];
    }

    this.authority.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Contract.domain domain} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addDomain(item: Reference): this {
    if (!this.domain) {
      this.domain = [];
    }

    this.domain.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Contract.site site} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addSite(item: Reference): this {
    if (!this.site) {
      this.site = [];
    }

    this.site.push(item);

    return this;
  }

  /** Adds an alias string to the {@link Contract.alias alias} array. @param item - The string to add. @returns This instance for chaining. */
  addAlias(item: string): this {
    if (!this.alias) {
      this.alias = [];
    }

    this.alias.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link Contract.subType subType} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addSubType(item: CodeableConcept): this {
    if (!this.subType) {
      this.subType = [];
    }

    this.subType.push(item);

    return this;
  }

  /** Adds a {@link ContractTerm} to the {@link Contract.term term} array. @param item - The {@link ContractTerm} to add. @returns This instance for chaining. */
  addTerm(item: ContractTerm): this {
    if (!this.term) {
      this.term = [];
    }

    this.term.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Contract.supportingInfo supportingInfo} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addSupportingInfo(item: Reference): this {
    if (!this.supportingInfo) {
      this.supportingInfo = [];
    }

    this.supportingInfo.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link Contract.relevantHistory relevantHistory} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addRelevantHistory(item: Reference): this {
    if (!this.relevantHistory) {
      this.relevantHistory = [];
    }

    this.relevantHistory.push(item);

    return this;
  }

  /** Adds a {@link ContractSigner} to the {@link Contract.signer signer} array. @param item - The {@link ContractSigner} to add. @returns This instance for chaining. */
  addSigner(item: ContractSigner): this {
    if (!this.signer) {
      this.signer = [];
    }

    this.signer.push(item);

    return this;
  }

  /** Adds a {@link ContractFriendly} to the {@link Contract.friendly friendly} array. @param item - The {@link ContractFriendly} to add. @returns This instance for chaining. */
  addFriendly(item: ContractFriendly): this {
    if (!this.friendly) {
      this.friendly = [];
    }

    this.friendly.push(item);

    return this;
  }

  /** Adds a {@link ContractLegal} to the {@link Contract.legal legal} array. @param item - The {@link ContractLegal} to add. @returns This instance for chaining. */
  addLegal(item: ContractLegal): this {
    if (!this.legal) {
      this.legal = [];
    }

    this.legal.push(item);

    return this;
  }

  /** Adds a {@link ContractRule} to the {@link Contract.rule rule} array. @param item - The {@link ContractRule} to add. @returns This instance for chaining. */
  addRule(item: ContractRule): this {
    if (!this.rule) {
      this.rule = [];
    }

    this.rule.push(item);

    return this;
  }
}
