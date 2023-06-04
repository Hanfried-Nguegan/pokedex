import { useRouter } from "next/router";
import useSWR from "swr";
import * as PokemonApi from "@/network/pokemon-api";
import Head from "next/head";

export default function PokemonDetailsPage() {
  const router = useRouter();
  const pokemonName = router.query.pokemon?.toString() || "";

  const { data: pokemon, isLoading: pokemonLoading } = useSWR(
    pokemonName,
    PokemonApi.getPokemon
  );

  return (
    <>
      <Head>
        {pokemon && <title>{`${pokemon.name} - Pokemon Tracker `}</title>}
      </Head>
    </>
  );
}
