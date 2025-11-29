import {expect} from '@playwright/test';
exports.swagLabs=class swagLabs{
constructor(page){
this.page=page;
this.username=page.locator('(//input[@class="input_error form_input"])[1]')
this.password=page.locator('(//input[@class="input_error form_input"])[2]')
this.loginbutton=page.locator('//input[@name="login-button"]')
this.expectedlabel=page.locator('//div[text()="Swag Labs"]')

//products add to cart
this.backpack=page.locator('//button[@name="add-to-cart-sauce-labs-backpack"]')
this.boltTshirt=page.locator('//button[@name="add-to-cart-sauce-labs-bolt-t-shirt"]')
this.onesie=page.locator('//button[@name="add-to-cart-sauce-labs-onesie"]')
this.addtocartlogo=page.locator('//a[@class="shopping_cart_link"]')
this.checkoutbutton=page.locator('//button[@id="checkout"]')
}

async launchUrl(){
await this.page.goto('https://www.saucedemo.com/')
}

async standardCreds(username,password){
await this.username.fill(username)
await this.password.fill(password)
await this.loginbutton.click()
}

async verifyPage(){
await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
await expect(this.expectedlabel).toBeVisible()
}

async addtoCart(){
await this.backpack.click()
await this.boltTshirt.click()
await this.onesie.click()
}

async addtocartLogo(){
await this.addtocartlogo.click()
}

async checkoutButton(){
await this.checkoutbutton.click()
}
}