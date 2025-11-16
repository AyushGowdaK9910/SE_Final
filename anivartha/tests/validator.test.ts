// Tests for validator module
import { FileValidator } from '../src/validator/fileValidator';

describe('FileValidator', () => {
  it('should create a validator instance', () => {
    const validator = new FileValidator();
    expect(validator).toBeDefined();
  });
});

