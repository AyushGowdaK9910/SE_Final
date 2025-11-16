/**
 * Backend Server Entry Point
 * Integrates modules from Ananya, anivartha, and Ayush
 */

import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { HealthCheck } from './ayush/server/healthcheck';

// Load environment variables
dotenv.config();

// Create Express app
const app: Application = express();

const PORT = process.env.PORT || 3000;

// Add CORS support
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (_req: Request, res: Response): void => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Stub convert endpoint
app.post('/api/files/convert', (req: Request, res: Response): void => {
  const { fileId, targetFormat } = req.body;
  
  if (!fileId || !targetFormat) {
    res.status(400).json({ 
      success: false, 
      error: 'fileId and targetFormat are required' 
    });
    return;
  }

  // TODO: Integrate actual conversion logic from moved modules
  res.json({
    success: true,
    data: {
      id: `conv-${Date.now()}`,
      originalFileId: fileId,
      convertedFileName: `converted.${targetFormat}`,
      sourceFormat: 'unknown',
      targetFormat,
      size: 0,
      convertedAt: new Date().toISOString(),
    },
  });
});

// Stub upload endpoint
app.post('/api/files/upload', (_req: Request, res: Response): void => {
  // TODO: Integrate actual upload logic from anivartha modules
  res.json({
    success: true,
    data: {
      id: `file-${Date.now()}`,
      fileName: 'uploaded-file',
      sourceFormat: 'unknown',
      size: 0,
      uploadedAt: new Date().toISOString(),
    },
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  process.exit(0);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📚 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 API endpoints: http://localhost:${PORT}/api`);
});

export default app;

