import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig({
    // server options
    server: {
        port: 3000,
    },

    // plugin options
    plugins: [svelte()],
});