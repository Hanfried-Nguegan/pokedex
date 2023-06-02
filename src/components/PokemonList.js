import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  return (
    <div
      id="pokemon_list"
      className="grid grid-cols-1 gap-2 md:grid-cols-3 mt-40 max-w-5xl mx-auto"
    >
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
  );
};

export default PokemonList;
