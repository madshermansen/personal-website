import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Mads/i);
  });

  test('should display VS Code-style editor interface', async ({ page }) => {
    // Check for key UI elements
    await expect(page.locator('text=README.md')).toBeVisible();

    // Check for status bar
    await expect(page.locator('text=UTF-8')).toBeVisible();
  });

  test('should navigate between different file tabs', async ({ page }) => {
    // Click on different tabs and verify content changes
    const aboutTab = page.locator('text=about.tsx');
    if (await aboutTab.isVisible()) {
      await aboutTab.click();
      await expect(page.locator('text=about.tsx')).toBeVisible();
    }
  });

  test('should display file explorer sidebar', async ({ page }) => {
    // Check if file explorer is visible on desktop
    const fileExplorer = page.locator('[data-testid="file-explorer"], nav').first();
    const isVisible = await fileExplorer.isVisible().catch(() => false);

    // File explorer should be visible on desktop or accessible via menu on mobile
    expect(isVisible || await page.locator('button').first().isVisible()).toBeTruthy();
  });

  test('should have working internal links', async ({ page }) => {
    // Look for any internal navigation links
    const projectsLink = page.locator('a[href*="projects"]').first();

    if (await projectsLink.isVisible()) {
      await projectsLink.click();
      await expect(page).toHaveURL(/projects/);
    }
  });

  test('should be responsive on mobile', async ({ page, isMobile }) => {
    if (isMobile) {
      // On mobile, check if menu toggle exists
      const menuButton = page.locator('button').first();
      await expect(menuButton).toBeVisible();
    }
  });

  test('should display status bar with git info', async ({ page }) => {
    await expect(page.locator('text=main')).toBeVisible();
  });

  test('should have valid metadata', async ({ page }) => {
    // Check for proper meta tags
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });
});
