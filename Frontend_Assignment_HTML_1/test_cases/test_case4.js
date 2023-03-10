/**
 * Description: should have paragraph tag
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
test('verifies the presence of p tags with appropriate text', async () => {
  const page = await browser.newPage();
  await page.goto('http://localhost:8080');
  const pTag = await page.$('p');
  const pTagContent = await page.evaluate(el => el.textContent, pTag);
  expect(pTag).toBeTruthy();
  expect(pTagContent).toBeTruthy();
  expect(pTagContent.length).toBeGreaterThan(0);
});
