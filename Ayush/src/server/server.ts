/**
 * Typed Server with Example Endpoints
 */

import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(express.json());

// Example typed endpoint
app.get('/api/example', (_req: Request, res: Response): void => {
  res.json({ message: 'Example endpoint', timestamp: new Date() });
});

app.get('/health', (_req: Request, res: Response): void => {
  res.json({ status: 'ok' });
});

// Start server if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📚 Health check: http://localhost:${PORT}/health`);
    console.log(`🔗 Example endpoint: http://localhost:${PORT}/api/example`);
  });
}

export default app;

