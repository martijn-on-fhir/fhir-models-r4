import { Type } from 'class-transformer';
import { IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { BackboneElement } from '../base/backbone-element.js';
import { DomainResource } from '../base/domain-resource.js';
import { CodeableConcept } from '../datatypes/codeable-concept.js';
import { Coding } from '../datatypes/coding.js';
import { ContactDetail } from '../datatypes/contact-detail.js';
import { Identifier } from '../datatypes/identifier.js';
import { Reference } from '../datatypes/reference.js';
import { UsageContext } from '../datatypes/usage-context.js';
import { PublicationStatus } from '../enums/publication-status.js';

/** Backbone element for TestScript. */
export class TestScriptOrigin extends BackboneElement {

  /** Abstract name given to an origin server in this test script. */
  @IsOptional()
  @IsNumber()
  index?: number;

  /** The type of origin profile the test system supports. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  profile?: Coding;

  /** Creates a new TestScriptOrigin. @param props - Initial values. */
  constructor(props?: Partial<TestScriptOrigin>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TestScript. */
export class TestScriptDestination extends BackboneElement {

  /** Abstract name given to a destination server in this test script. */
  @IsOptional()
  @IsNumber()
  index?: number;

  /** The type of destination profile the test system supports. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  profile?: Coding;

  /** Creates a new TestScriptDestination. @param props - Initial values. */
  constructor(props?: Partial<TestScriptDestination>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TestScript. */
export class TestScriptMetadataLink extends BackboneElement {

  /** URL to a particular requirement or feature within the FHIR spec. */
  @IsOptional()
  @IsString()
  url?: string;

  /** Short description of the link. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Creates a new TestScriptMetadataLink. @param props - Initial values. */
  constructor(props?: Partial<TestScriptMetadataLink>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TestScript. */
export class TestScriptMetadataCapability extends BackboneElement {

  /** Whether or not the test execution will require the given capabilities of the server in order for this test script to execute. */
  @IsOptional()
  @IsBoolean()
  required?: boolean;

  /** Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute. */
  @IsOptional()
  @IsBoolean()
  validated?: boolean;

  /** Description of the capabilities that this test script is requiring the server to support. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Which origin server these requirements apply to. */
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  origin?: number[];

  /** Which server these requirements apply to. */
  @IsOptional()
  @IsNumber()
  destination?: number;

  /** Links to the FHIR specification that describes this interaction and the resources involved in more detail. */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  link?: string[];

  /** Minimum capabilities required of server for test script to execute successfully. */
  @IsOptional()
  @IsString()
  capabilities?: string;

  /** Creates a new TestScriptMetadataCapability. @param props - Initial values. */
  constructor(props?: Partial<TestScriptMetadataCapability>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the origin array. @returns This instance for chaining. */
  addOrigin(item: number): this {
    if (!this.origin) {
      this.origin = [];
    }

    this.origin.push(item);

    return this;
  }

  /** Adds an item to the link array. @returns This instance for chaining. */
  addLink(item: string): this {
    if (!this.link) {
      this.link = [];
    }

    this.link.push(item);

    return this;
  }
}

/** Backbone element for TestScript. */
export class TestScriptMetadata extends BackboneElement {

  /** A link to the FHIR specification that this test is covering. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptMetadataLink)
  link?: TestScriptMetadataLink[];

  /** Capabilities that must exist and are assumed to function correctly on the FHIR server being tested. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptMetadataCapability)
  capability?: TestScriptMetadataCapability[];

  /** Creates a new TestScriptMetadata. @param props - Initial values. */
  constructor(props?: Partial<TestScriptMetadata>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the link array. @returns This instance for chaining. */
  addLink(item: TestScriptMetadataLink): this {
    if (!this.link) {
      this.link = [];
    }

    this.link.push(item);

    return this;
  }

  /** Adds an item to the capability array. @returns This instance for chaining. */
  addCapability(item: TestScriptMetadataCapability): this {
    if (!this.capability) {
      this.capability = [];
    }

    this.capability.push(item);

    return this;
  }
}

/** Backbone element for TestScript. */
export class TestScriptFixture extends BackboneElement {

  /** Whether or not to implicitly create the fixture during setup. */
  @IsOptional()
  @IsBoolean()
  autocreate?: boolean;

  /** Whether or not to implicitly delete the fixture during teardown. */
  @IsOptional()
  @IsBoolean()
  autodelete?: boolean;

  /** Reference to the resource (containing the contents of the resource needed for operations). */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  resource?: Reference;

  /** Creates a new TestScriptFixture. @param props - Initial values. */
  constructor(props?: Partial<TestScriptFixture>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TestScript. */
export class TestScriptVariable extends BackboneElement {

  /** Descriptive name for this variable. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A default, hard-coded, or user-defined value for this variable. */
  @IsOptional()
  @IsString()
  defaultValue?: string;

  /** A free-text natural language description of the variable and its purpose. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The FHIRPath expression to evaluate against the fixture body. */
  @IsOptional()
  @IsString()
  expression?: string;

  /** Will be used to grab the HTTP header field value from the headers that sourceId is pointing to. */
  @IsOptional()
  @IsString()
  headerField?: string;

  /** Displayable text string with hint help information to the user when entering a default value. */
  @IsOptional()
  @IsString()
  hint?: string;

  /** XPath or JSONPath to evaluate against the fixture body. */
  @IsOptional()
  @IsString()
  path?: string;

  /** Fixture to evaluate the XPath/JSONPath expression or the headerField against within this variable. */
  @IsOptional()
  @IsString()
  sourceId?: string;

  /** Creates a new TestScriptVariable. @param props - Initial values. */
  constructor(props?: Partial<TestScriptVariable>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TestScript. */
export class TestScriptSetupActionOperationRequestHeader extends BackboneElement {

  /** The HTTP header field e.g. "Accept". */
  @IsOptional()
  @IsString()
  field?: string;

  /** The value of the header e.g. "application/fhir+xml". */
  @IsOptional()
  @IsString()
  value?: string;

  /** Creates a new TestScriptSetupActionOperationRequestHeader. @param props - Initial values. */
  constructor(props?: Partial<TestScriptSetupActionOperationRequestHeader>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TestScript. */
export class TestScriptSetupActionOperation extends BackboneElement {

  /** Server interaction or operation type. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  type?: Coding;

  /** The type of the resource. */
  @IsOptional()
  @IsString()
  resource?: string;

  /** The label would be used for tracking/logging purposes by test engines. */
  @IsOptional()
  @IsString()
  label?: string;

  /** The description would be used by test engines for tracking and reporting purposes. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The mime-type to use for RESTful operation in the 'Accept' header. */
  @IsOptional()
  @IsString()
  accept?: string;

  /** The mime-type to use for RESTful operation in the 'Content-Type' header. */
  @IsOptional()
  @IsString()
  contentType?: string;

  /** The server where the request message is destined for. */
  @IsOptional()
  @IsNumber()
  destination?: number;

  /** Whether or not to send the request url in encoded format. */
  @IsOptional()
  @IsBoolean()
  encodeRequestUrl?: boolean;

  /** The HTTP method the test engine MUST use for this operation. */
  @IsOptional()
  @IsString()
  method?: string;

  /** The server where the request message originates from. */
  @IsOptional()
  @IsNumber()
  origin?: number;

  /** Path plus parameters after [type]. */
  @IsOptional()
  @IsString()
  params?: string;

  /** Header elements would be used to set HTTP headers. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptSetupActionOperationRequestHeader)
  requestHeader?: TestScriptSetupActionOperationRequestHeader[];

  /** The fixture id (maybe new) to map to the request. */
  @IsOptional()
  @IsString()
  requestId?: string;

  /** The fixture id (maybe new) to map to the response. */
  @IsOptional()
  @IsString()
  responseId?: string;

  /** The id of the fixture used as the body of a PUT or POST request. */
  @IsOptional()
  @IsString()
  sourceId?: string;

  /** Id of fixture used for extracting the [id], [type], and [vid] for GET requests. */
  @IsOptional()
  @IsString()
  targetId?: string;

  /** Complete request URL. */
  @IsOptional()
  @IsString()
  url?: string;

  /** Creates a new TestScriptSetupActionOperation. @param props - Initial values. */
  constructor(props?: Partial<TestScriptSetupActionOperation>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the requestHeader array. @returns This instance for chaining. */
  addRequestHeader(item: TestScriptSetupActionOperationRequestHeader): this {
    if (!this.requestHeader) {
      this.requestHeader = [];
    }

    this.requestHeader.push(item);

    return this;
  }
}

/** Backbone element for TestScript. */
export class TestScriptSetupActionAssert extends BackboneElement {

  /** The label would be used for tracking/logging purposes by test engines. */
  @IsOptional()
  @IsString()
  label?: string;

  /** The description would be used by test engines for tracking and reporting purposes. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The direction to use for the assertion. */
  @IsOptional()
  @IsString()
  direction?: string;

  /** Id of the source fixture used as the contents to be evaluated by either the "source/expression" or "sourceId/path" definition. */
  @IsOptional()
  @IsString()
  compareToSourceId?: string;

  /** The FHIRPath expression to evaluate against the source fixture. */
  @IsOptional()
  @IsString()
  compareToSourceExpression?: string;

  /** XPath or JSONPath expression to evaluate against the source fixture. */
  @IsOptional()
  @IsString()
  compareToSourcePath?: string;

  /** The mime-type contents to compare against the request or response message 'Content-Type' header. */
  @IsOptional()
  @IsString()
  contentType?: string;

  /** The FHIRPath expression to be evaluated against the request or response message contents. */
  @IsOptional()
  @IsString()
  expression?: string;

  /** The HTTP header field name e.g., 'Location'. */
  @IsOptional()
  @IsString()
  headerField?: string;

  /** The ID of a fixture. */
  @IsOptional()
  @IsString()
  minimumId?: string;

  /** Whether or not the test execution performs validation on the bundle navigation links. */
  @IsOptional()
  @IsBoolean()
  navigationLinks?: boolean;

  /** The operator type defines the conditional behavior of the assert. */
  @IsOptional()
  @IsString()
  operator?: string;

  /** The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server. */
  @IsOptional()
  @IsString()
  path?: string;

  /** The request method or HTTP operation code to compare against that used by the client system under test. */
  @IsOptional()
  @IsString()
  requestMethod?: string;

  /** The value to use in a comparison against the request URL path string. */
  @IsOptional()
  @IsString()
  requestURL?: string;

  /** The type of the resource. */
  @IsOptional()
  @IsString()
  resource?: string;

  /** The expected response from the system under test. */
  @IsOptional()
  @IsString()
  response?: string;

  /** The value of the HTTP response code to be tested. */
  @IsOptional()
  @IsString()
  responseCode?: string;

  /** Fixture to evaluate the XPath/JSONPath expression or the headerField against. */
  @IsOptional()
  @IsString()
  sourceId?: string;

  /** The ID of the Profile to validate against. */
  @IsOptional()
  @IsString()
  validateProfileId?: string;

  /** The value to compare to. */
  @IsOptional()
  @IsString()
  value?: string;

  /** Whether or not the test execution will produce a warning only on error for this assert. */
  @IsOptional()
  @IsBoolean()
  warningOnly?: boolean;

  /** Creates a new TestScriptSetupActionAssert. @param props - Initial values. */
  constructor(props?: Partial<TestScriptSetupActionAssert>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TestScript. */
export class TestScriptSetupAction extends BackboneElement {

  /** The operation to perform. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestScriptSetupActionOperation)
  operation?: TestScriptSetupActionOperation;

  /** Evaluates the results of previous operations to determine if the server under test behaves appropriately. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestScriptSetupActionAssert)
  assert?: TestScriptSetupActionAssert;

  /** Creates a new TestScriptSetupAction. @param props - Initial values. */
  constructor(props?: Partial<TestScriptSetupAction>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TestScript. */
export class TestScriptSetup extends BackboneElement {

  /** Action would contain either an operation or an assertion. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptSetupAction)
  action?: TestScriptSetupAction[];

  /** Creates a new TestScriptSetup. @param props - Initial values. */
  constructor(props?: Partial<TestScriptSetup>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the action array. @returns This instance for chaining. */
  addAction(item: TestScriptSetupAction): this {
    if (!this.action) {
      this.action = [];
    }

    this.action.push(item);

    return this;
  }
}

/** Backbone element for TestScript. */
export class TestScriptTestAction extends BackboneElement {

  /** An operation would involve a REST request to a server. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestScriptSetupActionOperation)
  operation?: TestScriptSetupActionOperation;

  /** Evaluates the results of previous operations to determine if the server under test behaves appropriately. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestScriptSetupActionAssert)
  assert?: TestScriptSetupActionAssert;

  /** Creates a new TestScriptTestAction. @param props - Initial values. */
  constructor(props?: Partial<TestScriptTestAction>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TestScript. */
export class TestScriptTest extends BackboneElement {

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
  @Type(() => TestScriptTestAction)
  action?: TestScriptTestAction[];

  /** Creates a new TestScriptTest. @param props - Initial values. */
  constructor(props?: Partial<TestScriptTest>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the action array. @returns This instance for chaining. */
  addAction(item: TestScriptTestAction): this {
    if (!this.action) {
      this.action = [];
    }

    this.action.push(item);

    return this;
  }
}

/** Backbone element for TestScript. */
export class TestScriptTeardownAction extends BackboneElement {

  /** An operation would involve a REST request to a server. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestScriptSetupActionOperation)
  operation?: TestScriptSetupActionOperation;

  /** Creates a new TestScriptTeardownAction. @param props - Initial values. */
  constructor(props?: Partial<TestScriptTeardownAction>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}

/** Backbone element for TestScript. */
export class TestScriptTeardown extends BackboneElement {

  /** The teardown action will only contain an operation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptTeardownAction)
  action?: TestScriptTeardownAction[];

  /** Creates a new TestScriptTeardown. @param props - Initial values. */
  constructor(props?: Partial<TestScriptTeardown>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the action array. @returns This instance for chaining. */
  addAction(item: TestScriptTeardownAction): this {
    if (!this.action) {
      this.action = [];
    }

    this.action.push(item);

    return this;
  }
}

/** FHIR R4 TestScript — a structured set of tests against a FHIR server or client implementation. */
export class TestScript extends DomainResource {

  readonly resourceType = 'TestScript';

  /** An absolute URI that is used to identify this test script when it is referenced. */
  @IsOptional()
  @IsString()
  url?: string;

  /** A formal identifier that is used to identify this test script when it is represented in other formats. */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /** The identifier that is used to identify this version of the test script. */
  @IsOptional()
  @IsString()
  version?: string;

  /** A natural language name identifying the test script. */
  @IsOptional()
  @IsString()
  name?: string;

  /** A short, descriptive, user-friendly title for the test script. */
  @IsOptional()
  @IsString()
  title?: string;

  /** The status of this test script (draft | active | retired | unknown). */
  @IsOptional()
  @IsEnum(PublicationStatus)
  status?: PublicationStatus;

  /** A Boolean value to indicate that this test script is authored for testing purposes. */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  /** The date (and optionally time) when the test script was published. */
  @IsOptional()
  @IsString()
  date?: string;

  /** The name of the organization or individual that published the test script. */
  @IsOptional()
  @IsString()
  publisher?: string;

  /** Contact details to assist a user in finding and communicating with the publisher. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /** A free text natural language description of the test script from a consumer's perspective. */
  @IsOptional()
  @IsString()
  description?: string;

  /** The content was developed with a focus and intent of supporting the contexts that are listed. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /** A legal or geographic region in which the test script is intended to be used. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /** Explanation of why this test script is needed and why it has been designed as it has. */
  @IsOptional()
  @IsString()
  purpose?: string;

  /** A copyright statement relating to the test script. */
  @IsOptional()
  @IsString()
  copyright?: string;

  /** An abstract server used in operations within this test script in the origin element. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptOrigin)
  origin?: TestScriptOrigin[];

  /** An abstract server used in operations within this test script in the destination element. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptDestination)
  destination?: TestScriptDestination[];

  /** The required capability must exist and are assumed to function correctly on the FHIR server being tested. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestScriptMetadata)
  metadata?: TestScriptMetadata;

  /** Fixture in the test script - by reference (uri). */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptFixture)
  fixture?: TestScriptFixture[];

  /** Reference to the profile to be used for validation. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  profile?: Reference[];

  /** Variable is set based either on element value in response body or on header field value in the response headers. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptVariable)
  variable?: TestScriptVariable[];

  /** A series of required setup operations before tests are executed. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestScriptSetup)
  setup?: TestScriptSetup;

  /** A test in this script. */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptTest)
  test?: TestScriptTest[];

  /** A series of required clean up steps. */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestScriptTeardown)
  teardown?: TestScriptTeardown;

  /** Creates a new TestScript. @param props - Initial values. */
  constructor(props?: Partial<TestScript>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }

  /** Adds an item to the contact array. @returns This instance for chaining. */
  addContact(item: ContactDetail): this {
    if (!this.contact) {
      this.contact = [];
    }

    this.contact.push(item);

    return this;
  }

  /** Adds an item to the useContext array. @returns This instance for chaining. */
  addUseContext(item: UsageContext): this {
    if (!this.useContext) {
      this.useContext = [];
    }

    this.useContext.push(item);

    return this;
  }

  /** Adds an item to the jurisdiction array. @returns This instance for chaining. */
  addJurisdiction(item: CodeableConcept): this {
    if (!this.jurisdiction) {
      this.jurisdiction = [];
    }

    this.jurisdiction.push(item);

    return this;
  }

  /** Adds an item to the origin array. @returns This instance for chaining. */
  addOrigin(item: TestScriptOrigin): this {
    if (!this.origin) {
      this.origin = [];
    }

    this.origin.push(item);

    return this;
  }

  /** Adds an item to the destination array. @returns This instance for chaining. */
  addDestination(item: TestScriptDestination): this {
    if (!this.destination) {
      this.destination = [];
    }

    this.destination.push(item);

    return this;
  }

  /** Adds an item to the fixture array. @returns This instance for chaining. */
  addFixture(item: TestScriptFixture): this {
    if (!this.fixture) {
      this.fixture = [];
    }

    this.fixture.push(item);

    return this;
  }

  /** Adds an item to the profile array. @returns This instance for chaining. */
  addProfile(item: Reference): this {
    if (!this.profile) {
      this.profile = [];
    }

    this.profile.push(item);

    return this;
  }

  /** Adds an item to the variable array. @returns This instance for chaining. */
  addVariable(item: TestScriptVariable): this {
    if (!this.variable) {
      this.variable = [];
    }

    this.variable.push(item);

    return this;
  }

  /** Adds an item to the test array. @returns This instance for chaining. */
  addTest(item: TestScriptTest): this {
    if (!this.test) {
      this.test = [];
    }

    this.test.push(item);

    return this;
  }
}
