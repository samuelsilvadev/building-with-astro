import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

/**
 * @see https://astro.build/config
 */
export default defineConfig({
  integrations: [tailwind(), preact()],
});
