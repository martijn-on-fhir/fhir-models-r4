import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { CodeableConcept } from './codeable-concept.js';
import { Period } from './period.js';

/** FHIR R4 MarketingStatus — The marketing status describes the date when a medicinal product is actually put on the market or taken off. */
export class MarketingStatus extends BackboneElement {

  /** The country in which the marketing authorisation has been granted. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  country?: CodeableConcept;

  /** Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific jurisdiction. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept;

  /** This attribute provides information on the status of the marketing of the medicinal product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /** The date when the marketing status of the medicinal product applies. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  dateRange?: Period;

  /** Creates a new MarketingStatus. @param props - Initial values. */
  constructor(props?: Partial<MarketingStatus>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
