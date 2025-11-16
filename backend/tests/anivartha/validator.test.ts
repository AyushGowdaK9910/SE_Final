import { FileValidator } from '../../src/anivartha/validator/fileValidator';
import { MimeValidator } from '../../src/anivartha/validator/mimeValidator';
import { FileSignatureValidator } from '../../src/anivartha/validator/fileSignature';

describe('FileValidator', () => {
  it('should validate files', () => {
    const validator = new FileValidator();
    const result = validator.validateMIME('text/plain', 'txt');
    expect(result).toBe(true);
  });

  it('should check file signature', () => {
    const validator = new FileValidator();
    const result = validator.checkFileSignature(Buffer.from('test'));
    expect(result).toBe(true);
  });

  it('should check if format is supported', () => {
    const validator = new FileValidator();
    expect(validator.isSupported('txt')).toBe(true);
  });
});

describe('MimeValidator', () => {
  it('should validate MIME types', () => {
    const validator = new MimeValidator();
    expect(validator.validateMimeType('text/plain', 'txt')).toBe(true);
  });
});

describe('FileSignatureValidator', () => {
  it('should detect corrupted files', () => {
    const validator = new FileSignatureValidator();
    expect(validator.checkCorruption(Buffer.from('test'))).toBe(true);
  });
});
