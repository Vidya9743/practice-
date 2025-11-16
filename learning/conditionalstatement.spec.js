import { test, expect } from '@playwright/test';

test('using conditional statements', async ({ page, browserName }) => {
    await page.goto('https://demoqa.com/');
    await page.locator('text=Elements').click();
    await expect(page).toHaveURL('https://demoqa.com/elements');
    const checkbox = await page.locator("(//div[@class='header-text'])[1]").isVisible();
    if (checkbox) {
        await page.locator("(//div[@class='header-wrapper'])[2]").click();
    } else {
        await page.locator("(//div[@class='header-wrapper'])[1]").click();
    }
});

