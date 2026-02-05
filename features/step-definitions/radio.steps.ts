import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'expect-webdriverio';
import RadioButtonPage from '../pageobjects/RadioButton.page';

Given('I navigate to the radio button page', async () => {
  await RadioButtonPage.open();
});

Then('all radio buttons should be visible', async () => {
  for (const radio of RadioButtonPage.getAllRadioButtons()) {
    await expect(radio).toBeDisplayed();
  }
});

When('I select radio button {string}', async (option: string) => {
  const radio = RadioButtonPage.getRadioButton(option);
  await radio.click();
});

Then('radio button {string} should be selected', async (option: string) => {
  const radio = RadioButtonPage.getRadioButton(option);
  await expect(radio).toBeSelected();
});

Then('only one color radio button should be selected', async () => {
  const radios = RadioButtonPage.getColorRadios();

  let selectedCount = 0;
  for (const radio of radios) {
    if (await radio.isSelected()) {
      selectedCount++;
    }
  }
  expect(selectedCount).toBe(1);
});
Then('only one sports radio button should be selected', async () => {
  const radios = RadioButtonPage.getSportRadios();
  let selectedCount = 0;
  for (const radio of radios) {
    if (await radio.isSelected()) {
      selectedCount++;
    }
  }
  expect(selectedCount).toBe(1);
});
