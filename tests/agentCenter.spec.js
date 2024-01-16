import { test, expect } from '@playwright/test';

test('verify if agent can click on request a quote and at least finish the 1st page for auto agency', async ({ page }) => {
    await page.goto('https://insurancewebsitedemo.com/');
    await expect(page.locator('#skrollr-body')).toContainText('Your IndependentInsurance Agency');
    await expect(page.getByRole('link', { name: 'Request A Quote', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Request A Quote', exact: true }).click();
    await expect(page.locator('h1')).toContainText('Free No-Obligation Quote Forms');
    await expect(page.getByRole('link', { name: 'Auto Insurance Auto Insurance' })).toBeVisible();
    await page.getByRole('link', { name: 'Auto Insurance Auto Insurance' }).click();
    await expect(page.locator('h1')).toContainText('Secure Auto Insurance Quote Request Form');
    await page.getByLabel('First Name').click();
    await page.getByLabel('First Name').fill('John');
    await page.getByLabel('Last Name').click();
    await page.getByLabel('Last Name').fill('Doe');
    await page.getByLabel('Email Address:').click();
    await page.getByLabel('Email Address:').fill('johndoe123@gmail.com');
    await page.getByLabel('Phone Number:').click();
    await page.getByLabel('Phone Number:').fill('6368889999');
    await page.getByLabel('Digit Zip:').click();
    await page.getByLabel('Digit Zip:').fill('11101');
    await page.getByRole('button', { name: 'Continue to Step 2... ' }).click();
    await expect(page.locator('h1')).toContainText('Secure Auto Insurance Quote Request Form');
    await expect(page.locator('#progress_id')).toContainText('Step 1 of 4');
});