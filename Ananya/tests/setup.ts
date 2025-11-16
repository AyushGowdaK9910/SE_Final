// Jest setup file to mock localStorage for Node.js environment
// This prevents the "Cannot initialize local storage" error

if (typeof global.localStorage === 'undefined') {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };
  global.localStorage = localStorageMock as any;
}

