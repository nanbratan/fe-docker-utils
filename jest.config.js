// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    collectCoverageFrom: ['react/**/*.{js,jsx,mjs}'],

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    // An array of file extensions your modules use
    moduleFileExtensions: ['js', 'json', 'jsx'],

    setupFiles: ['<rootDir>/enzyme.config.js'],

    // The test environment that will be used for testing
    testEnvironment: 'jest-environment-jsdom-fifteen',

    // The glob patterns Jest uses to detect test files
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

    testPathIgnorePatterns: ['\\\\node_modules\\\\', '__tests__/mocks', '__tests__/utils', '__tests__/constants'],

    testURL: 'http://localhost',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],

    // Indicates whether each individual test should be reported during the run
    verbose: false,
};
