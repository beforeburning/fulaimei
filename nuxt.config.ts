import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@element-plus/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
  ],
  devtools: { enabled: true },
  // 页面配置
  app: {
    baseURL: "/hanson-da/",
    head: {
      charset: "UTF-8",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      title: "孚来美",
      htmlAttrs: {
        lang: "zh-CN",
      },
      meta: [
        {
          name: "description",
          content: "孚来美®产品信息",
        },
        {
          name: "keywords",
          content: "孚来美®产品信息",
        },
        { name: "renderer", content: "webkit" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      ],
      script: [],
    },
  },
  build: {
    transpile: ["@element-plus/nuxt"],
  },
  router: {},
  vite: {
    server: {},
    vue: {
      script: {
        defineModel: true,
      },
    },
    build: {
      target: [],
    },
    plugins: [],
  },
  css: ["@/assets/style/public.css", "aos/dist/aos.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      // css 的兼容性
      autoprefixer: {
        overrideBrowserslist: [
          "Android 4.1",
          "iOS 7.1",
          "Chrome > 31",
          "ff > 31",
          "ie >= 8",
          "> 1%",
        ],
        grid: false,
      },
      "postcss-custom-properties": {},
    },
  },
});
