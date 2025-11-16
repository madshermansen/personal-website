# Testing Guide

This document provides information about the testing infrastructure and practices for this personal website project.

## Table of Contents

- [Overview](#overview)
- [Test Types](#test-types)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
- [CI/CD](#cicd)
- [Pre-commit Hooks](#pre-commit-hooks)

## Overview

This project uses a comprehensive testing strategy that includes:

- **Unit/Component Tests**: Jest + React Testing Library
- **E2E Tests**: Playwright
- **Type Checking**: TypeScript
- **Linting**: ESLint
- **Formatting**: Prettier

## Test Types

### Unit and Component Tests

Unit and component tests are written using **Jest** and **React Testing Library**. These tests focus on individual components and utility functions.

**Location**: Tests are co-located with the code in `__tests__` directories:
- `src/components/**/__tests__/*.test.tsx`
- `src/utils/**/__tests__/*.test.tsx`

**Configuration**: `jest.config.ts` and `jest.setup.ts`

### End-to-End Tests

E2E tests are written using **Playwright** to test complete user workflows across different browsers.

**Location**: `e2e/*.spec.ts`

**Configuration**: `playwright.config.ts`

**Browsers Tested**:
- Chromium (Desktop)
- Firefox (Desktop)
- WebKit/Safari (Desktop)
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 12)

## Running Tests

### All Tests

```bash
# Run all tests (type check, lint, unit tests, E2E tests)
npm run test:all
```

### Unit/Component Tests

```bash
# Run unit tests once
npm run test

# Run tests in watch mode (for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### E2E Tests

```bash
# Run E2E tests headless
npm run test:e2e

# Run E2E tests with UI (interactive mode)
npm run test:e2e:ui

# Run E2E tests in headed mode (see browser)
npm run test:e2e:headed
```

### Type Checking

```bash
# Run TypeScript type checking
npm run type-check
```

### Linting

```bash
# Run ESLint
npm run lint

# Run ESLint with auto-fix
npm run lint:fix
```

### Formatting

```bash
# Format code with Prettier
npm run prettier

# Check formatting without modifying files
npm run prettier:check
```

## Writing Tests

### Component Tests

Component tests should follow these guidelines:

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('handles user interaction', () => {
    const mockHandler = jest.fn();
    render(<MyComponent onClick={mockHandler} />);

    fireEvent.click(screen.getByRole('button'));
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
```

### E2E Tests

E2E tests should test complete user workflows:

```typescript
import { test, expect } from '@playwright/test';

test('user can navigate to projects', async ({ page }) => {
  await page.goto('/');

  await page.click('text=Projects');
  await expect(page).toHaveURL(/\/projects/);
});
```

### Test Naming Conventions

- Use descriptive test names that explain the behavior being tested
- Group related tests using `describe` blocks
- Use "should" or action-based descriptions (e.g., "renders correctly", "handles click")

### What to Test

**Do test**:
- Component rendering and output
- User interactions (clicks, form submissions, etc.)
- Conditional rendering logic
- Edge cases and error states
- Accessibility features
- Critical user flows

**Don't test**:
- Implementation details
- Third-party library internals
- Styles (unless critical to functionality)

## CI/CD

### GitHub Actions Workflows

This project uses GitHub Actions for continuous integration:

#### CI Workflow (`.github/workflows/ci.yml`)

Runs on every push and pull request:

1. **Test & Lint Job**
   - Runs on Node.js 18.x and 20.x
   - Prettier format checking
   - ESLint
   - TypeScript type checking
   - Unit tests with coverage
   - Uploads coverage to Codecov

2. **E2E Tests Job**
   - Runs Playwright tests in Chromium
   - Generates and uploads test reports

3. **Build Job**
   - Verifies the application builds successfully
   - Ensures no build-time errors

#### Dependency Review (`.github/workflows/dependency-review.yml`)

Runs on pull requests to:
- Review dependency changes
- Identify security vulnerabilities
- Fail on moderate+ severity issues

#### Dependabot (`.github/dependabot.yml`)

Automatically creates PRs for:
- npm dependency updates (weekly)
- GitHub Actions updates (weekly)

### Viewing CI Results

- Check the "Actions" tab in GitHub to view workflow runs
- PR checks must pass before merging
- Coverage reports are available on Codecov (if configured)
- Playwright reports are available as artifacts in failed runs

## Pre-commit Hooks

This project uses **Husky** to run checks before commits are allowed.

### Automatic Checks

On every commit, the following checks run automatically:

1. TypeScript type checking
2. ESLint linting
3. Prettier formatting check
4. Unit tests

If any check fails, the commit is blocked. Fix the issues and try again.

### Commit Message Format

Commits must follow the **Conventional Commits** format:

```
<type>(<scope>): <subject>

Examples:
  feat: add dark mode toggle
  fix(auth): resolve login redirect issue
  docs: update README with testing instructions
  test(components): add tests for StatusBar
```

**Valid types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `build`, `revert`

### Skipping Hooks

In rare cases where you need to skip pre-commit hooks (not recommended):

```bash
git commit --no-verify -m "your message"
```

## Best Practices

1. **Write tests alongside code**: Add tests when creating new components or features
2. **Run tests locally**: Don't rely solely on CI - run tests before pushing
3. **Keep tests simple**: Each test should verify one behavior
4. **Use meaningful assertions**: Make it clear what's being tested
5. **Mock external dependencies**: Keep tests isolated and fast
6. **Test user behavior**: Focus on how users interact with the UI
7. **Maintain test coverage**: Aim for >80% coverage on critical code
8. **Review test failures**: Understand why tests fail before fixing them

## Troubleshooting

### Tests fail in CI but pass locally

- Ensure you have the latest dependencies: `npm ci`
- Check Node.js version matches CI (18.x or 20.x)
- Look for timing/async issues in tests
- Check for environment-specific differences

### Playwright tests are slow

- Use `--headed` flag sparingly (only for debugging)
- Consider running specific test files: `npx playwright test homepage.spec.ts`
- Ensure development server is running before tests

### Pre-commit hooks are slow

- Hooks run all checks on commit, which can take time
- Consider running tests in watch mode during development
- You can disable specific checks temporarily if needed (edit `.husky/pre-commit`)

### Coverage is low

- Run `npm run test:coverage` to see uncovered lines
- Focus on testing critical business logic first
- Some files (layouts, configs) may not need 100% coverage

## Additional Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Conventional Commits](https://www.conventionalcommits.org/)
