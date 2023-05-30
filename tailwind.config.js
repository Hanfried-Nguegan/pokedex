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
        pokemon_texture: "url('/images/pokemon_texture.jpg')",
      },
      colors: {
        pokemonYellow: "#fdc20e",
        pokemonBlue: "#2650fe",
      },
      fontFamily: {
        pokemonSolid: ["pokemonSolid", "cursive"],
        pressStart2P: ["pressStart2P", "cursive"],
      },
      screens: {
        sm: "448px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
