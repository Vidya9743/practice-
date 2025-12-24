import { expect } from '@playwright/test';

export class problemUser {
	constructor(page) {
		this.page = page;
		this.usernameSelector = 'input[placeholder="Username"]';
		this.passwordSelector = 'input[placeholder="Password"]';
		this.loginButtonSelector = 'input[type="submit"]';
	}

	async launchUrl() {
		await this.page.goto('https://www.saucedemo.com/');
	}

	async loginCreds(username, password) {
		await this.page.locator(this.usernameSelector).fill(username);
		await this.page.locator(this.passwordSelector).fill(password);
		await this.page.locator(this.loginButtonSelector).click();
	}
}