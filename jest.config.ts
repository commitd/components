import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  // [...]
  // Replace `ts-jest` with the preset you want to use
  // from the above list
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  setupFiles: ['./jest.patch-cssom.js'],
  // automatically clear mock calls and instances before every test,
  // equivalent to calling jest.clearAllMocks() before each test
  clearMocks: true,
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/coverage/',
    '<rootDir>/demo/',
  ],
  collectCoverage: true,
  // coverage reporter 'text' outputs the coverage to the command line,
  // while 'lcov' generates an lcov report in the coverage directory
  coverageReporters: ['text', 'lcov'],
  snapshotSerializers: ['jest-stitches'],
  moduleDirectories: ['node_modules', 'utils'],
  testRegex: '/src/.*(\\.|/)(test|spec)\\.[jt]sx?$',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!src/types/**/*',
    '!src/utils/*-polyfill.ts',
  ],
  coveragePathIgnorePatterns: [
    '/src/typings.d.ts',
    'setupTests.tsx',
    '/src/docs/*',
    '.*/index.ts',
    '.*.test.ts',
    '.*.stories.tsx',
  ],
  testResultsProcessor: 'jest-sonar-reporter',
}

export default jestConfig
