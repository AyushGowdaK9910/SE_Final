/**
 * File Upload Endpoint Scaffold
 */

import { Request, Response } from 'express';
import { UploadHandler } from './uploadHandler';

// Extend Request type to include multer file
interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

export class UploadEndpoint {
  private handler: UploadHandler;

  constructor() {
    this.handler = new UploadHandler();
  }

  async upload(req: MulterRequest, res: Response): Promise<void> {
    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }
    const result = await this.handler.handleUpload(req.file);
    res.json({ success: true, data: result });
  }
}

