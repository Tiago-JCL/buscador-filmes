import axios from "axios";

const API_KEY = "aba1489f"; // Local da chave da OMDB API
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    return { Response: "False", Error: "Erro na requisição" };
  }
};

export const fetchMovieDetails = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar detalhes do filme:", error);
    return { Response: "False", Error: "Erro na requisição" };
  }
};
