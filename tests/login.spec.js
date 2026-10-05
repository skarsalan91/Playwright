const {test, expect} = require("@playwright/test")
test('valid login', async function({page})
    {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.getByPlaceholder("Username").fill("Admin") 
await page.locator("input[placeholder='Password']").fill("admin123")
await page.locator("button[type='submit']").click()
await page.waitForTimeout(5000)
await expect(page).toHaveURL(/dashboard/)

await page.getByAltText("profile picture").first().click()
await page.getByText("Logout").click()

await expect(page).toHaveUrl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
}
)