import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Playwright Automation Flow', () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
        //await page.waitForTimeout(5000);

    });

    // Verify that a standard user can successfully log in and log out
    test('1.Valid Login and Logout', async () => {
        await loginPage.loginWithProfile('standard');
        await loginPage.verifySuccessfulLogin();
        await loginPage.logout();
 
    });

   // Verify that an invalid user receives the correct error message
    test('2.Invalid Login', async () => {
        await loginPage.loginWithProfile('invalid');
        await loginPage.verifyErrorMessage(
            'Username and password do not match any user in this service'
        );
    });

    // Verify that a locked user cannot log in and sees the appropriate error
    test('3.Locked User Validation', async () => {
        await loginPage.loginWithProfile('locked');
        await loginPage.verifyErrorMessage(
            'Sorry, this user has been locked out.'
        );
    });


    // Verify validation messages when username and password are left blank
    test('4.Validate Error Handling', async () => {
        await loginPage.login('', '');
        await loginPage.verifyErrorMessage('Username is required');
    });

    
    // Verify that the user session remains active after login
    test('5.Session Persistence', async () => {
        await loginPage.loginWithProfile('standard');
        await loginPage.verifySuccessfulLogin();
        await loginPage.verifySessionPersistence();
    });

});



