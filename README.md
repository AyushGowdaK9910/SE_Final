# Converty Monorepo

[![CI](https://github.com/AyushGowdaK9910/SE_Final/workflows/CI/badge.svg)](https://github.com/AyushGowdaK9910/SE_Final/actions)

A monorepo containing file conversion service with backend API and frontend UI.

## Project Structure

```
converty-monorepo/
├── backend/          # Node.js + TypeScript API (Express)
│   ├── src/          # Source code (includes modules from Ananya, anivartha, Ayush)
│   ├── tests/        # Test files
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
│
├── frontend/         # React + TypeScript frontend (Vite)
│   ├── src/          # Source code
│   ├── tests/        # Test files
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
│
├── Ananya/           # Original module (code moved to backend/src/ananya/)
├── anivartha/        # Original module (code moved to backend/src/anivartha/)
├── Ayush/            # Original module (code moved to backend/src/ayush/)
│
├── docker-compose.yml
├── Makefile
└── scripts/
    └── bootstrap.sh
```

## Quick Start

### Prerequisites

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0
- **Docker** (optional, for containerized deployment)

### Clone and Setup

```bash
# Clone the repository
git clone https://github.com/AyushGowdaK9910/SE_Final.git
cd SE_Final/converty-monorepo

# Bootstrap development environment
bash scripts/bootstrap.sh

# OR manually install dependencies
cd backend && npm install && cd ..
cd frontend && npm install && cd ..
```

### Environment Configuration

```bash
# Backend environment
cp backend/.env.example backend/.env
# Edit backend/.env with your configuration

# Frontend environment
cp frontend/.env.example frontend/.env
# Edit frontend/.env if needed (default: VITE_API_BASE=http://localhost:3000)
```

### Run Locally

#### Option 1: Run Both Services Separately

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend will be available at: **http://localhost:3000**

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend will be available at: **http://localhost:5173**

#### Option 2: Use Docker Compose

```bash
# From root directory
docker-compose up --build
```

#### Option 3: Use Makefile

```bash
# Run both services
make dev

# Run tests
make test

# Build both projects
make build

# Bootstrap environment
make bootstrap
```

### Run Tests

```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test

# Both (using Makefile)
make test
```

### Build for Production

```bash
# Backend
cd backend
npm run build
npm start

# Frontend
cd frontend
npm run build
npm start  # Serves built files
```

## Available Endpoints

### Backend API (http://localhost:3000)

- `GET /health` - Health check endpoint
- `POST /api/files/upload` - Upload a file
- `POST /api/files/convert` - Convert a file
- `GET /api/example` - Example endpoint

### Frontend (http://localhost:5173)

- File upload interface
- File conversion interface
- Conversion results display

## Development

### Backend Development

```bash
cd backend
npm run dev      # Development mode with hot reload
npm run build    # Build TypeScript
npm start        # Production mode
npm test         # Run tests
npm run lint     # Lint code
```

### Frontend Development

```bash
cd frontend
npm run dev      # Development mode with hot reload
npm run build    # Build for production
npm start        # Preview production build
npm test         # Run tests
npm run lint     # Lint code
```

## Code Ownership

Original code has been reorganized but ownership is preserved:

- **Ananya**: Backend logging, encryption, conversion core (`backend/src/ananya/`)
- **anivartha**: Backend upload, validation, download (`backend/src/anivartha/`)
- **Ayush**: Backend API docs, server setup, CI/CD (`backend/src/ayush/`)

See `OWNERS` file and individual `README.moved.md` files in each person's folder for details.

## CI/CD

The CI pipeline runs tests for both backend and frontend on every push and pull request.

See `.github/workflows/ci.yml` for details.

## Docker

Both services can be run using Docker:

```bash
docker-compose up --build
```

Backend: http://localhost:3000
Frontend: http://localhost:5173

## Troubleshooting

### Port Already in Use

```bash
# Backend: Change PORT in backend/.env
PORT=3001 npm run dev

# Frontend: Vite will auto-increment port if 5173 is busy
```

### Module Not Found Errors

```bash
# Reinstall dependencies
cd backend && rm -rf node_modules package-lock.json && npm install
cd ../frontend && rm -rf node_modules package-lock.json && npm install
```

### Build Errors

```bash
# Clean and rebuild
cd backend && npm run build
cd ../frontend && npm run build
```

## Version

Current version: v0.1.0

## License

MIT
