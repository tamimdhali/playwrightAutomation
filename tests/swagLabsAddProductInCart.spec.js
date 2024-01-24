import { test, expect } from '@playwright/test';

test('Verify user able to add product and product display in cart.', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('#root')).toContainText('Swag Labs');
  await expect(page.locator('[data-test="login-button"]')).toContainText('Login');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('#item_4_title_link')).toContainText('Sauce Labs Backpack');
  await expect(page.locator('#item_0_title_link')).toContainText('Sauce Labs Bike Light');
  await page.locator('a').filter({ hasText: '1' }).click();
  await expect(page.locator('#item_4_title_link')).toContainText('Sauce Labs Backpack');
  await expect(page.locator('#cart_contents_container')).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
});