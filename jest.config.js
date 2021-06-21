module.exports = {
  globalSetup: '<rootDir>/jest-config/jest.setup.js',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],
  testEnvironment: 'jsdom',
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.(js)$': 'babel-jest',
  },
  setupFiles: ['<rootDir>/jest-config/jest.components.js'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/nuxt-lazy-load',
    '<rootDir>/node_modules/@babel',
    '<rootDir>/node_modules/@jest',
    'signal-exit',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/.nuxt',
    '<rootDir>/coverage',
    '<rootDir>/node_modules',
    '<rootDir>/.eslintrc.js',
    '<rootDir>/nuxt.config.js',
    '<rootDir>/jest.config.js',
    '<rootDir>/jest-config',
  ],
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/**/*.{js,vue}'],
};
