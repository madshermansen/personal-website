# Project Memory Bank

## Project Overview
Personal website project with a professional design showcasing work, experience, and skills.
Built as a VS Code-style editor interface with split screen code/output views.

## Tech Stack
- Frontend: Next.js 14.2.4 with React 18.3.1
- Language: TypeScript
- Styling: Tailwind CSS 3.4.1
- Animations: Framer Motion 11.2.10
- State Management: Zustand 4.5.5
- CMS: Sanity 3.60.0
- Build/Deploy: Vercel

## Recent Changes
- **2025-11-16**: Added interactive terminal sidebar with lightweight AI assistant
- **2025-11-16**: Merged theme settings branch with unique high-contrast themes
- **2025-11-16**: Integrated ThemeProvider with Zustand state management
- Fixed line number alignment using line-per-div structure (perfect 1-to-1 alignment)
- Fixed line numbers to match actual file content (dynamic line counts)
- Added VS Code-style scrollbars (thin, minimal design with hover effects)
- Prevented code wrapping in editor (VS Code style horizontal scrolling)
- Added split screen editor view for all pages (work, education, projects, contact)
- Created code content components showing TypeScript/YAML syntax highlighting
- Implemented independent scrolling for all split screen panels
- Redesigned README output to look like a professional PDF document
- Added LaTeX-style PDF resume output
- Fixed Vercel deployment errors
- Updated website design

## Current Work
### Active Branch
- `claude/add-sidebar-terminal-01Uem5CZ84gLeB7et9cVtHKj`

### Current Tasks
1. ✅ Successfully integrated terminal sidebar with AI assistant
2. ✅ Merged previous feature branches (memory document + theme settings)

### Recently Completed
- Created interactive terminal component with pattern-matching AI
- Terminal supports commands: help, skills, projects, contact, date, time
- Terminal is resizable (200-500px) with VS Code aesthetics
- Mobile responsive terminal overlay

## Known Issues
None currently

## Recent Fixes
### Independent Scrolling in Split Screen (2025-11-16)
**Problem**: Nested `overflow-y-auto` containers prevented independent scrolling in split screen panels.
- Page hierarchy had two scroll containers: page.tsx:108 and EditorContent.tsx:234
- This prevented SplitScreenLayout from properly constraining height
- Individual panels couldn't scroll independently

**Solution**:
- Removed `overflow-y-auto` from EditorContent.tsx:234
- Changed to `flex-1 h-full` to allow proper height flow
- Individual panels in SplitScreenLayout now scroll independently

**Files Modified**:
- `/frontend/src/components/editor/EditorContent.tsx` - Line 234

## Project Structure
### Key Components
- `/frontend/src/app/page.tsx` - Main app layout with editor interface
- `/frontend/src/components/editor/IconSidebar.tsx` - Icon navigation sidebar (includes terminal icon)
- `/frontend/src/components/editor/Terminal.tsx` - **NEW**: Interactive terminal with AI assistant
- `/frontend/src/components/editor/SplitScreenLayout.tsx` - Resizable split screen component
- `/frontend/src/components/editor/EditorContent.tsx` - Content router for different file types
- `/frontend/src/components/editor/FileExplorer.tsx` - Resizable file sidebar
- `/frontend/src/components/editor/outputs/` - Output renderers (ReadmeOutputLatex, AboutOutput, SkillsOutput)
- `/frontend/src/components/editor/fileContents/` - Code display components
- `/frontend/src/components/ThemeProvider.tsx` - Theme context provider
- `/frontend/src/components/frontPageSections/Settings.tsx` - Theme settings panel
- `/frontend/src/lib/state/store.ts` - Zustand state management (theme, settings)

### Split Screen Files
Split screen is used for ALL pages:
- `readme` - README.md with LaTeX-style PDF output
- `about` - about.tsx component with profile card
- `skills` - skills.ts with skills grid
- `work` - work.ts showing work experience data structure
- `education` - education.ts showing education data structure
- `projects` - projects.tsx showing projects component
- `contact` - contact.yml showing contact info in YAML format

### Layout Architecture
- Main container: Full viewport (h-screen w-screen fixed)
- Icon sidebar: 60px width (fixed) - Navigation icons
  - Explorer, Search, Projects, Settings, Terminal, Contact
- File explorer: 180-400px (resizable) - Shows when explorer is active
- Terminal sidebar: 200-500px (resizable) - Shows when terminal is active
- Main editor area with tabs
- Split screen with draggable divider (30-70% range)
  - Left: Code panel with line numbers
  - Right: Output panel with live preview

### Terminal Feature
The terminal sidebar includes:
- Pattern-matching AI for natural language responses
- Command support: help, skills, projects, contact, date, time
- Message history with user/AI/system message types
- Auto-scrolling to latest messages
- Resizable panel with drag handle
- VS Code-style monospace terminal aesthetics
- Mobile responsive design

## Important Notes
- All pushes must be to branches starting with 'claude/' and ending with session ID
- Use `git push -u origin <branch-name>` for pushing
- All commits should include the following trailer:
  ```
  Co-authored-by: madshermansen <mdj.hermansen@gmail.com>
  ```

## Merged Branches
- `claude/create-memory-document-01Wof8Nt5r13tPiV7vrvb3tu` - Memory document and code structure
- `claude/add-theme-settings-01QmUXny1Tppjg1Brv1TtKLD` - Theme settings with Zustand

## Last Updated
2025-11-16 - Added terminal sidebar with AI assistant
