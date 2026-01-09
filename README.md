# Portfolio – Full Stack Developer

Personal portfolio built with **React, TypeScript, Vite, Tailwind CSS, and shadcn/ui**, focused on clarity, performance, and long-term maintainability.

This project showcases professional experience, featured projects, and contact information, with an emphasis on real-world engineering decisions and trade-offs rather than visual gimmicks.

---

## Tech Stack

- **React 18** – UI composition
- **TypeScript** – Type safety and predictable refactors
- **Vite** – Fast development and optimized builds
- **Tailwind CSS** – Utility-first styling
- **shadcn/ui + Radix UI** – Accessible, composable UI primitives
- **React Router** – Client-side routing
- **TanStack Query** – Async data management
- **Zod** – Schema validation
- **date-fns** – Date utilities

---

## Project Structure

```txt
src/
├── components/      # Reusable UI components
├── pages/           # Route-level components
├── data/            # Static, typed content (profile, experience, labels)
├── hooks/           # Custom React hooks
├── lib/             # Utilities and shared helpers
├── styles/          # Global styles and Tailwind config
├── main.tsx         # Application entry point
└── App.tsx          # Root component and routing
```

## Features

- Experience timeline driven by structured data
- Featured projects with filtering and sorting
- Responsive layout (desktop-first, mobile-safe)
- Accessible UI components (Radix-based)
- SEO metadata via `react-helmet-async`
- Clear separation between content and presentation

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or pnpm

### Install dependencies

```bash
npm install
```

### Install dependencies

```bash
npm install
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Scripts

| Script       | Description                          |
|--------------|--------------------------------------|
| `dev`        | Starts the Vite dev server            |
| `build`      | Generates a production build          |
| `build:dev`  | Builds using development mode         |
| `preview`    | Previews the production build         |
| `lint`       | Runs ESLint                           |

---

## Content Management

All portfolio content (hero text, experience, labels, sections) is **data-driven** and stored in typed objects.

There is:

- No CMS
- No runtime mutations
- No hidden configuration

This approach favors:

- Predictability
- Easy localization
- Explicit version control
- Minimal runtime complexity

---

## Design Principles

- Prefer composition over abstraction
- Avoid premature optimization
- Keep UI components simple and declarative
- Make data explicit and side effects obvious
- Optimize for maintainability, not demos

---

## License

This project is intended for **personal portfolio use**.

You may fork the structure and code, but do not reuse personal content, branding, or identity.