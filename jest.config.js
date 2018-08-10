// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testEnvironment: "node",
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files.
  coverageDirectory: './coverage/',

  // If the test path matches any of the patterns, it will be skipped.
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],


  // If the file path matches any of the patterns, coverage information will be skipped.
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],

  // The pattern Jest uses to detect test files.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
};
