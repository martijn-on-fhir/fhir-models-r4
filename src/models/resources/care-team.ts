import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Annotation } from '../datatypes/annotation.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { ContactPoint } from '../datatypes/contact-point.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { CareTeamStatus } from '../enums/care-team-status.js';

/** Backbone element for CareTeam — members of the team. */
export class CareTeamParticipant extends BackboneElement {

  /** Indicates the specific role the participant has within the care team. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  role?: CodeableConcept[];

  /** Reference to the practitioner, organization, or other participant. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  member?: Reference;

  /** Organization the participant is representing. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  onBehalfOf?: Reference;

  /** Time period of participation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Creates a new CareTeamParticipant. @param props - Initial values. */
  constructor(props?: Partial<CareTeamParticipant>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the role array. @returns This instance for chaining. */
  addRole(item: CodeableConcept): this {
    if (!this.role) {
      this.role = [];
    }

    this.role.push(item);

    return this;
  }
}

/** FHIR R4 CareTeam — participants involved in providing care for a patient. */
export class CareTeam extends DomainResource {

  /** The FHIR resource type string. */
  readonly resourceType = 'CareTeam';

  /** Business identifiers assigned to this care team. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The current status of the care team (proposed | active | suspended | etc.). */
  @IsOptional()
  @IsEnum(CareTeamStatus)
  status?: CareTeamStatus;

  /** Type of team (e.g., condition-focused, encounter-based, etc.). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /** Human-friendly name for the care team. */
  @IsOptional()
  @IsString()
  name?: string;

  /** Who the care team is for. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /** The encounter during which this care team was created. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /** Time period the team covers. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Members of the team. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CareTeamParticipant)
  participant?: CareTeamParticipant[];

  /** Coded reason for the care team. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /** Reference-based reason for the care team. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /** Organization(s) responsible for managing the care team. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  managingOrganization?: Reference[];

  /** Contact details for the care team. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /** Comments about the care team. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /** Creates a new CareTeam. @param props - Initial values. */
  constructor(props?: Partial<CareTeam>) {
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

  /** Adds an item to the category array. @returns This instance for chaining. */
  addCategory(item: CodeableConcept): this {
    if (!this.category) {
      this.category = [];
    }

    this.category.push(item);

    return this;
  }

  /** Adds an item to the participant array. @returns This instance for chaining. */
  addParticipant(item: CareTeamParticipant): this {
    if (!this.participant) {
      this.participant = [];
    }

    this.participant.push(item);

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

  /** Adds an item to the managingOrganization array. @returns This instance for chaining. */
  addManagingOrganization(item: Reference): this {
    if (!this.managingOrganization) {
      this.managingOrganization = [];
    }

    this.managingOrganization.push(item);

    return this;
  }

  /** Adds an item to the telecom array. @returns This instance for chaining. */
  addTelecom(item: ContactPoint): this {
    if (!this.telecom) {
      this.telecom = [];
    }

    this.telecom.push(item);

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
}
