import { Page, Locator, expect } from '@playwright/test';
import { Config } from '../config/env';



export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async navigate() {
        await this.page.goto(Config.BASE_URL);
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async loginWithProfile(
        userType: 'standard' | 'locked' | 'invalid'
    ) {
        let username = '';
        let password = '';

        switch (userType) {
            case 'standard':
                username = Config.STANDARD_USER;
                password = Config.STANDARD_PASSWORD;
                break;

            case 'locked':
                username = Config.LOCKED_USER;
                password = Config.LOCKED_PASSWORD;
                break;

            case 'invalid':
                username = Config.INVALID_USER;
                password = Config.INVALID_PASSWORD;
                break;
        }

        await this.login(username, password);
    }

    async verifySuccessfulLogin() {
        await expect(this.page).toHaveURL(/inventory.html/);
        await expect(this.page.locator('.title')).toHaveText('Products');
            console.log('✅ User is successfully logged in');
    }

    async verifyErrorMessage(expectedMessage: string) {
        await expect(this.errorMessage)
            .toContainText(expectedMessage);
    }

    async logout() {
        await this.page.locator('#react-burger-menu-btn').click();
        await this.page.locator('#logout_sidebar_link').click();

        await expect(this.page).toHaveURL(Config.BASE_URL);
    }

    async verifySessionPersistence() {
        await this.page.reload();

        await expect(this.page).toHaveURL(/inventory.html/);
        await expect(this.page.locator('.title')).toHaveText('Products');
    }
}