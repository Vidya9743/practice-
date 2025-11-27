import {test, expect} from '@playwright/test';
test('using css locators' , async ({ page }) =>{
    //open the demoqa page using css 
    await page.goto('https://demoqa.com/login')
    //fill the user name using css id
    await page.locator('#userName').fill("vidya");
    //fill the password using css id
await page.locator('#password').fill('admin123')
//fill the login button using css id

  await page.locator('#login').click();
//verify toolsqa is visible or not using parent to child css
await expect (page.locator('a[href="https://demoqa.com"]>img')).toBeVisible()
  await expect(page.locator('text=New User')).toBeVisible()
});

test('Verify the orange HRM page' , async({page}) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//fill the user name using css locator-commonvalue.
await page.locator('input[name*="username"]').fill("Admin");
//using playwright index method.
await page.locator('input[class="oxd-input oxd-input--active"]').last().fill("admin123");
//using css locator-basic method
await page.locator('button[type="submit"]').click();
//using parent to child.
await page.locator('.oxd-main-menu > li:nth-child(8) > a').click()
//using .class method
await expect(page.locator('.oxd-icon.bi-question-lg')).toBeVisible()
//using and locator.
await expect(page.locator('canvas[width="294"][height="170"]')).toBeVisible()
//basic css method
await expect(page.locator('button[size="large"]')).toBeVisible()
//using starts with(^) css method
await expect(page.locator('img[src^="/web/index.php/pim/viewPhoto/empNumber/7"]')).toBeVisible()
//using sibling element method
await expect(page.locator('.oxd-text.oxd-text--p.orangehrm-attendance-card-state+p')).toBeVisible()
//using ends with method.
await expect(page.locator('span[class$="fulltime"]')).toBeVisible()

});