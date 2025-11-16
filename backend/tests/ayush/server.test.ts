/**
 * Tests for Server and Docs Generation
 */

import request from 'supertest';
import app from '../src/ayush/server/server';
import { HealthCheck } from '../src/ayush/server/healthcheck';

describe('Server', () => {
  it('should respond to health check', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });

  it('should respond to example endpoint', async () => {
    const response = await request(app).get('/api/example');
    expect(response.status).toBe(200);
  });
});

describe('HealthCheck', () => {
  it('should provide health status', () => {
    const healthCheck = new HealthCheck();
    expect(healthCheck).toBeDefined();
  });
});

