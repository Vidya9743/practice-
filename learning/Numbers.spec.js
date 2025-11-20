import { test , expect} from '@playwright/test';
test ('Add brocali and cauliflower in cart' , async( {page}) =>{
await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')
await page.locator('//h4[text() = "Brocolli - 1 Kg"]/../div[3]/button').click()
await page.locator('//h4[text()="Cauliflower - 1 Kg"]/../div[3]/button').click()
const price1=await page.locator('(//p[@class="product-price"])[1]').textContent()
console.log(price1)
const price2=await page.locator('//h4[text()="Cauliflower - 1 Kg"]/../p').textContent()
console.log(price2)
const totalprice=await page.locator('//table/tbody/tr[2]/td[3]/strong').textContent()
console.log(totalprice)
await expect(Number(price1)+Number(price2)).toBe(Number(totalprice))
});