import {test, expect} from '@playwright/test'

test('fetching multiple elements',async({page})=>
{

    await page.goto("https://demoblaze.com/")
   /* const links = await page.$$('a');

    for(const link of links)
    {
        const linkText=await link.textContent()
        console.log("Link text is : "+linkText)
    }
*/
 /*const products = await page.$$("//div[@id='tbodyid']//h4/a")

    for(const product of products)
    {
        const productText=await product.textContent();
        console.log(productText);
    }


*/
    await page.waitForTimeout(5000)
 // await page.waitForSelector("//div[@id='tbodyid']//h4/a");


    const products = await page.$$("//div[@id='tbodyid']//h4/a");

  for (const product of products) {
    const prodName = await product.textContent();
    console.log(prodName);
  }

});