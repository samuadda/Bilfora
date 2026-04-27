import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
    test('should allow user to navigate to login page', async ({ page }) => {
        await page.goto('/');

        // Click the login link and wait for navigation
        await Promise.all([
            page.waitForURL(/.*login/),
            page.getByRole('link', { name: 'تسجيل الدخول' }).first().click(),
        ]);

        await expect(page.getByRole('heading', { name: 'أهلاً من جديد!' })).toBeVisible();
    });

    test('should show validation error on empty login submit', async ({ page }) => {
        await page.goto('/login');
        await page.getByRole('button', { name: 'دخول' }).click();

        const emailInput = page.getByPlaceholder('name@example.com');
        await expect(emailInput).toBeVisible();
    });
});
