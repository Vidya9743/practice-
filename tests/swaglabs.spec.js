import {test, expect} from '@playwright/test'
import swaglabslogin from "../testdata/swaglabslogin.json"
test('login with valid username and password' , async ({ page }) =>{
    //action
await page.goto('https://www.saucedemo.com/v1/index.html')
await page.locator("input[data-test='username']").fill(swaglabslogin.username);
await page.locator("input[data-test='password']").fill(swaglabslogin.password);
await page.locator('input.btn_action').click();
await page.goto('https://www.saucedemo.com/v1/inventory.html');
//assertion
await expect(page.locator("//div[@class='header_label']//div[1]")).toBeVisible();
await expect(page.locator('div.product_label')).toBeVisible();
await expect(page.locator("select.product_sort_container")).toBeVisible();
});

test('login with locked username and password', async ({ page }) =>{
    await page.goto('https://www.saucedemo.com/v1/index.html')
    await page.locator("input[data-test='username']").fill(swaglabslogin['locked username']);
    await page.locator("input[data-test='password']").fill(swaglabslogin.password);
    await page.locator('input.btn_action').click();
await expect(page.locator("//h3[text()='Sorry, this user has been locked out.']")).toBeVisible();
});

test('login with problemuser and password' , async ({ page }) =>{
    await page.goto('https://www.saucedemo.com/v1/index.html')
    await page.locator("input[data-test='username']").fill(swaglabslogin['problem user']);
    await page.locator("input[data-test='password']").fill(swaglabslogin.password);
    await page.locator('input.btn_action').click();
    await page.goto("https://www.saucedemo.com/v1/inventory.html");
    await expect(page.locator("a.shopping_cart_link.fa-layers.fa-fw")).toBeVisible();
    await expect(page.locator("(//div[@class='inventory_item'])")).toHaveCount(6);
    await expect(page.locator("//div[text()='Sauce Labs Backpack']")).toBeVisible();
    await page.locator("//div[text()='Sauce Labs Backpack']").click();
    await page.goto("https://www.saucedemo.com/v1/inventory-item.html?id=5");
    await expect(page.locator("//button[text()='<- Back']")).toBeVisible();
    });

    test('login performance glitch user and password' , async ({ page }) =>{
        await page.goto('https://www.saucedemo.com/v1/index.html')
        await page.locator("input[name='user-name']").fill(swaglabslogin['performance glich username'])
        await page.locator("input[name='password']").fill(swaglabslogin.password);
        await page.locator("//input[@type='submit']").click();
        await page.goto('https://www.saucedemo.com/v1/inventory.html')
        await expect(page.locator("(//img[@class='inventory_item_img'])")).toHaveCount(6)
        await expect(page.locator("(//div[@class='inventory_item_price'])")).toHaveCount(6);
        await page.locator("(//button[@class='btn_primary btn_inventory'])[1]").click()

    });

    test('login with invalid user and invalid password' , async({ page }) => {
await page.goto('https://www.saucedemo.com/v1/index.html')
        await page.locator("input[name='user-name']").fill(swaglabslogin['invalid user'])
        await page.locator("input[name='password']").fill(swaglabslogin['invalid password']);
        await page.locator("//input[@type='submit']").click();
await expect(page.locator("//h3[text()='Username and password do not match any user in this service']")).toBeVisible()
});

test ('try to login without entering credentials' , async ({page}) => {
    await page.goto('https://www.saucedemo.com/v1/index.html')
    await page.locator("input[name='user-name']").fill(swaglabslogin['empty username and password'])
        await page.locator("input[name='password']").fill(swaglabslogin['empty username and password']);
        await page.locator("//input[@type='submit']").click();
        await expect(page.locator("//h3[@data-test='error']")).toBeVisible();
});
