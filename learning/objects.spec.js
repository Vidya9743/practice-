import { test, expect } from '@playwright/test';

const employees = {
	emp1:{
		firstname: "vidya",
		middlename: "d",
		lastname: "v",
		id: "467j",
	},
	emp2:{
		firstname: "veena",
		middlename: "v",
		lastname: "d",
		id: "967j",
	},
}

for (let emp in employees) {
	test(`using data driven testing for ${employees[emp].firstname}`, async ({ page }) => {
		await page.goto('/web/index.php/auth/login');
		// Enter the username.
		await page.locator("//input[@placeholder='Username']").fill("Admin");
		// Enter the password.
		await page.locator("//input[@placeholder='Password']").fill("admin123");
		// Click on login button.
		await page.locator("//button[@type='submit']").click();
		await expect(page.locator('//span[text()="Dashboard"]')).toBeVisible();
		await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click();
		await page.locator('//a[text()="Add Employee"]').click();
		await page.locator('input[name="firstName"]').fill(employees[emp].firstname);
		await page.locator('input[name="middleName"]').fill(employees[emp].middlename);
		await page.locator('input[name="lastName"]').fill(employees[emp].lastname);
		await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(employees[emp].id);
await page.locator('//button[@type="submit"]').click()
	});
}