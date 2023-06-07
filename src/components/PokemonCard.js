import React, { useState } from "react";

/* This component needs to be worked on */

const PokemonCard = ({ pokemon }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative flex flex-col items-center justify-center bg-pokemonCard p-4 mb-4 max-w-5xl mx-auto rounded-lg shadow-xl border-4 border-white cursor-pointer ">
      <div className="absolute top-0 left-0 p-2 font-pokemonSolid">
        #00{pokemon.id}
      </div>
      <div>
        <img
          src={pokemon.sprites.other["official-artwork"].front_shiny}
          alt={`${pokemon} image`}
          className="w-[180px] h-[180px] md:w-[200px] md:h-[200px]"
        />
      </div>
      <div>
        <span className="text-black text-opacity-90 text-xl md:text-2xl font-bold font-pokemonSolid ">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </span>
      </div>
      <div className="bg-pokemonYellow w-4/5 h-3 rounded-full mt-2" />
      <div className="flex items-center justify-between space-x-2 mt-2">
        <span className="text-black text-opacity-60 text-sm">
          HP {pokemon.stats[0].base_stat}/255{" "}
        </span>
        <div className="bg-gray-400 w-[2px] h-6 " />
        <span className="text-black text-opacity-60 text-sm">
          XP {pokemon.base_experience}
        </span>
      </div>
    </div>
  );
};

export default PokemonCard;
