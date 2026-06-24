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

    // Add single product
    async addProductToCart(productName: string) {
        await this.page
            .locator('.inventory_item')
            .filter({ hasText: productName })
            .getByRole('button')
            .click();

        console.log(`✅ Added product: ${productName}`);
    }

    // Remove single product
    async removeProductFromCart(productName: string) {
        await this.page
            .locator('.inventory_item')
            .filter({ hasText: productName })
            .getByRole('button')
            .click();

        console.log(`✅ Removed product: ${productName}`);
    }

    // Add multiple products
    async addMultipleProducts(products: string[]) {
        for (const product of products) {
            await this.addProductToCart(product);
        }

        console.log(`✅ Added ${products.length} products to cart`);
    }

    // Validate cart count
    async validateCartCount(expectedCount: number) {
        await expect(this.cartBadge)
            .toHaveText(expectedCount.toString());

        console.log(`✅ Cart count validated: ${expectedCount}`);
    }

    // Get product price
    async getProductPrice(productName: string): Promise<number> {

        const priceText = await this.page
            .locator('.inventory_item')
            .filter({ hasText: productName })
            .locator('.inventory_item_price')
            .textContent();

        return parseFloat(priceText?.replace('$', '') || '0');
    }

    // Calculate total price dynamically
    async getProductsTotal(products: string[]): Promise<number> {

        let total = 0;

        for (const product of products) {
            total += await this.getProductPrice(product);
        }

        return Number(total.toFixed(2));
    }

    // Open cart
    async openCart() {
        await this.cartIcon.click();

        console.log('✅ Cart opened');
    }




    
    // Validate inventory page loaded
    async validateInventoryPage() {
        await expect(this.page).toHaveURL(/inventory.html/);

        await expect(
            this.page.locator('.title')
        ).toHaveText('Products');
    }
}





