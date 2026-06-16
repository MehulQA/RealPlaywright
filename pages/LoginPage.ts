import { Page, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { ENV } from '../config/env';



export class LoginPage {
  constructor(private page: Page) {}


  private errorMessage = '[data-test="error"]';

  async verifyErrorMessage(message: string) {
    await expect(
      this.page.locator(this.errorMessage)
    ).toContainText(message);
  }

  async navigate() {
    await this.page.goto(ENV.baseUrl);

    const screenshot = await this.page.screenshot();

    await allure.attachment(
      'Login Page Screenshot',
      screenshot,
      'image/png'
    );
  }

  async login(username?: string, password?: string) {

  if (ENV.app === 'saucedemo') {

    await this.page.fill(
      '#user-name',
      username || ENV.standardUser
    );

    await this.page.fill(
      '#password',
      password || ENV.standardPassword
    );

    await this.page.click('#login-button');
  }

  if (ENV.app === 'automationexercise') {

    await this.page.fill(
      'input[data-qa="login-email"]',
      username || ENV.username
    );

    await this.page.fill(
      'input[data-qa="login-password"]',
      password || ENV.password
    );

    await this.page.click(
      'button[data-qa="login-button"]'
    );
  }
  }}