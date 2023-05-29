import react from "react";
import Image from "next/image";
import { SearchBar, Hero, PokemonList } from "@/components";
import { weezing } from "@/images";

export default function Home() {
  return (
    <main className="relative z-0">
      <div className="bg-pokedex-texture bg-cover bg-no-repeat w-full h-screen">
        <div className="weezing">
          <Image src={weezing} className="transform -rotate-[12deg]" />
        </div>
        {/* Search Bar Component */}
        <SearchBar />

        <div className="absolute inset-0 top-[90px]">
          {/* Hero Section */}
          <Hero />

          {/* PokemonList Section */}
        </div>
      </div>
    </main>
  );
}
