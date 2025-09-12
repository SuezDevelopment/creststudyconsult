# AGENTS.md - Crest Study Consult

This document provides essential information for agentic tools working with the Crest Study Consult codebase.

## Build & Test Commands

- **Main build command**: `next build`
- **Linting**: `next lint`
- **Run development server**: `next dev`
- **Start production server**: `next start`
- **Generate sitemap**: `next-sitemap` (runs automatically after build)

## Architecture Overview

- **Key subprojects**: Next.js web application
- **Core components**: 
  - UI components (shadcn/ui based)
  - Page components (app directory)
  - Section components (header, footer, hero, etc.)
  - Modal components (bookings, consent)
- **Database schema**: No database integration currently
- **Internal APIs**: Context-based state management for modals and consent

## Code Style Guidelines

- **Imports**: Use absolute imports with `@/` prefix (e.g., `@/components/ui/button`)
- **Formatting**: TypeScript with strict mode enabled
- **Naming**: 
  - React components: PascalCase
  - Hooks: camelCase with 'use' prefix
  - Files: kebab-case for components, camelCase for utilities
- **Error handling**: Try/catch blocks with appropriate user feedback
- **Type usage**: TypeScript interfaces for props, strict typing enforced

## Agent Configuration Rules

- **Next.js App Router**: Use the app directory structure for routing
- **Component Organization**: 
  - UI components in `/components/ui`
  - Page-specific components in `/app/{route}`
  - Shared components in `/components`
- **State Management**: Use React context for global state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Path Aliases**: Use `@/` for imports from project root