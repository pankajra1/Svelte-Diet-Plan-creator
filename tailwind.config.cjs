module.exports = {
  darkmode: true,
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('assets/background.svg')",
      },
      colors: {
        "primary": "#4A90E2",  // Blue
        "secondary": "#FF6961", // Pastel Red
        "slate": "#D7D7D7",
        "white": "#FFFFFF",
        "black": "#101010"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
