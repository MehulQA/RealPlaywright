import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('SauceDemo Login Flow', () => {

    test('Valid Login and Logout', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.loginWithProfile('standard');

        await loginPage.verifySuccessfulLogin();

        await loginPage.logout();
    });

    test('Invalid Login', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.loginWithProfile('invalid');

        await loginPage.verifyErrorMessage(
            'Username and password do not match any user in this service'
        );
    });

    test('Locked User Validation', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.loginWithProfile('locked');

        await loginPage.verifyErrorMessage(
            'Sorry, this user has been locked ou.'
        );
    });

    test('Validate Error Handling', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login('', '');

        await loginPage.verifyErrorMessage(
            'Username is required'
        );
    });

    test('Session Persistence', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.loginWithProfile('standard');

        await loginPage.verifySuccessfulLogin();

        await loginPage.verifySessionPersistence();
    });

});