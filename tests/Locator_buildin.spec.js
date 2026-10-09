import {test, expect} from '@playwright/test'

test('all type of locators',async ({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const CompanyLogo = await page.getByAltText('company-branding')
    await page.waitForTimeout(3000)
    expect(CompanyLogo).toBeVisible()
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', {name: 'Login'}).click()
    await page.waitForTimeout(3000)
    await expect(await page.getByText('manda user')).toBeVisible()
    await page.waitForTimeout(2000)
})