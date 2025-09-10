# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 15 project for a landing page, bootstrapped with `create-next-app`. The project uses modern Next.js App Router architecture with TypeScript and Tailwind CSS v4.

## Development Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with PostCSS
- **Build Tool**: Turbopack (Next.js internal bundler)
- **Fonts**: Geist and Geist Mono from Google Fonts

## Project Structure
- `src/app/` - App Router pages and layouts
  - `page.tsx` - Home page component
  - `layout.tsx` - Root layout with font configuration
  - `globals.css` - Global styles and Tailwind directives
- `public/` - Static assets (SVG icons)
- Path aliases: `@/*` maps to `./src/*`

## Configuration Notes
- TypeScript configuration includes Next.js plugin and strict settings
- ESLint extends Next.js core-web-vitals and TypeScript configurations
- PostCSS configured for Tailwind CSS v4
- Next.js config is minimal with TypeScript

## Key Dependencies
- React 19.1.0
- Next.js 15.5.2
- Tailwind CSS v4 (latest major version)
- TypeScript 5