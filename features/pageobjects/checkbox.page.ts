//import { ChainablePromiseElement } from 'webdriverio';


// class CheckboxPage {

//   checkboxes: Record<string, ChainablePromiseElement> = {
//     A: $('#cb-a'),
//     B: $('#cb-b'),
//     C: $('#cb-c'),
//     D: $('#cb-d'),
//     E: $('#cb-e'),
//     F: $('#cb-f')
//   };

//   selectedItems = $$('#selected-list li');

//   async open() {
//         await browser.url('https://practice.expandtesting.com/checkboxes');

//   }

//   async setCheckboxState(name: string, shouldBeChecked: boolean) {
//     const checkbox = this.checkboxes[name];
//     const isChecked = await checkbox.isSelected();

//     if (shouldBeChecked !== isChecked) {
//       await checkbox.click();
//     }
//   }

//   async resetAllCheckboxes() {
//     for (const checkbox of Object.values(this.checkboxes)) {
//       if (await checkbox.isSelected()) {
//         await checkbox.click();
//       }
//     }
//   }

//   async getSelectedItems(): Promise<string[]> {
//   const items = await $$('#selected-list li');

//   const texts = items.map(
//     (item): Promise<string> => item.getText()
//   );

//   return Promise.all([...await texts]);
// }

// }

// export default new CheckboxPage();























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