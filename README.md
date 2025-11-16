# Personal Portfolio Website

Hi! This is my personal portfolio website that has gone through one too many iterations. Currently WIP.

## Tech Stack

- **Frontend**: React 18, TypeScript, Next.js 14 (App Router)
- **Styling**: Tailwind CSS, Framer Motion
- **CMS**: Sanity
- **Deployment**: Vercel
- **Testing**: Jest, React Testing Library, Playwright
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18.x or 20.x
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/madshermansen/personal-website.git
cd personal-website

# Install dependencies
cd frontend
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Building

```bash
# Create a production build
npm run build

# Start the production server
npm start
```

## Testing

This project includes comprehensive testing coverage:

- **Unit/Component Tests**: Jest + React Testing Library
- **E2E Tests**: Playwright (multi-browser)
- **Type Checking**: TypeScript
- **Linting**: ESLint + Prettier

```bash
# Run all tests
npm run test:all

# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Type checking
npm run type-check
```

For detailed testing information, see [TESTING.md](frontend/TESTING.md).

## CI/CD

GitHub Actions automatically runs on all PRs and pushes to main:

- ✅ Type checking
- ✅ Linting
- ✅ Build verification

## Project Structure

```
personal-website/
├── frontend/               # Next.js application
│   ├── src/
│   │   ├── app/           # Next.js App Router pages
│   │   ├── components/    # React components
│   │   ├── lib/           # Utilities and state management
│   │   ├── sanity/        # Sanity CMS configuration
│   │   └── utils/         # Helper functions
│   ├── e2e/               # Playwright E2E tests
│   ├── public/            # Static assets
│   └── __tests__/         # Unit tests (co-located)
└── .github/               # GitHub Actions workflows
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm run test:all`)
5. Commit using conventional commits (`git commit -m 'feat: add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

Pre-commit hooks will automatically run type checking, linting, and tests.

## License

This project is private and for personal use.