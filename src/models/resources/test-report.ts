import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';
import { TestReportActionResult } from '../enums/test-report-action-result.js';
import { TestReportResult } from '../enums/test-report-result.js';
import { TestReportStatus } from '../enums/test-report-status.js';

/** Backbone element for TestReport. */
export class TestReportParticipant extends BackboneElement {

  /** The type of participant. */
  @IsOptional()
  @IsString()
  type?: string;

  /** The uri of the participant, an absolute URL is recommended. */
  @IsOptional()
  @IsString()
  uri?: string;

  /** The display name of the participant. */
  @IsOptional()
  @IsString()
  display?: string;

  /** Creates a new TestReportParticipant. @param props - Initial values. */
  constructor(props?: Partial<TestReportParticipant>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TestReport. */
export class TestReportSetupActionOperation extends BackboneElement {

  /** The result of this operation. */
  @IsOptional()
  @IsEnum(TestReportActionResult)
  result?: TestReportActionResult;

  /** An explanatory message associated with the result. */
  @IsOptional()
  @IsString()
  message?: string;

  /** A link to further details on the result. */
  @IsOptional()
  @IsString()
  detail?: string;

  /** Creates a new TestReportSetupActionOperation. @param props - Initial values. */
  constructor(props?: Partial<TestReportSetupActionOperation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TestReport. */
export class TestReportSetupActionAssert extends BackboneElement {

  /** The result of this assertion. */
  @IsOptional()
  @IsEnum(TestReportActionResult)
  result?: TestReportActionResult;

  /** An explanatory message associated with the result. */
  @IsOptional()
  @IsString()
  message?: string;

  /** A link to further details on the result. */
  @IsOptional()
  @IsString()
  detail?: string;

  /** Creates a new TestReportSetupActionAssert. @param props - Initial values. */
  constructor(props?: Partial<TestReportSetupActionAssert>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TestReport. */
export class TestReportSetupAction extends BackboneElement {

  /** The operation performed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestReportSetupActionOperation)
  operation?: TestReportSetupActionOperation;

  /** The results of the assertion performed on the previous operations. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestReportSetupActionAssert)
  assert?: TestReportSetupActionAssert;

  /** Creates a new TestReportSetupAction. @param props - Initial values. */
  constructor(props?: Partial<TestReportSetupAction>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TestReport. */
export class TestReportSetup extends BackboneElement {

  /** Action would contain either an operation or an assertion. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestReportSetupAction)
  action?: TestReportSetupAction[];

  /** Creates a new TestReportSetup. @param props - Initial values. */
  constructor(props?: Partial<TestReportSetup>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the action array. @returns This instance for chaining. */
  addAction(item: TestReportSetupAction): this {
    if (!this.action) {
      this.action = [];
    }

    this.action.push(item);

    return this;
  }
}

/** Backbone element for TestReport. */
export class TestReportTestAction extends BackboneElement {

  /** An operation would involve a REST request to a server. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestReportSetupActionOperation)
  operation?: TestReportSetupActionOperation;

  /** The results of the assertion performed on the previous operations. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestReportSetupActionAssert)
  assert?: TestReportSetupActionAssert;

  /** Creates a new TestReportTestAction. @param props - Initial values. */
  constructor(props?: Partial<TestReportTestAction>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TestReport. */
export class TestReportTest extends BackboneElement {

  /** The name of this test used for tracking/logging purposes by test engines. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short description of the test used by test engines for tracking and reporting purposes. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Action would contain either an operation or an assertion. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestReportTestAction)
  action?: TestReportTestAction[];

  /** Creates a new TestReportTest. @param props - Initial values. */
  constructor(props?: Partial<TestReportTest>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the action array. @returns This instance for chaining. */
  addAction(item: TestReportTestAction): this {
    if (!this.action) {
      this.action = [];
    }

    this.action.push(item);

    return this;
  }
}

/** Backbone element for TestReport. */
export class TestReportTeardownAction extends BackboneElement {

  /** An operation would involve a REST request to a server. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestReportSetupActionOperation)
  operation?: TestReportSetupActionOperation;

  /** Creates a new TestReportTeardownAction. @param props - Initial values. */
  constructor(props?: Partial<TestReportTeardownAction>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TestReport. */
export class TestReportTeardown extends BackboneElement {

  /** The teardown action will only contain an operation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestReportTeardownAction)
  action?: TestReportTeardownAction[];

  /** Creates a new TestReportTeardown. @param props - Initial values. */
  constructor(props?: Partial<TestReportTeardown>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the action array. @returns This instance for chaining. */
  addAction(item: TestReportTeardownAction): this {
    if (!this.action) {
      this.action = [];
    }

    this.action.push(item);

    return this;
  }
}

/** FHIR R4 TestReport — a summary of information based on the results of executing a TestScript. */
export class TestReport extends DomainResource {

  readonly resourceType = 'TestReport';

  /** Identifier for the TestScript assigned for external purposes outside the context of FHIR. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** A free text natural language name identifying the executed TestScript. */
  @IsOptional()
  @IsString()
  name?: string;

  /** The current state of this test report. */
  @IsOptional()
  @IsEnum(TestReportStatus)
  status?: TestReportStatus;

  /** Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  testScript?: Reference;

  /** The overall result from the execution of the TestScript. */
  @IsOptional()
  @IsEnum(TestReportResult)
  result?: TestReportResult;

  /** The final score (percentage of tests passed) resulting from the execution of the TestScript. */
  @IsOptional()
  @IsNumber()
  score?: number;

  /** Name of the tester producing this report (Organization or individual). */
  @IsOptional()
  @IsString()
  tester?: string;

  /** When the TestScript was executed and this TestReport was generated. */
  @IsOptional()
  @IsString()
  issued?: string;

  /** A participant in the test execution, either the execution engine, a client, or a server. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestReportParticipant)
  participant?: TestReportParticipant[];

  /** The results of the series of required setup operations before the tests were executed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestReportSetup)
  setup?: TestReportSetup;

  /** A test executed from the test script. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestReportTest)
  test?: TestReportTest[];

  /** The results of the series of operations required to clean up after all the tests were executed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestReportTeardown)
  teardown?: TestReportTeardown;

  /** Creates a new TestReport. @param props - Initial values. */
  constructor(props?: Partial<TestReport>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the participant array. @returns This instance for chaining. */
  addParticipant(item: TestReportParticipant): this {
    if (!this.participant) {
      this.participant = [];
    }

    this.participant.push(item);

    return this;
  }

  /** Adds an item to the test array. @returns This instance for chaining. */
  addTest(item: TestReportTest): this {
    if (!this.test) {
      this.test = [];
    }

    this.test.push(item);

    return this;
  }
}
