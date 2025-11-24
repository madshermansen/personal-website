# Project Memory Bank

## Project Overview
Personal website project with a professional design showcasing work, experience, and skills.
Built as a VS Code-style editor interface with split screen code/output views.

## Tech Stack
- Frontend: Next.js 14.2.28 with React 18.3.1
- Language: TypeScript
- Styling: Tailwind CSS 3.4.1
- Animations: Framer Motion 11.2.10
- State Management: Zustand 4.5.5
- CMS: Sanity 3.60.0
- AI SDK: Vercel AI SDK with OpenAI integration
- Build/Deploy: Vercel

## Recent Changes
### Terminal AI v2.0 Enhanced Edition (2025-11-17)
- **Complete terminal overhaul** with advanced features:
  - Command system with 15+ built-in commands (help, about, skills, projects, contact, achievements, etc.)
  - Command autocomplete with Tab key support
  - Command history navigation (Up/Down arrow keys)
  - Real-time command suggestions

- **Easter Eggs & Hidden Content**:
  - NTNU university references with ASCII art
  - Tokyo/Japan cultural references
  - Calisthenics & fitness easter eggs
  - Norway/Norwegian culture tributes
  - React, TypeScript, and developer jokes
  - Matrix references and Konami code
  - Coffee appreciation messages
  - Hidden commands (sudo, hack, pwd, ls, whoami, joke, etc.)

- **Achievement System**:
  - 14 unlockable achievements
  - Progress tracking in localStorage
  - Visual achievement notifications
  - Trophy counter in terminal header
  - Achievements panel to view unlocked items
  - Includes both visible and secret achievements

- **AI Mode Switching**:
  - Local AI mode (free, with easter eggs and achievements)
  - Optional external LLM support (OpenAI, Groq, Anthropic)
  - Settings panel with AI mode selector
  - Model switching capability
  - Graceful fallback to local mode if API unavailable

- **Enhanced UX**:
  - Improved visual design with Sparkles effects
  - Achievement unlock animations
  - Color-coded message types (user, AI, system, achievement)
  - Better timestamp formatting
  - Settings icon in header
  - Responsive and accessible design

### Previous Changes
- Added Terminal AI sidebar with simple AI chat interface (2025-11-16)
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
- `claude/first-session-setup-01XssuTH8hPPx3wozTYeoPfT`

### Current Tasks
1. ✅ Enhanced Terminal AI with easter eggs and achievements
2. ✅ Implemented command system with autocomplete
3. ✅ Added AI mode switching (Local/OpenAI/Groq/Anthropic)
4. ✅ Created achievement tracking system
5. ✅ Added personal easter eggs (NTNU, Tokyo, calisthenics, Norway)

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
- `/frontend/src/app/api/chat/route.ts` - Optional external LLM API endpoint
- `/frontend/src/components/editor/SplitScreenLayout.tsx` - Resizable split screen component
- `/frontend/src/components/editor/EditorContent.tsx` - Content router for different file types
- `/frontend/src/components/editor/FileExplorer.tsx` - Resizable file sidebar
- `/frontend/src/components/editor/TerminalView.tsx` - Enhanced Terminal AI interface (v2.0)
- `/frontend/src/components/editor/TerminalSettings.tsx` - AI mode settings panel
- `/frontend/src/components/editor/SearchView.tsx` - Search interface for files
- `/frontend/src/components/editor/IconSidebar.tsx` - VS Code-style icon sidebar with views
- `/frontend/src/components/editor/outputs/` - Output renderers (ReadmeOutputLatex, AboutOutput, SkillsOutput)
- `/frontend/src/components/editor/fileContents/` - Code display components

### Terminal System (New)
- `/frontend/src/lib/terminal/commands.ts` - Command system with all available commands
- `/frontend/src/lib/terminal/easterEggs.ts` - Easter egg detection and responses
- `/frontend/src/lib/terminal/achievements.ts` - Achievement tracking and management
- `/frontend/src/lib/terminal/asciiArt.ts` - ASCII art collection
- `/frontend/src/lib/terminal/useTerminalAI.ts` - AI mode management hook

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
- Icon sidebar (resizable)
- File explorer (resizable, 180-400px)
- Main editor area with tabs
- Split screen with draggable divider (30-70% range)
  - Left: Code panel with line numbers
  - Right: Output panel with live preview

### Terminal AI Feature (v2.0 Enhanced Edition)
- **Access**: Via Terminal icon in sidebar (between Search and Projects)
- **Local AI Mode** (Default):
  - Advanced command system with 15+ commands
  - Easter eggs and hidden content
  - Achievement system with 14 unlockable trophies
  - Command history and autocomplete
  - Completely free, works offline
  - Personalized responses about Mads' background

- **Commands Available**:
  - `help` - Show all available commands
  - `about` - Learn about Mads
  - `skills` - View technical skills
  - `projects` - List featured projects
  - `contact` - Get contact information
  - `achievements` - View unlocked achievements
  - `clear` - Clear terminal
  - `theme` - Theme information
  - `time` - Current time/date
  - `echo` - Echo messages
  - `quote` - Inspirational developer quotes
  - `version` - Terminal version
  - Hidden commands: `sudo`, `hack`, `pwd`, `ls`, `whoami`, `joke`, and more!

- **Easter Eggs**:
  - Type keywords like: NTNU, Tokyo, calisthenics, Norway, React, TypeScript, coffee, Matrix
  - Konami code support
  - Developer jokes and memes
  - ASCII art displays
  - Secret achievement unlocks

- **External AI Support** (Optional):
  - Can configure OpenAI, Groq, or Anthropic models
  - Requires user's own API keys
  - Settings panel for easy switching
  - Graceful fallback to local mode

- **Features**:
  - Terminal-style UI with timestamps
  - Color-coded message types
  - Auto-scrolling message history
  - Command suggestions with Tab completion
  - History navigation with arrow keys
  - Achievement notifications with animations
  - Trophy counter display
  - Achievements panel view
  - Responsive design for all devices

## Important Notes
- All pushes must be to branches starting with 'claude/' and ending with session ID
- Use `git push -u origin <branch-name>` for pushing
- All commits should include the following trailer:
  ```
  Co-authored-by: madshermansen <mdj.hermansen@gmail.com>
  ```

## Last Updated
2025-11-17 - Terminal AI v2.0 Enhanced Edition with easter eggs, achievements, and AI mode switching
