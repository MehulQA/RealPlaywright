export class MobileLoginPage {
  constructor(private driver: any) {}

  get username() {
    return this.driver.$('~test-Username');
  }

  get password() {
    return this.driver.$('~test-Password');
  }

  get loginButton() {
    return this.driver.$('~test-LOGIN');
  }

  async login(user: string, pass: string) {
    await this.username.waitForDisplayed({ timeout: 10000 });
    await this.username.setValue(user);

    await this.password.waitForDisplayed({ timeout: 10000 });
    await this.password.setValue(pass);

    await this.loginButton.waitForDisplayed({ timeout: 10000 });
    await this.loginButton.click();
  }
}