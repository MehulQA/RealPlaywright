import { Page, expect } from '@playwright/test';

export class CheckoutPage {
    static validateErrorMessage(arg0: string) {
        throw new Error('Method not implemented.');
        console.log(`✅ Validated error message: ${arg0}`);
    }
    static fillCheckoutInformation(arg0: string, arg1: string, arg2: string) {
        throw new Error('Method not implemented.');
    }
    static proceedToCheckout() {
        throw new Error('Method not implemented.');
    }

    constructor(private page: Page) {}

    async proceedToCheckout() {
        await this.page.locator('[data-test="checkout"]').click();
    }

    async fillCheckoutInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ) 
    
    
   // First Name Empty
    



   
    
    
    
    {



        




        await this.page.locator('[data-test="firstName"]').fill(firstName);
          await this.page.waitForTimeout(1000);
        await this.page.locator('[data-test="lastName"]').fill(lastName);
          await this.page.waitForTimeout(1000);
        await this.page.locator('[data-test="postalCode"]').fill(postalCode);
          await this.page.waitForTimeout(1000);

        await this.page.locator('[data-test="continue"]').click();
          await this.page.waitForTimeout(1000);
    }

    async finishOrder() {
        await this.page.locator('[data-test="finish"]').click();
          await this.page.waitForTimeout(1000);
    }

    async validateOrderConfirmation() {
        await expect(
            this.page.locator('.complete-header')
        ).toHaveText('Thank you for your order!');
          await this.page.waitForTimeout(1000);
    }

    async validateErrorMessage(expectedMessage: string) {
        await expect(
            this.page.locator('[data-test="error"]')
        ).toContainText(expectedMessage);
    }
}