/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "pokedex-texture": "url('/images/pokedex_background.webp')",
      },
      colors: {
        pokemonYellow: "#fdc20e",
        pokemonBlue: "#2650fe",
      },
      fontFamily: {
        pokemonSolid: ["pokemonSolid", "cursive"],
      },
    },
  },
  plugins: [],
};
