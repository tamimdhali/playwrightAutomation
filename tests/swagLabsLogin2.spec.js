import { test, expect } from '@playwright/test';

test('Verify user able to login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator("#root > div > div.login_logo")).toContainText('Swag Labs');
    await expect(page.locator('#login-button')).toContainText('Login');
    await page.locator('#user-name').click();
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').click();
    await page.locator('#password').fill('secret_sauce');
    await page.locator('[name=login-button]').click();
    await expect(page.locator('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label')).toContainText('Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    await expect(page.locator('//*[@id="inventory_container"]/div/div[2]/div[2]/div[1]')).toContainText('Sauce Labs Bike LightA red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.');
});