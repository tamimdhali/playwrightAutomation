import { test, expect } from '@playwright/test';

test('Verify user unable to login with in correct test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator('#root')).toContainText('Swag Labs');
    await expect(page.locator('[data-test="login-button"]')).toContainText('Login');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});