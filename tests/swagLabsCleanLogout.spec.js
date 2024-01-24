import { test, expect } from '@playwright/test';
const LoginPageActions = require('../POMSwagLabs/actions/login')
const HomepageActions = require('../POMSwagLabs/actions/homepage')
const CommonPageActions = require('../POMSwagLabs/actions/common')

let loginPageActions;
let homepageActions;
let commonPageActions;

test('Verify user able to login using my own locators', async ({ page }) => {

    loginPageActions = new LoginPageActions(page);
    homepageActions = new HomepageActions(page);
    commonPageActions = new CommonPageActions(page);

    await loginPageActions.visitLoginPage();
    await loginPageActions.validateLoginPage();
    await loginPageActions.enterUsername();
    await loginPageActions.enterPassword();
    await loginPageActions.loginInToSite();
    await homepageActions.validateHomeBackpack();
    await homepageActions.validateHomeBikeLight();

    await commonPageActions.clickHamburgerMenu();
    await commonPageActions.clickLogout();
    await loginPageActions.validateLoginPage();

    

});