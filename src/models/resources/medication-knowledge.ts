import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Dosage } from '../datatypes/dosage.js';
import { Duration } from '../datatypes/duration.js';
import { Money } from '../datatypes/money.js';
import { Ratio } from '../datatypes/ratio.js';
import { Reference } from '../datatypes/reference.js';
import { SimpleQuantity } from '../datatypes/simple-quantity.js';
import { MedicationStatusCodes } from '../enums/medication-status-codes.js';

/** Backbone element for {@link MedicationKnowledge.relatedMedicationKnowledge}. */
export class MedicationKnowledgeRelatedMedicationKnowledge extends BackboneElement {

  /** The category of the associated medication knowledge reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Associated documentation about the associated medication knowledge. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reference?: Reference[];

  /** Creates a new {@link MedicationKnowledgeRelatedMedicationKnowledge} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationKnowledgeRelatedMedicationKnowledge>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link Reference} to the {@link MedicationKnowledgeRelatedMedicationKnowledge.reference reference} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addReference(item: Reference): this {
    if (!this.reference) {
      this.reference = [];
    }

    this.reference.push(item);

    return this;
  }
}

/** Backbone element for {@link MedicationKnowledge.monograph}. */
export class MedicationKnowledgeMonograph extends BackboneElement {

  /** The category of documentation about the medication knowledge (e.g., professional monograph, patient education monograph). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Associated documentation about the medication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  source?: Reference;

  /** Creates a new {@link MedicationKnowledgeMonograph} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationKnowledgeMonograph>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link MedicationKnowledge.ingredient}. */
export class MedicationKnowledgeIngredient extends BackboneElement {

  /** The actual ingredient, expressed as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  itemCodeableConcept?: CodeableConcept;

  /** The actual ingredient, expressed as a Reference to a Substance resource. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  itemReference?: Reference;

  /** Indication of whether this ingredient affects the therapeutic action of the drug. */
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  /** Specifies how many (or how much) of the items there are in this medication, expressed as a Ratio. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  strength?: Ratio;

  /** Creates a new {@link MedicationKnowledgeIngredient} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationKnowledgeIngredient>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link MedicationKnowledge.cost}. */
export class MedicationKnowledgeCost extends BackboneElement {

  /** The category of the cost information (e.g., wholesale, retail, direct net, etc.). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The source or community that defines the cost. */
  @IsOptional()
  @IsString()
  source?: string;

  /** The price of the medication. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  cost?: Money;

  /** Creates a new {@link MedicationKnowledgeCost} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationKnowledgeCost>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link MedicationKnowledge.monitoringProgram}. */
export class MedicationKnowledgeMonitoringProgram extends BackboneElement {

  /** Type of program under which the medication is monitored. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Name of the reviewing program. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Creates a new {@link MedicationKnowledgeMonitoringProgram} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationKnowledgeMonitoringProgram>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link MedicationKnowledgeAdministrationGuidelines.dosage}. */
export class MedicationKnowledgeAdministrationGuidelinesDosage extends BackboneElement {

  /** The type of dosage (e.g., prophylaxis, maintenance, therapeutic, etc.). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Dosage for the medication for the specific guidelines. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Dosage)
  dosage?: Dosage[];

  /** Creates a new {@link MedicationKnowledgeAdministrationGuidelinesDosage} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationKnowledgeAdministrationGuidelinesDosage>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link Dosage} to the {@link MedicationKnowledgeAdministrationGuidelinesDosage.dosage dosage} array. @param item - The {@link Dosage} to add. @returns This instance for chaining. */
  addDosage(item: Dosage): this {
    if (!this.dosage) {
      this.dosage = [];
    }

    this.dosage.push(item);

    return this;
  }
}

/** Backbone element for {@link MedicationKnowledgeAdministrationGuidelines.patientCharacteristics}. */
export class MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends BackboneElement {

  /** Specific characteristic that is relevant to the administration guideline, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  characteristicCodeableConcept?: CodeableConcept;

  /** Specific characteristic that is relevant to the administration guideline, as a SimpleQuantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  characteristicQuantity?: SimpleQuantity;

  /** The specific characteristic (e.g., height, weight, gender, etc.). */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  value?: string[];

