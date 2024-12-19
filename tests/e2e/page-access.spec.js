// @ts-check
const { pauseTest } = require('@ember/test-helpers');
const { test, expect } = require('@playwright/test');

test('Webpage is up', async ({ page }) => {
  await page.goto('http://sambordo.ninja/');
  await page.getByRole('link', { name: 'Workout Plan', exact: true }).click();
  await page.getByRole('link', { name: 'Injury Specific Background' }).click();
  await page.waitForTimeout(3000);
  await expect(page.getByRole('heading', { name: 'TMJ' })).toBeVisible();
});