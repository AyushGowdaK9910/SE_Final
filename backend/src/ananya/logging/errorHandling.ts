/**
 * Error Handling and Metrics
 * Improved error handling with metrics instrumentation
 */

export class ErrorHandler {
  private errorCount: number = 0;
  private successCount: number = 0;

  handleError(error: Error, context: string): void {
    this.errorCount++;
    console.error(`[${context}] Error:`, error.message);
  }

  recordSuccess(): void {
    this.successCount++;
  }

  getMetrics() {
    return {
      errorCount: this.errorCount,
      successCount: this.successCount,
      totalCount: this.errorCount + this.successCount,
    };
  }
}

