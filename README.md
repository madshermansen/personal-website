# Personal Portfolio Website

A modern, interactive personal portfolio website designed to look like a VS Code editor. This project showcases my work, experience, skills, and projects in a unique and engaging way.

## Features

- **VS Code-Inspired Interface**: Complete with icon sidebar, file explorer, editor tabs, and status bar
- **Split Screen Layout**: View "code" and live output/preview side-by-side with resizable panels
- **Terminal AI Chat**: Interactive AI assistant with portfolio-specific knowledge
- **Dynamic Theme System**: Choose from 8 professionally-designed color themes (Tokyo Night, Synthwave, Cyberpunk, Gruvbox, and more)
- **Content Management**: Powered by Sanity CMS for easy content updates
- **Responsive Design**: Fully functional on desktop and mobile devices
- **Smooth Animations**: Enhanced UX with Framer Motion
- **Search Functionality**: Quick navigation through portfolio sections
- **Type-Safe**: Built with TypeScript for reliability and better developer experience

## Tech Stack

- **Framework**: Next.js 14.2.28 with React 18.3.1
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 11.2.10
- **State Management**: Zustand 4.5.5
- **CMS**: Sanity 3.60.0
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics & Speed Insights

## Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/madshermansen/personal-website.git
cd personal-website
```

2. Navigate to the frontend directory:
```bash
cd frontend
```

3. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

4. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Sanity CMS credentials (see [Development Guide](./DEVELOPMENT.md) for details).

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Documentation

- **[Architecture Guide](./ARCHITECTURE.md)**: Technical architecture, component structure, and design patterns
- **[Development Guide](./DEVELOPMENT.md)**: Detailed setup instructions, development workflow, and contribution guidelines
- **[Project Memory](./PROJECT_MEMORY.md)**: Project history, recent changes, and known issues

## Project Structure

```
personal-website/
├── frontend/               # Next.js application
│   ├── src/
│   │   ├── app/           # Next.js app router pages
│   │   ├── components/    # React components
│   │   │   └── editor/    # VS Code-style UI components
│   │   ├── lib/           # Utilities and state management
│   │   ├── sanity/        # Sanity CMS configuration
│   │   └── utils/         # Helper functions
│   ├── public/            # Static assets
│   └── package.json       # Dependencies and scripts
├── .github/               # GitHub workflows and configurations
├── README.md              # This file
├── ARCHITECTURE.md        # Technical architecture documentation
└── DEVELOPMENT.md         # Development and contribution guide
```

## Available Scripts

From the `frontend` directory:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prettier` - Format code with Prettier

## Key Features Explained

### VS Code-Style Interface

The entire application mimics VS Code's interface with:
- Resizable icon sidebar with multiple views (Explorer, Search, Terminal, Projects)
- File explorer showing portfolio sections as "files"
- Editor tabs for managing multiple open files
- Split screen code/output view
- Status bar showing file information

### Split Screen Architecture

Each portfolio section displays in split screen mode:
- **Left Panel**: Simulated source code (TypeScript, YAML, etc.)
- **Right Panel**: Rendered output/preview

This unique approach makes the portfolio feel like a real development environment while showcasing content in an engaging way.

### Terminal AI

An interactive chat interface accessible via the Terminal icon that can answer questions about:
- Skills and technologies
- Work experience
- Education background
- Projects and portfolio items
- Contact information

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

For detailed deployment instructions, see the [Development Guide](./DEVELOPMENT.md).

## License

MIT License - feel free to use this project as inspiration for your own portfolio!

## Contact

**Mads Hermansen**
- Website: [Live Site](https://your-domain.com)
- GitHub: [@madshermansen](https://github.com/madshermansen)
- Email: mdj.hermansen@gmail.com

---

Built with ❤️ using Next.js and modern web technologies