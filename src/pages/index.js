import react from "react";
import { Hero, SearchBar, PokemonList } from "@/components";

export default function Home() {
  return (
    <main className="relative z-0">
      <div className="bg-pokedex-texture bg-cover bg-no-repeat bg-center w-full h-screen">
        <div className="absolute inset-0 top-[90px]">
          {/* Search Bar Component */}
          <SearchBar />
          {/* Hero Section */}
          {/*<Hero />*/}

          {/* PokemonList Section */}
          {/*<PokemonList />*/}
        </div>
      </div>
    </main>
  );
}
