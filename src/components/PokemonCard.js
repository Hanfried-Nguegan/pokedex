import React from "react";
import Image from "next/image";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="relative flex items-center justify-center mb-40 ">
      <h2>{pokemon.name}</h2>
    </div>
  );
};

export default PokemonCard;
