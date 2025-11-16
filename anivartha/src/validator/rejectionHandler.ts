/**
 * Rejection Logic for Unsupported Files
 */

export class RejectionHandler {
  rejectUnsupported(fileName: string, reason: string): { rejected: true; reason: string } {
    return {
      rejected: true,
      reason: `File ${fileName} is unsupported: ${reason}`,
    };
  }

  isSupported(extension: string): boolean {
    const supported = ['txt', 'md', 'csv', 'json', 'docx'];
    return supported.includes(extension.toLowerCase());
  }
}