  /** Creates a new {@link MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a value string to the {@link MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics.value value} array. @param item - The value string to add. @returns This instance for chaining. */
  addValue(item: string): this {
    if (!this.value) {
      this.value = [];
    }

    this.value.push(item);

    return this;
  }
}

/** Backbone element for {@link MedicationKnowledge.administrationGuidelines}. */
export class MedicationKnowledgeAdministrationGuidelines extends BackboneElement {

  /** Dosage for the medication for the specific guidelines. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeAdministrationGuidelinesDosage)
  dosage?: MedicationKnowledgeAdministrationGuidelinesDosage[];

  /** Indication for use that apply to the specific administration guidelines, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  indicationCodeableConcept?: CodeableConcept;

  /** Indication for use that apply to the specific administration guidelines, as a Reference. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  indicationReference?: Reference;

  /** Characteristics of the patient that are relevant to the administration guidelines. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics)
  patientCharacteristics?: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[];

  /** Creates a new {@link MedicationKnowledgeAdministrationGuidelines} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationKnowledgeAdministrationGuidelines>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link MedicationKnowledgeAdministrationGuidelinesDosage} to the {@link MedicationKnowledgeAdministrationGuidelines.dosage dosage} array. @param item - The {@link MedicationKnowledgeAdministrationGuidelinesDosage} to add. @returns This instance for chaining. */
  addDosage(item: MedicationKnowledgeAdministrationGuidelinesDosage): this {
    if (!this.dosage) {
      this.dosage = [];
    }

    this.dosage.push(item);

    return this;
  }

  /** Adds a {@link MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics}
   * to the {@link MedicationKnowledgeAdministrationGuidelines.patientCharacteristics patientCharacteristics} array.
   * @param item - The {@link MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics} to add.
   * @returns This instance for chaining.
   */
  addPatientCharacteristics(item: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics): this {
    if (!this.patientCharacteristics) {
      this.patientCharacteristics = [];
    }

    this.patientCharacteristics.push(item);

    return this;
  }
}

/** Backbone element for {@link MedicationKnowledge.medicineClassification}. */
export class MedicationKnowledgeMedicineClassification extends BackboneElement {

  /** The type of category for the medication (e.g., therapeutic classification, therapeutic sub-classification). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Specific category assigned to the medication (e.g., anti-infective, anti-hypertensive). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  classification?: CodeableConcept[];

  /** Creates a new {@link MedicationKnowledgeMedicineClassification} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationKnowledgeMedicineClassification>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link CodeableConcept} to the {@link MedicationKnowledgeMedicineClassification.classification classification} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addClassification(item: CodeableConcept): this {
    if (!this.classification) {
      this.classification = [];
    }

    this.classification.push(item);

    return this;
  }
}

/** Backbone element for {@link MedicationKnowledge.packaging}. */
export class MedicationKnowledgePackaging extends BackboneElement {

  /** A code that defines the specific type of packaging that the medication can be found in. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** The number of product units the package would contain if fully loaded. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  quantity?: SimpleQuantity;

  /** Creates a new {@link MedicationKnowledgePackaging} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationKnowledgePackaging>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link MedicationKnowledge.drugCharacteristic}. */
export class MedicationKnowledgeDrugCharacteristic extends BackboneElement {

  /** A code specifying which characteristic of the medicine is being described (e.g., colour, shape, imprint). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Description of the characteristic, as a CodeableConcept. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  valueCodeableConcept?: CodeableConcept;

  /** Description of the characteristic, as a string. */
  @IsOptional()
  @IsString()
  valueString?: string;

  /** Description of the characteristic, as a SimpleQuantity. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  valueQuantity?: SimpleQuantity;

  /** Description of the characteristic, as a base64-encoded binary. */
  @IsOptional()
  @IsString()
  valueBase64Binary?: string;

  /** Creates a new {@link MedicationKnowledgeDrugCharacteristic} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationKnowledgeDrugCharacteristic>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link MedicationKnowledgeRegulatory.substitution}. */
export class MedicationKnowledgeRegulatorySubstitution extends BackboneElement {

  /** Specifies the type of substitution allowed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /** Specifies if regulation allows for changes in the medication when dispensing. */
  @IsOptional()
  @IsBoolean()
  allowed?: boolean;

  /** Creates a new {@link MedicationKnowledgeRegulatorySubstitution} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationKnowledgeRegulatorySubstitution>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link MedicationKnowledgeRegulatory.schedule}. */
export class MedicationKnowledgeRegulatorySchedule extends BackboneElement {

