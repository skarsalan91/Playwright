const {test,expect} =require('@playwright/test')

test('to test the checkboxs',async function({page})
{
    await page.goto('https://demoqa.com/checkbox')
    await page.waitForTimeout(1000)
    await page.locator('.rc-tree-switcher.rc-tree-switcher_close').click()
    await page.waitForTimeout(2000)

    await page.locator("//span[@role='checkbox' and @aria-label='Select Desktop']").check()
 await page.waitForTimeout(2000)

 await expect(await page.locator("//span[@role='checkbox' and @aria-label='Select Desktop']")).toBeChecked()
 await expect(await page.locator("//span[@role='checkbox' and @aria-label='Select Desktop']").isChecked()).toBeTruthy()


 // await page.locator('.rc-tree-switcher.rc-tree-switcher_close').first().click()
    // await page.waitForTimeout(2000)
    //     await page.locator('.rc-tree-switcher.rc-tree-switcher_close')
//const locators = page.locator('.rc-tree-switcher.rc-tree-switcher_close');

//const count = await locators.count();

// for (let i = 0; i < 3; i++) {
//     await locators.nth(i).click();
//     await page.waitForTimeout(1000);

})