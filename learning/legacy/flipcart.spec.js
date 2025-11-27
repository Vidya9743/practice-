import {test , expect} from '@playwright/test'
import { asyncWrapProviders } from 'async_hooks';
test ('login with flipcart' , async({ page }) =>{
    //action
    await page.goto('https://www.flipkart.com/')
    
    //assertion
    await expect(page.locator("img[title='Flipkart']")).toBeVisible();
    //action
    await expect(page.locator("//span[text()='Login']")).toBeVisible();
    await page.locator("//span[text()='Login']").click()

});

test ('verify the login page' , async ({ page }) => {
        await page.goto('https://www.flipkart.com/')
    //assertion
    await expect(page.locator("img[title='Flipkart']")).toBeVisible();
    //action
    await page.locator("//span[text()='Login']").click()
    await expect(page).toHaveURL('https://www.flipkart.com/account/login?ret=/');
    await page.locator("//input[@class='r4vIwl BV+Dqf']").fill("9392454883");
    await page.locator("//button[text()='Request OTP']").click();
    await page.locator("//span[text()='Electronics']").hover();
    await page.locator("//span[text()='Fashion']").hover();
    await page.locator("//span[text()='Home & Furniture']").hover();
    await page.locator("//span[text()='Account']").selectOption("//li[text()='Orders']")

});