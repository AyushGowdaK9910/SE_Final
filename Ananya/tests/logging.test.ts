// Tests for logging module
import { ConversionLogger } from '../src/logging/conversionLogger';

describe('ConversionLogger', () => {
  it('should create a logger instance', () => {
    const logger = new ConversionLogger();
    expect(logger).toBeDefined();
  });
});

