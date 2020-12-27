module.exports = {
  notify: false,
  verbose: false,
  collectCoverage: true,
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/__jest__/setup.js'],
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: '<rootDir>/coverage/',
  testPathIgnorePatterns: ['/node_modules/', '/__jest__/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/__jest__/'],
};
