
import { Page, Locator, expect } from '@playwright/test';


export class ProductPage {

    readonly page: Page;
    readonly cartBadge: Locator;
    readonly cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;

        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addProductToCart(productName: string) {
        await this.page
            .locator('.inventory_item')
            .filter({ hasText: productName })
            .getByRole('button')
            .click();
    }

    async removeProductFromCart(productName: string) {
        await this.page
            .locator('.inventory_item')
            .filter({ hasText: productName })
            .getByRole('button')
            .click();
    }

    async addMultipleProducts(products: string[]) {
        for (const product of products) {
            await this.addProductToCart(product);
        }
    }

    async validateCartCount(expectedCount: number) {
        await expect(this.cartBadge)
            .toHaveText(expectedCount.toString());
    }

    async openCart() {
        await this.cartIcon.click();
    }
}
```
