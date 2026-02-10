# ZARVEX GLOBAL - Company Website

## Overview

ZARVEX GLOBAL (Pty) Ltd is a B2B mineral processing and industrial equipment supplier based in South Africa. This project is a static website serving as the company's professional online presence, featuring pages for Home, Products, About, and Contact. The site targets mining operators, mineral processing consultants, plant builders, and engineering workshops/SMEs across South Africa's industrial hubs (Gauteng, North West, Limpopo, Mpumalanga, Free State).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Static Website
- **Pages**: `index.html`, `products.html`, `about.html`, `contact.html`
- **Styling**: `style.css` with CSS custom properties for theming
- **Server**: Express 5 static file server (`server.js`) on port 5000
- **Color Theme**: Industrial palette — deep blues, metallic silvers/greys, and accent blues

### Build & Scripts
- `npm run dev` — Development mode (serves static files via Express)
- `npm run start` — Production mode (same server)

## External Dependencies

### Key NPM Packages
- **Express 5** — HTTP static file server

### External Services
- **Google Fonts** — Inter font family (referenced in CSS)
- **Unsplash** — Hero background image loaded from external URL

## Recent Changes
- 2026-02-10: Migrated to Replit environment. Set up Express static server to serve HTML/CSS files.
