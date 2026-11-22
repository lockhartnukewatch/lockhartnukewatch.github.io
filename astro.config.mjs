// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.lockhartnuke.watch',
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    // Retired slug for the retitled isotope supply chain article.
    '/updates/2026-11-19-oklo-actinide-yb-feedstock/':
      '/updates/2026-11-19-oklo-isotope-supply-chain/',
  },
});
