import { test, expect, devices } from '@playwright/test';

test ('Assertions',async({page})=>{

    await page.goto('https://demoblaze.com/')
    await expect(page).toHaveURL('https://demoblaze.com/')
    await page.waitForTimeout(5000)

    await expect(page).toHaveTitle('STORE')
    const favicon = await page.locator("img[src='blazemeter-favicon-512x512.png']").first();
    await expect(favicon).toBeVisible();

    await page.locator('#login2').click();
    await page.waitForTimeout(5000)

    // to have text 

    await expect(page.locator('#logInModalLabel')).toHaveText('Log in')

    const loginInput = await page.locator('#loginusername')
    //await expect(loginInput).toBeEnabled();

    const LoginInputValue = await page.locator('#loginusername')
    await LoginInputValue.fill('testuser')
    await expect(LoginInputValue).toHaveValue('testuser')
    //await page.locator('#loginpassword').fill('test123')

})