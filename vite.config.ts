import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //* Vitest Configuration:
  test: {
    globals: true, // Enables global variables like `describe` and `it`
    environment: 'jsdom', // Simulate a browser environment alowing DOM APIs like `document`, `localStorage` and `window`
  },
  resolve: {
    //* Path Aliases for Vite lint:
    alias: {
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
      '@components': path.resolve(__dirname, './src/components'),
      '@actions': path.resolve(__dirname, './src/actions'),
      '@mock-data': path.resolve(__dirname, './src/mock-data'),
    },
  },
})
