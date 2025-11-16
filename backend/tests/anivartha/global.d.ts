// Ambient type declarations for Jest and Node.js
// These are minimal declarations to prevent TypeScript errors when node_modules isn't installed

declare var describe: (name: string, fn: () => void) => void;
declare var it: (name: string, fn: () => void | Promise<void>) => void;
declare var expect: (actual: any) => {
  toBe: (expected: any) => void;
  toBeDefined: () => void;
  toBeLessThan: (expected: number) => void;
  [key: string]: any;
};
declare var jest: any;

// Node.js Buffer
declare namespace NodeJS {
  interface Buffer {
    from(data: string | number[], encoding?: string): Buffer;
    length: number;
  }
}

declare var Buffer: {
  from(data: string | number[], encoding?: string): Buffer;
  new (data: string | number[]): Buffer;
};
