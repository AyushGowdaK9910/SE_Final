import { UploadHandler } from '../../src/anivartha/upload/uploadHandler';

describe('UploadHandler', () => {
  it('should handle file upload', async () => {
    const handler = new UploadHandler();
    const file = {
      originalname: 'test.txt',
      mimetype: 'text/plain',
      size: 100,
      buffer: Buffer.from('test'),
    } as any;
    const result = await handler.handleUpload(file);
    expect(result.id).toBe('placeholder');
  });
});
