import{test,expect,chromium} from '@playwright/test';
test('using fixtures',async({page})=>{
    let response = await page.goto("https://www.amazon.in",{
        waitUntil:"load"
    })
    console.log(response?.status());
    await page.goto("https://www.google.com",{ waitUntil:"load"});
    await page.goBack();
    console.log(await page.title())
    console.log(await page.url())
    console.log(await page.content())
})

