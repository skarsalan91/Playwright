//const {test, expect} = require('@playwright/test')
import {test, expect} from 'playwright/test'

test('locator', async ({page}) =>
{

    await page.goto("https://demoblaze.com/")
    
   // await page.locator('').click() //1st approch
    
    await page.click('id=login2') // 2nd approch
    
    await page.locator('#loginusername').fill('pavanol')

    //await page.locator('#loginpassword').fill('123456')
    // fill password using 2nd approch 
    await page.fill('#loginpassword', 'test@123') //2nd approch

    // click on login button

    await page.click('button[onclick="logIn()"]')

// capturing the locator of logout link 
   const Logoutlink = await page.locator('#logout2')
// verifing the visibility of logout link after Login
   expect(Logoutlink).toBeVisible()

    await page.waitForTimeout(5000)


})