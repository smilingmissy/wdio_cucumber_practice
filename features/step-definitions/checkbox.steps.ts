import { Given, Then,When } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
 const checkboxes = {
  option1: () => $('(//input[@type="checkbox"])[1]'),
  option2: () => $('(//input[@type="checkbox"])[2]')
};

Given('user is on "checkbox" page', async () => {
  await browser.url('https://practice.expandtesting.com/checkboxes');
});
When('deselects the option 2', async () => {
    await checkboxes.option2().click();
  
});

When('user selects {string}', async (option: string) => {
  const cb = option === 'Option 1'
    ? checkboxes.option1()
    : checkboxes.option2();

  if (!(await cb.isSelected())) {
    await cb.click();
  }
});

When('user deselects {string}', async (option: string) => {
  const cb = option === 'Option 1'
    ? checkboxes.option1()
    : checkboxes.option2();

  if (await cb.isSelected()) {
    await cb.click();
  }
});

When('user selects {string} and {string}', async (opt1: string, opt2: string) => {
  await (opt1 === 'Option 1' ? checkboxes.option1() : checkboxes.option2()).click();
  await (opt2 === 'Option 1' ? checkboxes.option1() : checkboxes.option2()).click();
});

Then('{string} should be selected', async (option: string) => {
  const cb = option === 'Option 1'
    ? checkboxes.option1()
    : checkboxes.option2();

  await expect(cb).toBeSelected();
});

Then('both options should be selected', async () => {
  await expect(checkboxes.option1()).toBeSelected();
  await expect(checkboxes.option2()).toBeSelected();
});

Then('only {string} should be selected', async (option: string) => {
  if (option === 'Option 1') {
    await expect(checkboxes.option1()).toBeSelected();
    await expect(checkboxes.option2()).not.toBeSelected();
  } else {
    await expect(checkboxes.option2()).toBeSelected();
    await expect(checkboxes.option1()).not.toBeSelected();
  }
});

Then('no options should be selected', async () => {
  await expect(checkboxes.option1()).not.toBeSelected();
  await expect(checkboxes.option2()).not.toBeSelected();
});






//import { generateCombinations } from '../utils/combination.helper';

// Given('user is on "checkbox" page', async () => {
//   await CheckboxPage.open();
// });

// Then('all checkbox combinations should work correctly', async () => {
//   const checkboxNames = Object.keys(CheckboxPage.checkboxes);
//   const combinations = generateCombinations(checkboxNames.length);

//   for (let i = 0; i < combinations.length; i++) {

//     await CheckboxPage.resetAllCheckboxes();

//     const combo = combinations[i];

//     for (let j = 0; j < combo.length; j++) {
//       await CheckboxPage.setCheckboxState(checkboxNames[j], combo[j]);
//     }

//     const selectedItems = await CheckboxPage.getSelectedItems();

//     checkboxNames.forEach((name, index) => {
//       if (combo[index]) {
//         expect(selectedItems).toContain(name);
//       } else {
//         expect(selectedItems).not.toContain(name);
//       }
//     });
//   }
// });