
import { Page, expect } from '@playwright/test';

export class CartPage {
    static validateCartTotal(expectedTotal: number) {
        throw new Error('Method not implemented.');
    }

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
// Validate product exists in cart
    async validateProductExists(productName: string) {
        await expect(
            this.page.locator('.cart_item').filter({
                hasText: productName
            })
        ).toBeVisible();
    }

    // Validate cart total
    async validateCartTotal(expectedTotal: number) {

        const prices = await this.page
            .locator('.inventory_item_price')
            .allTextContents();

        const actualTotal = prices.reduce((sum, price) => {
            return sum + parseFloat(price.replace('$', ''));
        }, 0);

        expect(actualTotal).toBeCloseTo(expectedTotal, 2);

        console.log(
            `✅ Expected Total: $${expectedTotal}, Actual Total: $${actualTotal}`
        );
    }

    // Remove product from cart
    async removeProduct(productName: string) {
        await this.page
            .locator('.cart_item')
            .filter({ hasText: productName })
            .getByRole('button')
            .click();

        console.log(`✅ Removed product: ${productName}`);
    }
}

