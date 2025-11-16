// Jest setup file to mock localStorage for Node.js environment
// This prevents the "Cannot initialize local storage" error

if (typeof (global as any).localStorage === 'undefined') {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };
  (global as any).localStorage = localStorageMock;
}

