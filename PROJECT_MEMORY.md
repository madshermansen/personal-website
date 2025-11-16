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
- Redesigned README output to look like a professional PDF document
- Added LaTeX-style PDF resume output
- Fixed Vercel deployment errors
- Updated website design

## Current Work
### Active Branch
- `claude/create-memory-document-01Wof8Nt5r13tPiV7vrvb3tu`

### Current Tasks
1. Created this memory document for project context tracking
2. Working on: Split screen pages scrollable independently

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
- `/frontend/src/components/editor/SplitScreenLayout.tsx` - Resizable split screen component
- `/frontend/src/components/editor/EditorContent.tsx` - Content router for different file types
- `/frontend/src/components/editor/FileExplorer.tsx` - Resizable file sidebar
- `/frontend/src/components/editor/outputs/` - Output renderers (ReadmeOutputLatex, AboutOutput, SkillsOutput)
- `/frontend/src/components/editor/fileContents/` - Code display components

### Split Screen Files
Split screen is used for:
- `readme` - README.md with LaTeX-style PDF output
- `about` - about.tsx component with profile card
- `skills` - skills.ts with skills grid

### Layout Architecture
- Main container: Full viewport (h-screen w-screen fixed)
- Icon sidebar (resizable)
- File explorer (resizable, 180-400px)
- Main editor area with tabs
- Split screen with draggable divider (30-70% range)
  - Left: Code panel with line numbers
  - Right: Output panel with live preview

## Important Notes
- All pushes must be to branches starting with 'claude/' and ending with session ID
- Use `git push -u origin <branch-name>` for pushing

## Last Updated
2025-11-16
