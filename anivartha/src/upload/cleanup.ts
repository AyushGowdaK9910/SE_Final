/**
 * Cleanup of Temporary Files After Conversion
 */

import * as fs from 'fs';
import * as path from 'path';

export class TempFileCleanup {
  async cleanup(filePath: string): Promise<void> {
    try {
      if (fs.existsSync(filePath)) {
        await fs.promises.unlink(filePath);
      }
    } catch (error) {
      console.error('Failed to cleanup temp file:', error);
    }
  }

  async cleanupDirectory(dirPath: string): Promise<void> {
    try {
      if (fs.existsSync(dirPath)) {
        const files = await fs.promises.readdir(dirPath);
        for (const file of files) {
          await fs.promises.unlink(path.join(dirPath, file));
        }
      }
    } catch (error) {
      console.error('Failed to cleanup directory:', error);
    }
  }
}

