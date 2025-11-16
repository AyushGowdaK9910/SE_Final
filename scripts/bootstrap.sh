#!/usr/bin/env bash
set -e

echo "🚀 Bootstrapping Converty development environment..."
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js >= 18.0.0"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version must be >= 18.0.0. Current: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install backend dependencies
echo "📦 Installing backend dependencies..."
(cd backend && npm ci)
echo "✅ Backend dependencies installed"
echo ""

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
(cd frontend && npm ci)
echo "✅ Frontend dependencies installed"
echo ""

echo "✅ Bootstrap complete!"
echo ""
echo "To run the applications:"
echo "  Backend:  cd backend && npm run dev"
echo "  Frontend: cd frontend && npm run dev"
echo ""
echo "Or use: make dev"

