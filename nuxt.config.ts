// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // app: {
  //   head: {
  //     script: [
  //       { src: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css', defer: "true" },
  //     ],
  //   },
  // },
  css: ['animate.css/animate.min.css'],
  modules: ["@nuxtjs/tailwindcss"],
})