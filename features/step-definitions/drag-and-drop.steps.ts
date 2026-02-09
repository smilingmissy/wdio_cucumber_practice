import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';


Given('user is on the Drag and Drop page', async () => {
    await browser.url('https://practice.expandtesting.com/drag-and-drop');
});

When('user drags element A to element B', async () => {
   await $('#column-a').dragAndDrop($('#column-b'));
});
Then('element A should be successfully dropped into element B', async () => {
 await expect($('#column-b')).toHaveText('A');
});
