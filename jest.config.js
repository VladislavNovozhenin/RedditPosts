/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {

  // preset: "ts-jest/presets/js-with-ts", for js

  preset: "ts-jest", // for typeScript

  testEnvironment: "node",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // исправляем ошибку с чтение стилей при запустке теста компонента

  // которая проявляется если используются модульные стили

  // в regExp указывается препроцессор который используется

  moduleNameMapper: {

    "\.(css)": "identity-obj-proxy",

  },

  snapshotSerializers: ["enzyme-to-json/serializer"],

};