  /** Specifies the specific drug schedule. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  schedule?: CodeableConcept;

  /** Creates a new {@link MedicationKnowledgeRegulatorySchedule} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationKnowledgeRegulatorySchedule>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link MedicationKnowledgeRegulatory.maxDispense}. */
export class MedicationKnowledgeRegulatoryMaxDispense extends BackboneElement {

  /** The maximum number of units of the medication that can be dispensed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  quantity?: SimpleQuantity;

  /** The period that applies to the maximum number of units. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  period?: Duration;

  /** Creates a new {@link MedicationKnowledgeRegulatoryMaxDispense} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationKnowledgeRegulatoryMaxDispense>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for {@link MedicationKnowledge.regulatory}. */
export class MedicationKnowledgeRegulatory extends BackboneElement {

  /** The authority that is specifying the regulations. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  regulatoryAuthority?: Reference;

  /** Specifies if changes are allowed when dispensing a medication from a regulatory perspective. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeRegulatorySubstitution)
  substitution?: MedicationKnowledgeRegulatorySubstitution[];

  /** Specifies the schedule of a medication in jurisdiction. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeRegulatorySchedule)
  schedule?: MedicationKnowledgeRegulatorySchedule[];

  /** The maximum number of units of the medication that can be dispensed in a period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicationKnowledgeRegulatoryMaxDispense)
  maxDispense?: MedicationKnowledgeRegulatoryMaxDispense;

  /** Creates a new {@link MedicationKnowledgeRegulatory} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationKnowledgeRegulatory>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link MedicationKnowledgeRegulatorySubstitution} to the {@link MedicationKnowledgeRegulatory.substitution substitution} array. @param item - The {@link MedicationKnowledgeRegulatorySubstitution} to add. @returns This instance for chaining. */
  addSubstitution(item: MedicationKnowledgeRegulatorySubstitution): this {
    if (!this.substitution) {
      this.substitution = [];
    }

    this.substitution.push(item);

    return this;
  }

  /** Adds a {@link MedicationKnowledgeRegulatorySchedule} to the {@link MedicationKnowledgeRegulatory.schedule schedule} array. @param item - The {@link MedicationKnowledgeRegulatorySchedule} to add. @returns This instance for chaining. */
  addSchedule(item: MedicationKnowledgeRegulatorySchedule): this {
    if (!this.schedule) {
      this.schedule = [];
    }

    this.schedule.push(item);

    return this;
  }
}

/** Backbone element for {@link MedicationKnowledge.kinetics}. */
export class MedicationKnowledgeKinetics extends BackboneElement {

  /** The drug concentration measured at certain discrete points in time. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SimpleQuantity)
  areaUnderCurve?: SimpleQuantity[];

  /** The median lethal dose of a drug. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SimpleQuantity)
  lethalDose50?: SimpleQuantity[];

  /** The time required for any specified property of a drug to decrease by half. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  halfLifePeriod?: Duration;

  /** Creates a new {@link MedicationKnowledgeKinetics} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationKnowledgeKinetics>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a {@link SimpleQuantity} to the {@link MedicationKnowledgeKinetics.areaUnderCurve areaUnderCurve} array. @param item - The {@link SimpleQuantity} to add. @returns This instance for chaining. */
  addAreaUnderCurve(item: SimpleQuantity): this {
    if (!this.areaUnderCurve) {
      this.areaUnderCurve = [];
    }

    this.areaUnderCurve.push(item);

    return this;
  }

  /** Adds a {@link SimpleQuantity} to the {@link MedicationKnowledgeKinetics.lethalDose50 lethalDose50} array. @param item - The {@link SimpleQuantity} to add. @returns This instance for chaining. */
  addLethalDose50(item: SimpleQuantity): this {
    if (!this.lethalDose50) {
      this.lethalDose50 = [];
    }

    this.lethalDose50.push(item);

    return this;
  }
}

/** FHIR R4 MedicationKnowledge resource — provides information about a medication, including details about the medication itself and guidelines for its administration. */
export class MedicationKnowledge extends DomainResource {

  /** The FHIR resource type, always "MedicationKnowledge". */
  readonly resourceType = 'MedicationKnowledge';

  /** A code that specifies this medication, or a textual description if no code is available. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** A code to indicate if the medication is in active use (active, inactive, entered-in-error). */
  @IsOptional()
  @IsEnum(MedicationStatusCodes)
  status?: MedicationStatusCodes;

