import {test, expeect} from '@playwright/test';

test('Uses await in Playwright test', async ({page}) =>{
    await page.goto('https://playwrightdev.com/');
});
