import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('1.Valid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);


  await loginPage.navigate();
  await loginPage.login();
  //await loginPage.verifyLoginSuccess();
});