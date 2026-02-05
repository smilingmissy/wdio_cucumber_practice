import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'expect-webdriverio';




Given(/^I am on the forget password page$/, async () => {
    await browser.url('https://practice.expandtesting.com/forgot-password');
});
When(/^I enter a valid email address "([^"]*)"$/, async (email: string) => {
    const emailInput = await $('#email');
    await emailInput.setValue(email);
});
When('I click on the submit button', async () => {
  await $('button[type="submit"]').click();
});

Then(/^I should see a confirmation message "([^"]*)"$/, async (message: string) => {
    const confirmationMessage = await $('#confirmation-alert');
    await expect(confirmationMessage).toHaveText(message);
});