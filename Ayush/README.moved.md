# Files Moved from Ayush/

This document describes where files from the `Ayush/` folder have been moved in the reorganized repository structure.

## Date Moved
2024-11-17

## Source → Destination Mapping

### Source Code
- `Ayush/src/server/*` → `backend/src/ayush/server/`
- `Ayush/src/docs/*` → `backend/src/ayush/docs/`
- `Ayush/src/availability/*` → `backend/src/ayush/availability/`
- `Ayush/src/index.ts` → `backend/src/ayush/index.ts`
- `Ayush/src/server.ts` → `backend/src/ayush/server.ts`

### Tests
- `Ayush/tests/*.ts` → `backend/tests/ayush/`
- `Ayush/jest.config.js` → `backend/tests/ayush/jest.config.js`

### CI/CD
- `.github/workflows/ci.yml` - Updated to run backend and frontend tests

## What Remains
- `Ayush/commits.log` - Preserved for history
- `Ayush/README.md` - Original README preserved
- `Ayush/DEVELOPER_GUIDE.md` - Developer guide preserved
- `Ayush/infra/` - Infrastructure docs preserved
- `Ayush/deployment/` - Deployment docs preserved
- `Ayush/api-docs/` - API documentation preserved
- `Ayush/scripts/` - Scripts preserved

## Integration
The server code from Ayush has been integrated into the main backend server at `backend/src/index.ts`. The health check and server setup are now part of the unified backend.

## Next Steps
1. Server entry point is now at `backend/src/index.ts`
2. Health check endpoint is available at `/health`
3. API documentation can be integrated from `backend/src/ayush/docs/`

