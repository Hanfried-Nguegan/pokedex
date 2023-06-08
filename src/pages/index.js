import React from "react";
import { SearchBar, Hero, PokemonList, Weezing, Title } from "@/components";

export default function Home({ pokemonData, nextPageUrl, prevPageUrl }) {
  console.log(pokemonData);
  return (
    <main className="relative z-0 bg-pokedex-texture bg-cover bg-no-repeat overflow-x-hidden bg-center h-screen">
      <Weezing />
      {/*<SearchBar />*/}
      <div className="absolute inset-0 top-[140px] md:top-[120px]">
        <Hero />
        <Title />
        <PokemonList pokemonData={pokemonData} />
      </div>
    </main>
  );
}

/* Bad Code Please set api routes because page is overloaded */

export async function getServerSideProps() {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon";

  try {
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    const pokemonData = responseData.results;

    const pokemonDetails = await Promise.all(
      pokemonData.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      })
    );

    const nextPageUrl = responseData.next;
    const prevPageUrl = responseData.previous;

    return {
      props: {
        pokemonData: pokemonDetails,
        nextPageUrl,
        prevPageUrl,
      },
    };
  } catch (error) {
    console.log("Error fetching data", error);
    return {
      props: {
        pokemonData: [],
        nextPageUrl: null,
        prevPageUrl: null,
      },
    };
  }
}
