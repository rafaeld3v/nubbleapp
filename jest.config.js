module.exports = {
  preset: "react-native",
  setupFiles: ["<rootDir>/src/test/jestSetup.ts"],
  moduleDirectories: ["node_modules", "./src/test"],
  modulePathIgnorePatterns: [".*/mockedData/.*"],
  collectCoverageFrom: [
    "src/{components,utils,hooks,domain}/**/*.{js,jsx,ts,tsx}",
  ],
  coveragePathIgnorePatterns: ["/node_modules/", "index"],
};
