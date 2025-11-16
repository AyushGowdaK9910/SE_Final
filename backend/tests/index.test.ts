/**
 * Backend Integration Tests
 */

import request from 'supertest';
import app from '../src/index';

describe('Backend API', () => {
  describe('GET /health', () => {
    it('should return 200 and status ok', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.body.status).toBe('ok');
      expect(response.body.timestamp).toBeDefined();
    });
  });

  describe('POST /api/files/convert', () => {
    it('should return 400 if fileId is missing', async () => {
      const response = await request(app)
        .post('/api/files/convert')
        .send({ targetFormat: 'pdf' });
      expect(response.status).toBe(400);
    });

    it('should return 400 if targetFormat is missing', async () => {
      const response = await request(app)
        .post('/api/files/convert')
        .send({ fileId: 'test-id' });
      expect(response.status).toBe(400);
    });

    it('should return 200 with conversion result', async () => {
      const response = await request(app)
        .post('/api/files/convert')
        .send({ fileId: 'test-id', targetFormat: 'pdf' });
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toBeDefined();
      expect(response.body.data.targetFormat).toBe('pdf');
    });
  });

  describe('POST /api/files/upload', () => {
    it('should return 200 with upload result', async () => {
      const response = await request(app).post('/api/files/upload');
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toBeDefined();
      expect(response.body.data.id).toBeDefined();
    });
  });
});

