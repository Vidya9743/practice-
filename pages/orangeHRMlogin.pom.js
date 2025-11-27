const{expect} = require('@playwright/test')

exports.Loginpage= class Loginpage{
constructor(page){
this.page=page;
this.usernameInput=page.locator('input[name="username"]');
this.passwordInput=page.locator('input[name="password"]');
this.loginbutton=page.locator('//button[@type="submit"]');
this.dashboardcheck=page.locator('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[6]');
//buzz locators
this.buzzbutton=page.locator("//span[text()='Buzz']")
this.sharephotos=page.locator('(//button[@class="oxd-glass-button"])[1]');
this.textupload=page.locator('(//textarea[@class="oxd-buzz-post-input"])[1]');
this.addphotobutton=page.locator('//div[@class="orangehrm-photo-upload-area"]/p');
this.selectimage=page.locator('//input[@type="file"]');
this.sharebutton=page.locator('//div[@class="oxd-form-actions orangehrm-buzz-post-modal-actions"]/button')
}

async launchurl(){
await this.page.goto('/web/index.php/auth/login')
}

async loginwithcreds(username, password){
await this.usernameInput.fill();
await this.passwordInput.fill();
await this.loginbutton.click();
}
async verifydashboardurl(){
await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
await expect.this.dashboardcheck.toBeVisible()
}

async buzzpage(textmessage, imagepath){
await this.buzzbutton.click();
await this.sharephotos.click();
await this.textupload.fill();
await this.addphotobutton.click();
await this.selectimage.setInputfiles();
await this.sharebutton.click()
}
}