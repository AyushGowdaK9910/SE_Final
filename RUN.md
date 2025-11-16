# How to Run the Project

## Quick Start

### 1. Install Dependencies

From the `converty-monorepo` directory:

```bash
# Install for all modules
cd Ananya && npm install && cd ..
cd anivartha && npm install && cd ..
cd Ayush && npm install && cd ..
```

### 2. Build All Modules

```bash
cd Ananya && npm run build && cd ..
cd anivartha && npm run build && cd ..
cd Ayush && npm run build && cd ..
```

### 3. Run the Server

Only the **Ayush** module has a runnable server:

```bash
cd Ayush

# Development mode (with hot reload)
npm run dev

# OR Production mode
npm start
```

The server will start on **http://localhost:3000**

## Available Endpoints

Once the server is running, you can access:

- **Health Check**: http://localhost:3000/health
- **Example Endpoint**: http://localhost:3000/api/example

## Test the Endpoints

```bash
# Health check
curl http://localhost:3000/health

# Example endpoint
curl http://localhost:3000/api/example
```

## Running Tests

```bash
# Test Ananya module
cd Ananya && npm test && cd ..

# Test anivartha module
cd anivartha && npm test && cd ..

# Test Ayush module
cd Ayush && npm test && cd ..
```

## Development Mode

For development with hot reload:

```bash
cd Ayush
npm run dev
```

This will automatically restart the server when you make changes to the code.

## Change Port

If port 3000 is already in use, set the PORT environment variable:

```bash
PORT=3001 npm start
# or
PORT=3001 npm run dev
```

## Module Information

- **Ananya/**: Library code (logging, encryption, conversion core) - no server
- **anivartha/**: Library code (upload, validation, download) - no server  
- **Ayush/**: Server with API endpoints - **THIS IS THE RUNNABLE MODULE**

