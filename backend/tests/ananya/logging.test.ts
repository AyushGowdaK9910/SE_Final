import { ConversionLogger } from '../src/ananya/logging/conversionLogger';
import { RetentionPolicy } from '../src/ananya/data-retention/retentionPolicy';

describe('ConversionLogger', () => {
  it('should log conversions', async () => {
    const logger = new ConversionLogger();
    await logger.log({
      fileName: 'test.md',
      sourceFormat: 'md',
      targetFormat: 'pdf',
      size: 1024,
      durationMs: 100,
      status: 'success',
    });
    // Logger should complete without error
    expect(logger).toBeDefined();
  });
});

describe('RetentionPolicy', () => {
  it('should retain logs within retention period', () => {
    const policy = new RetentionPolicy();
    const recentDate = new Date();
    expect(policy.shouldRetain(recentDate)).toBe(true);
  });
});
