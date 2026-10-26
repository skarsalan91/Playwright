const {test,expect} =require('@playwright/test')

test('Counts in dropdown',async function({page}) 
{
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

 await page.getByPlaceholder('Username').fill('Admin')
 await page.getByPlaceholder('Password').fill('admin123')
 await page.locator('button[type="submit"]').click()

 //await page.locator('.oxd-text .oxd-text--span .oxd-main-menu-item--name').click()
await page.locator("//span[contains(@class,'oxd-main-menu-item--name') and text()='Leave']").click();
await page.waitForTimeout(2000)
//const DropdownCount1 = page.locator("//div[contains(@class,'oxd-select-text-input') and text()='-- Select --']").first()
//const DropdownCount1 = page.locator(
//  "//div[contains(@class,'oxd-select-text-input') and normalize-space(.)='-- Select --']"
//)
const dropdowns = page.locator('div.oxd-select-text-input');


//await expect(dropdowns).toHaveCount(5);
for (const value of values) {
  console.log(value);
}

//console.log(await dropdowns.count());

//  console.log(DropdownCount1)
//await expect(DropdownCount1).toHaveCount(3)
//await page.waitForTimeout(2000)
})
