/**
 * MIME and Extension Validator
 */

export class MimeValidator {
  private allowedMimeTypes: string[] = [
    'text/plain',
    'text/markdown',
    'text/csv',
    'application/json',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  validateMimeType(mimeType: string, _extension: string): boolean {
    return this.allowedMimeTypes.includes(mimeType);
  }

  validateExtension(extension: string): boolean {
    const allowedExtensions = ['txt', 'md', 'csv', 'json', 'docx'];
    return allowedExtensions.includes(extension.toLowerCase());
  }
}

