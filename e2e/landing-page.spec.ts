import { test, expect } from '@playwright/test';

test('landing page has title and loads successfully', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring (بلفورا is the current wordmark; older spellings kept for safety).
    await expect(page).toHaveTitle(/بلفورا|بِلفورا|بيلفورة|Bilfora/);

    // Check for main heading
    await expect(page.locator('h1')).toBeVisible();
});
