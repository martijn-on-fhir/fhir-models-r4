import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Age } from '../datatypes/age.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Range } from '../datatypes/range.js';
import { Reference } from '../datatypes/reference.js';
import { FamilyMemberHistoryStatus } from '../enums/family-member-history-status.js';

/** Backbone element for FamilyMemberHistory. */
export class FamilyMemberHistoryCondition extends BackboneElement {

  /** The actual condition specified, coded or textual. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /** Indicates what happened following the condition, such as remission or death. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  outcome?: CodeableConcept;

  /** Whether this condition contributed to the cause of death of the related person. */
  @IsOptional()
  @IsBoolean()
  contributedToDeath?: boolean;

  /** Either the age of onset or the actual onset date, as an Age. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Age)
  onsetAge?: Age;

  /** Either the age of onset or the actual onset date, as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  onsetRange?: Range;

  /** Either the age of onset or the actual onset date, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  onsetPeriod?: Period;

  /** Either the age of onset or the actual onset date, as a string. */
  @IsOptional()
  @IsString()
  onsetString?: string;

  /** An area where general notes can be placed about this specific condition. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Creates a new FamilyMemberHistoryCondition. @param props - Initial values. */
  constructor(props?: Partial<FamilyMemberHistoryCondition>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the note array. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }
}

/** FHIR R4 FamilyMemberHistory — significant health conditions for a person related to the patient. */
export class FamilyMemberHistory extends DomainResource {

  /** Resource type constant. */
  readonly resourceType = 'FamilyMemberHistory';

  /** Business identifiers assigned to this family member history. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The URL pointing to a FHIR-defined protocol or definition that this resource is based on. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesCanonical?: string[];

  /** The URL pointing to an externally maintained protocol or definition. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesUri?: string[];

  /** A code specifying the status of the record of the family history. */
  @IsOptional()
  @IsEnum(FamilyMemberHistoryStatus)
  status?: FamilyMemberHistoryStatus;

  /** Describes why the family member's history is not available. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  dataAbsentReason?: CodeableConcept;

  /** The person who this history concerns. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /** The date (and possibly time) when the family member history was recorded or last updated. */
  @IsOptional()
  @IsString()
  date?: string;

  /** This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair". */
  @IsOptional()
  @IsString()
  name?: string;

  /** The type of relationship this person has to the patient (father, mother, brother etc.). */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  relationship?: CodeableConcept;

  /** The birth sex of the family member. */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  sex?: CodeableConcept;

  /** The actual or approximate date of birth of the relative, as a Period. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  bornPeriod?: Period;

  /** The actual or approximate date of birth of the relative, as a date. */
  @IsOptional()
  @IsString()
  bornDate?: string;

  /** The actual or approximate date of birth of the relative, as a string. */
  @IsOptional()
  @IsString()
  bornString?: string;

  /** The age of the relative at the time the family member history is recorded, as an Age. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Age)
  ageAge?: Age;

  /** The age of the relative at the time the family member history is recorded, as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  ageRange?: Range;

  /** The age of the relative at the time the family member history is recorded, as a string. */
  @IsOptional()
  @IsString()
  ageString?: string;

  /** If true, indicates that the age value specified is an estimated value. */
  @IsOptional()
  @IsBoolean()
  estimatedAge?: boolean;

  /** Deceased flag or the actual or approximate age of the relative at the time of death, as a boolean. */
  @IsOptional()
  @IsBoolean()
  deceasedBoolean?: boolean;

  /** Deceased flag or the actual or approximate age of the relative at the time of death, as an Age. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Age)
  deceasedAge?: Age;

  /** Deceased flag or the actual or approximate age of the relative at the time of death, as a Range. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  deceasedRange?: Range;

  /** Deceased flag or the actual or approximate age of the relative at the time of death, as a date. */
  @IsOptional()
  @IsString()
  deceasedDate?: string;

  /** Deceased flag or the actual or approximate age of the relative at the time of death, as a string. */
  @IsOptional()
  @IsString()
  deceasedString?: string;

  /** Describes why the family member history occurred in coded or textual form. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse as the reason. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** This property allows a non-structured textual description of the family member history. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** The significant conditions (or condition) that the family member had. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FamilyMemberHistoryCondition)
  condition?: FamilyMemberHistoryCondition[];

  /** Creates a new FamilyMemberHistory. @param props - Initial values. */
  constructor(props?: Partial<FamilyMemberHistory>) {
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

  /** Adds an item to the instantiatesCanonical array. @returns This instance for chaining. */
  addInstantiatesCanonical(item: string): this {
    if (!this.instantiatesCanonical) {
      this.instantiatesCanonical = [];
    }

    this.instantiatesCanonical.push(item);

    return this;
  }

  /** Adds an item to the instantiatesUri array. @returns This instance for chaining. */
  addInstantiatesUri(item: string): this {
    if (!this.instantiatesUri) {
      this.instantiatesUri = [];
    }

    this.instantiatesUri.push(item);

    return this;
  }

  /** Adds an item to the reasonCode array. @returns This instance for chaining. */
  addReasonCode(item: CodeableConcept): this {
    if (!this.reasonCode) {
      this.reasonCode = [];
    }

    this.reasonCode.push(item);

    return this;
  }

  /** Adds an item to the reasonReference array. @returns This instance for chaining. */
  addReasonReference(item: Reference): this {
    if (!this.reasonReference) {
      this.reasonReference = [];
    }

    this.reasonReference.push(item);

    return this;
  }

  /** Adds an item to the note array. @returns This instance for chaining. */
  addNote(item: Annotation): this {
    if (!this.note) {
      this.note = [];
    }

    this.note.push(item);

    return this;
  }

  /** Adds an item to the condition array. @returns This instance for chaining. */
  addCondition(item: FamilyMemberHistoryCondition): this {
    if (!this.condition) {
      this.condition = [];
    }

    this.condition.push(item);

    return this;
  }
}
