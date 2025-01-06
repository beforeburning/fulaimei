/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "linear-gradient( 90deg, rgba(111,210,243,0.53) 0%, rgba(116,209,243,0.57) 16%, rgba(131,207,245,0.68) 42%, rgba(155,203,247,0.86) 77%, #ADC9FA 100%)",
        dot: "linear-gradient( 90deg, #3BA7BF 0%, #419CBB 30%, #547FB2 81%, #5C73AF 100%)",
        title:
          "linear-gradient( -45deg, #3BA7BF 0%, #419CBB 30%, #547FB2 81%, #5C73AF 100%)",
        dot2: "linear-gradient( 180deg, #3BA7BF 0%, #419CBB 30%, #547FB2 81%, #5C73AF 100%)",
      },
    },
  },
  plugins: [],
  attributify: true,
};
