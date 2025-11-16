# Ananya Joshi - Assigned Issues

## Assigned CON Keys
- CON-4: Logging and data retention
- CON-10: Security/encryption for API traffic
- CON-2: Conversion core
- CON-11: Data retention policy

## Module Overview

### Logging Module (`src/logging/`)
Records conversion operations with detailed metadata including file information, conversion duration, and status.

### Encryption Module (`src/encryption/`)
Enforces TLS/HTTPS requirements and rejects insecure HTTP connections. Provides security wrapper for API traffic.

### Data Retention Module (`src/data-retention/`)
Implements log archiving and rotation with a 1-year retention policy. Includes cron job stubs for automated cleanup.

### Converters Module (`src/converters/`)
Core conversion pipeline with example converters (MD → PDF, CSV → JSON) demonstrating the conversion architecture.

## Usage

```bash
npm install
npm run build
npm test
```

## Testing

Run unit tests:
```bash
npm test
```

## Assigned CON Keys

- CON-4: Logging and data retention
- CON-10: Security/encryption for API traffic
- CON-2: Conversion core
- CON-11: Data retention policy

