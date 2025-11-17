# Architecture Documentation

This document describes the technical architecture, design patterns, and component structure of the Personal Portfolio Website.

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Component Architecture](#component-architecture)
- [State Management](#state-management)
- [Data Flow](#data-flow)
- [Styling System](#styling-system)
- [Routing](#routing)
- [Content Management](#content-management)
- [Performance Optimizations](#performance-optimizations)

## Overview

This portfolio website is built as a Single Page Application (SPA) that mimics the Visual Studio Code interface. The application uses a component-based architecture with React and Next.js, implementing a split-screen editor view where portfolio content is presented as "source code" on the left and rendered output on the right.

### Design Philosophy

- **Developer-Themed**: The entire UI is designed to look like a code editor, making it unique and memorable
- **Component Modularity**: Small, focused components that do one thing well
- **Type Safety**: Full TypeScript coverage for better DX and fewer runtime errors
- **Performance First**: Code splitting, lazy loading, and optimized rendering
- **Responsive**: Works seamlessly on desktop and mobile devices

## Technology Stack

### Core Framework
- **Next.js 14.2.28**: React framework with App Router for routing and SSR
- **React 18.3.1**: UI library with concurrent features
- **TypeScript 5**: Type-safe development

### Styling & UI
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **Framer Motion 11.2.10**: Animation library for smooth transitions
- **React Icons 5.3.0**: Icon library
- **Lucide React 0.396.0**: Additional icon set

### State Management
- **Zustand 4.5.5**: Lightweight state management with persistence

### Content Management
- **Sanity 3.60.0**: Headless CMS for project data
- **@sanity/vision 3.60.0**: GROQ query testing
- **next-sanity 9.5.0**: Sanity integration for Next.js

### Analytics & Monitoring
- **@vercel/analytics 1.3.1**: Web analytics
- **@vercel/speed-insights 1.0.12**: Performance monitoring

## Project Structure

```
frontend/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx               # Root layout with providers
│   │   ├── page.tsx                 # Main page (VS Code interface)
│   │   ├── loading.tsx              # Loading state
│   │   ├── projects/                # Projects pages
│   │   │   ├── page.tsx            # Projects list
│   │   │   └── [slug]/page.tsx     # Individual project
│   │   └── studio/                  # Sanity Studio
│   │       └── [[...tool]]/page.tsx
│   │
│   ├── components/
│   │   ├── editor/                  # VS Code UI components
│   │   │   ├── IconSidebar.tsx     # Left icon navigation
│   │   │   ├── FileExplorer.tsx    # File tree view
│   │   │   ├── SearchView.tsx      # Search interface
│   │   │   ├── TerminalView.tsx    # AI chat terminal
│   │   │   ├── EditorTabs.tsx      # Open file tabs
│   │   │   ├── EditorContent.tsx   # Main content router
│   │   │   ├── SplitScreenLayout.tsx # Resizable split view
│   │   │   ├── StatusBar.tsx       # Bottom status bar
│   │   │   ├── fileContents/       # Code display components
│   │   │   └── outputs/            # Output/preview components
│   │   ├── CodeEditorBackground.tsx # Animated background
│   │   └── ThemeProvider.tsx        # Theme context provider
│   │
│   ├── lib/
│   │   ├── state/
│   │   │   └── store.ts            # Zustand stores (projects, themes)
│   │   └── hooks/
│   │       └── useProjects.tsx     # Project data fetching hook
│   │
│   ├── sanity/
│   │   ├── lib/
│   │   │   ├── client.ts           # Sanity client configuration
│   │   │   └── image.ts            # Image URL builder
│   │   ├── schemaTypes/
│   │   │   ├── index.ts            # Schema exports
│   │   │   └── projectType.ts      # Project schema
│   │   ├── types/
│   │   │   └── types.ts            # TypeScript types
│   │   ├── env.ts                  # Environment variables
│   │   └── structure.ts            # Studio structure
│   │
│   └── utils/
│       └── fileIcons.tsx           # File icon mappings
│
├── public/                          # Static assets
├── sanity.config.ts                # Sanity Studio config
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
└── next.config.mjs                 # Next.js configuration
```

## Component Architecture

### Layout Hierarchy

```
RootLayout (layout.tsx)
├── ThemeProvider
│   └── CodeEditorBackground
│       └── Page (page.tsx)
│           ├── IconSidebar
│           ├── FileExplorer / SearchView / TerminalView
│           ├── Main Editor Area
│           │   ├── EditorTabs
│           │   └── EditorContent
│           │       └── SplitScreenLayout
│           │           ├── Left: Code Panel (fileContents/*)
│           │           └── Right: Output Panel (outputs/*)
│           └── StatusBar
```

### Key Components

#### 1. Main Page Component (`page.tsx`)

The root component that orchestrates the entire VS Code-style interface.

**Responsibilities:**
- Manages global UI state (active view, active file, open files)
- Handles file selection and tab management
- Controls sidebar visibility and width
- Renders mobile-responsive layout

**State:**
```typescript
- activeView: 'explorer' | 'search' | 'terminal' | 'settings' | 'contact' | 'projects'
- activeFile: FileKey
- openFiles: FileInfo[]
- mobileMenuOpen: boolean
- sidebarWidth: number
```

#### 2. Icon Sidebar (`IconSidebar.tsx`)

Vertical icon bar on the far left, similar to VS Code's activity bar.

**Features:**
- View switching (Explorer, Search, Terminal, Projects, Contact, Settings)
- Active view highlighting
- Responsive touch targets

#### 3. File Explorer (`FileExplorer.tsx`)

Displays portfolio sections as a file tree structure.

**Features:**
- Resizable width (180-400px)
- Hierarchical file structure
- Active file highlighting
- File icons based on extension
- Drag-to-resize functionality

**File Structure:**
```
portfolio/
├── readme.md
├── about.tsx
├── skills.ts
├── work.py
├── education.py
├── projects.tsx
└── contact.yml
```

#### 4. Search View (`SearchView.tsx`)

Quick search interface for navigating portfolio sections.

**Features:**
- Real-time search filtering
- Keyboard navigation
- File descriptions and tags
- Click to open file

#### 5. Terminal View (`TerminalView.tsx`)

AI-powered chat interface styled like a terminal.

**Features:**
- Chat history with user/AI differentiation
- Command input with enter-to-send
- Simulated AI "thinking" delay
- Auto-scroll to latest message
- Portfolio-specific knowledge base
- Help and clear commands

#### 6. Split Screen Layout (`SplitScreenLayout.tsx`)

Resizable split view for code and output panels.

**Features:**
- Draggable divider (30-70% range)
- Independent scrolling for each panel
- Smooth resize with visual feedback
- Responsive layout

#### 7. Editor Content (`EditorContent.tsx`)

Routes to the appropriate content component based on active file.

**File-to-Component Mapping:**
```typescript
{
  readme: <SplitScreenLayout code={<ReadmeCodeContent />} output={<ReadmeOutputLatex />} />
  about: <SplitScreenLayout code={<AboutCodeContent />} output={<AboutOutput />} />
  skills: <SplitScreenLayout code={<SkillsCodeContent />} output={<SkillsOutput />} />
  work: <SplitScreenLayout code={<ExperienceCodeContent type="work" />} output={<ExperienceOutput type="work" />} />
  education: <SplitScreenLayout code={<ExperienceCodeContent type="education" />} output={<ExperienceOutput type="education" />} />
  projects: <SplitScreenLayout code={<ProjectsCodeContent />} output={<ProjectsOutput />} />
  contact: <SplitScreenLayout code={<ContactCodeContent />} output={<ContactOutput />} />
}
```

### File Content Components

Located in `components/editor/fileContents/`, these components display formatted "source code":

- **ReadmeCodeContent.tsx**: Markdown-style content
- **AboutCodeContent.tsx**: TypeScript component code
- **SkillsCodeContent.tsx**: TypeScript skills data structure
- **ExperienceCodeContent.tsx**: Python data structure (used for both work and education)
- **ContactCodeContent.tsx**: YAML configuration
- **ProjectsCodeContent.tsx**: TypeScript component

**Common Features:**
- Syntax highlighting with color coding
- Line numbers (1-to-1 alignment with content)
- VS Code-style scrollbars
- Horizontal scrolling (no text wrapping)
- Monospace font rendering

### Output Components

Located in `components/editor/outputs/`, these render the "compiled" output:

- **ReadmeOutputLatex.tsx**: LaTeX-style PDF resume
- **AboutOutput.tsx**: Profile card with bio
- **SkillsOutput.tsx**: Skill grid with categories
- **ExperienceOutput.tsx**: Timeline of work experience
- **EducationOutput.tsx**: Education cards
- **ProjectsOutput.tsx**: Project cards with Sanity integration
- **ContactOutput.tsx**: Contact information and social links

## State Management

### Zustand Stores

The application uses Zustand for lightweight, performant state management with persistence.

#### Project Store (`useProjectStore`)

Manages project data fetched from Sanity CMS.

```typescript
interface ProjectStore {
  projectData: {
    projects: Project[];
    fetchedAt: number;
  };
  setProjectData: (projects: Project[]) => void;
}
```

**Persistence**: Session storage (cleared on tab close)
**Purpose**: Cache project data to reduce Sanity API calls

#### Theme Store (`useThemeStore`)

Manages the active color theme.

```typescript
interface ThemeStore {
  currentTheme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}
```

**Persistence**: Local storage (persists across sessions)
**Themes**: Tokyo Night, Synthwave, Cyberpunk, Gruvbox, One Dark, Night Owl, Monokai Pro, Palenight

**Theme Structure:**
```typescript
interface Theme {
  name: string;
  displayName: string;
  colors: {
    background: string;
    backgroundDark: string;
    backgroundLight: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
    cyan: string;
    purple: string;
    comment: string;
  };
}
```

### Local Component State

Individual components use React's `useState` and `useEffect` for:
- UI interactions (resizing, dragging)
- Form inputs
- Animation states
- Temporary UI state

## Data Flow

### 1. Application Initialization

```
User visits site
    ↓
RootLayout loads
    ↓
ThemeProvider reads theme from localStorage
    ↓
Theme applied via CSS variables
    ↓
Main page renders with default files
    ↓
Sanity client initializes
```

### 2. File Navigation

```
User clicks file in Explorer
    ↓
handleFileSelect(fileKey) called
    ↓
Check if file already open
    ↓
If not, add to openFiles array
    ↓
Set as activeFile
    ↓
EditorContent routes to component
    ↓
SplitScreenLayout renders code + output
```

### 3. Project Data Fetching

```
User navigates to projects
    ↓
useProjects hook checks cache
    ↓
If stale or missing, fetch from Sanity
    ↓
Store in projectStore
    ↓
Render ProjectsOutput with data
```

### 4. Theme Switching

```
User selects theme in Settings
    ↓
setTheme(themeName) called
    ↓
Update Zustand store
    ↓
Persist to localStorage
    ↓
ThemeProvider updates CSS variables
    ↓
UI re-renders with new colors
```

## Styling System

### Tailwind CSS Configuration

Custom theme extending Tailwind with portfolio-specific colors:

```javascript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      background: 'var(--color-background)',
      text: 'var(--color-text)',
      primary: 'var(--color-primary)',
      // ... more theme colors
    }
  }
}
```

### CSS Variables

Dynamic theme colors via CSS custom properties:

```css
:root {
  --color-background: /* from theme */
  --color-text: /* from theme */
  --color-primary: /* from theme */
  /* ... */
}
```

### Styling Patterns

1. **Utility-First**: Tailwind utilities for most styling
2. **Component Classes**: Custom classes for complex components
3. **Responsive Design**: Mobile-first with breakpoints (sm, md, lg, xl)
4. **Dark Mode**: All themes are dark by default (can be extended)

### Custom Scrollbars

VS Code-style thin scrollbars implemented with:

```css
.custom-scrollbar::-webkit-scrollbar {
  width: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
```

## Routing

### Next.js App Router

- **`/`**: Main portfolio interface (VS Code view)
- **`/projects`**: Projects list page (alternative view)
- **`/projects/[slug]`**: Individual project detail page
- **`/studio`**: Sanity Studio CMS (admin panel)

### Client-Side Navigation

File navigation within the main page uses local state, not URL routing:
- Files represented as state, not routes
- Enables tab management (multiple open files)
- Instant transitions without page reloads

## Content Management

### Sanity CMS Integration

#### Configuration

```typescript
// src/sanity/env.ts
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
```

#### Schema

```typescript
// projectType.ts
{
  name: 'project',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'description', type: 'text' },
    { name: 'image', type: 'image' },
    { name: 'technologies', type: 'array' },
    { name: 'github', type: 'url' },
    { name: 'live', type: 'url' },
    // ...
  ]
}
```

#### Data Fetching

```typescript
// useProjects hook
const client = createClient({...config})
const query = groq`*[_type == "project"] | order(publishedAt desc)`
const projects = await client.fetch(query)
```

### Static Content

Non-project content (about, skills, experience, education, contact) is hardcoded in components. This approach is chosen because:
- Content changes infrequently
- Reduces CMS complexity
- Faster page loads (no API calls)
- Easier to version control

To make this content CMS-managed in the future:
1. Create Sanity schemas for each content type
2. Update components to fetch from Sanity
3. Add to Zustand store for caching

## Performance Optimizations

### Code Splitting

- **Dynamic Imports**: Heavy components loaded on-demand
- **Route-Based Splitting**: Each route is a separate chunk
- **Component-Level Splitting**: Large editor components split independently

### Image Optimization

- **Next.js Image**: Automatic optimization, lazy loading
- **Sanity Image URLs**: Optimized URLs with `@sanity/image-url`
- **Responsive Images**: Different sizes for different viewports

### State Persistence

- **Session Storage**: Projects cached during session
- **Local Storage**: Theme preference persists
- **Stale-While-Revalidate**: Show cached data while fetching fresh

### Rendering Optimizations

- **React.memo**: Prevent unnecessary re-renders
- **useCallback**: Memoize event handlers
- **Virtual Scrolling**: Large lists render only visible items (potential future enhancement)

### Bundle Size

- **Tree Shaking**: Unused code eliminated
- **Minification**: Production builds minified
- **Compression**: Gzip/Brotli on Vercel

## Design Patterns

### Component Patterns

1. **Container/Presentational**: Logic separated from presentation
2. **Compound Components**: Related components work together (e.g., Tabs)
3. **Render Props**: Flexible component composition
4. **Custom Hooks**: Reusable stateful logic

### TypeScript Patterns

1. **Strict Types**: No `any` types
2. **Type Guards**: Runtime type checking
3. **Discriminated Unions**: Type-safe state machines
4. **Utility Types**: Reusable type transformations

### State Management Patterns

1. **Single Source of Truth**: Each piece of state has one source
2. **Immutable Updates**: State never mutated directly
3. **Derived State**: Compute from existing state, don't duplicate
4. **Persistence Middleware**: Automatic localStorage/sessionStorage sync

## Future Enhancements

### Potential Improvements

1. **MDX Support**: Write blog posts in MDX
2. **i18n**: Multi-language support
3. **PWA**: Progressive Web App capabilities
4. **Code Playground**: Interactive code examples
5. **Dark/Light Mode Toggle**: User preference for dark vs light themes
6. **Keyboard Shortcuts**: VS Code-style shortcuts (Cmd+P, Cmd+Shift+P, etc.)
7. **Virtual File System**: More complex file tree with folders
8. **Git Integration**: Show "commits" for portfolio updates
9. **Testing**: Comprehensive test coverage with Jest/Vitest

### Performance Monitoring

- Monitor with Vercel Analytics
- Track Core Web Vitals (LCP, FID, CLS)
- Optimize based on real user metrics

---

**Last Updated**: November 17, 2025
**Maintained By**: Mads Hermansen
