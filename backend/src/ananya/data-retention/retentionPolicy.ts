/**
 * Data Retention Policy
 * Retain logs for 1 year
 */

export class RetentionPolicy {
  private retentionDays: number = 365; // 1 year

  /**
   * Get retention period in days
   */
  getRetentionDays(): number {
    return this.retentionDays;
  }

  /**
   * Check if log should be retained
   */
  shouldRetain(logDate: Date): boolean {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - this.retentionDays);
    return logDate >= cutoffDate;
  }
}
