/**
 * Sample Integration Test to Validate Full Flow
 */

import request from 'supertest';
import app from '../src/ayush/server/server';

describe('Integration Tests', () => {
  it('should handle full request flow', async () => {
    // Health check
    const healthResponse = await request(app).get('/health');
    expect(healthResponse.status).toBe(200);
    
    // Example endpoint
    const exampleResponse = await request(app).get('/api/example');
    expect(exampleResponse.status).toBe(200);
    expect(exampleResponse.body.message).toBe('Example endpoint');
  });
});

