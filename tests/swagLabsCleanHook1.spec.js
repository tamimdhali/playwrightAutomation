import { test, expect } from '@playwright/test';
import LoginPageActions from '../POMSwagLabs/actions/login';
// const LoginPageActions = require('../POMSwagLabs/actions/login');
const HomepageActions = require('../POMSwagLabs/actions/homepage');
const CommonPageActions = require('../POMSwagLabs/actions/common');
const CartPageActions = require('../POMSwagLabs/actions/cartPage');
const YourInformationPageActions = require('../POMSwagLabs/actions/yourInformation');
const CheckoutOverviewPageActions = require('../POMSwagLabs/actions/checkoutOverview');
const CheckoutCompleteThankYouPageActions = require('../POMSwagLabs/actions/checkoutCompleteThankYou');

let loginPageActions;
let homepageActions;
let commonPageActions;
let cartPageActions;
let yourInformationPageActions;
let checkoutOverviewPageActions;
let checkoutCompleteThankYouPageActions;

test.describe('Training Hook1 with clean test', () => {

test.beforeEach(async ({ page }) => {
    loginPageActions = new LoginPageActions(page);
    homepageActions = new HomepageActions(page);
  
    await loginPageActions.visitLoginPage();
    await loginPageActions.validateLoginPage();
    await loginPageActions.enterUsername();
    await loginPageActions.enterPassword();
    await loginPageActions.loginInToSite();
    await homepageActions.validateHomeBackpack();
    await homepageActions.validateHomeBikeLight();

});

test('Verify user able to compete checkout 2 products life cycle unsing my own locator', async ({ page }) => {

    homepageActions = new HomepageActions(page);
    commonPageActions = new CommonPageActions(page);
    cartPageActions = new CartPageActions(page);
    yourInformationPageActions = new YourInformationPageActions(page);
    checkoutOverviewPageActions = new CheckoutOverviewPageActions(page);
    checkoutCompleteThankYouPageActions = new CheckoutCompleteThankYouPageActions(page);

    await homepageActions.addToCartSauceLabsBackpack();
    await homepageActions.addToCartSauceLabsBikeLight();
    await commonPageActions.goToCart();
    await cartPageActions.validateBackpackInCart();
    await cartPageActions.validateBikeLightInCart();
    await cartPageActions.clickCheckoutInCart();
    await yourInformationPageActions.fillFirstName();
    await yourInformationPageActions.fillLastName();
    await yourInformationPageActions.fillPostalCode();
    await yourInformationPageActions.clickContinu();
    await checkoutOverviewPageActions.validateBackpackInCheckoutOverview();
    await checkoutOverviewPageActions.validateBikeLightInCheckoutOverview();
    await checkoutOverviewPageActions.validatePaymentInformationInCheckoutOverview();
    await checkoutOverviewPageActions.validateShippingInformationInCheckoutOverview();
    await checkoutOverviewPageActions.validatePriceTotalInCheckoutOverview();
    await checkoutOverviewPageActions.clickFinishInCheckoutOverview();
    await checkoutCompleteThankYouPageActions.validateThankYouInCheckoutCompleteThankYou();
    await checkoutCompleteThankYouPageActions.validateOrderDispatchedInCheckoutCompleteThankYou();
    await checkoutCompleteThankYouPageActions.clickBackHomeInCheckoutCompleteThankYou();

});

test('Verify user able to add product and product display in cart unsing my own locator', async ({ page }) => {

    homepageActions = new HomepageActions(page);
    commonPageActions = new CommonPageActions(page);
    cartPageActions = new CartPageActions(page);

    await homepageActions.addToCartSauceLabsBackpack();
    await commonPageActions.goToCart();
    await cartPageActions.validateBackpackInCart();
  
});

test('Verify user able to click on Facebook page', async ({ page }) => {

    homepageActions = new HomepageActions(page);

    await homepageActions.validateFacebookVisible();

});

test('Verify user able to click on LinkedIn page', async ({ page }) => {

    homepageActions = new HomepageActions(page);

    await homepageActions.validateLinkedInVisible();

});


test('Verify user able to compete checkout single product life cycle unsing my own locator', async ({ page }) => {

    homepageActions = new HomepageActions(page);
    commonPageActions = new CommonPageActions(page);
    cartPageActions = new CartPageActions(page);
    yourInformationPageActions = new YourInformationPageActions(page);
    checkoutOverviewPageActions = new CheckoutOverviewPageActions(page);
    checkoutCompleteThankYouPageActions = new CheckoutCompleteThankYouPageActions(page);

    await homepageActions.addToCartSauceLabsBackpack();
    await commonPageActions.goToCart();
    await cartPageActions.validateBackpackInCart();
    await cartPageActions.clickCheckoutInCart();
    await yourInformationPageActions.fillFirstName();
    await yourInformationPageActions.fillLastName();
    await yourInformationPageActions.fillPostalCode();
    await yourInformationPageActions.clickContinu();
    await checkoutOverviewPageActions.validateBackpackInCheckoutOverview();
    await checkoutOverviewPageActions.validatePaymentInformationInCheckoutOverview();
    await checkoutOverviewPageActions.validateShippingInformationInCheckoutOverview();
    await checkoutOverviewPageActions.validatePriceTotalInCheckoutOverview();
    await checkoutOverviewPageActions.clickFinishInCheckoutOverview();
    await checkoutCompleteThankYouPageActions.validateThankYouInCheckoutCompleteThankYou();
    await checkoutCompleteThankYouPageActions.validateOrderDispatchedInCheckoutCompleteThankYou();
    await checkoutCompleteThankYouPageActions.clickBackHomeInCheckoutCompleteThankYou();

});

test('Verify user able to click on X page', async ({ page }) => {

    homepageActions = new HomepageActions(page);

    await homepageActions.validateXVisible();

});


test.afterEach(async ({ page }) => {

    commonPageActions = new CommonPageActions(page);
    loginPageActions = new LoginPageActions(page);

    await commonPageActions.clickHamburgerMenu();
    await commonPageActions.clickLogout();
    await loginPageActions.validateLoginPage();
});



});
