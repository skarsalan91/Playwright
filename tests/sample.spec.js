const {test,expect} =require('@playwright/test')

test("My first test", async ({page}) =>
    
    {
        expect(1).toBe(1)
    })
test.skip("my second test", async function({page})
    {
    expect(1).toBe(2)
    
    })
test("my third test", async function({page})
    {
        expect(3).toBe(3.0)
    })
test("my fourth test", async function({page})
    {
    expect("Arsalan Shaikh").toContain("Arsalan")
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()
    
    })
test("my fifth test", async function({page})
{
    expect("Shaikh Arsalan".includes("Arsalan")).toBeTruthy()
})