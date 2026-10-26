const {test, expect} = require ('@playwright/test')
test('input fileds',async ({page}) =>
{
    await page.goto('https://demoqa.com/text-box')
    await page.waitForTimeout(2000)

    const Username = await page.locator('#userName')
    await page.waitForTimeout(2000)

    await expect(Username).toBeVisible() 
    await expect(Username).toBeEmpty()
    await expect(Username).toBeEditable()
        await expect(Username).toBeEnabled
    await page.locator('#userName').fill('John Dull')
    await page.waitForTimeout(2000)

     
})