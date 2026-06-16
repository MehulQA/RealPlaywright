# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> 3.Locked User 
- Location: tests\ui\login.spec.ts:23:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('[data-test="error"]')
Expected substring: "Epic sadface: Sorry, this user has been locked out."
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('[data-test="error"]')

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
- textbox "Email Address": locked_out_user
- textbox "Password": secret_sauce
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
> 16 |     ).toContainText(message);
     |       ^ Error: expect(locator).toContainText(expected) failed
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