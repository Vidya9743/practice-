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
this.sharevideo=page.locator('(//button[@class="oxd-glass-button"])[2]')
this.videotext=page.locator('(//textarea[@class="oxd-buzz-post-input"])[2]')
this.videolink=page.locator('//textarea[@placeholder="Paste Video URL"]')
this.videoshare=page.locator('(//button[@type="submit"])[2]')
this.videovisible=page.locator('(//div[@class="oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-buzz"])[1]')

}

async launchurl(){
await this.page.goto('/web/index.php/auth/login')
}

async loginwithcreds(username, password){
await this.usernameInput.fill(username);
await this.passwordInput.fill(password);
await this.loginbutton.click();
}
async verifydashboardurl(){
await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
await expect(this.dashboardcheck).toBeVisible()
}

async buzzpage(textmessage, imagepath){
await this.buzzbutton.click();
await this.sharephotos.click();
await this.textupload.fill(textmessage);
await this.addphotobutton.click();
await this.selectimage.setInputFiles(imagepath);
await this.sharebutton.click()
}

async videoupload(text, videolink){
await this.buzzbutton.click();
await this.sharevideo.click();
await this.videotext.fill(text);
await this.videolink.fill(videolink)
await this.videoshare.click()
await expect(this.videovisible).toBeVisible();
}
}