import { test, expect } from '@playwright/test';
const CommonPage = require('../pageObjects/actions/common');


test('verify that a user add a new vehicle to the existing policy', async ({ page }) => {
    //visit the site
await page.goto('https://insurancewebsitedemo.com/');
await page.locator('[aria-label="Support"]').hover();
//click onthe add a vehivle form
await page.locator('[aria-label="Add a Vehicle Form"]').waitFor();
await page.locator('[aria-label="Add a Vehicle Form"]').click();

//verify we are in add vehivle page
await expect(page.locator('#title_div')).toContainText('Secure Add a Vehicle Request Form');

// await page.waitForTimeout(5000);

await page.locator('#fname').fill('John');
await page.locator('#lname').fill('doe');
await page.locator('#email').fill('johndoe123@gmail');
await page.locator('#phone').fill('6468889999');
await page.locator('#zip').fill('11101');

//add policy number
await page.locator('[name="form_data[policy_info][policy_number]"]').fill('123456789');

//dwopdown for data
await page.locator('[name="form_data[policy_info][_date_effective_date][month]"]').selectOption('February');
await page.locator('[name="form_data[policy_info][_date_effective_date][day]"]').selectOption('20');
await page.locator('[name="form_data[policy_info][_date_effective_date][year]"]').selectOption('2025');







await page.pause();

});