/**
 * Timing Instrumentation
 * Measure <3s target for small files
 */

export class TimingInstrumentation {
  private targetMs: number = 3000; // 3 seconds

  start(): number {
    return Date.now();
  }

  end(startTime: number): number {
    return Date.now() - startTime;
  }

  isWithinTarget(durationMs: number): boolean {
    return durationMs < this.targetMs;
  }
}

