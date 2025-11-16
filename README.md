# Converty Monorepo

A monorepo containing file conversion service modules organized by team member contributions.

## Project Structure

```
converty-monorepo/
├── Ananya/          # Logging, encryption, conversion core (CON-4, CON-10, CON-2, CON-11)
├── anivartha/       # Upload, validation, download, performance (CON-1, CON-5, CON-3, CON-6, CON-8)
├── Ayush/           # API docs, SLO, Node+TS setup, CI/CD (CON-7, CON-9, CON-12, CON-17, CON-18)
└── .github/
    └── workflows/
        └── ci.yml   # CI pipeline (created by Ayush)
```

## Issue-to-Person Mapping

### Ananya Joshi
- CON-4: Logging and data retention
- CON-10: Security/encryption for API traffic
- CON-2: Conversion core
- CON-11: Data retention policy

### anivartha
- CON-1: File upload handling
- CON-5: Reject unsupported/corrupted files
- CON-3: Download endpoint
- CON-6: Performance optimization
- CON-8: Quick conversions

### Ayush
- CON-7: API documentation
- CON-9: Availability / reliability SLO (99.5%)
- CON-12: API documentation enhancements
- CON-17: Node.js + TypeScript environment setup
- CON-18: Repository + CI pipeline automation

## CI/CD

The CI pipeline (`.github/workflows/ci.yml`) was created by Ayush as part of CON-18. It runs on push and pull_request events, executing:
- `npm ci` - Install dependencies
- `npm run build` - TypeScript compilation
- `npm test` - Run test suites

## Getting Started

Each subfolder contains its own `package.json` and can be developed independently. See individual README files in each folder for module-specific instructions.

## Version

Current version: v0.1.0

