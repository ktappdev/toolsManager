/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        c: {
          "accent-1": "#1976d2",
        },
      },
      screens: {
        xxs: "300px",
        xs: "375px",
        sm: "390px",
      },
    },
  },
  plugins: [],
};
