const { test } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    // This code runs before each test
    // For example, go to a specific webpage
        await page.goto('https://www.demoblaze.com/index.html');
    //Perform login    
        await expect(page.locator('#contcont')).toContainText('Phones');
        await expect(page.locator('#navbarExample')).toContainText('Home (current)');
        await expect(page.locator('#contcont')).toContainText('Laptops');
        await page.getByRole('link', { name: 'Log in' }).click();
        await page.locator('#loginusername').click();
        await page.locator('#loginusername').fill('tamimdhali');
        await page.locator('#loginpassword').click();
        await page.locator('#loginpassword').fill('Office@123');
        await page.getByRole('button', { name: 'Log in' }).click();
        await expect(page.locator('#nameofuser')).toContainText('Welcome tamimdhali');
        await expect(page.locator('#logout2')).toContainText('Log out');
});

test('My first test', async ({ page }) => {
    // Your first test code here
});

test('My second test', async ({ page }) => {
    // Your second test code here
});
