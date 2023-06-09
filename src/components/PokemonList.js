import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonData }) => {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-3 w-full mt-20 max-w-5xl mx-auto">
      {pokemonData.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
