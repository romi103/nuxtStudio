// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["nuxt-studio", "@nuxt/content"],
  studio: {
    repository: {
      provider: "github", // 'github' or 'gitlab'
      owner: "romi103",
      repo: "nuxtStudio",
      branch: "main",
    },
  },
});
