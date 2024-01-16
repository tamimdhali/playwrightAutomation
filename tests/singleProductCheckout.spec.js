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
    await expect(page.locator('#contents_wrapper')).toContainText('Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    await expect(page.locator('#contents_wrapper')).toContainText('Sauce Labs Bike LightA red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.');
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('a').filter({ hasText: '1' }).click();
    await expect(page.locator('#cart_contents_container')).toContainText('Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.$29.99Remove');
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Tamim');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('Dhali');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('11101');
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('#checkout_summary_container')).toContainText('Payment Information');
    await expect(page.locator('#checkout_summary_container')).toContainText('Shipping Information');
    await expect(page.locator('#checkout_summary_container')).toContainText('Price Total');
    await expect(page.locator('#checkout_summary_container')).toContainText('Total: $32.39');
    await page.locator('[data-test="finish"]').click();
    await expect(page.getByRole('heading')).toContainText('Thank you for your order!');
    await expect(page.locator('#checkout_complete_container')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    await page.locator('[data-test="back-to-products"]').click();
    await expect(page.locator('#contents_wrapper')).toContainText('Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    await expect(page.locator('#contents_wrapper')).toContainText('Sauce Labs Bike LightA red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.');
});