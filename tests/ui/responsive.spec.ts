import { test, expect } from '@playwright/test';
import { Viewports } from '../../utils/ViewportHelper';
import { Config } from '../../config/env';

test('Desktop View', async ({ page }) => {

    await page.setViewportSize(Viewports.desktop);

    await page.goto(Config.BASE_URL);

    await expect(page.locator('.login_logo')).toBeVisible();
});

test('Mobile View', async ({ page }) => {

    await page.setViewportSize(Viewports.mobile);

    await page.goto(Config.BASE_URL);

    await expect(page.locator('.login_logo')).toBeVisible();
});