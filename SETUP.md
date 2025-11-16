# Setup and Run Guide

This guide explains how to set up and run the Converty Monorepo project.

## Prerequisites

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0

Verify your installation:
```bash
node --version  # Should be >= 18.0.0
npm --version   # Should be >= 9.0.0
```

## Project Structure

This is a monorepo with three independent modules:
- **Ananya/**: Logging, encryption, conversion core modules
- **anivartha/**: Upload, validation, download, fast conversion modules
- **Ayush/**: API documentation, server setup, CI/CD modules

Each module has its own `package.json` and can be run independently.

## Quick Start

### Option 1: Setup All Modules at Once

From the `converty-monorepo` directory:

```bash
# Install dependencies for all modules
cd Ananya && npm install && cd ..
cd anivartha && npm install && cd ..
cd Ayush && npm install && cd ..
```

### Option 2: Setup Individual Modules

Navigate to each module directory and install dependencies:

```bash
# Ananya module
cd Ananya
npm install
npm run build
npm test

# anivartha module
cd ../anivartha
npm install
npm run build
npm test

# Ayush module (includes server)
cd ../Ayush
npm install
npm run build
npm test
```

## Running Each Module

### Ananya Module

**Location**: `Ananya/`

```bash
cd Ananya

# Install dependencies
npm install

# Build TypeScript
npm run build

# Run tests
npm test

# Watch mode for tests
npm run test:watch

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

**Note**: This module contains library code (logging, encryption, conversion core) and doesn't have a server to run.

### anivartha Module

**Location**: `anivartha/`

```bash
cd anivartha

# Install dependencies
npm install

# Build TypeScript
npm run build

# Run tests
npm test

# Watch mode for tests
npm run test:watch

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

**Note**: This module contains library code (upload, validation, download, fast conversion) and doesn't have a server to run.

### Ayush Module (Server)

**Location**: `Ayush/`

This module includes a server that can be run:

```bash
cd Ayush

# Install dependencies
npm install

# Build TypeScript
npm run build

# Run the server (production mode)
npm start

# Run the server in development mode (with hot reload)
npm run dev

# Run tests
npm test

# Watch mode for tests
npm run test:watch

# Generate API documentation
npm run docs:generate

# Serve documentation
npm run docs:serve

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

**Server Endpoints** (when running `npm start` or `npm run dev`):
- `http://localhost:3000/health` - Health check endpoint
- `http://localhost:3000/api/example` - Example endpoint

## Complete Setup Script

You can create a script to set up all modules at once. Create `setup-all.sh`:

```bash
#!/bin/bash

echo "Setting up Ananya module..."
cd Ananya && npm install && npm run build && cd ..

echo "Setting up anivartha module..."
cd anivartha && npm install && npm run build && cd ..

echo "Setting up Ayush module..."
cd Ayush && npm install && npm run build && cd ..

echo "All modules set up successfully!"
```

Make it executable and run:
```bash
chmod +x setup-all.sh
./setup-all.sh
```

## Running Tests for All Modules

From the root directory:

```bash
# Run tests for Ananya
cd Ananya && npm test && cd ..

# Run tests for anivartha
cd anivartha && npm test && cd ..

# Run tests for Ayush
cd Ayush && npm test && cd ..
```

## Development Workflow

1. **Make changes** to TypeScript files in `src/` directories
2. **Build** the project: `npm run build`
3. **Test** your changes: `npm test`
4. **Lint** your code: `npm run lint`
5. **Fix** linting issues: `npm run lint:fix`

## Troubleshooting

### TypeScript Errors

If you see TypeScript errors, make sure:
- Dependencies are installed: `npm install`
- TypeScript is installed: Check `devDependencies` in `package.json`
- Build the project: `npm run build`

### Module Not Found Errors

If you see "Cannot find module" errors:
- Make sure you've run `npm install` in the module directory
- Check that the module exists in `node_modules/`
- Verify the import path is correct

### Port Already in Use

If port 3000 is already in use when running Ayush server:
- Change the port in `Ayush/src/server/server.ts` or set `PORT` environment variable:
  ```bash
  PORT=3001 npm start
  ```

## Next Steps

- Read individual README files in each module for module-specific documentation
- Check `commits.log` files to see the development history
- Review the CI/CD pipeline in `.github/workflows/ci.yml`

