# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> 3.Locked User 
- Location: tests\ui\login.spec.ts:23:5

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
  31 |   async login() {
  32 | 
  33 |     if (ENV.app === 'saucedemo') {
  34 | 
  35 |       await this.page.fill('#user-name', ENV.standardUser);
  36 |       await this.page.fill('#password', ENV.standardPassword);
  37 |       await this.page.click('#login-button');
  38 | 
  39 |     } else if (ENV.app === 'automationexercise') {
  40 | 
  41 |       await this.page.fill(
  42 |         'input[data-qa="login-email"]',
  43 |         ENV.username
  44 |       );
  45 | 
  46 |       await this.page.fill(
  47 |         'input[data-qa="login-password"]',
  48 |         ENV.password
  49 |       );
  50 | 
  51 |       await this.page.click(
  52 |         'button[data-qa="login-button"]'
  53 |       );
  54 |     }
  55 |   }
  56 | 
  57 |   async verifyLoginSuccess() {
  58 | 
  59 |     if (ENV.app === 'saucedemo') {
  60 |       await expect(this.page).toHaveURL(/inventory/);
  61 |     }
  62 | 
  63 |     if (ENV.app === 'automationexercise') {
  64 |       await expect(
  65 |         this.page.locator('a[href="/logout"]')
  66 |       ).toBeVisible();
  67 |     }
  68 |   }
  69 | }
```