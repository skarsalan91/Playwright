import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.getByRole('link', { name: 'Sony vaio i5' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await page.getByRole('link', { name: 'Nexus' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Total: 1440 Name:' }).fill('Adrewns');
  await page.getByRole('textbox', { name: 'Country:' }).fill('Ireland');
  await page.getByRole('textbox', { name: 'Country:' }).press('Tab');
  await page.getByRole('textbox', { name: 'City:' }).fill('Newark');
  await page.getByRole('textbox', { name: 'Credit card:' }).fill('987678921');
  await page.getByRole('textbox', { name: 'Month:' }).fill('12');
  await page.getByRole('textbox', { name: 'Year:' }).fill('2025');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await page.getByRole('dialog', { name: 'Place order' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});