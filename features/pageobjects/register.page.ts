import { $ } from '@wdio/globals';


class RegisterPage {

  get usernameInput() {
    return $('#username');
  }

  get passwordInput() {
    return $('#password');
  }

  get confirmPasswordInput() {
    return $('#confirmPassword');
  }

  get registerButton() {
    return $('button[type="submit"]');
  }

  async open() {
    await browser.url('https://practice.expandtesting.com/register');
  }

  async enterUsername(username: string) {
    await this.usernameInput.setValue(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.setValue(password);
  }

  async confirmPassword(password: string) {
    await this.confirmPasswordInput.setValue(password);
  }

  async clickRegister() {
    await this.registerButton.click();
  }
}

export default new RegisterPage();
