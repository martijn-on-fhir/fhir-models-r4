import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Identifier } from '../datatypes/identifier.js';
import { Money } from '../datatypes/money.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { InvoicePriceComponentType } from '../enums/invoice-price-component-type.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for {@link ChargeItemDefinition.applicability}. */
export class ChargeItemDefinitionApplicability extends BackboneElement {

  /** A natural language description of the applicability condition. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The media type of the language for the expression, e.g., "text/cql" or "text/fhirpath". */
  @IsOptional()
  @IsString()
  language?: string;

  /** An expression that returns true or false, indicating whether the condition is satisfied. */
  @IsOptional()
  @IsString()
  expression?: string;

  /** Creates a new {@link ChargeItemDefinitionApplicability} instance. @param props - Initial property values. */
  constructor(props?: Partial<ChargeItemDefinitionApplicability>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link ChargeItemDefinitionPropertyGroup.priceComponent}. */
export class ChargeItemDefinitionPropertyGroupPriceComponent extends BackboneElement {

  /** The type of price component, such as base, surcharge, deduction, discount, tax, or informational. Uses the InvoicePriceComponentType value set. */
  @IsOptional()
  @IsEnum(InvoicePriceComponentType)
  type?: InvoicePriceComponentType;

  /** A code identifying the specific component of the charge. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The factor that has been applied to the base price for calculating this component. */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /** The amount calculated for this component of the charge. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  amount?: Money;

  /** Creates a new {@link ChargeItemDefinitionPropertyGroupPriceComponent} instance. @param props - Initial property values. */
  constructor(props?: Partial<ChargeItemDefinitionPropertyGroupPriceComponent>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link ChargeItemDefinition.propertyGroup}. */
export class ChargeItemDefinitionPropertyGroup extends BackboneElement {

  /** Expressions that describe applicability criteria for this property group. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChargeItemDefinitionApplicability)
  applicability?: ChargeItemDefinitionApplicability[];

  /** The price components that make up the total price for this property group. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChargeItemDefinitionPropertyGroupPriceComponent)
  priceComponent?: ChargeItemDefinitionPropertyGroupPriceComponent[];

  /** Creates a new {@link ChargeItemDefinitionPropertyGroup} instance. @param props - Initial property values. */
  constructor(props?: Partial<ChargeItemDefinitionPropertyGroup>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link ChargeItemDefinitionApplicability} to the {@link ChargeItemDefinitionPropertyGroup.applicability applicability} array. @param item - The {@link ChargeItemDefinitionApplicability} to add. @returns This instance for chaining. */
  addApplicability(item: ChargeItemDefinitionApplicability): this {
    if (!this.applicability) {
      this.applicability = [];
    }

    this.applicability.push(item);

    return this;
  }

  /** Adds a {@link ChargeItemDefinitionPropertyGroupPriceComponent} to the {@link ChargeItemDefinitionPropertyGroup.priceComponent priceComponent} array. @param item - The {@link ChargeItemDefinitionPropertyGroupPriceComponent} to add. @returns This instance for chaining. */
  addPriceComponent(item: ChargeItemDefinitionPropertyGroupPriceComponent): this {
    if (!this.priceComponent) {
      this.priceComponent = [];
    }

    this.priceComponent.push(item);

    return this;
  }
}

/** FHIR R4 ChargeItemDefinition resource — a definition of properties and rules about how the price and the applicability of a ChargeItem can be determined. */
export class ChargeItemDefinition extends DomainResource {

  /** The type of resource this is. Always 'ChargeItemDefinition'. */
  readonly resourceType = 'ChargeItemDefinition';

  /** An absolute URI that is used to identify this charge item definition when it is referenced. */
  @IsOptional()
  @IsString()
  url?: string;

  /** A formal identifier that is used to identify this charge item definition when it is represented in other formats. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The identifier that is used to identify this version of the charge item definition. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A short, descriptive, user-friendly title for the charge item definition. */
  @IsOptional()
  @IsString()
  title?: string;