  /** Describes the details of the manufacturer of the medication product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  manufacturer?: Reference;

  /** Describes the form of the item, such as powder, tablets, capsule. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  doseForm?: CodeableConcept;

  /** Specific amount of the drug in the packaged product. */
  @IsOptional()
  @ValidateNested()
  @Type(() => SimpleQuantity)
  amount?: SimpleQuantity;

  /** Additional names for the medication knowledge resource, such as brand name or generic name. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  synonym?: string[];

  /** Associated or related medication knowledge about this medication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeRelatedMedicationKnowledge)
  relatedMedicationKnowledge?: MedicationKnowledgeRelatedMedicationKnowledge[];

  /** Associated or related medications. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  associatedMedication?: Reference[];

  /** Category of the medication or product (e.g., branded product, therapeutic moeity, generic product, innovator product). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  productType?: CodeableConcept[];

  /** Associated documentation about the medication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeMonograph)
  monograph?: MedicationKnowledgeMonograph[];

  /** Identifies a particular constituent of interest in the product. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeIngredient)
  ingredient?: MedicationKnowledgeIngredient[];

  /** The instructions for preparing the medication. */
  @IsOptional()
  @IsString()
  preparationInstruction?: string;

  /** The intended or approved route of administration. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  intendedRoute?: CodeableConcept[];

  /** The price of the medication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeCost)
  cost?: MedicationKnowledgeCost[];

  /** The program under which the medication is reviewed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeMonitoringProgram)
  monitoringProgram?: MedicationKnowledgeMonitoringProgram[];

  /** Guidelines for the administration of the medication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeAdministrationGuidelines)
  administrationGuidelines?: MedicationKnowledgeAdministrationGuidelines[];

  /** Categorization of the medication within a formulary or classification system. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeMedicineClassification)
  medicineClassification?: MedicationKnowledgeMedicineClassification[];

  /** Information that only applies to packages (not products). */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicationKnowledgePackaging)
  packaging?: MedicationKnowledgePackaging;

