/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    'src/application/**/*.ts',
    'src/domain/**/*.ts',
    'src/infra/**/*.ts',
    'src/presentation/components/**/*.{ts,tsx}',
    'src/presentation/pages/**/*.{ts,tsx}',
    'src/presentation/store/**/*.{ts,tsx}',
    '!src/presentation/store/index.ts',
    '!src/presentation/store/reducers.ts',
    '!src/infra/http/config/**/*.ts',
    '!src/infra/http/rtk-query-http-adapter/index.ts',
    '!src/main/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/tests/**',
    '!**/coverage/**',
    '!jest.config.js',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],

};
