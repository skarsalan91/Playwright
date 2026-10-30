const {test, expect} = require ('@playwright/test')

test('Multiselect the option from dropdown',async function({page})
{
 await page.goto('https://testautomationpractice.blogspot.com/')
    await page.selectOption('#colors',['Blue', 'Red', 'Yellow'])
 await page.waitForTimeout(5000)

} )