# Converty Backend

Node.js + TypeScript Express API for file conversion service.

## Quick Start

```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env with your configuration

# Development mode
npm run dev

# Build
npm run build

# Production mode
npm start

# Run tests
npm test
```

## Environment Variables

See `.env.example` for available configuration options.

## API Endpoints

- `GET /health` - Health check
- `POST /api/files/upload` - Upload file
- `POST /api/files/convert` - Convert file
- `GET /api/example` - Example endpoint

## Project Structure

```
backend/
├── src/
│   ├── ananya/       # Logging, encryption, conversion core
│   ├── anivartha/    # Upload, validation, download
│   ├── ayush/        # API docs, server setup
│   └── index.ts      # Server entry point
├── tests/            # Test files
└── package.json
```

## Development

The backend integrates modules from Ananya, anivartha, and Ayush. See root `OWNERS` file for code ownership details.

