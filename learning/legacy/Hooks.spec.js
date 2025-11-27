import{test , expect} from '@playwright/test';
test.describe("verifying orangeHRM page",()=>{

test.beforeEach("Login as Admin", async({page})=>{
//action
await page.goto('/web/index.php/auth/login'),
//Enter the usename.
await page.locator("//input[@placeholder='Username']").fill("Admin")
//Enter the password.
await page.locator("//input[@placeholder='Password']").fill("admin123")
//click on login button.
await page.locator("//button[@type='submit']").click()
//assertion
await expect(page).toHaveURL('/web/index.php/dashboard/index')
//To verify dashboard is visible or not.
await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
await page.locator("//span[text()='Buzz']").click();
});

test("upload the text",async({page})=>{
//Enter the text
await page.locator('//textarea[@class="oxd-buzz-post-input"]').fill("Hi,Welcome to buzz newsfeed")
//click the post button
await page.locator("//button[text()=' Post ']").click();
});

test("upload the text and photo",async({page})=>{
//click on share photos button.
await page.locator('(//button[@class="oxd-glass-button"])[1]').click();
//text upload
await page.locator('(//textarea[@class="oxd-buzz-post-input"])[1]').fill("upload a photo")
//click on add photos.
await page.locator('//div[@class="orangehrm-photo-upload-area"]/p').click()
//select the image.
await page.locator('//input[@type="file"]').setInputFiles("testdata/upload.jpg");
//click on share button.
await page.locator('//div[@class="oxd-form-actions orangehrm-buzz-post-modal-actions"]/button').click()
await page.locator("//button[normalize-space()='Post']").click();
//VERIFY UPLOADED TEXT IS VISIBLE OR NOT.
await expect(page.locator('//div[@class="oxd-grid-1 orangehrm-buzz-newsfeed-posts"]')).toBeVisible();
});


test("upload the text and vedio", async( { page})=>{
//click on share Video button. 
await page.locator('(//button[@class="oxd-glass-button"])[2]').click()
//text upload.
await page.locator('(//textarea[@class="oxd-buzz-post-input"])[2]').fill("vedio upload")
//vedio upload
await page.locator('//textarea[@placeholder="Paste Video URL"]').fill(" https://youtu.be/sLX7zO-5XYc?si=0NhBn7kaz2OnBfRJ")
//clicking share button.
await page.locator('(//button[@type="submit"])[2]').click();
//verify uploaded video is visible or not
await expect(page.locator('(//div[@class="oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-buzz"])[1]')).toBeVisible()
})
});


