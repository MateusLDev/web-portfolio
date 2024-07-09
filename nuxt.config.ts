// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { href: "https://fonts.googleapis.com", rel: "preconnect" },
        {
          href: "https://fonts.gstatic.com",
          rel: "preconnect",
          crossorigin: "",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/i18n"],
});
