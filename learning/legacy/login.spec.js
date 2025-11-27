import{test, expect} from '@playwright/test'
import logindata from "../testdata/logindata.json"

test('login with valid credentials' , async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("input[name='username']").fill(logindata.username);
await page.locator("input[name='password']").fill(logindata.password);
await page.locator("button[type='submit']").click();
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
});

test('login with valid username invalid password' , async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("input[name='username']").fill(logindata.username);
    await page.locator("input[name='password']").fill(logindata.invalidpassword);
    await page.locator('button.oxd-button.oxd-button--medium').click();
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
});

test('login with invalid username and valid password' , async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("input[name='username']").fill(logindata.invalidusername);
    await page.locator("input[name='password']").fill(logindata.password);
    await page.locator('button.oxd-button.oxd-button--medium').click();
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
});

test ('try to login without entering credentials' , async ({page}) => {
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
 await page.locator('button[type="submit"]').click();
 await expect(page.locator('(//span[text()="Required"])[1]')).toBeVisible();
  await expect(page.locator('(//span[text()="Required"])[2]')).toBeVisible();

});
