import { test, expect } from '@playwright/test';

test('Verify user able to compete checkout 2 products life cycle unsing my own locator', async ({ page }) => {
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