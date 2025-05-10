/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  collectCoverage: true,
  coverageReporters: ["html", "text"],
  setupFilesAfterEnv: ["<rootDir>/tests/singleton.ts"],
};
