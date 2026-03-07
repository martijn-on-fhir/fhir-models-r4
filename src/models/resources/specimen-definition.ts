import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Duration } from '../datatypes/duration.js';
import { Identifier } from '../datatypes/identifier.js';
import { Quantity } from '../datatypes/quantity.js';
import { Range } from '../datatypes/range.js';
import { Reference } from '../datatypes/reference.js';

/** Backbone element for SpecimenDefinition. */
export class SpecimenDefinitionTypeTestedContainerAdditive extends BackboneElement {

  /** Substance introduced in the kind of container to preserve or fix the specimen, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  additiveCodeableConcept?: CodeableConcept;

  /** Substance introduced in the kind of container to preserve or fix the specimen, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  additiveReference?: Reference;

  /** Creates a new SpecimenDefinitionTypeTestedContainerAdditive. @param props - Initial values. */
  constructor(props?: Partial<SpecimenDefinitionTypeTestedContainerAdditive>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for SpecimenDefinition. */
export class SpecimenDefinitionTypeTestedContainer extends BackboneElement {

  /** The type of material of the container. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  material?: CodeableConcept;

  /** The type of container used to contain this kind of specimen. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Color of container cap. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  cap?: CodeableConcept;

  /** The textual description of the kind of container. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The capacity (volume or other measure) of this kind of container. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  capacity?: Quantity;

  /** The minimum volume to be conditioned in the container, as a Quantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  minimumVolumeQuantity?: Quantity;

  /** The minimum volume to be conditioned in the container, as a string. */
  @IsOptional()
  @IsString()
  minimumVolumeString?: string;

  /** Substance introduced in the kind of container to preserve, maintain, or enhance the specimen. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpecimenDefinitionTypeTestedContainerAdditive)
  additive?: SpecimenDefinitionTypeTestedContainerAdditive[];

  /** Special processing that should be applied to the container for this kind of specimen. */
  @IsOptional()
  @IsString()
  preparation?: string;

  /** Creates a new SpecimenDefinitionTypeTestedContainer. @param props - Initial values. */
  constructor(props?: Partial<SpecimenDefinitionTypeTestedContainer>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the additive array. @returns This instance for chaining. */
  addAdditive(item: SpecimenDefinitionTypeTestedContainerAdditive): this {
    if (!this.additive) {
      this.additive = [];
    }

    this.additive.push(item);

    return this;
  }
}

/** Backbone element for SpecimenDefinition. */
export class SpecimenDefinitionTypeTestedHandling extends BackboneElement {

  /** The temperature qualifier for the handling step. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  temperatureQualifier?: CodeableConcept;

  /** The temperature range for this handling step. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  temperatureRange?: Range;

  /** The maximum time duration of preservation of the specimen with these conditions. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  maxDuration?: Duration;

  /** Additional textual instructions for the preservation or transport of the specimen. */
  @IsOptional()
  @IsString()
  instruction?: string;

  /** Creates a new SpecimenDefinitionTypeTestedHandling. @param props - Initial values. */
  constructor(props?: Partial<SpecimenDefinitionTypeTestedHandling>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for SpecimenDefinition. */
export class SpecimenDefinitionTypeTested extends BackboneElement {

  /** Primary of secondary specimen. */
  @IsOptional()
  @IsBoolean()
  isDerived?: boolean;

  /** The kind of specimen conditioned for testing expected by lab. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The preference for this type of conditioned specimen (preferred or alternate). */
  @IsOptional()
  @IsString()
  preference?: string;

  /** The specimen's container. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SpecimenDefinitionTypeTestedContainer)
  container?: SpecimenDefinitionTypeTestedContainer;

  /** Requirements for delivery and special handling of this kind of conditioned specimen. */
  @IsOptional()
  @IsString()
  requirement?: string;

  /** The usual time that a specimen of this kind is retained after the ordered tests are completed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  retentionTime?: Duration;

  /** Criterion for rejection of the specimen in its container by the laboratory. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  rejectionCriterion?: CodeableConcept[];

  /** Set of instructions for preservation/transport of the specimen at a defined temperature interval. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpecimenDefinitionTypeTestedHandling)
  handling?: SpecimenDefinitionTypeTestedHandling[];

  /** Creates a new SpecimenDefinitionTypeTested. @param props - Initial values. */
  constructor(props?: Partial<SpecimenDefinitionTypeTested>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the rejectionCriterion array. @returns This instance for chaining. */
  addRejectionCriterion(item: CodeableConcept): this {
    if (!this.rejectionCriterion) {
      this.rejectionCriterion = [];
    }

    this.rejectionCriterion.push(item);

    return this;
  }

  /** Adds an item to the handling array. @returns This instance for chaining. */
  addHandling(item: SpecimenDefinitionTypeTestedHandling): this {
    if (!this.handling) {
      this.handling = [];
    }

    this.handling.push(item);

    return this;
  }
}

/** FHIR R4 SpecimenDefinition — a kind of specimen with associated set of requirements. */
export class SpecimenDefinition extends DomainResource {

  readonly resourceType = 'SpecimenDefinition';

  /** A business identifier associated with the kind of specimen. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** The kind of material to be collected. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  typeCollected?: CodeableConcept;

  /** Preparation of the patient for specimen collection. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  patientPreparation?: CodeableConcept[];

  /** Time aspect of specimen collection (e.g., duration or point). */
  @IsOptional()
  @IsString()
  timeAspect?: string;

  /** The action to be performed for collecting the specimen. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  collection?: CodeableConcept[];

  /** Specimen conditioned in a container as expected by the testing laboratory. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpecimenDefinitionTypeTested)
  typeTested?: SpecimenDefinitionTypeTested[];

  /** Creates a new SpecimenDefinition. @param props - Initial values. */
  constructor(props?: Partial<SpecimenDefinition>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the patientPreparation array. @returns This instance for chaining. */
  addPatientPreparation(item: CodeableConcept): this {
    if (!this.patientPreparation) {
      this.patientPreparation = [];
    }

    this.patientPreparation.push(item);

    return this;
  }

  /** Adds an item to the collection array. @returns This instance for chaining. */
  addCollection(item: CodeableConcept): this {
    if (!this.collection) {
      this.collection = [];
    }

    this.collection.push(item);

    return this;
  }

  /** Adds an item to the typeTested array. @returns This instance for chaining. */
  addTypeTested(item: SpecimenDefinitionTypeTested): this {
    if (!this.typeTested) {
      this.typeTested = [];
    }

    this.typeTested.push(item);

    return this;
  }
}
