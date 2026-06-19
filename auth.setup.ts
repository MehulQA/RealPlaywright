import { test } from '@playwright/test';

test('Login and save auth state', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // Save login session
  await page.context().storageState({
    path: 'playwright/.auth/user.json',
  });
});