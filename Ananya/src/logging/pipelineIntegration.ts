/**
 * Pipeline Integration
 * Integrate logging with conversion pipeline (stubbed)
 */

import { ConversionLogger } from './conversionLogger';

export class PipelineIntegration {
  private logger: ConversionLogger;

  constructor() {
    this.logger = new ConversionLogger();
  }

  /**
   * Log conversion from pipeline (stubbed)
   */
  async logFromPipeline(params: {
    fileName: string;
    sourceFormat: string;
    targetFormat: string;
    size: number;
    durationMs: number;
    originalFileId: string;
    convertedFileId: string;
    status: 'success' | 'failed';
  }): Promise<void> {
    await this.logger.logConversion(params);
  }
}

