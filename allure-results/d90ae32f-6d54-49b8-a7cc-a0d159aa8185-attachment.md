# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> 1.Valid Login
- Location: tests\ui\login.spec.ts:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a[href="/logout"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a[href="/logout"]')

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Login to your account" [level=2]
- textbox "Email Address": mehul.nagar
- textbox "Password": Krihns@001
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name"
- textbox "Email Address"
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - iframe
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
  20 |     await this.page.goto(ENV.baseUrl);
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
> 66 |       ).toBeVisible();
     |         ^ Error: expect(locator).toBeVisible() failed
  67 |     }
  68 |   }
  69 | }
```