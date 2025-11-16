module.exports = {
  preset: 'ts-jest',
  testEnvironment: '<rootDir>/tests/custom-environment.js',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.test.ts'],
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
};
