import {test, expect} from '@playwright/test'

test('to get all the mobile products', async ({page}) => {
    await page.goto('https://www.amazon.in/') 
        await page.waitForTimeout(5000)
        
        const products = await page.$$('//a')

        for (const product of products)
        {
             const prodName = await product.textContent();
             console.log(prodName);
        }

})