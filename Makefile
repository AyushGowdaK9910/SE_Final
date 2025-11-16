.PHONY: dev test build clean bootstrap

# Run both services concurrently
dev:
	@echo "🚀 Starting backend and frontend..."
	@docker-compose up --build

# Run tests for both projects
test:
	@echo "🧪 Running backend tests..."
	@cd backend && npm test
	@echo "🧪 Running frontend tests..."
	@cd frontend && npm test

# Build both projects
build:
	@echo "🔨 Building backend..."
	@cd backend && npm run build
	@echo "🔨 Building frontend..."
	@cd frontend && npm run build

# Clean build artifacts
clean:
	@echo "🧹 Cleaning build artifacts..."
	@rm -rf backend/dist backend/node_modules
	@rm -rf frontend/dist frontend/node_modules

# Bootstrap development environment
bootstrap:
	@bash scripts/bootstrap.sh

# Install dependencies for both
install:
	@cd backend && npm install
	@cd frontend && npm install

