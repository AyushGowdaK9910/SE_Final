import { FileValidator } from '../src/validator/fileValidator';
import { MimeValidator } from '../src/validator/mimeValidator';
import { FileSignatureValidator } from '../src/validator/fileSignature';

describe('FileValidator', () => {
  it('should validate files', () => {
    const validator = new FileValidator();
    const result = validator.validateMimeType('text/plain', 'txt');
    expect(result.isValid).toBe(true);
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
