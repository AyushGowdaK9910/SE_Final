/**
 * Upload -> Conversion Stub Pipeline
 */

import { UploadHandler } from './uploadHandler';

export class UploadPipeline {
  private uploadHandler: UploadHandler;

  constructor() {
    this.uploadHandler = new UploadHandler();
  }

  async processUpload(file: Express.Multer.File): Promise<{ fileId: string; ready: boolean }> {
    const uploaded = await this.uploadHandler.handleUpload(file);
    // TODO: Hook into conversion pipeline
    return {
      fileId: uploaded.id,
      ready: true,
    };
  }
}

