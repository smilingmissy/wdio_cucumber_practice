import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser,expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage,
    secure: SecurePage
}

Given(/^I am on the (\w+) page$/, async (page: string) => {
    await pages[page as keyof typeof pages].open(page)
});

When(/^user enters with right  username and password$/, async () => {
    await LoginPage.login('practice', 'SuperSecretPassword!');
});

When('I click on the Login button', async () => {
  await $('button[type="submit"]').click();
});

Then(/^user should be redirected to secure page$/, async () => {
    await expect(browser).toHaveUrl(expect.stringContaining('/secure'));
});

Then(/^user should be redirected to login page$/, async () => {
   await expect(browser).toHaveUrl('https://practice.expandtesting.com/login');
});

Then('I should see success message', async () => {
     const flash = await $('#flash');
    await  expect(flash).toHaveText(expect.stringContaining('You logged into a secure area!'));
});

Then('the Logout button should be displayed', async () => {
    const logoutBtn = await $('a[href="/logout"]');
    await logoutBtn.click();
   
});
Then(/^user should see an flash error message for invalid username$/, async () => {
    const flash = await $('#flash');
    await  expect(flash).toHaveText(expect.stringContaining('Your username is invalid!'));
});

Then(/^user should see an flash error message for invalid password$/, async () => {
    const flash = await $('#flash');
    await  expect(flash).toHaveText(expect.stringContaining('Your password is invalid!'));
});
When(/^user enters wrong username and password$/, async () => {
    await LoginPage.login('toms', 'assword!');
});

Then('I should remain on the login page', async () => {
   await expect(browser).toHaveUrl('https://practice.expandtesting.com/login');
});

When(/^I enter username right username and wrong password$/, async () => {
    await LoginPage.login('practice', 'mhuhjk');
});
