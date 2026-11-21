import{test,expect,chromium} from '@playwright/test';
test('using fixtures',async({page})=>{
    await page.goto("https://www.google.com");
})