import { test, expect } from '@playwright/test';
const LoginPageActions = require('../POMSwagLabs/actions/login')
const HomepageActions = require('../POMSwagLabs/actions/homepage')

let loginPageActions;
let homepageActions

test('Verify user able to click on X page', async ({ page }) => {

    loginPageActions = new LoginPageActions(page);
    homepageActions = new HomepageActions(page);

    await loginPageActions.visitLoginPage();
    await loginPageActions.validateLoginPage();
    await loginPageActions.enterUsername();
    await loginPageActions.enterPassword();
    await loginPageActions.loginInToSite();
    await homepageActions.validateHomeBackpack();
    await homepageActions.validateHomeBikeLight();
    await homepageActions.validateXVisible();

});