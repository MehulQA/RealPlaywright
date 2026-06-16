import { test, expect } from '@playwright/test';
import { Viewports } from '../../utils/ViewportHelper';

test('Desktop View', async ({ page }) => {

    await page.setViewportSize(
        Viewports.desktop
    );

    await page.goto('https://www.saucedemo.com');

    await expect(
        page.locator('.login_logo')
    ).toBeVisible();
});

test('Mobile View', async ({ page }) => {

    await page.setViewportSize(
        Viewports.mobile
    );

    await page.goto('https://www.saucedemo.com');

    await expect(
        page.locator('.login_logo')
    ).toBeVisible();
});