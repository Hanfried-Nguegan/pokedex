import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3 w-full mt-20 max-w-5xl mx-auto">
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
  );
};

export default PokemonList;
