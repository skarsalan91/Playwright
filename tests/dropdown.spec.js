const {test,expect} = require ('@playwright/test') 

test('test the dropdown', async function({page})
{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.locator('#country').selectOption({label:'India'})
    await page.locator('#country').selectOption('India')
    
    //count with array
    // const option =await page.$$('#country option')
    // console.log("option count are :", option.length)

    // const option= await page.locator('#country option')
    // await expect(option).toHaveCount(10)

    //to fetxh all the value of dropdown in console
    // const option =await page.locator('#country').textContent()
    // console.log("values are:", option)

        //presence of value in a dropdown Approch 1
    // const option1 =await page.locator('#country').textContent()
    // await expect(option1.includes('India')).toBeTruthy();

    //presence of value in a dropdown Approch 2(using loop: enhance for loop)

    const options=await page.$$('#country option')
let status= true;
    for(const option3 of options)   

    {
    let value = await option3.textContent()
    if (value.includes('india'))
    {

        status= true;
        break;

    }
    await expect(status).toBeTruthy()
    //console.log(await option3.textContent())
}
   // await page.waitForTimeout(2000)

})