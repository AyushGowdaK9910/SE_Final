/**
 * Conversion Log Model
 * Database model stub for conversion logs
 */

export interface ConversionLogModel {
  id: string;
  fileName: string;
  sourceFormat: string;
  targetFormat: string;
  size: number;
  durationMs: number;
  originalFileId: string;
  convertedFileId: string;
  status: 'success' | 'failed';
  errorMessage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export class ConversionLogDB {
  private logs: ConversionLogModel[] = [];

  async create(data: Omit<ConversionLogModel, 'id' | 'createdAt' | 'updatedAt'>): Promise<ConversionLogModel> {
    const log: ConversionLogModel = {
      ...data,
      id: `log-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.logs.push(log);
    return log;
  }
}

