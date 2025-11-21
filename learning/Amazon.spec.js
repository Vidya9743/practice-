import { test , expect} from '@playwright/test';
test('Adding Amazon products in the cart' , async( {page})=>{
await page.goto('https://www.amazon.in/')
const list=await page.locator("#nav-main>div:nth-child(2)>div").allTextContents()
await page.locator('text=Mobiles').click()
await page.locator('//img[@alt="OnePlus 15"]').click()
await page.locator('(//input[@value="Add to Cart"])[2]').click()
await page.locator('(//a[@class="a-button-text"])[3]').click()
const price1=await page.locator('//span[@class="a-price a-text-price sc-product-price sc-white-space-nowrap a-size-medium"]/span[2]').textContent()
console.log(price1)
const price2=await page.locator('(//div[@data-name="Subtotals"])[2]/span[2]/span').textContent()
console.log(price2)
await expect(Number(price1)).toBe(Number(price2))
});