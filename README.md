# fhir-models-r4

TypeScript class models for all FHIR R4 resources, data types, and value set enums. Unlike interface-only libraries, this package provides real instantiable classes decorated with [class-validator](https://github.com/typestack/class-validator) and [class-transformer](https://github.com/typestack/class-transformer), enabling runtime validation and plain-object-to-class transformation out of the box.

## Features

- **146 FHIR R4 resources** — every resource from the official specification, from `Patient` to `MedicinalProduct`
- **37 complex data types** — `HumanName`, `Address`, `CodeableConcept`, `Identifier`, `Quantity`, `Timing`, `Dosage`, `Money`, and more
- **140 enums** — coded value sets like `AdministrativeGender`, `ObservationStatus`, `BundleType`, etc.
- **Proper inheritance** — `Element` → `BackboneElement`, `Resource` → `DomainResource` → concrete resources
- **Runtime validation** — all properties decorated with `class-validator` (`@IsOptional`, `@IsString`, `@ValidateNested`, `@IsEnum`, etc.)
- **Plain-to-class transformation** — nested objects decorated with `class-transformer` `@Type()` for automatic deserialization
- **Strict TypeScript** — compiled with `strict: true`, full type declarations included

## Installation

```bash
npm install fhir-models-r4
```

## Quick start

```typescript
import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Patient, HumanName, AdministrativeGender } from 'fhir-models-r4';

// Create a Patient from a plain FHIR JSON object
const patient = plainToInstance(Patient, {
  resourceType: 'Patient',
  id: '123',
  gender: 'male',
  birthDate: '1990-01-01',
  name: [{ use: 'official', family: 'Jansen', given: ['Pieter'] }],
});

// Validate
const errors = await validate(patient);
if (errors.length > 0) {
  console.error('Validation failed:', errors);
} else {
  console.log('Patient is valid');
}
```

### Construct directly

```typescript
const name = new HumanName();
name.use = NameUse.Official;
name.family = 'Jansen';
name.given = ['Pieter'];

const patient = new Patient();
patient.gender = AdministrativeGender.Male;
patient.birthDate = '1990-01-01';
patient.name = [name];
```

## Project structure

```
src/models/
├── base/           # Element, BackboneElement, Resource, DomainResource
├── enums/          # 140 coded value set enums
├── datatypes/      # 37 complex data types
├── resources/      # 146 FHIR R4 resources
└── index.ts
```

All files use kebab-case naming (e.g. `practitioner-role.ts`, `codeable-concept.ts`).

## Inheritance hierarchy

```
Element
├── Extension
├── (all complex data types)
│
BackboneElement (extends Element)
├── (all backbone/nested structures)
│
Resource
├── Bundle
├── Binary
├── Parameters
│
DomainResource (extends Resource)
├── Patient
├── Observation
├── Encounter
└── ... (all other resources)
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Compile TypeScript to `dist/` |
| `npm run lint` | Run ESLint |
| `npm run clean` | Remove `dist/` directory |

## License

ISC
