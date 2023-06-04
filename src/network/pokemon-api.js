import api from "./axiosInstance";

export async function getPokemon(name) {
  const response = await api.get("/pokemon/" + name);
  const data = response.data;
  return response.data;
}

export async function getPokemonPage(number) {
  const pageSize = 18;
  const response = await api.get(
    `/pokemon?limit=${pageSize}&offset=${pageSize * (page - 1)}`
  );
  return response.data;
}
