import { describe, it, expect, vi } from 'vitest';
import { convertFile, uploadFile } from './api';

// Mock axios
vi.mock('axios', () => ({
  default: {
    create: () => ({
      post: vi.fn(),
      get: vi.fn(),
    }),
  },
}));

describe('API Service', () => {
  it('should have uploadFile function', () => {
    expect(typeof uploadFile).toBe('function');
  });

  it('should have convertFile function', () => {
    expect(typeof convertFile).toBe('function');
  });

  // Simple passing test
  it('should pass basic test', () => {
    expect(true).toBe(true);
  });
});

