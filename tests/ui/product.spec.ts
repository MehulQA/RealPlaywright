import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';

test.describe('Product Flow', () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.loginWithProfile('standard');
        await loginPage.verifySuccessfulLogin();
    });

    test('Add Multiple Products to Cart', async ({ page }) => {

        const productPage = new ProductPage(page);

        await productPage.addMultipleProducts(['Sauce Labs Backpack','Sauce Labs Bike Light']);

        await productPage.validateCartCount(2);
    });

    test('Remove Product from Cart', async ({ page }) => {

        const productPage = new ProductPage(page);

       
        await productPage.addMultipleProducts(['Sauce Labs Backpack','Sauce Labs Bike Light']);
        

        await productPage.validateCartCount(2);

        await productPage.removeProductFromCart('Sauce Labs Backpack');

        // Cart badge should disappear after removing last item
        //await productPage.cartBadge.waitFor({ state: 'hidden' });
    });

     test('Validate Cart Total', async ({ page }) => {

        const productPage = new ProductPage(page);
        const cartPage = new CartPage(page);

            console.log('Validate Cart Total Started');

        const products = [
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light'
        ];

        // Calculate expected total dynamically
        const expectedTotal =
            await productPage.getProductsTotal(products);

        // Add products
        await productPage.addMultipleProducts(products);

        // Validate cart count
        await productPage.validateCartCount(2);

        // Open cart
        await productPage.openCart();

        // Validate total price
        await cartPage.validateCartTotal(expectedTotal);
    }); 

});

