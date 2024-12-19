const { Given, When, Then } = require('@cucumber/cucumber');
const { page } = require('../support/playwright'); 

Given('I am a visitor', async () => {
  // This can be left empty for now, or used for set-up logic.
});

When('I navigate to the homepage', async () => {
  await page.goto('http://sambordo.ninja/');
});

Then('I should see the link {string}', async (expectedLink) => {
  const link = await page.link();
  if (title !== expectedLink) {
    throw new Error(`Expected title "${expectedLink}", but got "${title}"`);
  }
});
