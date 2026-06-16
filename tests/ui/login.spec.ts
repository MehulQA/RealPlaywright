import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe(' Playwright Automation Flow', () => {



     // 1.Login and Logout Test
    test('1.Valid Login and Logout', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.loginWithProfile('standard');
        await loginPage.verifySuccessfulLogin();
        await page.waitForTimeout(3000);
        await loginPage.logout();
    });


        // 2.Invalid Login Test
    test('2.Invalid Login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.loginWithProfile('invalid');
        await loginPage.verifyErrorMessage('Username and password do not match any user in this service');
        await page.waitForTimeout(3000);
    });
    

       //3.Locked User Validation
    test('3.Locked User Validation', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.loginWithProfile('locked');
        await loginPage.verifyErrorMessage('Sorry, this user has been locked out.');
        await page.waitForTimeout(3000);
    });

       //4.Validate Error Handling
    test('4.Validate Error Handling', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('', '');
        await loginPage.verifyErrorMessage('Username is required');
        await page.waitForTimeout(3000);
    });

        //5.Session Persistence
    test('5.Session Persistence', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.loginWithProfile('standard');
        await loginPage.verifySuccessfulLogin();
        await loginPage.verifySessionPersistence();
        await page.waitForTimeout(3000);
    });

});