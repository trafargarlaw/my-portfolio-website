import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["nuxt-graphql-client"],
  runtimeConfig: {
    public: {
      GQL_HOST: "https://houdaifa-com-back.herokuapp.com/graphql", // overwritten by process.env.GQL_HOST
    },
  },
  css: ["@/assets/css/main.scss"],
  styleResources: {
    scss: ["./assets/scss/*.scss"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/variables.scss";',
        },
      },
    },
  },
  build: {
    transpile: ["@apollo/client", "ts-invariant/process"],
  },
  ssr: true,
});
