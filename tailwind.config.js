module.exports = {
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "'slick', cursive",
      },
    },
  },
  // more options here
};
