const {test, expect} = require ('@playwright/test')

test('Bootstrap dropdown',async function({page})
{
await page.goto("file:///C:/Users/hp/OneDrive/Desktop/Software%20testing/Playright/multiselect-dropdown.html")
await page.waitForTimeout(2000)

await page.locator(".multiselect-selected-text").click()  //step 1 : click on dropdown
 //await page.

 const options = await page.$$("ul>li label")    //step 2 : identify the locator for all the elements
   // await expect(Multicheck).toHaveCount(11)
for(const option of options)                     // step 3 : create a for loop to cpture all the elements
{
    const value = await option.textContent()
//console.log("value is ",value)  // to print all the values from dropdown
if(value.includes('jQuery') || value.includes('Bootstrap'))  // step 3 : create a if loop with in for loop for selecting values
{
    await option.click()   // Step 4: perform the action

await page.waitForTimeout(2000)
}}})