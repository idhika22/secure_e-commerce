import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    include: ['**/tests/**/*.{test,spec}.{js,ts,jsx,tsx}'],  // Ensures test files are found
  },
})
