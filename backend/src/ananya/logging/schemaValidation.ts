/**
 * Conversion Record Schema Validation
 */

export interface ConversionRecord {
  fileName: string;
  sourceFormat: string;
  targetFormat: string;
  size: number;
  durationMs: number;
  originalFileId: string;
  convertedFileId: string;
  status: 'success' | 'failed';
  errorMessage?: string;
}

export function validateConversionRecord(record: any): record is ConversionRecord {
  return (
    typeof record.fileName === 'string' &&
    typeof record.sourceFormat === 'string' &&
    typeof record.targetFormat === 'string' &&
    typeof record.size === 'number' &&
    typeof record.durationMs === 'number' &&
    typeof record.originalFileId === 'string' &&
    typeof record.convertedFileId === 'string' &&
    (record.status === 'success' || record.status === 'failed')
  );
}

