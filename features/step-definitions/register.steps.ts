import { Given, When, Then } from '@cucumber/cucumber';
import { browser } from '@wdio/globals';
import { expect } from 'expect-webdriverio';
import RegisterPage from '../pageobjects/register.page';

/* ---------- Given ---------- */

Given('I launch the browser', async () => {
  await browser.maximizeWindow();
});

Given('I navigate to the register page', async () => {
  await RegisterPage.open();
});

Then('the register page should be displayed successfully', async () => {
 await expect(browser).toHaveUrl(expect.stringContaining('/register'));
});

/* ---------- When ---------- */

When('I enter a valid username', async () => {
  await RegisterPage.enterUsername('madhi');
});

When('I enter a valid password', async () => {
  await RegisterPage.enterPassword('Teswe');
});

When('I confirm the password correctly', async () => {
  await RegisterPage.confirmPassword('Teswe');
});

When('I leave the username field empty', async () => {
  await RegisterPage.enterUsername('');
});

When('I leave the password field empty', async () => {
  await RegisterPage.enterPassword('');
});

When('I confirm the password with any value', async () => {
  await RegisterPage.confirmPassword('anyValue');
});

When('I confirm the password with a different value', async () => {
  await RegisterPage.confirmPassword('Different@123');
});

When('I click on the Register button', async () => {
  await RegisterPage.clickRegister();
});

/* ---------- Then ---------- */

Then('I should be redirected to the login page', async () => {
  await expect(browser).toHaveUrl(expect.stringContaining('/login'));
});

Then('I should see success message {string}', async (message: string) => {
       const flash = await $('#flash');
      await  expect(flash).toHaveText(expect.stringContaining(message));
});

Then('I should see error message {string}', async (message: string) => {
     const flash = await $('#flash');
      await  expect(flash).toHaveText(expect.stringContaining(message));
});
