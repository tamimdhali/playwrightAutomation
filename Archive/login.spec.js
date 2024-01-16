import { test, expect } from '@playwright/test';
const { login } = require('../tests/login'); // Adjust the path as necessary

test('Verify user able to login with correct username and password', async ({ page }) => {
await page.goto('https://www.demoblaze.com/index.html');
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