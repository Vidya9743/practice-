import {test , expect } from '@playwright/test'
test ('Using different locators', async ( { page}) =>{
await page.goto('https://demoqa.com/text-box/')
await expect(page.locator("//h1[text()='Text Box']")).toBeVisible()
await page.locator('//input[@id="userName"]').fill("vidya");
await page.locator('//input[@id="userEmail"]').fill("vidya@gmail.com")

await page.locator('//textarea[@id="currentAddress"]').fill("Bangalore")
await page.locator('//textarea[@class="form-control"][@id="permanentAddress"]').type("Hebbal")
await page.locator('//button[contains(.,"Su")]').click()
});