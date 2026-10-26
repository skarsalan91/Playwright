
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://demoblaze.com/index.html');

  await page.getByRole('link', { name: 'Log in' }).click();

  await page.locator('#loginusername').click();

  await page.locator('#loginusername').fill('pavanol');

  await page.locator('#loginpassword').fill('test@123');

  await page.getByRole('button', { name: 'Log in' }).click();

  await page.getByRole('link', { name: 'Samsung galaxy s7' }).click();

  page.once('dialog', dialog => {

    console.log(`Dialog message: ${dialog.message()}`);

    dialog.dismiss().catch(() => {});

  });

  await page.getByRole('link', { name: 'Add to cart' }).click();

  page.once('dialog', dialog => {

    console.log(`Dialog message: ${dialog.message()}`);

    dialog.dismiss().catch(() => {});

  });

  await page.getByRole('link', { name: 'Add to cart' }).click();

  await page.getByRole('link', { name: 'Cart', exact: true }).click();

  await page.getByRole('button', { name: 'Place Order' }).click();

  await page.getByRole('textbox', { name: 'Total: 1600 Name:' }).click();

  await page.getByRole('textbox', { name: 'Total: 1600 Name:' }).fill('arsalan');


  await page.getByRole('textbox', { name: 'Country:' }).fill('india');


  await page.getByRole('textbox', { name: 'City:' }).fill('mumbai');


  await page.getByRole('textbox', { name: 'Credit card:' }).fill('542346453');


  await page.getByRole('textbox', { name: 'Month:' }).fill('12');


  await page.getByRole('textbox', { name: 'Year:' }).fill('2025');

  await page.getByRole('button', { name: 'Purchase' }).click();

  await page.getByRole('dialog', { name: 'Place order' }).click();

});
