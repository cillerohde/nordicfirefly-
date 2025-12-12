/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        customGray: '#F8F8F8',
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-animated"),
    require("tailwindcss-intersect"),
  ],
};

