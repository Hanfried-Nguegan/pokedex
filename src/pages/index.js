import react from "react";
import Image from "next/image";
import { SearchBar, Hero, PokemonList } from "@/components";
import { weezing } from "@/images";

export default function Home() {
  return (
    <main className="relative z-0">
      <div className="bg-pokedex-texture bg-cover bg-no-repeat bg-center w-full h-screen">
        <div className="absolute hidden md:w-[140px] lg:w-[160px] md:inline-flex -top-3 md:right-20 lg:right-40">
          <Image src={weezing} className="transform -rotate-[12deg]" />
        </div>
        <div className="absolute inset-0 top-[100px]">
          {/* Search Bar Component */}
          <SearchBar />

          {/* Hero Section */}
          <Hero />

          {/* PokemonList Section */}
          <PokemonList />
        </div>
      </div>
    </main>
  );
}