  /** Specifies descriptive properties of the medicine, such as color, shape, imprints, etc. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeDrugCharacteristic)
  drugCharacteristic?: MedicationKnowledgeDrugCharacteristic[];

  /** Potential clinical issue with or between medication(s). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  contraindication?: Reference[];

  /** Regulatory information about a medication. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeRegulatory)
  regulatory?: MedicationKnowledgeRegulatory[];

  /** The time course of drug absorption, distribution, metabolism, and excretion of a medication from the body. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeKinetics)
  kinetics?: MedicationKnowledgeKinetics[];

  /** Creates a new {@link MedicationKnowledge} instance. @param props - Initial property values. */
  constructor(props?: Partial<MedicationKnowledge>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds a synonym string to the {@link MedicationKnowledge.synonym synonym} array. @param item - The synonym string to add. @returns This instance for chaining. */
  addSynonym(item: string): this {
    if (!this.synonym) {
      this.synonym = [];
    }

    this.synonym.push(item);

    return this;
  }

  /** Adds a {@link MedicationKnowledgeRelatedMedicationKnowledge} to the {@link MedicationKnowledge.relatedMedicationKnowledge relatedMedicationKnowledge} array. @param item - The {@link MedicationKnowledgeRelatedMedicationKnowledge} to add. @returns This instance for chaining. */
  addRelatedMedicationKnowledge(item: MedicationKnowledgeRelatedMedicationKnowledge): this {
    if (!this.relatedMedicationKnowledge) {
      this.relatedMedicationKnowledge = [];
    }

    this.relatedMedicationKnowledge.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link MedicationKnowledge.associatedMedication associatedMedication} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addAssociatedMedication(item: Reference): this {
    if (!this.associatedMedication) {
      this.associatedMedication = [];
    }

    this.associatedMedication.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link MedicationKnowledge.productType productType} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addProductType(item: CodeableConcept): this {
    if (!this.productType) {
      this.productType = [];
    }

    this.productType.push(item);

    return this;
  }

  /** Adds a {@link MedicationKnowledgeMonograph} to the {@link MedicationKnowledge.monograph monograph} array. @param item - The {@link MedicationKnowledgeMonograph} to add. @returns This instance for chaining. */
  addMonograph(item: MedicationKnowledgeMonograph): this {
    if (!this.monograph) {
      this.monograph = [];
    }

    this.monograph.push(item);

    return this;
  }

  /** Adds a {@link MedicationKnowledgeIngredient} to the {@link MedicationKnowledge.ingredient ingredient} array. @param item - The {@link MedicationKnowledgeIngredient} to add. @returns This instance for chaining. */
  addIngredient(item: MedicationKnowledgeIngredient): this {
    if (!this.ingredient) {
      this.ingredient = [];
    }

    this.ingredient.push(item);

    return this;
  }

  /** Adds a {@link CodeableConcept} to the {@link MedicationKnowledge.intendedRoute intendedRoute} array. @param item - The {@link CodeableConcept} to add. @returns This instance for chaining. */
  addIntendedRoute(item: CodeableConcept): this {
    if (!this.intendedRoute) {
      this.intendedRoute = [];
    }

    this.intendedRoute.push(item);

    return this;
  }

  /** Adds a {@link MedicationKnowledgeCost} to the {@link MedicationKnowledge.cost cost} array. @param item - The {@link MedicationKnowledgeCost} to add. @returns This instance for chaining. */
  addCost(item: MedicationKnowledgeCost): this {
    if (!this.cost) {
      this.cost = [];
    }

    this.cost.push(item);

    return this;
  }

  /** Adds a {@link MedicationKnowledgeMonitoringProgram} to the {@link MedicationKnowledge.monitoringProgram monitoringProgram} array. @param item - The {@link MedicationKnowledgeMonitoringProgram} to add. @returns This instance for chaining. */
  addMonitoringProgram(item: MedicationKnowledgeMonitoringProgram): this {
    if (!this.monitoringProgram) {
      this.monitoringProgram = [];
    }

    this.monitoringProgram.push(item);

    return this;
  }

  /** Adds a {@link MedicationKnowledgeAdministrationGuidelines} to the {@link MedicationKnowledge.administrationGuidelines administrationGuidelines} array. @param item - The {@link MedicationKnowledgeAdministrationGuidelines} to add. @returns This instance for chaining. */
  addAdministrationGuidelines(item: MedicationKnowledgeAdministrationGuidelines): this {
    if (!this.administrationGuidelines) {
      this.administrationGuidelines = [];
    }

    this.administrationGuidelines.push(item);

    return this;
  }

  /** Adds a {@link MedicationKnowledgeMedicineClassification} to the {@link MedicationKnowledge.medicineClassification medicineClassification} array. @param item - The {@link MedicationKnowledgeMedicineClassification} to add. @returns This instance for chaining. */
  addMedicineClassification(item: MedicationKnowledgeMedicineClassification): this {
    if (!this.medicineClassification) {
      this.medicineClassification = [];
    }

    this.medicineClassification.push(item);

    return this;
  }

  /** Adds a {@link MedicationKnowledgeDrugCharacteristic} to the {@link MedicationKnowledge.drugCharacteristic drugCharacteristic} array. @param item - The {@link MedicationKnowledgeDrugCharacteristic} to add. @returns This instance for chaining. */
  addDrugCharacteristic(item: MedicationKnowledgeDrugCharacteristic): this {
    if (!this.drugCharacteristic) {
      this.drugCharacteristic = [];
    }

    this.drugCharacteristic.push(item);

    return this;
  }

  /** Adds a {@link Reference} to the {@link MedicationKnowledge.contraindication contraindication} array. @param item - The {@link Reference} to add. @returns This instance for chaining. */
  addContraindication(item: Reference): this {
    if (!this.contraindication) {
      this.contraindication = [];
    }

    this.contraindication.push(item);

    return this;
  }

  /** Adds a {@link MedicationKnowledgeRegulatory} to the {@link MedicationKnowledge.regulatory regulatory} array. @param item - The {@link MedicationKnowledgeRegulatory} to add. @returns This instance for chaining. */
  addRegulatory(item: MedicationKnowledgeRegulatory): this {
    if (!this.regulatory) {
      this.regulatory = [];
    }

    this.regulatory.push(item);

    return this;
  }

  /** Adds a {@link MedicationKnowledgeKinetics} to the {@link MedicationKnowledge.kinetics kinetics} array. @param item - The {@link MedicationKnowledgeKinetics} to add. @returns This instance for chaining. */
  addKinetics(item: MedicationKnowledgeKinetics): this {
    if (!this.kinetics) {
      this.kinetics = [];
    }

    this.kinetics.push(item);

    return this;
  }
}
