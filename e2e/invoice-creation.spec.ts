import { test, expect } from '@playwright/test';

/**
 * Invoice creation is the core flow and is currently NOT covered end to end.
 *
 * This test is skipped rather than deleted so the gap stays visible in the
 * Playwright report instead of sitting in a directory the runner never reads,
 * which is where it lived before.
 *
 * To enable it, set E2E_EMAIL and E2E_PASSWORD for a seeded test account and
 * remove the skip. It also needs a cleanup strategy, since it writes a real
 * row to the invoices table.
 */
const CREDENTIALS_AVAILABLE = Boolean(process.env.E2E_EMAIL && process.env.E2E_PASSWORD);

test.describe('Invoice creation', () => {
    test.skip(!CREDENTIALS_AVAILABLE, 'needs E2E_EMAIL / E2E_PASSWORD for a seeded test account');

    test('opens the new invoice form', async ({ page }) => {
        await page.goto('/login');
        await page.getByPlaceholder('name@example.com').fill(process.env.E2E_EMAIL!);
        await page.locator('input[type="password"]').fill(process.env.E2E_PASSWORD!);
        await page.getByRole('button', { name: 'دخول' }).click();

        await page.waitForURL('**/dashboard');

        await page.goto('/dashboard/invoices');
        await page.getByRole('button', { name: /إنشاء فاتورة/ }).first().click();

        await expect(page.getByRole('dialog')).toBeVisible();
    });
});
