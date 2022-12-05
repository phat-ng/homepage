/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode : 'class',
  theme: {
    extend: {
      fontFamily: {
        "ibm-plex-sans": ["IBM Plex Sans", "sans-serif"],
        "source-code-pro": ["Source Code Pro", "monospace"],
      },
      keyframes: {
        breath: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
	  container: {
		center: true,
		padding: '2rem',
	  }
    },
  },
  plugins: [],
};
