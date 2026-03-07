import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Duration } from '../datatypes/duration.js';
import { Identifier } from '../datatypes/identifier.js';
import { Quantity } from '../datatypes/quantity.js';
import { Ratio } from '../datatypes/ratio.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for MedicinalProductPharmaceutical. */
export class MedicinalProductPharmaceuticalCharacteristics extends BackboneElement {

  /** A code expressing the type of characteristic. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The status of characteristic e.g. assigned or pending. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /** Creates a new MedicinalProductPharmaceuticalCharacteristics. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductPharmaceuticalCharacteristics>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for MedicinalProductPharmaceutical. */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends BackboneElement {

  /** Coded expression for the type of tissue for which the withdrawal period applies. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  tissue?: CodeableConcept;

  /** A value for the time. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  value?: Quantity;

  /** Extra information about the withdrawal period. */
  @IsOptional()
  @IsString()
  supportingInformation?: string;

  /** Creates a new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for MedicinalProductPharmaceutical. */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends BackboneElement {

  /** Coded expression for the species. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** A species specific time during which consumption of animal product is not appropriate. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod)
  withdrawalPeriod?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[];

  /** Creates a new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the withdrawalPeriod array. @returns This instance for chaining. */
  addWithdrawalPeriod(item: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod): this {
    if (!this.withdrawalPeriod) {
      this.withdrawalPeriod = [];
    }

    this.withdrawalPeriod.push(item);

    return this;
  }
}

/** Backbone element for MedicinalProductPharmaceutical. */
export class MedicinalProductPharmaceuticalRouteOfAdministration extends BackboneElement {

  /** Coded expression for the route. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** The first dose (Quantity) administered in humans can be specified. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  firstDose?: Quantity;

  /** The maximum single dose that can be administered. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  maxSingleDose?: Quantity;

  /** The maximum dose per day that can be administered. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  maxDosePerDay?: Quantity;

  /** The maximum dose per treatment period that can be administered. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  maxDosePerTreatmentPeriod?: Ratio;

  /** The maximum treatment period during which the product can be administered. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  maxTreatmentPeriod?: Duration;

  /** A species for which this route applies. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies)
  targetSpecies?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[];

  /** Creates a new MedicinalProductPharmaceuticalRouteOfAdministration. @param props - Initial values. */
  constructor(props?: Partial<MedicinalProductPharmaceuticalRouteOfAdministration>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  addTargetSpecies(item: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies): this {
    if (!this.targetSpecies) {
      this.targetSpecies = [];
    }

    this.targetSpecies.push(item);

    return this;
  }
}

export class MedicinalProductPharmaceutical extends DomainResource {

  readonly resourceType = 'MedicinalProductPharmaceutical';

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  administrableDoseForm?: CodeableConcept;

  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  unitOfPresentation?: CodeableConcept;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  ingredient?: Reference[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  device?: Reference[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductPharmaceuticalCharacteristics)
  characteristics?: MedicinalProductPharmaceuticalCharacteristics[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductPharmaceuticalRouteOfAdministration)
  routeOfAdministration?: MedicinalProductPharmaceuticalRouteOfAdministration[];

  constructor(props?: Partial<MedicinalProductPharmaceutical>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  addIdentifier(item: Identifier): this {
    if (!this.identifier) {
      this.identifier = [];
    }

    this.identifier.push(item);

    return this;
  }

  addIngredient(item: Reference): this {
    if (!this.ingredient) {
      this.ingredient = [];
    }

    this.ingredient.push(item);

    return this;
  }

  addDevice(item: Reference): this {
    if (!this.device) {
      this.device = [];
    }

    this.device.push(item);

    return this;
  }

  addCharacteristics(item: MedicinalProductPharmaceuticalCharacteristics): this {
    if (!this.characteristics) {
      this.characteristics = [];
    }

    this.characteristics.push(item);

    return this;
  }

  addRouteOfAdministration(item: MedicinalProductPharmaceuticalRouteOfAdministration): this {
    if (!this.routeOfAdministration) {
      this.routeOfAdministration = [];
    }

    this.routeOfAdministration.push(item);

    return this;
  }
}
