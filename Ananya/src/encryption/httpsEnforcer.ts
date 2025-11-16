/**
 * HTTPS Enforcement Wrapper
 * Rejects HTTP connections
 */

import { Request, Response, NextFunction } from 'express';

export class HttpsEnforcer {
  /**
   * Middleware to enforce HTTPS connections
   * Rejects HTTP requests in production
   */
  static enforceHttps(req: Request, res: Response, next: NextFunction): void {
    // Check if request is secure (HTTPS)
    const isSecure = req.secure || req.headers['x-forwarded-proto'] === 'https';
    
    // In production, reject non-HTTPS requests
    if (process.env.NODE_ENV === 'production' && !isSecure) {
      res.status(403).json({
        success: false,
        error: {
          message: 'HTTPS required. Insecure HTTP connections are not allowed.',
          statusCode: 403,
        },
      });
      return;
    }
    
    next();
  }
}
