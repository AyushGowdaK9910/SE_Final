/**
 * Stress/Test Harness for Small Files
 */

import { FastConverter } from '../src/anivartha/fast-convert/fastConverter';

describe('FastConverter Stress Test', () => {
  it('should handle small files quickly', async () => {
    const converter = new FastConverter();
    const smallBuffer = Buffer.from('small file content');
    
    const result = await converter.convert(smallBuffer, 'txt', 'json');
    expect(result.durationMs).toBeLessThan(3000); // < 3s target
  });
});

