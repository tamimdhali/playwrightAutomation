const { test, expect } = require('@playwright/test');

test.describe('Training Hook3', () => {

    test.beforeEach(async ({ page }) => {
        // Code here runs before each test in this describe block
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

    test('Verify user able to compete checkout 2 products life cycle unsing my own locator', async ({ page }) => {
        await page.locator('#add-to-cart-sauce-labs-backpack').click();
        await page.locator('//*[@id="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('.shopping_cart_link').click();
        await expect(page.locator('#item_4_title_link > div')).toHaveText('Sauce Labs Backpack')
        await expect(page.locator('#item_0_title_link > div')).toHaveText('Sauce Labs Bike Light')
        await page.click('#checkout')
        await page.locator('#first-name').fill('Tamim');
        await page.locator('#last-name').fill('Dhali')
        await page.locator('#postal-code').fill('11102')
        await page.click('#continue');
        await expect(page.locator('#item_4_title_link > div')).toHaveText('Sauce Labs Backpack');
        await expect(page.locator('#item_0_title_link > div')).toHaveText('Sauce Labs Bike Light');
        await expect(page.locator('#checkout_summary_container > div > div.summary_info > div:nth-child(1)')).toHaveText('Payment Information');
        await expect(page.locator('#checkout_summary_container > div > div.summary_info > div:nth-child(3)')).toHaveText('Shipping Information');
        await expect(page.locator('#checkout_summary_container > div > div.summary_info > div:nth-child(5)')).toHaveText('Price Total');
        await page.click('#finish');
        await expect(page.locator('#checkout_complete_container > h2')).toContainText('Thank you for your order!')
        await expect(page.locator('#checkout_complete_container > div')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        await page.click('#back-to-products');
    
    });

   

    test('Verify user able to add product and product display in cart.', async ({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('#item_4_title_link')).toContainText('Sauce Labs Backpack');
        await expect(page.locator('#item_0_title_link')).toContainText('Sauce Labs Bike Light');
        await page.locator('a').filter({ hasText: '1' }).click();
        await expect(page.locator('#item_4_title_link')).toContainText('Sauce Labs Backpack');
        await expect(page.locator('#cart_contents_container')).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    });

    test('Verify user able to cancel after checkout', async ({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('a').filter({ hasText: '2' }).click();
        await expect(page.locator('#cart_contents_container')).toContainText('Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.$29.99Remove');
        await expect(page.locator('#cart_contents_container')).toContainText('Sauce Labs Bike LightA red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.$9.99Remove');
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').click();
        await page.locator('[data-test="firstName"]').fill('Tamim');
        await page.locator('[data-test="firstName"]').press('Tab');
        await page.locator('[data-test="lastName"]').fill('Dhali');
        await page.locator('[data-test="postalCode"]').click();
        await page.locator('[data-test="postalCode"]').fill('11101');
        await page.locator('[data-test="continue"]').click();
        await expect(page.locator('#checkout_summary_container')).toContainText('Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.$29.99');
        await expect(page.locator('#checkout_summary_container')).toContainText('Payment Information');
        await expect(page.locator('#checkout_summary_container')).toContainText('Shipping Information');
        await expect(page.locator('#checkout_summary_container')).toContainText('Total: $43.18');
        await page.locator('[data-test="cancel"]').click();
        await expect(page.locator('#contents_wrapper')).toContainText('Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toContainText('Remove');
    });

    


    test.afterEach(async ({ page }) => {
        // Code here runs after each test in this describe block
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
        await expect(page.locator('#root')).toContainText('Swag Labs');
        await expect(page.locator('[data-test="login-button"]')).toContainText('Login');
    });

});

