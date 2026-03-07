import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { DomainResource } from '../base/domain-resource.js';
import { Identifier } from '../datatypes/identifier.js';
import { Period } from '../datatypes/period.js';
import { Reference } from '../datatypes/reference.js';
import { ResearchSubjectStatus } from '../enums/research-subject-status.js';

/** FHIR R4 ResearchSubject — a physical entity which is the primary unit of interest in the study. */
export class ResearchSubject extends DomainResource {

  readonly resourceType = 'ResearchSubject';

  /** Identifiers assigned to this research subject for the study. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /** The current state of the subject. */
  @IsOptional()
  @IsEnum(ResearchSubjectStatus)
  status?: ResearchSubjectStatus;

  /** The dates the subject began and ended their participation in the study. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /** Reference to the study the subject is participating in. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  study?: Reference;

  /** The record of the person or animal who is involved in the study. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  individual?: Reference;

  /** The name of the arm in the study the subject was assigned to. */
  @IsOptional()
  @IsString()
  assignedArm?: string;

  /** The name of the arm in the study the subject actually followed. */
  @IsOptional()
  @IsString()
  actualArm?: string;

  /** A record of the patient's informed agreement to participate in the study. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  consent?: Reference;

  /** Creates a new ResearchSubject. @param props - Initial values. */
  constructor(props?: Partial<ResearchSubject>) {
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
}
