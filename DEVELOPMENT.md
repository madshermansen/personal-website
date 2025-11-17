# Development Guide

This guide covers everything you need to know to set up, develop, and contribute to the Personal Portfolio Website project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Initial Setup](#initial-setup)
- [Environment Configuration](#environment-configuration)
- [Running Locally](#running-locally)
- [Development Workflow](#development-workflow)
- [Project Scripts](#project-scripts)
- [Code Style and Standards](#code-style-and-standards)
- [Testing](#testing)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have the following installed:

### Required

- **Node.js**: Version 20.x or higher ([Download](https://nodejs.org/))
- **npm**: Version 9.x or higher (comes with Node.js)
- **Git**: For version control ([Download](https://git-scm.com/))

### Optional but Recommended

- **VS Code**: Recommended editor with excellent TypeScript support
- **Yarn** or **pnpm**: Alternative package managers (faster than npm)
- **Vercel CLI**: For local Vercel development (`npm i -g vercel`)

### Verify Installation

```bash
node --version  # Should be v20.x or higher
npm --version   # Should be 9.x or higher
git --version   # Any recent version
```

## Initial Setup

### 1. Clone the Repository

```bash
git clone https://github.com/madshermansen/personal-website.git
cd personal-website
```

### 2. Navigate to Frontend

The main application lives in the `frontend` directory:

```bash
cd frontend
```

### 3. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

Using pnpm:
```bash
pnpm install
```

This will install all dependencies listed in `package.json`.

### 4. Set Up Environment Variables

Create a `.env.local` file in the `frontend` directory:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and configure the following variables (see [Environment Configuration](#environment-configuration) for details):

```bash
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-13
```

## Environment Configuration

### Sanity CMS Setup

The project uses Sanity CMS for managing project data. Follow these steps to set up your own Sanity project:

#### 1. Create a Sanity Account

1. Visit [sanity.io](https://www.sanity.io/)
2. Sign up for a free account
3. Create a new project

#### 2. Get Your Credentials

From your [Sanity dashboard](https://www.sanity.io/manage):
1. Select your project
2. Navigate to **Settings**
3. Copy your **Project ID**
4. Note your **Dataset** (usually "production")

#### 3. Configure Environment Variables

Add your Sanity credentials to `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz    # Your project ID
NEXT_PUBLIC_SANITY_DATASET=production      # Your dataset name
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-13  # API version (keep this)
```

#### 4. Deploy Sanity Schema

The project schema is already defined in `src/sanity/schemaTypes/`. To deploy it to your Sanity project:

```bash
npm run sanity:deploy
```

Or manually via Sanity Studio (see below).

### Accessing Sanity Studio

Sanity Studio is the CMS admin panel for managing content.

#### Local Studio

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Studio:
   ```
   http://localhost:3000/studio
   ```

3. Sign in with your Sanity account

#### Studio Features

- **Projects**: Add, edit, and delete portfolio projects
- **Vision**: Test GROQ queries against your data
- **Media**: Upload and manage images

### Optional: Vercel Integration

For analytics and deployment:

1. Create a [Vercel account](https://vercel.com/signup)
2. Connect your GitHub repository
3. Vercel will automatically detect Next.js and configure deployment

## Running Locally

### Development Server

Start the Next.js development server:

```bash
npm run dev
```

The application will be available at:
- **Main site**: [http://localhost:3000](http://localhost:3000)
- **Sanity Studio**: [http://localhost:3000/studio](http://localhost:3000/studio)

### Features in Development Mode

- **Hot Module Replacement (HMR)**: Changes reflect instantly
- **Error Overlay**: Detailed error messages in the browser
- **Source Maps**: Debug with original source code
- **Fast Refresh**: React state preserved across edits

### Using Vercel Dev (Optional)

For a production-like environment locally:

```bash
npm run vercel-dev
```

This runs the app with Vercel's edge functions and middleware.

## Development Workflow

### Recommended Workflow

1. **Create a Branch**: Always work on a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**: Edit code, add features, fix bugs

3. **Test Locally**: Verify changes work as expected
   ```bash
   npm run dev
   ```

4. **Check Formatting**: Ensure code is properly formatted
   ```bash
   npm run prettier
   ```

5. **Lint Code**: Fix any linting errors
   ```bash
   npm run lint
   ```

6. **Build**: Ensure production build works
   ```bash
   npm run build
   ```

7. **Commit Changes**: Write clear commit messages
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

8. **Push to GitHub**: Push your branch
   ```bash
   git push origin feature/your-feature-name
   ```

9. **Create Pull Request**: Open a PR on GitHub

### Project Structure Guidelines

When adding new features, follow these conventions:

#### Adding a New "File" to the Portfolio

To add a new portfolio section (e.g., "Blog"):

1. **Create Content Component** (`src/components/editor/fileContents/BlogCodeContent.tsx`):
   ```tsx
   export default function BlogCodeContent() {
     return (
       <div className="font-mono text-xs whitespace-nowrap">
         {/* Your code display with syntax highlighting */}
       </div>
     )
   }
   ```

2. **Create Output Component** (`src/components/editor/outputs/BlogOutput.tsx`):
   ```tsx
   export default function BlogOutput() {
     return (
       <div className="output-content">
         {/* Your rendered output */}
       </div>
     )
   }
   ```

3. **Add File Info** (`src/utils/fileIcons.tsx`):
   ```typescript
   export const fileMap: Record<FileKey, FileInfo> = {
     // ... existing files
     blog: {
       key: 'blog',
       name: 'blog.tsx',
       path: 'portfolio/blog.tsx',
       icon: FileText,
       language: 'typescript'
     }
   }
   ```

4. **Update EditorContent** (`src/components/editor/EditorContent.tsx`):
   ```tsx
   // Add imports at top
   import BlogCodeContent from "./fileContents/BlogCodeContent";
   import BlogOutput from "./outputs/BlogOutput";

   // Add case in switch statement
   case 'blog':
     return (
       <SplitScreenLayout
         fileName="blog.tsx"
         codeContent={<BlogCodeContent />}
         outputContent={<BlogOutput />}
         lineCount={50}  // adjust based on your content
       />
     )
   ```

#### Adding a Theme

To add a new color theme:

1. **Define Theme** in `src/lib/state/store.ts`:
   ```typescript
   export const themes: Record<ThemeName, Theme> = {
     // ... existing themes
     'my-theme': {
       name: 'my-theme',
       displayName: 'My Theme',
       colors: {
         background: '#...',
         // ... other colors
       }
     }
   }
   ```

2. **Update Type** in the same file:
   ```typescript
   export type ThemeName = 'tokyo-night' | /* ... */ | 'my-theme'
   ```

3. Theme will automatically appear in Settings

## Project Scripts

All scripts should be run from the `frontend` directory:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Start production server (requires build first) |
| `npm run lint` | Run ESLint to check for code issues |
| `npm run prettier` | Format all files with Prettier |
| `npm run vercel-dev` | Run with Vercel's local environment |

### Advanced Scripts

You can add these to `package.json` for enhanced workflow:

```json
{
  "scripts": {
    "type-check": "tsc --noEmit",
    "format:check": "prettier --check .",
    "format:write": "prettier --write .",
    "lint:fix": "next lint --fix",
    "clean": "rm -rf .next node_modules",
    "reinstall": "npm run clean && npm install"
  }
}
```

## Code Style and Standards

### TypeScript

- **Strict Mode**: Enabled in `tsconfig.json`
- **No `any`**: Avoid `any` types; use `unknown` or proper types
- **Explicit Return Types**: Specify return types for functions
- **Interfaces over Types**: Prefer `interface` for object shapes

Example:
```typescript
// Good
interface User {
  name: string;
  email: string;
}

function getUser(id: string): User {
  // ...
}

// Avoid
function getUser(id: any): any {
  // ...
}
```

### React

- **Functional Components**: Use function components, not classes
- **Hooks**: Follow React hooks rules
- **Prop Types**: Define props with TypeScript interfaces
- **Named Exports**: Prefer named exports over default

Example:
```tsx
// Good
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>
}

// Also acceptable for page components
export default function Page() {
  return <div>Page content</div>
}
```

### CSS/Tailwind

- **Utility-First**: Use Tailwind utilities
- **Consistent Spacing**: Follow spacing scale (4, 8, 12, 16, etc.)
- **Responsive**: Mobile-first responsive design
- **Dark Mode**: Consider dark theme (all themes are dark currently)

Example:
```tsx
// Good
<div className="flex items-center gap-4 p-4 bg-background text-text">

// Avoid
<div style={{ display: 'flex', alignItems: 'center' }}>
```

### File Naming

- **Components**: PascalCase (e.g., `FileExplorer.tsx`)
- **Utilities**: camelCase (e.g., `fileIcons.tsx`)
- **Types**: PascalCase (e.g., `types.ts`)
- **Pages**: lowercase (e.g., `page.tsx`)

### Code Formatting

This project uses Prettier for automatic formatting:

```bash
# Check formatting
npm run prettier -- --check

# Fix formatting
npm run prettier
```

Prettier configuration is in `package.json` or `.prettierrc`.

### ESLint

Linting rules are configured for Next.js:

```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint -- --fix
```

## Testing

### Current Status

The project currently does not have automated tests. This is a potential area for contribution.

### Recommended Testing Stack

If implementing tests:

1. **Unit Tests**: Vitest or Jest
2. **Component Tests**: React Testing Library
3. **E2E Tests**: Playwright or Cypress
4. **Type Checking**: TypeScript (`npm run type-check`)

### Manual Testing Checklist

Before committing significant changes:

- [ ] All pages load without errors
- [ ] Navigation works (tabs, file explorer, etc.)
- [ ] Split screen resizing works
- [ ] Themes switch correctly
- [ ] Search functionality works
- [ ] Terminal AI responds
- [ ] Mobile responsive layout works
- [ ] Sanity Studio accessible and functional
- [ ] Projects load from Sanity
- [ ] No console errors or warnings

## Building for Production

### Create Production Build

```bash
npm run build
```

This command:
1. Runs Next.js production build
2. Optimizes and minifies code
3. Generates static pages where possible
4. Creates optimized bundles

### Test Production Build Locally

```bash
npm run build
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) to test the production build.

### Build Output

The build creates a `.next` directory with:
- **Optimized JavaScript bundles**
- **CSS files**
- **Static assets**
- **Server-side rendering code**

### Build Troubleshooting

If build fails:

1. **Check TypeScript errors**:
   ```bash
   npx tsc --noEmit
   ```

2. **Clear cache**:
   ```bash
   rm -rf .next
   npm run build
   ```

3. **Check environment variables**: Ensure `.env.local` is configured

4. **Verify dependencies**: Run `npm install` again

## Deployment

### Deploying to Vercel (Recommended)

Vercel is the recommended deployment platform for Next.js apps.

#### Initial Deployment

1. **Push to GitHub**: Ensure your code is on GitHub

2. **Import to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js configuration

3. **Configure Environment Variables**:
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add all variables from `.env.local`:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - `NEXT_PUBLIC_SANITY_DATASET`
     - `NEXT_PUBLIC_SANITY_API_VERSION`

4. **Deploy**: Click "Deploy"

#### Continuous Deployment

Vercel automatically deploys:
- **Production**: Pushes to `main` branch
- **Preview**: Pushes to other branches (e.g., PR branches)

### Deploying to Other Platforms

The app can be deployed to any platform supporting Next.js:

#### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables

#### Self-Hosted

Requirements:
- Node.js server
- PM2 or similar process manager

```bash
npm run build
npm run start
```

For production, use a reverse proxy (Nginx) and process manager.

### Custom Domain

To use a custom domain:

1. Purchase domain (Namecheap, Google Domains, etc.)
2. In Vercel/Netlify, add custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate provisioning

## Troubleshooting

### Common Issues

#### Port 3000 Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use a different port
PORT=3001 npm run dev
```

#### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Environment Variables Not Working

- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Restart dev server after changing `.env.local`
- Check for typos in variable names

#### Sanity Studio Not Loading

1. Verify Sanity credentials in `.env.local`
2. Check if project ID is correct
3. Ensure you're signed in to Sanity
4. Visit `/studio` path, not `/admin`

#### Build Fails on Vercel

1. Check build logs for specific errors
2. Verify all environment variables are set in Vercel
3. Ensure dependencies are in `dependencies`, not `devDependencies`
4. Check Node.js version compatibility

#### Styling Issues

1. Clear `.next` cache: `rm -rf .next`
2. Rebuild Tailwind: included in `npm run dev`
3. Check for conflicting CSS classes

### Getting Help

If you encounter issues:

1. **Check Documentation**: Review this guide and `README.md`
2. **Search Issues**: Look for similar issues on GitHub
3. **Ask for Help**: Open a GitHub issue with:
   - Description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Console errors

## Contributing

### How to Contribute

Contributions are welcome! Here's how to get started:

1. **Fork the Repository**: Click "Fork" on GitHub

2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/personal-website.git
   ```

3. **Create a Branch**:
   ```bash
   git checkout -b feature/your-feature
   ```

4. **Make Changes**: Implement your feature or fix

5. **Follow Code Standards**: Run linter and formatter

6. **Test Thoroughly**: Manually test your changes

7. **Commit with Clear Messages**:
   ```bash
   git commit -m "feat: add feature description"
   ```

8. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature
   ```

9. **Open a Pull Request**: Submit PR on GitHub

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Examples:
```
feat: add blog section to portfolio
fix: resolve mobile menu not closing
docs: update setup instructions in README
style: format code with Prettier
refactor: extract theme logic to custom hook
```

### Pull Request Guidelines

When submitting a PR:

- **Descriptive Title**: Clearly state what the PR does
- **Description**: Explain the changes and why they're needed
- **Screenshots**: Include for UI changes
- **Testing**: Describe how you tested the changes
- **Breaking Changes**: Note any breaking changes
- **Link Issues**: Reference related issues (e.g., "Fixes #123")

### Code Review Process

1. Maintainer reviews PR
2. Feedback provided (if needed)
3. You make requested changes
4. PR is approved and merged

### Areas for Contribution

Great places to start:

- **Testing**: Add unit/integration tests
- **Documentation**: Improve guides and comments
- **Accessibility**: Enhance a11y features
- **Performance**: Optimize bundle size, loading times
- **Features**: Implement items from "Future Enhancements" in `ARCHITECTURE.md`
- **Bug Fixes**: Tackle open issues

### Development Environment

Recommended VS Code extensions:

- **ESLint**: Microsoft's ESLint extension
- **Prettier**: Code formatter
- **Tailwind CSS IntelliSense**: Tailwind autocomplete
- **TypeScript**: Built-in TypeScript support
- **Auto Rename Tag**: Sync HTML/JSX tag renaming

### Questions?

Feel free to open a GitHub issue with the "question" label for any clarifications.

---

**Last Updated**: November 17, 2025
**Maintained By**: Mads Hermansen

Happy coding! 🚀
