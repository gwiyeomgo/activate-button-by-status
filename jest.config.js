
module.exports = {
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: "jsdom", //jest uses the node testEnvironment,This essentially makes any tests meant for a browser environment invalid.
  testMatch: [
    '<rootDir>/**/*.test.(js|jsx|ts|tsx)',
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleNameMapper:{
    "\\.(css|less)$": "<rootDir>/styleMock.ts"
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};
