# Pattern Blueprint Theory

A Next.js application exploring the Blueprint Efficiency Principle—a framework for understanding patterns, complexity, and cognitive efficiency.

## About

Pattern Blueprint Theory provides a structured approach to understanding how systems form stable patterns with minimal energy and informational loss. The application offers three main components:

- **Theory**: Core explanation of the Blueprint Efficiency Principle
- **Manifest**: Complete framework with definitions, principles, and cognitive modes
- **Test**: Interactive assessment to map your cognitive pattern profile

## Features

- 📚 **Theory Page**: Deep dive into the Blueprint Efficiency Principle
- 📋 **Manifest**: Comprehensive framework documentation
- 🧪 **Interactive Test**: Get your personalized cognitive pattern profile
- 🎨 **Modern UI**: Clean, accessible design with custom CSS tokens
- ⚡ **Next.js 14**: Built with App Router and React Server Components
- 🛡️ **Error Boundaries**: Robust error handling with proper Next.js error components

## Tech Stack

- **Framework**: [Next.js 14.2](https://nextjs.org/)
- **React**: 18.3
- **Language**: JavaScript (JSX)
- **Styling**: Custom CSS with design tokens

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Slyog/patternblueprint.git
cd patternblueprint
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
patternblueprint/
├── app/                    # Next.js App Router pages
│   ├── page.jsx           # Home page
│   ├── theory/            # Theory page
│   ├── manifest/          # Manifest page
│   ├── test/              # Test page and results
│   ├── error.jsx          # Error boundary
│   ├── global-error.jsx   # Global error boundary
│   └── not-found.jsx      # 404 page
├── components/            # React components
│   ├── test/             # Test-related components
│   └── ui/               # UI components and styles
├── lib/                  # Utility functions
│   └── test/             # Test logic and scoring
└── public/               # Static assets
```

## Development

The project uses Next.js App Router with:
- Server Components by default
- Client Components where needed (`'use client'`)
- Proper error boundaries for production stability
- Custom CSS design system

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Links

- **Theory**: `/theory`
- **Manifest**: `/manifest`
- **Test**: `/test`

---

© 2025 Pattern Blueprint
