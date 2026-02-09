import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser,expect, $ } from '@wdio/globals'

Given(/^the user is on the otp-login page$/, async () => {
    await browser.url('https://practice.expandtesting.com/otp-login');
});


When('user enters {string} in the email field',  async (email: string) => {
    await $('#email').setValue(email);
  }
);

When('clicks on the button', async () => {
  await $('button[type="submit"]').click();
});
When('user enters the received OTP code in the OTP field', async () => {
 await $('#otp').setValue(214365);
});


// Then('I should see success message', async () => {
 
// });

// Then('the Logout button should be displayed', async () => {
 
// });