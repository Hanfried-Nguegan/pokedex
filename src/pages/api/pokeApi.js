import axios from "axios";

export async function fetchPokemonData(page = 0, limit = 42) {
  try {
    const offset = page * limit;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    const response = await axios.get(apiUrl);
    const responseData = response.data;
    const pokemonData = responseData.results;

    const pokemonDetails = await Promise.all(
      pokemonData.map(async (pokemon) => {
        const response = await axios.get(pokemon.url);
        const data = response.data;
        return data;
      })
    );

    const nextPageUrl = responseData.next;
    const prevPageUrl = responseData.previous;

    return { pokemonData: pokemonDetails, nextPageUrl, prevPageUrl };
  } catch (error) {
    console.log("Error fetching data", error);
    throw new Error("Error fetching data");
  }
}
