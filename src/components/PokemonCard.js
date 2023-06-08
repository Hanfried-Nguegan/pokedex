import React, { useState } from "react";

/* This component needs to be worked on */

const PokemonCard = ({ pokemon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const typeColors = {
    grass: "bg-green-500",
    fire: "bg-red-500",
    water: "bg-blue-500",
    bug: "bg-pokemonBug",
    poison: "bg-pokemonPoison",
    flying: "bg-pokemonFlying",
    normal: "bg-pokemonNormal",
  };

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
      <div
        className={`${
          typeColors[pokemon.types[0].type.name]
        } w-4/5 h-2 rounded-full mt-2`}
      />
      <div className="flex items-center justify-between space-x-2 mt-2">
        <span className="text-black text-opacity-60 text-sm">
          HP {pokemon.stats[0].base_stat}/255{" "}
        </span>
        <div className="bg-gray-400 w-[2px] h-6 " />
        <span className="text-black text-opacity-60 text-sm">
          XP {pokemon.base_experience}
        </span>
      </div>
      <div className="mt-2 mb-4">
        <button className="bg-pokemonYellow px-5 py-1 text-white font-medium rounded-lg">
          INSPECT
        </button>
      </div>
      <div className="flex items-center justify-between mt-2 ">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center space-y-1">
              <div
                className={`${
                  typeColors[pokemon.types[0].type.name]
                } p-[1px] min-w-[42px]`}
              >
                {pokemon.types.length > 0 && (
                  <p className="text-white font-light text-xs text-center ">
                    {pokemon.types[0].type.name}
                  </p>
                )}
              </div>
              {pokemon.types.length > 1 && (
                <div
                  className={`${
                    typeColors[pokemon.types[1].type.name]
                  } p-[1px] min-w-[42px]`}
                >
                  <p className="text-white font-light text-xs text-center">
                    {pokemon.types[1].type.name}
                  </p>
                </div>
              )}
            </div>
            <p className="text-xs text-black text-opacity-50">Type</p>
          </div>
          <div className="bg-gray-400 bg-opacity-50 w-[2px] h-16 " />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center space-y-4 ml-3">
            <p className="text-sm text-black text-opacity-60">
              {pokemon.weight}g
            </p>
            <p className="text-xs text-black text-opacity-50">Weight</p>
          </div>
          <div className="bg-gray-400 bg-opacity-50 w-[2px] h-16 " />
        </div>

        <div className="flex flex-col items-center space-y-4 ml-3">
          <p className="text-sm text-black text-opacity-60">
            {pokemon.height}cm
          </p>
          <p className="text-xs text-black text-opacity-50">Height</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
