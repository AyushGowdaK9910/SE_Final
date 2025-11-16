/**
 * Log Write API
 * Append-only logging interface
 */

import { ConversionLogDB } from './conversionLogModel';

export class LogWriteAPI {
  private db: ConversionLogDB;

  constructor() {
    this.db = new ConversionLogDB();
  }

  /**
   * Append log entry (append-only)
   */
  async appendLog(entry: {
    fileName: string;
    sourceFormat: string;
    targetFormat: string;
    size: number;
    durationMs: number;
    originalFileId: string;
    convertedFileId: string;
    status: 'success' | 'failed';
    errorMessage?: string;
  }): Promise<void> {
    await this.db.create(entry);
  }
}

