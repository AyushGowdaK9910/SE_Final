# Converty Frontend

React + TypeScript frontend for file conversion service, built with Vite.

## Quick Start

```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env if needed (default: VITE_API_BASE=http://localhost:3000)

# Development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm start

# Run tests
npm test
```

## Environment Variables

- `VITE_API_BASE` - Backend API URL (default: http://localhost:3000)

## Features

- File upload interface
- File conversion interface
- Conversion results display

## Development

The frontend communicates with the backend API at the URL specified in `VITE_API_BASE`.

## Project Structure

```
frontend/
├── src/
│   ├── components/   # React components
│   ├── services/      # API service layer
│   ├── App.tsx       # Main app component
│   └── main.tsx      # Entry point
└── package.json
```

