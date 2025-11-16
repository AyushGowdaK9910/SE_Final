// Custom Jest environment to avoid localStorage requirement
// This extends Node environment but prevents localStorage initialization error
const { TestEnvironment } = require('jest-environment-node');

class CustomNodeEnvironment extends TestEnvironment {
  constructor(config, context) {
    super(config, context);
  }

  async setup() {
    await super.setup();
    // Mock localStorage before it's accessed to prevent SecurityError
    // Override any existing localStorage
    Object.defineProperty(this.global, 'localStorage', {
      value: {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
      },
      writable: true,
      configurable: true,
      enumerable: true,
    });
  }

  async teardown() {
    await super.teardown();
  }
}

module.exports = CustomNodeEnvironment;

