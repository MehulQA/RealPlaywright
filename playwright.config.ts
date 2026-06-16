import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { Config } from './config/env';

// 1. Initialize environment loading before anything else runs
const environment = process.env.ENV || 'qa';
dotenv.config({ path: path.resolve(__dirname, `./config/${environment}.env`), override: true });

// 2. Safely capture the loaded URL or fallback
const baseURL = process.env.BASE_URL || 'https://www.saucedemo.com';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Keeps command line output readable while generating deep Allure assets
  reporter: [
    ['list'],
    ['allure-playwright']
  ],

  use: {
    baseURL: Config.BASE_URL,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
       name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
    },
  },

  {
    name: 'Google Chrome',
    use: {
      ...devices['Desktop Chrome'],
      channel: 'chrome',
    },
  },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    {
      name: 'API',
      testMatch: '**/*.api.spec.ts',
    },
  ],
});
