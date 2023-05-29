import React from "react";
import Image from "next/image";
import { SearchBar, Hero, PokemonList } from "@/components";
import { weezing } from "@/images";

export default function Home() {
  return (
    <main className="relative z-0 bg-pokedex-texture bg-cover bg-no-repeat bg-center h-screen">
      <div className="weezing">
        <Image src={weezing} className="transform -rotate-[12deg]" />
      </div>
      {/* Search Bar Component */}
      <SearchBar />

      <div className="absolute inset-0 top-[100px]">
        {/* Hero Section */}
        <Hero />

        {/* PokemonList Section */}
      </div>
    </main>
  );
}
