const { expect } = require('@playwright/test');
const LoginPageLocators = require('../locators/login'); // Adjust the path as necessary

class LoginPageActions {
    constructor(page) {
        this.page = page;
    }

    async visitLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async validateLoginPage() {
        const loginButton = await this.page.locator(LoginPageLocators.loginButton);
        await expect(loginButton).toContainText("Login");
    }

    async enterUsername() {
        const userName = await this.page.locator(LoginPageLocators.userName);
        await userName.click();
        await userName.fill('standard_user');
    }
}

module.exports = LoginPageActions;
