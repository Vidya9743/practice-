import{ except } from '@playwright/test';
exports.lockedUser=class lockedUser{
constructor(page){
this.page=page
this.lockedUsername= page.getByPlaceholder("Username")
this.password=page.locator('#password')
this.loginbutton=page.getByRole('button',{name :"login-button"})
this.errorMsg=page.getByText("Epic sadface: Sorry, this user has been locked out.")
}
 async launchurl(){
await this.page.goto('https://www.saucedemo.com/')
}

async lockedCreds(username,password){
await this.lockedUsername.fill(username);
await this.password.fill(password);
}

async verifyErrorMsg(){
await expect(this.errorMsg).toBeVisible();
}
}