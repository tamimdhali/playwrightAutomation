
const{Page} = require('playwright');
const commonLocators = require('../locators/common');
import { expect } from '@playwright/test';

class CommonPage {

    constructor(page) {
        this.page = page;
    } 
    
    async visitHomePage() {
        await this.page.goto('https://insurancewebsitedemo.com/');
    }
    
    async waitForScrollBody() {
        const scrollBody = await this.page.locator(commonLocators.scollBody);
        scrollBody.waitFor();
        await expect(scrollBody).toContainText('Your IndependentInsurance Agency');
    }

    async clickOnHomePage() {
        const firstLink = await page.locator(commonLocators.homePageButton).first();
        await firstLink.click();  
    }
}

module.exports = CommonPage;
