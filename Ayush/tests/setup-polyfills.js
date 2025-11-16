// Polyfills for Node.js APIs in jsdom environment
const { TextEncoder, TextDecoder } = require('util');

// Add TextEncoder/TextDecoder to global scope for jsdom
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Add other Node.js globals that might be needed
if (typeof global.Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer;
}

