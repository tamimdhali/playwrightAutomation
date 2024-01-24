
const{Page} = require('playwright');
const commonLocators = require('../locators/common');
import { expect } from '@playwright/test';

class CommonPage {

    constructor(page) {
        this.page = page;
    } 

    async visitVisionPage() {

        await this.page.goto('https://ui.vision/demo/webtest/frames/');
    }

    async verifyPageTitle() {

        await expect(this.page).toContainText(/Frames - Web Automation Test/);

    }

    async addTextToFrame1(){
        const frame1 = await this.page.frameLocator()

    }

}

module.exports = CommonPage;


// await page.goto('https://ui.vision/demo/webtest/frames/');

// // Expect a title "to contain" a substring.
// await expect(page).toHaveTitle(/Frames - Web Automation Test/);


// //   for(let i= 1)
// const frame1 = await page.frameLocator('[src="frame_1.html"]');
// await frame1.locator('[name="mytext1"]').fill('iframe number 1');

// const frame2 = await page.frameLocator('[src="frame_2.html"]');
// await frame2.locator('[name="mytext1"]').fill('iframe number two');