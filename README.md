# Hireazy - Technical Hiring Platform

A professional website for Hireazy.co.uk, a technical hiring platform that streamlines the process of hiring world-class engineering talent.

## Features

- **Homepage**: Compelling hero section with clear value proposition
- **About & How It Works**: Detailed explanation of services and company mission
- **Contact Us**: Interactive contact form with company information
- **Sign In**: Professional authentication interface
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components

## Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fatboui/hireazy.git
cd hireazy
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
pnpm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── HomePage.jsx    # Homepage component
│   ├── AboutPage.jsx   # About & How It Works page
│   ├── ContactPage.jsx # Contact Us page
│   ├── SignInPage.jsx  # Sign In page
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── App.jsx             # Main App component with routing
├── App.css             # Global styles
└── main.jsx            # Entry point
```

## Contact

For questions about this website or Hireazy services:
- Email: info@hireazy.co.uk
- Website: https://hireazy.co.uk

## License

© 2025 Hireazy. All rights reserved.

