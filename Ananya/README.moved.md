# Files Moved from Ananya/

This document describes where files from the `Ananya/` folder have been moved in the reorganized repository structure.

## Date Moved
2024-11-17

## Source → Destination Mapping

### Source Code
- `Ananya/src/logging/*` → `backend/src/ananya/logging/`
- `Ananya/src/encryption/*` → `backend/src/ananya/encryption/`
- `Ananya/src/converters/*` → `backend/src/ananya/converters/`
- `Ananya/src/data-retention/*` → `backend/src/ananya/data-retention/`
- `Ananya/src/index.ts` → `backend/src/ananya/index.ts`

### Tests
- `Ananya/tests/*.ts` → `backend/tests/ananya/`
- `Ananya/jest.config.js` → `backend/tests/ananya/jest.config.js`

## What Remains
- `Ananya/commits.log` - Preserved for history
- `Ananya/README.md` - Original README preserved
- `Ananya/docs/` - Documentation preserved
- `Ananya/scripts/` - Scripts preserved

## Integration
The moved code is integrated into the main backend server at `backend/src/index.ts`. The modules can be imported from `backend/src/ananya/` as needed.

## Next Steps
1. Update imports in `backend/src/index.ts` to use the moved modules
2. Integrate logging, encryption, and conversion core into the main API
3. Update tests to reflect new import paths

