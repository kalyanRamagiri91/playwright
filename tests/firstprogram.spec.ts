import{test,expect,chromium} from '@playwright/test';
test('chromium browser test',async ()=>{
    console.log('browser test')
    let browser = await chromium.launch({
    headless:false}
    );

let context1 = await browser.newContext();
let context2 = await browser.newContext();

let page1=  await context1.newPage();
let page2=  await context1.newPage();
await page1.goto("https://www.google.com");
await page2.goto("https://www.amazon.in");

})