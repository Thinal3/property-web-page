module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  moduleFileExtensions: ["js", "jsx"],

  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
};
