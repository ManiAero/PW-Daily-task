
const{test,chromium } = require('@playwright/test');

test('has title ', async()=>{

const browser = await chromium.launch({headless:false});
const context = await browser.newContext();
const page = await context.newPage();
const url = ('https://x.com/?lang=en')
await page.goto(url)

//await expect(page) 

//await page.getByText('Create account' ).click

const btn = await page.getByText('Create account');
await btn.click();

await page.fill("input[autocomplete='email']", 'Mani');

await page.fill("input[autocomplete='name']",'Kandan')

await page.waitForTimeout(5000);

// await page.screenshot


});



