import axios from "axios";

export async function getMovies() {
  try {
    const response = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "a03dc348a47fa57d814f8290f647ee2c",
        language: "pt-BR",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao carregar filmes:", error);
    throw error;
  }
}


