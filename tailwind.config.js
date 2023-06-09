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
        pokemonCard: "#d9d9d9",
        pokemonGrass: "#9bcc50",
        pokemonWater: "#4592c4",
        pokemonFire: "#fd7d24",
        pokemonBug: "#729f3f",
        pokemonPoison: "#7fa8c9",
        pokemonNormal: "#d3d3af",
        pokemonFlying: "#a1d1f8",
        pokemonGround: "#7c7e29",
        pokemonGhost: "#7b62a3",
        pokemonRock: "#a38c21",
        pokemonSteel: "#9eb7b8",
        pokemonElectric: "#eed535",
        pokemonPsychic: "#f366b9",
        pokemonIce: "#51c4e7",
        pokemonDragon: "#3d167c",
        pokemonDark: "#303030",
        pokemonFairy: "#fdb9e9",
      },
      fontFamily: {
        pokemonSolid: ["pokemonSolid", "cursive"],
        pressStart2P: ["pressStart2P", "cursive"],
      },

      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
