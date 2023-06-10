import React, { useState, useEffect } from "react";
import axios from "axios";
import { SearchBar, Hero, PokemonList, Weezing, Title } from "@/components";
import { fetchPokemonData } from "./api/pokeApi";

export default function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const data = await fetchPokemonData(url);
        setPokemonData(data.pokemonData);
        setNextPageUrl(data.nextPageUrl);
        setPrevPageUrl(data.prevPageUrl);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  console.log(pokemonData);
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
