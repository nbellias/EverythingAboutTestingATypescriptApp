module.exports = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/**.test.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!playwright.config*",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!testing/**",
    "!dist/*",
  ],
  coverageDirectory: "testing/coverage",
  coverageReporters: ["cobertura", "lcov", "text"],
  reporters: ["default", "jest-junit"],
  testEnvironment: "node",
  testTimeout: 30000,
};
