//import { createAndroidDriver } from '../../mobile/driver/AndroidDriver';
//import { MobileLoginPage } from '../../pages/mobile/MobileLoginPage';

/* import { test, expect } from '@playwright/test';
import { AndroidDriver } from '../../mobile/driver/AndroidDriver';

import { MobileLoginPage } from '../../pages/mobile/MobileLoginPage';

//import { createAndroidDriver } from '../../mobile/driver/AndroidDriver';

test('Mobile Login', async () => {

    const driver = await AndroidDriver.createSession();

    try {

        const loginPage =
            new MobileLoginPage(driver);

        await loginPage.login(
            'bob@example.com',
            '10203040'
        );

        const products =
            await driver.$('~test-PRODUCTS');

        await products.waitForDisplayed({
            timeout: 10000
        });

        expect(
            await products.isDisplayed()
        ).toBeTruthy();

    } finally {

        await driver.deleteSession();

    }
}); */