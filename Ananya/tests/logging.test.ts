import { ConversionLogger } from '../src/logging/conversionLogger';
import { RetentionPolicy } from '../src/data-retention/retentionPolicy';

describe('ConversionLogger', () => {
  it('should log conversions', async () => {
    const logger = new ConversionLogger();
    await logger.logConversion({
      fileName: 'test.md',
      sourceFormat: 'md',
      targetFormat: 'pdf',
      size: 1024,
      durationMs: 100,
      originalFileId: 'id1',
      convertedFileId: 'id2',
      status: 'success',
    });
    const logs = await logger.getAllLogs();
    expect(logs.length).toBe(1);
  });
});

describe('RetentionPolicy', () => {
  it('should retain logs within retention period', () => {
    const policy = new RetentionPolicy();
    const recentDate = new Date();
    expect(policy.shouldRetain(recentDate)).toBe(true);
  });
});
