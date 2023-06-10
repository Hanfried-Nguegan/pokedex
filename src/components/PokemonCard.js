import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { Padding } from "@mui/icons-material";

/* This component needs to be worked on */

const PokemonCard = ({ pokemon }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const typeColors = {
    grass: "bg-pokemonGrass",
    fire: "bg-pokemonFire",
    water: "bg-pokemonWater",
    bug: "bg-pokemonBug",
    poison: "bg-pokemonPoison",
    flying: "bg-pokemonFlying",
    normal: "bg-pokemonNormal",
    ground: "bg-pokemonGround",
    ghost: "bg-pokemonGhost",
    rock: "bg-pokemonRock",
    steel: "bg-pokemonSteel",
    electric: "bg-pokemonElectric",
    psychic: "bg-pokemonPsychic",
    ice: "bg-pokemonIce",
    dragon: "bg-pokemonDragon",
    dark: "bg-pokemonDark",
    fairy: "bg-pokemonFairy",
  };

  const handleClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const detailsVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hover: {
      y: -25,
      transition: { duration: 0.6 },
    },
    initial: {
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const transition = {
    duration: 0.9,
  };

  return (
    <div
      className="relative flex flex-col items-center w-[240px] h-[300px] justify-center bg-pokemonCard p-4 mb-4 max-w-5xl mx-auto group rounded-lg shadow-xl border-4 border-white cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-0 left-0 p-2 font-pokemonSolid">
        #00{pokemon.id}
      </div>
      <div>
        <motion.img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={`${pokemon} image`}
          className="w-[180px] h-[180px] group-hover:hidden mt-2"
          variants={imageVariants}
          animate={isHovered ? "hover" : "initial"}
        />
      </div>
      <div className="flex flex-col items-center space-y-3 w-full">
        <span className="text-black text-opacity-90 text-xl md:text-2xl font-bold font-pokemonSolid ">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </span>
        <div
          className={`${
            typeColors[pokemon.types[0].type.name]
          } w-4/5 h-2 rounded-full`}
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-2">
        <span className="text-black text-opacity-60 text-sm">
          HP {pokemon.stats[0].base_stat}/255{" "}
        </span>
        <div className="bg-gray-400 w-[2px] h-6 " />
        <span className="text-black text-opacity-60 text-sm">
          XP {pokemon.base_experience}
        </span>
      </div>
      {isHovered && (
        <motion.div
          className="mt-4 mb-4"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={transition}
        >
          <Button
            sx={{
              backgroundColor: "#fdc20e !important",
              paddingX: "20px",
              color: "white",
              fontWeight: "500",
              borderRadius: "8px",
              "&:hover": {
                opacity: 0.8,
                transition: "opacity 0.5s",
              },
            }}
            onClick={handleClick}
          >
            POWER UP
          </Button>
        </motion.div>
      )}
      {isHovered && (
        <motion.div
          className="flex items-center justify-between mt-2"
          initial="hidden"
          animate="visible"
          variants={detailsVariants}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>
      )}
    </div>
  );
};

export default PokemonCard;
