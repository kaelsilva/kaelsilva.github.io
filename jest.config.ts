// jest.config.ts
import type { Config } from '@jest/types';

import { defaults } from 'jest-config';

// Sync object
const config: Config.InitialOptions = {
  rootDir: './src',
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/**/*.{ts,tsx}'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: [
    'node_modules',
    'build',
    '.github',
    'cypress',
    'public',
    '<rootDir>/assets',
  ],
};
export default config;
