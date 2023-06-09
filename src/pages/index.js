import React, { useState, useEffect } from "react";
import axios from "axios";
import { SearchBar, Hero, PokemonList, Weezing, Title } from "@/components";

export default function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get("api/pokemon");
        const data = response.data;

        setPokemonData(data.pokemonData);
        setNextPageUrl(data.NextPageUrl);
        setPrevPageUrl(data.prevPageUrl);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchPokemonData();
  }, []);

  return (
    <main className="relative z-0 bg-pokedex-texture bg-cover bg-no-repeat overflow-x-hidden bg-center h-screen">
      <Weezing />
      <SearchBar />
      <div className="absolute inset-0 top-[140px] md:top-[120px]">
        <Hero />
        <Title />
        <PokemonList pokemonData={pokemonData} />
      </div>
    </main>
  );
}
