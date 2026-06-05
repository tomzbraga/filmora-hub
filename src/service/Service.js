import axios from "axios";

/* 

PARAMETROS DA API 

Para acessar o que a API retorna recomendo que olhe a URL comentada no topo de cada funcao

exemplo:

no componente Novidades.jsx eu coloquei um console.log({ movies }) os parametros podem ser usados como:

movies.title
movies.id
movies.poster_path

*/

// NOVIDADES https://developer.themoviedb.org/reference/movie-now-playing-list
export async function getNovidades() {
  try {
    const response = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/now_playing",
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

// FILMES POPULARES https://developer.themoviedb.org/reference/movie-popular-list
export async function getPopulares() {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/popular',
      params: {
        api_key: "a03dc348a47fa57d814f8290f647ee2c",
        language: "pt-BR"
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao carregar populares", error);
    throw error;
  }
}

// DETALHES DO FILME https://developer.themoviedb.org/reference/movie-details
export async function getMovieDetails() {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/${movie_id}`,
      params: {
        api_key: "a03dc348a47fa57d814f8290f647ee2c",
      language: "pt-BR"
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao carregar detalhes", error);
    throw error;
  }
}

// FILMES SIMILARES https://developer.themoviedb.org/reference/movie-similar
export async function getSimilares() {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/${movie_id}/similar`,
      params: {
        api_key: "a03dc348a47fa57d814f8290f647ee2c",
        language: 'pt-BR'
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao carregar similares", error);
    throw error;
  }
}

// ELENCO https://developer.themoviedb.org/reference/movie-credits
export async function getCreditos() {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
      params: {
        api_key: "a03dc348a47fa57d814f8290f647ee2c",
        language: 'pt-BR'
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao carregar os creditos", error);
    throw error;  
  }
}


