import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { ContactPoint } from '../datatypes/contact-point.js';
import { SubscriptionChannelType } from '../enums/subscription-channel-type.js';
import { SubscriptionStatus } from '../enums/subscription-status.js';

/** Backbone element for Subscription. */
export class SubscriptionChannel extends BackboneElement {

  /** The type of channel to send notifications on (e.g., rest-hook, websocket, email, message). */
  @IsOptional()
  @IsEnum(SubscriptionChannelType)
  type?: SubscriptionChannelType;

  /** The url that describes the actual end-point to send messages to. */
  @IsOptional()
  @IsString()
  endpoint?: string;

  /** The mime type to send the payload in. */
  @IsOptional()
  @IsString()
  payload?: string;

  /** Additional headers or information to send as part of the notification. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  header?: string[];

  /** Creates a new SubscriptionChannel. @param props - Initial values. */
  constructor(props?: Partial<SubscriptionChannel>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the header array. @returns This instance for chaining. */
  addHeader(item: string): this {
    if (!this.header) {
      this.header = [];
    }

    this.header.push(item);

    return this;
  }
}

/** FHIR R4 Subscription — a server push subscription used to define a push-based subscription from a server. */
export class Subscription extends DomainResource {

  readonly resourceType = 'Subscription';

  /** The status of the subscription (requested, active, error, off). */
  @IsOptional()
  @IsEnum(SubscriptionStatus)
  status?: SubscriptionStatus;

  /** Contact details for a human to contact about the subscription. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  contact?: ContactPoint[];

  /** The time for the server to turn the subscription off. */
  @IsOptional()
  @IsString()
  end?: string;

  /** A description of why this subscription is defined. */
  @IsOptional()
  @IsString()
  reason?: string;

  /** The rules the server should use to determine when to generate notifications for this subscription. */
  @IsOptional()
  @IsString()
  criteria?: string;

  /** A record of the last error that occurred when the server processed a notification. */
  @IsOptional()
  @IsString()
  error?: string;

  /** Details where to send notifications when resources are received that meet the criteria. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubscriptionChannel)
  channel?: SubscriptionChannel;

  /** Creates a new Subscription. @param props - Initial values. */
  constructor(props?: Partial<Subscription>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the contact array. @returns This instance for chaining. */
  addContact(item: ContactPoint): this {
    if (!this.contact) {
      this.contact = [];
    }

    this.contact.push(item);

    return this;
  }
}
