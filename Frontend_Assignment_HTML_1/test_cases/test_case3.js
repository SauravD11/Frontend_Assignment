/**
 * Description: should have h2 and h3 tag
 */

const puppeteer = require('puppeteer');
let browser;
beforeAll(async () => {
    browser = await puppeteer.launch({
        executablePath: process.env.CHROMIUM_PATH,
        args: ['--no-sandbox'], // This was important. Can't remember why
      });
});
afterAll(async () => {
  await browser.close();
});

test('verifies if h2 and h3 tag present', async () => {
  const page = await browser.newPage();
  await page.goto('http://localhost:8080');
  const h2Handles = await page.$('h2');
  const h3Handles = await page.$('h3');
  expect(h2Handles).toBeTruthy();
  expect(h3Handles).toBeTruthy();
});