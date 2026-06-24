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
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Keeps command line output readable while generating deep Allure assets
  reporter: [
    ['list'],
    ['html', { open: 'true' }],
    ['allure-playwright'],
    [environment === 'qa' ? 'line' : 'dot'],
  ],

  use: {
    baseURL: Config.BASE_URL,
    ignoreHTTPSErrors: true,
    screenshot: 'on',
    trace: 'on',
    video: 'on',
  },

  projects: [
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],

    },
  },

  {
    name: 'android',
    use: {
      ...devices['Pixel 7'],
    },
  },

  {
    name: 'iphone15',
    use: {
      ...devices['iPhone 15'],
    },
  },


 {
    name: 'iphone14',
    use: {
      ...devices['iPhone 14'],
    },
  },

   {
    name: 'iphone13',
    use: {
      ...devices['iPhone 13'],
    },
  },

   {
    name: 'iphone12',
    use: {
      ...devices['iPhone 12'],
    },
  },

   {
    name: 'iphone11',
    use: {
      ...devices['iPhone 11'],
    },
  },
   {
    name: 'iphoneXR',
    use: {
      ...devices['iPhone XR'],
    },
  },
   {
    name: 'iphoneSE',
    use: {
      ...devices['iPhone SE'],
    },
  },

   {
    name: 'iphone',
    use: {
      ...devices['iPhone 14'],
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
    use: {},
  },
]
});
