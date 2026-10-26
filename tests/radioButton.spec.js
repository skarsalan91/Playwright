const {test,expect} = require ('@playwright/test')
test('Handle radio button',async ({page}) =>
{
 await page.goto('https://demoqa.com/radio-button')

 //await page.locator('#yesRadio').click()
 await page.check('#yesRadio')
 await expect(await page.locator('#yesRadio').isChecked()).toBeTruthy()
await expect(await page.locator('#impressiveRadio').isChecked()).toBeFalsy()

})