import { HttpsEnforcer } from '../src/encryption/httpsEnforcer';
import { Request, Response, NextFunction } from 'express';

describe('HttpsEnforcer', () => {
  it('should reject HTTP in production', () => {
    const req = {
      secure: false,
      headers: {},
    } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    const next = jest.fn() as NextFunction;

    process.env.NODE_ENV = 'production';
    HttpsEnforcer.enforceHttps(req, res, next);
    
    expect(res.status).toHaveBeenCalledWith(403);
  });
});

