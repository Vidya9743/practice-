import {test , expect} from '@playwright/test'
test('login with username and password' , async({ page }) => {
    //action
    await page.goto('https://www.rediff.com/login.html')
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("input[name='submit']").click();
    //assertion
    await expect(page).toHaveURL(/rediff\.com\/cgi-bin\/server\.pl/);

});