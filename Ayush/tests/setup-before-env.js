// Setup file that runs before the test environment is initialized
// This patches the localStorage requirement before jest-environment-node tries to access it

// Create a temporary file for localStorage
const fs = require('fs');
const os = require('os');
const path = require('path');

const tmpFile = path.join(os.tmpdir(), `jest-localstorage-${process.pid}`);

// Create empty file
try {
  fs.writeFileSync(tmpFile, '');
  // Set environment variable that jest-environment-node might check
  process.env.JEST_LOCALSTORAGE_FILE = tmpFile;
} catch (e) {
  // Ignore errors
}

// Monkey-patch the localStorage getter before jest-environment-node accesses it
const originalGet = Object.getOwnPropertyDescriptor(global, 'localStorage')?.get;

if (!originalGet) {
  // Define localStorage before it's accessed
  Object.defineProperty(global, 'localStorage', {
    get: function() {
      return {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
      };
    },
    configurable: true,
    enumerable: true,
  });
}

