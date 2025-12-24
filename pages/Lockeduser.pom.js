// import { expect } from '@playwright/test';
// exports.lockedUser=class lockedUser{
// constructor(page){
// this.page=page
// this.lockedUsername= page.getByPlaceholder("Username")
// this.password=page.locator('#password')
// this.loginbutton=page.getByRole('button',{name :"login-button"})
// this.errorMsg=page.locator('text=Epic sadface: Sorry, this user has been locked out')
// }
//  async launchurl(){
// await this.page.goto('https://www.saucedemo.com/')
// }

// async lockedCreds(username,password){
// await this.lockedUsername.fill(username);
// await this.password.fill(password);
// }

// async verifyErrorMsg(){
// await expect(this.errorMsg).toBeVisible();
// }
// }
import { expect } from '@playwright/test';

exports.lockedUser = class lockedUser {
  constructor(page) {
    this.page = page;
    this.lockedUsername = page.getByPlaceholder("Username");
    this.password = page.locator('#password');
    this.loginbutton = page.getByRole('button', { name: 'Login' });
    this.errorMsg = page.locator('[data-test="error"]');
  }

  async launchurl() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async lockedCreds(username, password) {
    await this.lockedUsername.fill(username);
    await this.password.fill(password);
  }

  async clickLogin() {
    await this.loginbutton.click();
  }

  async verifyErrorMsg() {
    await expect(this.errorMsg).toBeVisible();
  }
}