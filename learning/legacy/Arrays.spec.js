// import { test, expect } from '@playwright/test';
// test('Using Array methods', async ({ page }) => {
// 	await page.goto('https://www.amazon.in/');
// 	const list = await page.locator('(//div[@class="nav-fill"])[4]').allTextContents();
// 	//console.log(list)
// 	const sixthitem = await page.locator('//a[text()="New Releases"]').textContent();
// 	//console.log(`The sixth item in the list is : ${sixthitem}`);
// 	await page.locator(`//a[text()="New Releases"]`).click();
// await page.locator('//a[@href="/gp/new-releases/books/ref=zg_bsnr_nav_books_0"]').click();
// 	const bookTitles=await page.locator("._cDEzb_p13n-sc-css-line-clamp-3_g3dy1").allTextContents();
//     console.log(bookTitles);
// });


import { test, expect } from '@playwright/test';
test('Using Array methods', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
const productNames=await page.locator('//h4[@class="product-name"]').allTextContents();
//console.log(productNames);
const count=await productNames.length;
//console.log(`The count of the products is: ${count}`);
const thirdProduct=productNames[2];
//console.log(`The third product in the list is: ${thirdProduct}`);
const productsitems=[productNames[0],productNames[3],productNames[5],productNames[7]];
console.log(`The selected products are:${productsitems}`);
//slice method
let result=productsitems.slice(0,2);
console.log(result);
//splice method
productsitems.splice(1,1,"Tomato - 1 Kg");
console.log(`After splicing the products are: ${productsitems}`);
//filter method
let filterresult=productsitems.filter(item=>item.includes("m"));
console.log(`The filtered item is: ${filterresult}`);
//map method
let mapresult=productsitems.map(names=>names.toUpperCase());
console.log(`The mapped items are: ${mapresult}`);
//reduce method
let total=productsitems.reduce((sum,item)=>{return sum+item.length},0);
console.log(`The total number of characters in the product items is: ${total}`);
});

	
	