  /** The URL pointing to an externally-defined charge item definition that is adhered to by this definition. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  derivedFromUri?: string[];

  /** A larger definition of which this particular definition is a component or step. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  partOf?: string[];

  /** References to other charge item definitions that are replaced by this definition. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  replaces?: string[];

  /** The current state of the charge item definition. Uses the PublicationStatus value set. */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** A Boolean value to indicate that this charge item definition is authored for testing purposes. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** The date on which the resource content was last revised or approved. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization or individual that published the charge item definition. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details to assist a user in finding and communicating with the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the charge item definition from a consumer's perspective. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The content was developed with a focus and intent of supporting the contexts that are listed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the charge item definition is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** A copyright statement relating to the charge item definition. */
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

  /** The period during which the charge item definition content was or is planned to be in active use. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /** The defined billing code for the charge item, based on billing codes defined in code systems such as CPT. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The individual or organization that is the target of the definition content. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  instance?: Reference[];

  /** Expressions that describe applicability criteria for the billing code. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChargeItemDefinitionApplicability)
  applicability?: ChargeItemDefinitionApplicability[];

  /** Group of properties which are applicable under the same conditions. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChargeItemDefinitionPropertyGroup)
  propertyGroup?: ChargeItemDefinitionPropertyGroup[];

  /** Creates a new {@link ChargeItemDefinition} instance. @param props - Initial property values. */
  constructor(props?: Partial<ChargeItemDefinition>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an {@link Identifier} to the {@link ChargeItemDefinition.identifier identifier} array. @param item - The {@link Identifier} to add. @returns This instance for chaining. */
  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  /** Adds a URI string to the {@link ChargeItemDefinition.derivedFromUri derivedFromUri} array. @param item - The URI string to add. @returns This instance for chaining. */
  addDerivedFromUri(item: string): this {
    if (!this.derivedFromUri) {
      this.derivedFromUri = [];
    }

    this.derivedFromUri.push(item);

    return this;
  }

  /** Adds a canonical string to the {@link ChargeItemDefinition.partOf partOf} array. @param item - The canonical string to add. @returns This instance for chaining. */
  addPartOf(item: string): this {
    if (!this.partOf) {
      this.partOf = [];
    }

    this.partOf.push(item);

    return this;
  }

  /** Adds a canonical string to the {@link ChargeItemDefinition.replaces replaces} array. @param item - The canonical string to add. @returns This instance for chaining. */
  addReplaces(item: string): this {
    if (!this.replaces) {
      this.replaces = [];
    }

    this.replaces.push(item);

    return this;
  }

  /** Adds a {@link ContactDetail} to the {@link ChargeItemDefinition.contact contact} array. @param item - The {@link ContactDetail} to add. @returns This instance for chaining. */
  addContact(item: ContactDetail): this {
    if (!this.contact) {
      this.contact = [];
    }

    this.contact.push(item);

    return this;
  }

  /** Adds a {@link UsageContext} to the {@link ChargeItemDefinition.useContext useContext} array. @param item - The {@link UsageContext} to add. @returns This instance for chaining. */
  addUseContext(item: UsageContext): this {
    if (!this.useContext) {
      this.useContext = [];
    }

    this.useContext.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link ChargeItemDefinition.jurisdiction jurisdiction} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addJurisdiction(item: CodeableConcept): this {
    if (!this.jurisdiction) {
      this.jurisdiction = [];
    }

    this.jurisdiction.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link ChargeItemDefinition.instance instance} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addInstance(item: Reference): this {
    if (!this.instance) {
      this.instance = [];
    }

    this.instance.push(item);

    return this;
  }

  /** Adds a {@link ChargeItemDefinitionApplicability} to the {@link ChargeItemDefinition.applicability applicability} array. @param item - The {@link ChargeItemDefinitionApplicability} to add. @returns This instance for chaining. */
  addApplicability(item: ChargeItemDefinitionApplicability): this {
    if (!this.applicability) {
      this.applicability = [];
    }

    this.applicability.push(item);

    return this;
  }

  /** Adds a {@link ChargeItemDefinitionPropertyGroup} to the {@link ChargeItemDefinition.propertyGroup propertyGroup} array. @param item - The {@link ChargeItemDefinitionPropertyGroup} to add. @returns This instance for chaining. */
  addPropertyGroup(item: ChargeItemDefinitionPropertyGroup): this {
    if (!this.propertyGroup) {
      this.propertyGroup = [];
    }

    this.propertyGroup.push(item);

    return this;
  }
}
