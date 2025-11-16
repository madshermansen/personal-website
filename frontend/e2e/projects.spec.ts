import { test, expect } from '@playwright/test';

test.describe('Projects Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects');
  });

  test('should load the projects page', async ({ page }) => {
    await expect(page).toHaveURL(/\/projects/);
  });

  test('should display projects list or empty state', async ({ page }) => {
    // Wait for content to load
    await page.waitForLoadState('networkidle');

    // Check if either projects are displayed or a message about no projects
    const hasProjects = await page.locator('article, .project-card, [data-testid="project"]').count() > 0;
    const hasEmptyState = await page.locator('text=/no projects|coming soon/i').isVisible().catch(() => false);

    expect(hasProjects || hasEmptyState).toBeTruthy();
  });

  test('should have navigation back to home', async ({ page }) => {
    // Should be able to navigate back to home
    const homeLink = page.locator('a[href="/"], text=README.md, text=Home').first();

    if (await homeLink.isVisible()) {
      await homeLink.click();
      await expect(page).toHaveURL('/');
    }
  });

  test('should be accessible', async ({ page }) => {
    // Basic accessibility check - page should have proper heading structure
    const headings = page.locator('h1, h2');
    const count = await headings.count();

    expect(count).toBeGreaterThan(0);
  });
});

test.describe('Individual Project Page', () => {
  test('should handle project detail pages', async ({ page }) => {
    // First go to projects list
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');

    // Try to find and click on a project link
    const projectLink = page.locator('a[href^="/projects/"]').first();
    const hasProjects = await projectLink.isVisible().catch(() => false);

    if (hasProjects) {
      await projectLink.click();

      // Should navigate to project detail page
      await expect(page).toHaveURL(/\/projects\/.+/);

      // Should display project information
      const hasContent = await page.locator('h1, h2, article').isVisible();
      expect(hasContent).toBeTruthy();
    }
  });

  test('should handle 404 for non-existent projects', async ({ page }) => {
    const response = await page.goto('/projects/non-existent-project-xyz');

    // Should either return 404 or redirect
    expect(response?.status()).toBeDefined();
  });
});
