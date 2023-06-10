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

        // Fetch stat details for each entry in the stats array
        const statDetails = await Promise.all(
          data.stats.map(async (stat) => {
            const statResponse = await axios.get(stat.stat.url);
            const statData = statResponse.data;
            return {
              ...stat,
              statDetails: statData,
            };
          })
        );

        // Fetch ability details for each entry in the stats array

        const abilityDetails = await Promise.all(
          data.abilities.map(async (ability) => {
            const abilityResponse = await axios.get(ability.ability.url);
            const abilityData = abilityResponse.data;
            return {
              ...ability,
              abilityDetails: abilityData,
            };
          })
        );

        // Combine fetched stat details with Pokemon data
        return {
          ...data,
          stats: statDetails,
          abilities: abilityDetails,
        };
      })
    );

    const nextPageUrl = responseData.next;
    const prevPageUrl = responseData.previous;

    // Return the Pokemon data with fetched stat details, along with pagination information
    return { pokemonData: pokemonDetails, nextPageUrl, prevPageUrl };
  } catch (error) {
    console.log("Error fetching data", error);
    throw new Error("Error fetching data");
  }
}
