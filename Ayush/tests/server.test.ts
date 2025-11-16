// Tests for server module
import request from 'supertest';
import app from '../src/server/server';

describe('Server', () => {
  it('should respond to health check', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
  });
});

