import { test, expect } from '@playwright/test';

test('Verify user able to login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator("[name=login_logo]").toContainText('Swag Labs'));
});