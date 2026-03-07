import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { Resource } from '../base/resource.js';
import { Address } from '../datatypes/address.js';
import { Annotation } from '../datatypes/annotation.js';
import { Attachment } from '../datatypes/attachment.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { ContactPoint } from '../datatypes/contact-point.js';
import { HumanName } from '../datatypes/human-name.js';
import { Identifier } from '../datatypes/identifier.js';
import { Meta } from '../datatypes/meta.js';
import { Period } from '../datatypes/period.js';
import { Quantity } from '../datatypes/quantity.js';
import { Range } from '../datatypes/range.js';
import { Ratio } from '../datatypes/ratio.js';
import { Reference } from '../datatypes/reference.js';
import { Signature } from '../datatypes/signature.js';
import { Timing } from '../datatypes/timing.js';
import { UsageContext } from '../datatypes/usage-context.js';

/** Backbone element for {@link Parameters.parameter}. */
export class ParametersParameter extends BackboneElement {

  /** The name of the parameter (reference to the operation definition). */
  @IsOptional()
  @IsString()
  name?: string;

  /** The value of the parameter when it is a string. */
  @IsOptional()
  @IsString()
  valueString?: string;

  /** The value of the parameter when it is a boolean. */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  /** The value of the parameter when it is an integer. */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /** The value of the parameter when it is a decimal. */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /** The value of the parameter when it is a base64 encoded binary. */
  @IsOptional()
  @IsString()
  valueBase64Binary?: string;

  /** The value of the parameter when it is an instant. */
  @IsOptional()
  @IsString()
  valueInstant?: string;

  /** The value of the parameter when it is a date. */
  @IsOptional()
  @IsString()
  valueDate?: string;

  /** The value of the parameter when it is a dateTime. */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  /** The value of the parameter when it is a time. */
  @IsOptional()
  @IsString()
  valueTime?: string;

  /** The value of the parameter when it is a code. */
  @IsOptional()
  @IsString()
  valueCode?: string;

  /** The value of the parameter when it is an OID. */
  @IsOptional()
  @IsString()
  valueOid?: string;

  /** The value of the parameter when it is an id. */
  @IsOptional()
  @IsString()
  valueId?: string;

  /** The value of the parameter when it is an unsigned integer. */
  @IsOptional()
  @IsNumber()
  valueUnsignedInt?: number;

  /** The value of the parameter when it is a positive integer. */
  @IsOptional()
  @IsNumber()
  valuePositiveInt?: number;

  /** The value of the parameter when it is markdown text. */
  @IsOptional()
  @IsString()
  valueMarkdown?: string;

  /** The value of the parameter when it is a URI. */
  @IsOptional()
  @IsString()
  valueUri?: string;

  /** The value of the parameter when it is a URL. */
  @IsOptional()
  @IsString()
  valueUrl?: string;

  /** The value of the parameter when it is a UUID. */
  @IsOptional()
  @IsString()
  valueUuid?: string;

  /** The value of the parameter when it is a canonical URL. */
  @IsOptional()
  @IsString()
  valueCanonical?: string;

  /** The value of the parameter when it is an Address. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  valueAddress?: Address;

  /** The value of the parameter when it is an Annotation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Annotation)
  valueAnnotation?: Annotation;

  /** The value of the parameter when it is an Attachment. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  valueAttachment?: Attachment;

  /** The value of the parameter when it is a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  valueCodeableConcept?: CodeableConcept;

  /** The value of the parameter when it is a Coding. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  valueCoding?: Coding;

  /** The value of the parameter when it is a ContactDetail. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ContactDetail)
  valueContactDetail?: ContactDetail;

  /** The value of the parameter when it is a ContactPoint. */
  @IsOptional()
  @ValidateNested()
  @Type(() => ContactPoint)
  valueContactPoint?: ContactPoint;

  /** The value of the parameter when it is a HumanName. */
  @IsOptional()
  @ValidateNested()
  @Type(() => HumanName)
  valueHumanName?: HumanName;

  /** The value of the parameter when it is an Identifier. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  valueIdentifier?: Identifier;

  /** The value of the parameter when it is a Meta. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Meta)
  valueMeta?: Meta;

  /** The value of the parameter when it is a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  valuePeriod?: Period;

  /** The value of the parameter when it is a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /** The value of the parameter when it is a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  valueRange?: Range;

  /** The value of the parameter when it is a Ratio. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  valueRatio?: Ratio;

  /** The value of the parameter when it is a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /** The value of the parameter when it is a Signature. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Signature)
  valueSignature?: Signature;

  /** The value of the parameter when it is a Timing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  valueTiming?: Timing;

  /** The value of the parameter when it is a UsageContext. */
  @IsOptional()
  @ValidateNested()
  @Type(() => UsageContext)
  valueUsageContext?: UsageContext;

  /** If the parameter is a whole resource. */
  @IsOptional()
  resource?: Resource;

  /** A named part of a multi-part parameter. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ParametersParameter)
  part?: ParametersParameter[];

  /** Creates a new {@link ParametersParameter} instance. @param props - Initial property values. */
  constructor(props?: Partial<ParametersParameter>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link ParametersParameter} to the {@link ParametersParameter.part part} array. @param item - The {@link ParametersParameter} to add. @returns This instance for chaining. */
  addPart(item: ParametersParameter): this {
    if (!this.part) {
      this.part = [];
    }

    this.part.push(item);

    return this;
  }
}

/** FHIR R4 Parameters resource — used to convey a set of operation input or output parameter values. */
export class Parameters extends Resource {

  readonly resourceType = 'Parameters';

  /** A parameter passed to or received from the operation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ParametersParameter)
  parameter?: ParametersParameter[];

  /** Creates a new {@link Parameters} instance. @param props - Initial property values. */
  constructor(props?: Partial<Parameters>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link ParametersParameter} to the {@link Parameters.parameter parameter} array. @param item - The {@link ParametersParameter} to add. @returns This instance for chaining. */
  addParameter(item: ParametersParameter): this {
    if (!this.parameter) {
      this.parameter = [];
    }

    this.parameter.push(item);

    return this;
  }
}
