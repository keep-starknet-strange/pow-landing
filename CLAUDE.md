# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is the official landing page for POW! - THE idle clicker game on Starknet. Built with Next.js 15, it features a retro pixel-art design aesthetic and showcases the game's features, download links, and social connections. The project uses modern Next.js App Router architecture with TypeScript and Tailwind CSS v4.

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
- **Fonts**: Custom pixel fonts (Xerxes, PixelFont) and Geist family from Google Fonts

## Project Structure
- `src/app/` - App Router pages and layouts
  - `page.tsx` - POW! landing page with pixel-art design, game features, and download buttons
  - `layout.tsx` - Root layout with metadata and font configuration
  - `globals.css` - Global styles, custom font faces, and Tailwind directives
- `public/` - Static assets and game-related imagery
  - `fonts/` - Custom pixel fonts (Xerxes-10.ttf, 04B_03_.ttf)
  - `images/` - POW! game assets, logos, backgrounds, and Starknet branding
  - `favicon.png` - Custom POW! favicon
- Path aliases: `@/*` maps to `./src/*`

## Configuration Notes
- TypeScript configuration includes Next.js plugin and strict settings
- ESLint extends Next.js core-web-vitals and TypeScript configurations
- PostCSS configured for Tailwind CSS v4
- Next.js config is minimal with TypeScript
- Custom font faces defined in globals.css for pixel-art aesthetic
- Pixel-perfect image rendering enabled with CSS utility classes

## Key Dependencies
- React 19.1.0
- Next.js 15.5.2
- Tailwind CSS v4 (latest major version)
- TypeScript 5

## Design System
- **Visual Theme**: Retro pixel-art gaming aesthetic
- **Typography**: Custom pixel fonts (Xerxes for headings, PixelFont for body text)
- **Color Scheme**: Dark backgrounds with bright accents, Starknet branding colors
- **Layout**: Responsive design with mobile-first approach
- **Images**: Pixel-art assets with crisp-edges rendering

## Content Features
- POW! game branding and logo
- App Store and Google Play download buttons with official links
- Game feature showcases with pixel-art icons
- Social media links (GitHub, Twitter, Telegram, Starknet)
- Footer with Keep Starknet Strange attribution