const {test,expect} =require('@playwright/test')

test('to test the checkboxs',async function({page})
{
await page.goto('https://demoqa.com/checkbox')
    await page.waitForTimeout(1000)
    await page.locator('.rc-tree-switcher.rc-tree-switcher_close').click()
    await page.waitForTimeout(2000)

    const checkboxsLocator = ["//span[@class='rc-tree-checkbox' and @aria-label='Select Desktop']",
                            "//span[@class='rc-tree-checkbox' and @aria-label='Select Documents']",
                            "//span[@class='rc-tree-checkbox' and @aria-label='Select Downloads']"
                            ];

        for (const locator of checkboxsLocator)
        {
            await page.locator(locator).check();
        }

})