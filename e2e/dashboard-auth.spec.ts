import { test, expect } from '@playwright/test';

/**
 * Guards the middleware auth gate in src/middleware.ts. An unauthenticated
 * visitor must never reach a dashboard route. This runs without credentials,
 * so it is safe in CI.
 */
test.describe('Dashboard auth gate', () => {
    const protectedRoutes = [
        '/dashboard',
        '/dashboard/invoices',
        '/dashboard/clients',
        '/dashboard/settings',
    ];

    for (const route of protectedRoutes) {
        test(`redirects anonymous visitors away from ${route}`, async ({ page }) => {
            await page.goto(route);
            await expect(page).toHaveURL(/\/login/);
        });
    }
});
