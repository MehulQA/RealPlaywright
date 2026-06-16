import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductPage } from '../../pages/ProductPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test.describe('Checkout Flow', () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.loginWithProfile('standard');
        await loginPage.verifySuccessfulLogin();
    });

    test('Successful Checkout Process', async ({ page }) => {

        const productPage = new ProductPage(page);
        const checkoutPage = new CheckoutPage(page);

        await productPage.addMultipleProducts([
            'Sauce Labs Backpack'
        ]);

        await productPage.openCart();

        await checkoutPage.proceedToCheckout();

        await checkoutPage.fillCheckoutInformation(
            'Mehul',
            'Patel',
            '380001'
        );

        await checkoutPage.finishOrder();

        await checkoutPage.validateOrderConfirmation();
    });

    test('Validate First Name Required', async ({ page }) => {

        const productPage = new ProductPage(page);
        const checkoutPage = new CheckoutPage(page);

        await productPage.addMultipleProducts([
            'Sauce Labs Backpack'
        ]);

        await productPage.openCart();

        await checkoutPage.proceedToCheckout();

        await checkoutPage.fillCheckoutInformation(
            '',
            'Patel',
            '380001'
        );

        await checkoutPage.validateErrorMessage(
            'Error: First Name is required'
        );
    });

    test('Validate Last Name Required', async ({ page }) => {

        const productPage = new ProductPage(page);
        const checkoutPage = new CheckoutPage(page);

        await productPage.addMultipleProducts([
            'Sauce Labs Backpack'
        ]);

        await productPage.openCart();

        await checkoutPage.proceedToCheckout();

        await checkoutPage.fillCheckoutInformation(
            'Mehul',
            '',
            '380001'
        );

        await checkoutPage.validateErrorMessage(
            'Error: Last Name is required'
        );
    });

    test('Validate Postal Code Required', async ({ page }) => {

        const productPage = new ProductPage(page);
        const checkoutPage = new CheckoutPage(page);

        await productPage.addMultipleProducts([
            'Sauce Labs Backpack'
        ]);

        await productPage.openCart();

        await checkoutPage.proceedToCheckout();

        await checkoutPage.fillCheckoutInformation(
            'Mehul',
            'Patel',
            ''
        );

        await checkoutPage.validateErrorMessage(
            'Error: Postal Code is required'
        );
    });

    test('Checkout Without Products', async ({ page }) => {

        const checkoutPage = new CheckoutPage(page);

        await page.goto('/cart.html');

        await checkoutPage.proceedToCheckout();

        await checkoutPage.fillCheckoutInformation(
            'Mehul',
            'Patel',
            '380001'
        );

        // Add validation here if application shows any message
    });

});