/**
 * Healthcheck and Liveness Endpoints
 * SLO work for availability
 */

import { Request, Response } from 'express';

export class HealthCheck {
  health(req: Request, res: Response): void {
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
  }

  liveness(req: Request, res: Response): void {
    res.json({ alive: true });
  }

  readiness(req: Request, res: Response): void {
    // TODO: Check database connectivity, etc.
    res.json({ ready: true });
  }
}

