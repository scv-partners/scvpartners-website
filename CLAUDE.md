# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the corporate website for SCV Partners (주식회사 SCV 파트너스), a Korean company specializing in proxy voting and shareholder meeting services. The site is built with Astro 5, React 19, and Tailwind CSS 3, deployed to GitHub Pages at https://scvpartners.kr.

## Development Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## Architecture

### File-Based Routing Structure
- `/` - Homepage with minimal layout (layout0.astro)
- `/company/*` - Company information pages
- `/business/*` - Business services pages  
- `/customer/*` - Customer support pages

### Key Components
- **Navigation System**: Centralized in `src/components/menu.ts` with main menu and submenus
- **Layouts**: 
  - `layout.astro` - Full layout with header/hero/footer for content pages
  - `layout0.astro` - Minimal layout for homepage
- **Header**: Responsive design with desktop mega-menu and mobile slide-out menu
- **Hero**: Category-based hero sections with dynamic background images

### Brand Configuration
Custom Tailwind colors in `tailwind.config.mjs`:
- Primary: `#F26419` (orange)
- Secondary: `#55DDE0` (cyan)  
- Accent: `#F6AE2D` (yellow)

### Content Language
- Site content is primarily in Korean (`lang="ko"`)
- Company name: "(주) SCV 파트너스"

## Deployment

The site auto-deploys to GitHub Pages on pushes to `main` branch using the official Astro GitHub Action. Custom domain is configured via CNAME file for `scvpartners.kr`.

## Important Files for Modifications
- `src/components/menu.ts` - Navigation structure changes
- `src/layouts/layout.astro` - Main layout modifications  
- `src/components/header.astro` - Navigation updates
- `tailwind.config.mjs` - Brand colors and styling