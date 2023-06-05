import React from "react";
import { SearchBar, Hero, PokemonList, Weezing, Title } from "@/components";

export default function Home() {
  return (
    <main className="relative z-0 bg-pokedex-texture bg-cover bg-no-repeat overflow-x-hidden bg-center h-screen">
      <Weezing />
      <SearchBar />
      <div className="absolute inset-0 top-[140px] md:top-[120px]">
        <Hero />
        <Title />
        <PokemonList />
      </div>
    </main>
  );
}
