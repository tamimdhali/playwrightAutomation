const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    // Navigate to the website
    await page.goto('https://www.demoblaze.com/index.html');

    // Perform login
    await page.click('text=Log in');
    await page.locator('#loginusername').fill('tamimdhali');
    await page.locator('#loginpassword').fill('Office@123');
    await page.click('text=Log in');

    // Wait for login to complete, e.g., by checking for a logout button or a welcome message
    await expect(page.locator('#logout2')).toContainText('Log out');
});

test('Test 1 - Perform some action after login', async ({ page }) => {
    // This test will run after the user is logged in
    // Test-specific code here
});

test('Test 2 - Another action after login', async ({ page }) => {
    // This test also runs after the login
    // Test-specific code here
});

// Add more tests as needed
