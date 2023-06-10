import { fetchPokemonData } from "./pokeApi";

export default async function handler(req, res) {
  try {
    const { page = 0, limit = 21 } = req.query;
    const pokemonData = await fetchPokemonData(page, limit);
    res.status(200).json(pokemonData);
  } catch (error) {
    console.log("Error fetching data", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}
