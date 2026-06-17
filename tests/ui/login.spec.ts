import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Playwright Automation Flow', () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('1.Valid Login and Logout', async () => {
        await loginPage.loginWithProfile('standard');
        await loginPage.verifySuccessfulLogin();
        await loginPage.logout();
    });

    test('2.Invalid Login', async () => {
        await loginPage.loginWithProfile('invalid');
        await loginPage.verifyErrorMessage(
            'Username and password do not match any user in this service'
        );
    });

    test('3.Locked User Validation', async () => {
        await loginPage.loginWithProfile('locked');
        await loginPage.verifyErrorMessage(
            'Sorry, this user has been locked out.'
        );
    });

    test('4.Validate Error Handling', async () => {
        await loginPage.login('', '');
        await loginPage.verifyErrorMessage('Username is required');
    });

    test('5.Session Persistence', async () => {
        await loginPage.loginWithProfile('standard');
        await loginPage.verifySuccessfulLogin();
        await loginPage.verifySessionPersistence();
    });

});