import axios from "axios";

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon";
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

    res
      .status(200)
      .json({ pokemonData: pokemonDetails, nextPageUrl, prevPageUrl });
  } catch (error) {
    console.log("Error fetching data", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}
