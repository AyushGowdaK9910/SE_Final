/**
 * Healthcheck and Liveness Endpoints
 * SLO work for availability
 */

import { Request, Response } from 'express';

export class HealthCheck {
  health(_req: Request, res: Response): void {
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
  }

  liveness(_req: Request, res: Response): void {
    res.json({ alive: true });
  }

  readiness(_req: Request, res: Response): void {
    // TODO: Check database connectivity, etc.
    res.json({ ready: true });
  }
}

