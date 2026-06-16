
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

//import { test } from '@playwright/test';
//import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';

test.describe('Product Flow', () => {

    test('Add Multiple Products to Cart', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productPage = new ProductPage(page);

        await loginPage.navigate();
        await loginPage.loginWithProfile('standard');

        await productPage.addMultipleProducts([
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light',
            'Sauce Labs Bolt T-Shirt'
        ]);

        await productPage.validateCartCount(3);
    });

    test('Remove Product From Cart', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productPage = new ProductPage(page);
        const cartPage = new CartPage(page);

        await loginPage.navigate();
        await loginPage.loginWithProfile('standard');

        await productPage.addMultipleProducts([
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light'
        ]);

        await productPage.openCart();

        await cartPage.removeProduct(
            'Sauce Labs Bike Light'
        );

        await cartPage.validateCartTotal(1);
    });

    test('Validate Cart Totals', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productPage = new ProductPage(page);
        const cartPage = new CartPage(page);

        await loginPage.navigate();
        await loginPage.loginWithProfile('standard');

        await productPage.addMultipleProducts([
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light',
            'Sauce Labs Bolt T-Shirt'
        ]);

        await productPage.openCart();

        await cartPage.validateCartTotal(3);
    });

});

