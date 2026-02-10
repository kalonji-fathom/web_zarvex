# ZARVEX GLOBAL - Company Website

## Overview

ZARVEX GLOBAL (Pty) Ltd is a B2B mineral processing and industrial equipment supplier based in South Africa. This project is a full-stack web application that serves as the company's professional website, featuring pages for Home, Products, About, and Contact. The site targets mining operators, mineral processing consultants, plant builders, and engineering workshops/SMEs across South Africa's industrial hubs (Gauteng, North West, Limpopo, Mpumalanga, Free State).

The project has evolved from a static HTML/CSS site (still present in root-level `.html` files) into a modern React + Express full-stack application with a PostgreSQL database backend for storing contact form submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, built using Vite
- **Routing**: Wouter (lightweight client-side router) with routes for `/`, `/products`, `/about`, `/contact`
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style variant)
- **UI Components**: Extensive shadcn/ui component library located in `client/src/components/ui/` — includes buttons, cards, forms, tabs, dialogs, and many more Radix UI-based primitives
- **Custom Components**: `Header`, `Footer`, and `Section` layout components in `client/src/components/`
- **Animations**: Framer Motion for page transitions and scroll animations
- **Form Handling**: React Hook Form with Zod resolver for validation
- **Data Fetching**: TanStack React Query for server state management
- **Fonts**: Inter (body) and Roboto Slab (display/headers)
- **Color Theme**: Industrial palette — deep blues (`#284268`), metallic silvers/greys, and industrial orange/gold accents. CSS variables defined in `client/src/index.css`

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, compiled with tsx for development and esbuild for production
- **API Structure**: Single REST endpoint `POST /api/contact` for contact form submissions
- **Route Definitions**: Shared route contracts in `shared/routes.ts` using Zod schemas — both client and server reference the same type definitions
- **Development Server**: Vite dev server integrated with Express via middleware (see `server/vite.ts`)
- **Production Build**: Vite builds client to `dist/public/`, esbuild bundles server to `dist/index.cjs`

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema**: Single table `contact_messages` with fields: `id` (serial), `name`, `email`, `subject`, `message`, `createdAt` — defined in `shared/schema.ts`
- **Migrations**: Managed via `drizzle-kit push` command (`npm run db:push`)
- **Connection**: Uses `DATABASE_URL` environment variable, pg Pool in `server/db.ts`
- **Validation**: Drizzle-Zod generates insert schemas from the table definition, shared between client and server

### Shared Code Pattern
- `shared/schema.ts` — Database schema and Zod types used by both client and server
- `shared/routes.ts` — API route definitions with path, method, input schema, and response schemas
- Path aliases: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Legacy Static Files
- Root-level `index.html`, `products.html`, `about.html`, `contact.html`, and `style.css` are remnants of an earlier static site approach. The active application is the React/Express stack in `client/` and `server/`.

### Build & Scripts
- `npm run dev` — Development mode with hot reload (tsx + Vite)
- `npm run build` — Production build (Vite for client, esbuild for server)
- `npm run start` — Run production build
- `npm run db:push` — Push schema changes to database
- `npm run check` — TypeScript type checking

## External Dependencies

### Database
- **PostgreSQL** — Required, connected via `DATABASE_URL` environment variable. Used with Drizzle ORM for type-safe database access.

### Key NPM Packages
- **Express 5** — HTTP server
- **Drizzle ORM + drizzle-kit** — Database ORM and migration tooling
- **Zod** — Runtime validation (shared between client and server)
- **React 18** with **Vite** — Frontend framework and bundler
- **TanStack React Query** — Async state management
- **shadcn/ui** (Radix UI primitives) — Component library
- **Framer Motion** — Animations
- **React Hook Form** — Form state management
- **Wouter** — Client-side routing
- **Lucide React** — Icon library

### External Services
- **Google Fonts** — Inter and Roboto Slab font families loaded via CDN
- **Unsplash / Pixabay** — Stock images loaded directly from external URLs for industrial imagery on the site

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal` — Error overlay in development
- `@replit/vite-plugin-cartographer` and `@replit/vite-plugin-dev-banner` — Development tools (conditionally loaded)