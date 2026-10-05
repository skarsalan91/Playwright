const{test,expect} = require('@playwright/test')

 //test.use({viewport:{width:500,height:500}}) // this is for single test case

test("verify the error message",async function({ page }) 

{  // Test implementation here
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 
   
 
    await page.getByPlaceholder("Username").fill("Admin")
await page.getByPlaceholder("Password").fill("admin12")
 // await page.getByRole('button', {name: Login }).click()

 
await page.locator("button[type='submit']").click()
await page.waitForTimeout(5000)

const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent()
console.log("Error message is " +errorMessage);
expect(errorMessage.includes("Invalid")).toBeTruthy()
expect(errorMessage.includes("Invalid credentials")).toBeTruthy()

});