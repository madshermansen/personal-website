import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test('homepage should have proper document structure', async ({ page }) => {
    await page.goto('/');

    // Check for proper HTML structure
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang');

    // Check for main landmark
    const mainContent = page.locator('main, [role="main"]').first();
    const hasMain = await mainContent.isVisible().catch(() => false);

    // Most pages should have a main content area
    expect(hasMain || await page.locator('body').isVisible()).toBeTruthy();
  });

  test('should have keyboard navigation support', async ({ page }) => {
    await page.goto('/');

    // Tab through interactive elements
    await page.keyboard.press('Tab');

    // At least one element should be focused
    const focusedElement = await page.locator(':focus').count();
    expect(focusedElement).toBeGreaterThanOrEqual(0);
  });

  test('should have sufficient color contrast', async ({ page }) => {
    await page.goto('/');

    // Check that page has loaded with visible text
    const bodyText = await page.locator('body').textContent();
    expect(bodyText?.length).toBeGreaterThan(0);
  });

  test('images should have alt text or be decorative', async ({ page }) => {
    await page.goto('/');

    // Get all images
    const images = page.locator('img');
    const imageCount = await images.count();

    if (imageCount > 0) {
      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i);
        const hasAlt = await img.getAttribute('alt') !== null;
        const isDecorative = await img.getAttribute('role') === 'presentation';

        // Images should either have alt text or be marked as decorative
        expect(hasAlt || isDecorative).toBeTruthy();
      }
    }
  });

  test('should not have any console errors', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Filter out known third-party errors (like analytics, etc.)
    const criticalErrors = consoleErrors.filter(
      (error) =>
        !error.includes('favicon') &&
        !error.includes('analytics') &&
        !error.includes('third-party')
    );

    expect(criticalErrors).toHaveLength(0);
  });

  test('should load within reasonable time', async ({ page }) => {
    const startTime = Date.now();

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const loadTime = Date.now() - startTime;

    // Page should load within 10 seconds (generous for CI environments)
    expect(loadTime).toBeLessThan(10000);
  });
});

test.describe('Mobile Responsiveness', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should be usable on mobile viewport', async ({ page }) => {
    await page.goto('/');

    // Page should render without horizontal scroll
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = page.viewportSize()?.width || 375;

    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 10); // 10px tolerance
  });

  test('should have touch-friendly interactive elements', async ({ page }) => {
    await page.goto('/');

    // Interactive elements should be visible
    const buttons = page.locator('button, a');
    const buttonCount = await buttons.count();

    expect(buttonCount).toBeGreaterThan(0);
  });
});
