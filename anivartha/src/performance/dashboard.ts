/**
 * Basic Performance Dashboard Stub
 */

export interface PerformanceMetrics {
  averageConversionTime: number;
  totalConversions: number;
  successRate: number;
}

export class PerformanceDashboard {
  private metrics: PerformanceMetrics = {
    averageConversionTime: 0,
    totalConversions: 0,
    successRate: 0,
  };

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  recordConversion(_durationMs: number, _success: boolean): void {
    this.metrics.totalConversions++;
    // TODO: Calculate actual averages
  }
}

