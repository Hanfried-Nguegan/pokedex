import React from "react";
import Image from "next/image";
import { pokemonCard } from "@/images";

const PokemonCard = () => {
  return (
    <div className="flex items-center justify-center mb-20 ">
      <Image src={pokemonCard} width={220} />
    </div>
  );
};

export default PokemonCard;
