import {test , expect} from "@playwright/test"
test('login with orange hrm page' , async ({ page }) => {
    //action
await page.goto('/web/index.php/auth/login'),
//Enter the usename.
await page.locator("//input[@placeholder='Username']").fill("Admin1")
//Enter the password.
await page.locator("//input[@placeholder='Password']").fill("admin123")
//click on login button.
await page.locator("//button[@type='submit']").click()
//assertion
await expect(page).toHaveURL('/web/index.php/dashboard/index')
//To verify dashboard is visible or not.
await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
await page.locator("//span[text()='Buzz']").click();
await page.locator("textarea.oxd-buzz-post-input").type("Hi,Welcome to buzz newsfeed")
await page.locator('//input[@type="file"]').setInputFiles("testdata/upload.jpg");
await page.locator("//button[text()=' Post ']").click();
await expect(page.locator("(//div[@class='orangehrm-buzz-post-body']//p)[1]")).toBeVisible();
});

test('Add the job title information', async ({ page })=>{
    await page.goto('/web/index.php/auth/login'),
//Enter the usename.
await page.locator("//input[@placeholder='Username']").fill("Admin")
//Enter the password.
await page.locator("//input[@placeholder='Password']").fill("admin123")
//click on login button.
await page.locator("//button[@type='submit']").click()
    await page.locator("//span[text()='Admin']").click();
    await page.locator("//span[normalize-space(text())='Job']").click();
    await page.locator("//a[normalize-space(text())='Job Titles']").click();
    await page.locator("//button[contains(.,'Add')]").click();
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Test Engineer")
    await page.locator("//textarea[@placeholder='Type description here']").fill("Execute manual&automated testcases")
await page.locator('//input[@type="file"]').setInputFiles("testdata/upload.jpg")
await page.locator("//textarea[@placeholder='Add note']").fill("please upload file")
await page.locator("//button[@type='submit']").click();
});

test('Add the Pay Grades information' , async({ page })=> {
    await page.goto('/web/index.php/auth/login'),
//Enter the usename.
await page.locator("//input[@placeholder='Username']").fill("Admin")
//Enter the password.
await page.locator("//input[@placeholder='Password']").fill("admin123")
//click on login button.
await page.locator("//button[@type='submit']").click()
    await page.locator("//span[text()='Admin']").click();
    await page.locator("//span[normalize-space(text())='Job']").click();
 await page.locator("(//a[@role='menuitem'])[2]").click()  
 await page.locator("//button[contains(.,'Add')]").click()
 await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("playwright tester")
 await page.locator("//button[@type='submit']").click() 
 //assertion
 await expect(page.locator("//div[@class='orangehrm-card-container']//h6[1]")).toBeVisible()
});

test('Add the Employment status' , async({ page })=> {
    await page.goto('/web/index.php/auth/login'),
//Enter the usename.
await page.locator("//input[@placeholder='Username']").fill("Admin")
//Enter the password.
await page.locator("//input[@placeholder='Password']").fill("admin123")
//click on login button.
await page.locator("//button[@type='submit']").click()
    await page.locator("//span[text()='Admin']").click();
    await page.locator("//span[normalize-space(text())='Job']").click();
    await page.locator("//a[normalize-space(text())='Employment Status']").click()
    await page.locator("//button[contains(.,'Add')]").click();
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Full-time")
    await page.locator("//button[@type='submit']").click()

});


test('Add the job categories' , async({ page })=> {
    await page.goto('/web/index.php/auth/login'),
//Enter the usename.
await page.locator("//input[@placeholder='Username']").fill("Admin")
//Enter the password.
await page.locator("//input[@placeholder='Password']").fill("admin123")
//click on login button.
await page.locator("//button[@type='submit']").click()
    await page.locator("//span[text()='Admin']").click();
    await page.locator("//span[normalize-space(text())='Job']").click();
    await page.locator("//a[normalize-space(text())='Job Categories']").click()
    await page.locator("//button[contains(.,'Add')]").click()
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Testing")
    await page.locator("//button[@type='submit']").click()
});


test('Add the workshifts details' , async({ page })=> {
    await page.goto('/web/index.php/auth/login'),
//Enter the usename.
await page.locator("//input[@placeholder='Username']").fill("Admin")
//Enter the password.
await page.locator("//input[@placeholder='Password']").fill("admin123")
//click on login button.
await page.locator("//button[@type='submit']").click()
    await page.locator("//span[text()='Admin']").click();
    await page.locator("//span[normalize-space(text())='Job']").click();
    await page.locator("//a[normalize-space(text())='Work Shifts']").click()
    await page.locator("//button[contains(.,'Add')]").click()
    await page.locator("(//label[normalize-space(text())='Shift Name']/following::input)[1]").fill("Genaral")
    await page.locator("//button[@type='submit']").click();
});
