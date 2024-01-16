const { test, expect } = require('@playwright/test');


    test.beforeEach(async ({ page }) => {
        // This code runs before each test
        // Navigate to a specific webpage and perform login
        await page.goto('https://www.saucedemo.com/');
        await expect(page.locator("#root > div > div.login_logo")).toContainText('Swag Labs');
        await expect(page.locator('#login-button')).toContainText('Login');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('[name=login-button]').click();


    test('Verify user able to complete checkout of 2 products life cycle', async ({ page }) => {
        // Actions and assertions for the specific test
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('.shopping_cart_link').click(); // Assuming this locator identifies the cart
        await expect(page.locator('#cart_contents_container')).toContainText('Sauce Labs Backpack');
        await expect(page.locator('#cart_contents_container')).toContainText('Sauce Labs Bike Light');
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').fill('Tamim');
        await page.locator('[data-test="lastName"]').fill('Dhali');
        await page.locator('[data-test="postalCode"]').fill('11101');
        await page.locator('[data-test="continue"]').click();
        await expect(page.locator('#checkout_summary_container')).toContainText('Payment Information');
        await expect(page.locator('#checkout_summary_container')).toContainText('Shipping Information');
        await expect(page.locator('#checkout_summary_container')).toContainText('Total: $');
        await page.locator('[data-test="finish"]').click();
        await expect(page.locator('#checkout_complete_container')).toContainText('Thank you for your order!');
        await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
        await page.locator('[data-test="back-to-products"]').click();
        await expect(page.locator('#inventory_container')).toBeVisible();
    });
});

    // You can add more test cases here
