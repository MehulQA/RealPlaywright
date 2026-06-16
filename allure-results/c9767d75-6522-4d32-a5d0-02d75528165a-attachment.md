# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> 4.Reload Page After Login
- Location: tests\ui\login.spec.ts:35:5

# Error details

```
TypeError: login.verifyLoginSuccess is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - generic:
    - insertion:
      - generic:
        - iframe
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { LoginPage } from '../../pages/LoginPage';
  3  | 
  4  | test('1.Valid Login', async ({ page }) => {
  5  |   const loginPage = new LoginPage(page);
  6  | 
  7  |   await loginPage.navigate();
  8  |   await loginPage.login('standard_user', 'secret_sauce');
  9  |   await loginPage.verifyLoginSuccess();
  10 | });
  11 | 
  12 | test('2.Invalid Login', async ({ page }) => {
  13 |   const loginPage = new LoginPage(page);
  14 | 
  15 |   await loginPage.navigate();
  16 |   await loginPage.login('wrong_user', 'wrong_password');
  17 | 
  18 |   await loginPage.verifyErrorMessage(
  19 |     'Username and password do not match'
  20 |   );
  21 | });
  22 | 
  23 | test('3.Locked User ', async ({ page }) => {
  24 |   const loginPage = new LoginPage(page);
  25 | 
  26 |   await loginPage.navigate();
  27 |   await loginPage.login('locked_out_user', 'secret_sauce');
  28 | 
  29 |   await loginPage.verifyErrorMessage(
  30 |     'Epic sadface: Sorry, this user has been locked out.'
  31 |   );
  32 | });
  33 | 
  34 | 
  35 | test('4.Reload Page After Login', async ({ page }) => {
  36 | 
  37 |   const login = new LoginPage(page);
  38 | 
  39 |   await login.navigate();
  40 | 
  41 |   await login.login(
  42 |     'standard_user',
  43 |     'secret_sauce'
  44 |   );
  45 | 
  46 |   await page.reload();
  47 | 
> 48 |   await login.verifyLoginSuccess();
     |               ^ TypeError: login.verifyLoginSuccess is not a function
  49 | });
  50 | 
  51 | 
  52 |  test('5.Validate Error Handling', async ({ page }) => {
  53 |     const loginPage = new LoginPage(page);
  54 | 
  55 |     await loginPage.navigate();
  56 |     await loginPage.login('', '');
  57 | 
  58 |     await loginPage.verifyErrorMessage(
  59 |       'Username is required'
  60 |     );
  61 |   });
```