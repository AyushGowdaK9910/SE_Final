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

export default app;

