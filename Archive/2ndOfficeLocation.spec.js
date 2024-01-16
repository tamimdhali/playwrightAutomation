import { test, expect } from '@playwright/test';

test('Vaerify 2nd Office is display accurately', async ({ page }) => {
  await page.goto('https://insurancewebsitedemo.com/');
  await page.hover('[aria-label="Locations"]');
  await page.getByLabel('2nd office').click();
  await expect(page.locator('h1')).toContainText('Contact Information');
  await expect(page.locator('address')).toContainText('2nd office123 North StreetNorth Las Vegas, NV 89118P: 888-578-0212Text: 888-578-0213E: Send a Secure Message');
  await expect(page.locator('#main')).toContainText('Our Hours:Monday: 8:00 am - 5:00 pmTuesday: 8:00 am - 5:00 pmWednesday: 8:00 am - 5:00 pmThursday: 8:00 am - 5:00 pmFriday: 8:00 am - 5:00 pmSaturday: ClosedSunday: ClosedSaturday\'s by Appointment');
});