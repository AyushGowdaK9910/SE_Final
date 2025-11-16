/// <reference types="jest" />
/// <reference types="node" />

declare global {
  namespace NodeJS {
    interface Global {
      localStorage: Storage;
    }
  }
}

export {};

