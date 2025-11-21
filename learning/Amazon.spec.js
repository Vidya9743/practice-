import { test , expect} from '@playwright/test';
test('Adding Amazon products in the cart' , async( {page})=>{
// Navigate to Amazon India
await page.goto('https://www.amazon.in/')
// Get navbar list.
const list=await page.locator("#nav-main>div:nth-child(2)>div").allTextContents()
 // Click on "Mobiles"
await page.locator('text=Mobiles').click()
// Click OnePlus 15 product
await page.locator('//img[@alt="OnePlus 15"]').click()
// Click "Add to Cart"
await page.locator('(//input[@value="Add to Cart"])[2]').click()
 // Click "Go to Cart"
await page.locator('(//a[@class="a-button-text"])[3]').click()
//(gets item price inside cart)
const price1=await page.locator('//span[@class="a-price a-text-price sc-product-price sc-white-space-nowrap a-size-medium"]/span[2]').textContent()
console.log(price1)
//(subtotal price)
const price2=await page.locator('(//div[@data-name="Subtotals"])[2]/span[2]/span').textContent()
console.log(price2)
//Remove symbols FIRST (while still string) THEN convert to Number
const p1 = Number(price1.replace(/[,₹]/g, ""));
  const p2 = Number(price2.replace(/[,₹]/g, ""));
console.log(p1);
console.log(p2);
//compare values.
await expect(p1).toBe(p2)
});