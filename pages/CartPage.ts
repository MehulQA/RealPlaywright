
import { Page, expect } from '@playwright/test';

export class CartPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async validateProductExists(productName: string) {
        await expect(
            this.page.locator('.cart_item').filter({
                hasText: productName
            })
        ).toBeVisible();
    }

    async validateCartTotal(expectedTotalItems: number) {

        const totalItems =
            await this.page.locator('.cart_item').count();

        expect(totalItems).toBe(expectedTotalItems);
    }

    async removeProduct(productName: string) {
        await this.page
            .locator('.cart_item')
            .filter({ hasText: productName })
            .getByRole('button')
            .click();
    }
}
