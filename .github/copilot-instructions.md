# Gifs App - AI Coding Agent Instructions

## Project Overview
A React TypeScript GIF search application built with Vite and SWC. The app displays searchable GIFs with recent search history tracking. Currently uses mock data but is structured to integrate with a real API.

## Developer Context
**Learning Profile:** First-time React developer coming from Angular background. When explaining React concepts, please draw parallels to Angular equivalents (e.g., components, hooks vs services/lifecycle, props vs @Input, etc.) to facilitate understanding.

**Interaction Style:** If you need more context about requirements, architecture decisions, or existing code before providing a solution, please ask clarifying questions rather than making assumptions.

## Architecture

### Component Hierarchy
- **GifsApp** (root) → Main orchestrator managing state (`previousSearches`)
  - CustomHeader → Static title/description display
  - CustomSearchBar → Input field (not yet connected)
  - RecentSearches → List of previous searches with click handler
  - GifsList → Grid rendering of GIF cards from `mockGifs`

### Data Flow
1. Mock GIF data defined in [src/mock-data/gifs.mock.ts](src/mock-data/gifs.mock.ts) as `Gif` interface
2. State management is local to [GifsApp.tsx](src/gifs-app/GifsApp.tsx) using `useState`
3. Search handler `handleSearchClicked` is defined but incomplete (logs only)
4. Components export via barrel files ([src/components/index.ts](src/components/index.ts))

### File Organization Patterns
- Components grouped by feature: `custom-header/`, `custom-search/`, `gifs-components/`
- Sub-folder per component containing `.tsx` file only
- Barrel file exports at feature level (`gifs-components/index.ts`)
- Mock data isolated in `mock-data/` with `index.ts` re-export

## Build & Development

**Commands:**
- `npm run dev` → Vite dev server with HMR (React Fast Refresh via SWC)
- `npm run build` → TypeScript compilation then Vite bundle
- `npm run lint` → ESLint (flat config at [eslint.config.js](eslint.config.js))
- `npm run preview` → Production build preview

**Key Setup:**
- Vite uses `@vitejs/plugin-react-swc` for fast compilation (NOT Babel)
- TypeScript targeting via [tsconfig.app.json](tsconfig.app.json) for app code
- Entry point: [src/main.tsx](src/main.tsx) → mounts `GifsApp` to root

## Code Patterns & Conventions

### Component Structure
Use functional components with TypeScript type safety:
```tsx
import type { FC } from "react";

interface Props {
  // props definition
}

export const ComponentName: FC<Props> = ({ prop1, prop2 }) => {
  return <div>...</div>;
};
```

### Props with Optional Callbacks
Default callback handling uses optional chaining:
```tsx
// From RecentSearches pattern
onSearchClicked?.(search)
```

### Conditional Rendering
Use boolean short-circuit for optional content:
```tsx
{description && <p>{description}</p>}
```

### Mocked Data
All GIF data currently hardcoded in [gifs.mock.ts](src/mock-data/gifs.mock.ts). When integrating real API, replace `mockGifs` usage with API calls—component signatures already support it.

## Common Tasks

### Adding a New Component
1. Create folder: `src/components/feature-name/ComponentName.tsx`
2. Export from `src/components/index.ts`: `export { ComponentName } from "./feature-name/ComponentName"`
3. Use FC pattern with props interface
4. Import in [GifsApp.tsx](src/gifs-app/GifsApp.tsx) if top-level

### Connecting Search Functionality
- Update `handleSearchClicked` in [GifsApp.tsx](src/gifs-app/GifsApp.tsx)
- Add filtered state and wire `CustomSearchBar` onSubmit
- Refactor to fetch real GIFs or filter mock data

### Styling
All styling in [src/index.css](src/index.css) using CSS classes referenced throughout components (e.g., `.gifs-container`, `.gif-card`, `.content-center`)

## Testing & Linting
- No test framework configured yet
- ESLint enabled with React hooks rules—run `npm run lint` before commits
- Type checking: `tsc -b` runs during build

## Agentes Especializados

Para tareas específicas de dominio, consulta estos documentos:
- **[Agente de Estilos](.github/copilot-instructions-styling.md)** → Diseño visual, CSS, layout, responsive design

## Notes for Contributors
- Keep state at `GifsApp` level for now; consider Context API if more global state needed
- Don't add API keys to code; structure will allow environment variable injection
- SWC compilation means JSX works without explicit React import (React 17+ feature)
- Each component is intentionally simple—focus on single responsibility
