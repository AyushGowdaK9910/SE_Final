/**
 * Download Endpoint Scaffold
 */

import { Request, Response } from 'express';
import { DownloadHandler } from './downloadHandler';

export class DownloadEndpoint {
  private handler: DownloadHandler;

  constructor() {
    this.handler = new DownloadHandler();
  }

  async download(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const format = req.query.format as string;
    
    if (!format) {
      res.status(400).json({ error: 'Format required' });
      return;
    }

    try {
      const buffer = await this.handler.downloadFile(id, format);
      res.setHeader('Content-Type', 'application/octet-stream');
      res.send(buffer);
    } catch (error) {
      res.status(404).json({ error: 'File not found' });
    }
  }
}

