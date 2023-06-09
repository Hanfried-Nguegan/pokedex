import React from "react";
import axios from "axios";
import useSWR from "swr";
import Head from "next/head";
import { useRouter } from "next/router";

const PokemonPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const fetcher = async (url) => axios.get(url).then((res) => res.data);

  const { data: pokemonData, error } = useSWR(apiUrl, fetcher);

  if (error) {
    return (
      <>
        <Head>Pokemon | Error</Head>
        <div>Error encountered while retrieving data</div>
      </>
    );
  }

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>
          Pokemon |{" "}
          {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
        </title>
      </Head>
      <div className="absolute inset-0 top-[140px]">
        <h1>{pokemonData.name}</h1>
        {/* Render the rest of the Pokemon details */}
      </div>
    </>
  );
};

export default PokemonPage;
