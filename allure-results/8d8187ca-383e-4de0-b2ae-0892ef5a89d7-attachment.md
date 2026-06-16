# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> 5.Validate Error Handling
- Location: tests\ui\login.spec.ts:52:6

# Error details

```
Error: page.goto: SSL peer certificate or SSH remote key was not OK
Call log:
  - navigating to "https://automationexercise.com/login", waiting until "load"

```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | import { allure } from 'allure-playwright';
  3  | import { ENV } from '../config/env';
  4  | 
  5  | 
  6  | 
  7  | export class LoginPage {
  8  |   constructor(private page: Page) {}
  9  | 
  10 | 
  11 |   private errorMessage = '[data-test="error"]';
  12 | 
  13 |   async verifyErrorMessage(message: string) {
  14 |     await expect(
  15 |       this.page.locator(this.errorMessage)
  16 |     ).toContainText(message);
  17 |   }
  18 | 
  19 |   async navigate() {
> 20 |     await this.page.goto(ENV.baseUrl);
     |                     ^ Error: page.goto: SSL peer certificate or SSH remote key was not OK
  21 | 
  22 |     const screenshot = await this.page.screenshot();
  23 | 
  24 |     await allure.attachment(
  25 |       'Login Page Screenshot',
  26 |       screenshot,
  27 |       'image/png'
  28 |     );
  29 |   }
  30 | 
  31 |   async login(username?: string, password?: string) {
  32 | 
  33 |   if (ENV.app === 'saucedemo') {
  34 | 
  35 |     await this.page.fill(
  36 |       '#user-name',
  37 |       username || ENV.standardUser
  38 |     );
  39 | 
  40 |     await this.page.fill(
  41 |       '#password',
  42 |       password || ENV.standardPassword
  43 |     );
  44 | 
  45 |     await this.page.click('#login-button');
  46 |   }
  47 | 
  48 |   if (ENV.app === 'automationexercise') {
  49 | 
  50 |     await this.page.fill(
  51 |       'input[data-qa="login-email"]',
  52 |       username || ENV.username
  53 |     );
  54 | 
  55 |     await this.page.fill(
  56 |       'input[data-qa="login-password"]',
  57 |       password || ENV.password
  58 |     );
  59 | 
  60 |     await this.page.click(
  61 |       'button[data-qa="login-button"]'
  62 |     );
  63 |   }
  64 |   }}
```