import { test, expect } from '@playwright/test';
const baseUrl = 'https://insurancewebsitedemo.com/';

test('verify user can click on contact us and visit contact us page', async ({ page }) => {
  await page.goto(baseUrl);
  const scrollBody = await page.locator('#skrollr-body')
  scrollBody.waitFor();
  await expect(scrollBody).toContainText('Your IndependentInsurance Agency');
  await page.getByRole('link', { name: 'Contact Us', exact: true }).click();
  await expect(page.locator('h1')).toContainText('Contact Information');
  await expect(page.locator('address')).toContainText('Demo Insurance Agency301 N Pecos Rd, Suite CHenderson, NV 89074T: 888-578-0212P: 888-578-0212F: 215-449-2150E: Send a Secure Message Facebook');
  await expect(page.locator('#main')).toContainText('Our Hours:Monday: 9:00 am - 5:00 pmTuesday: 9:00 am - 5:00 pmWednesday: 9:00 am - 5:00 pmThursday: 9:00 am - 5:00 pmFriday: 9:00 am - 4:00 pmSaturday: ClosedSunday: ClosedLunch 12-1');
});