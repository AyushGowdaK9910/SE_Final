// Custom Jest environment to avoid localStorage requirement
const { TestEnvironment } = require('jest-environment-node');

class CustomNodeEnvironment extends TestEnvironment {
  constructor(config, context) {
    super(config, context);
  }

  async setup() {
    await super.setup();
    // Mock localStorage to prevent SecurityError
    this.global.localStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
    };
  }

  async teardown() {
    await super.teardown();
  }
}

module.exports = CustomNodeEnvironment;

