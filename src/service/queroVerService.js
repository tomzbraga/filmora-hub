import axios from "axios";

/*

SERVICE DA LISTA "QUERO VER"

Esse arquivo faz chamadas para o NOSSO backend (não é TMDB),
que guarda os filmes que o usuário quer ver, salvos em um arquivo JSON.

Backend precisa estar rodando em http://localhost:3001

*/

const BASE_URL = "http://localhost:3001";

// LISTAR FILMES DA WATCHLIST
export async function getQueroVer() {
  try {
    const response = await axios({
      method: "get",
      url: `${BASE_URL}/quero-ver`,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao carregar lista quero ver:", error);
    throw error;
  }
}

// ADICIONAR FILME NA WATCHLIST
export async function adicionarQueroVer(filme, prioridade) {
  try {
    const response = await axios({
      method: "post",
      url: `${BASE_URL}/quero-ver`,
      data: {
        id: filme.id,
        titulo: filme.title,
        poster_path: filme.poster_path,
        prioridade: prioridade,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar filme na lista quero ver:", error);
    throw error;
  }
}

// REMOVER FILME DA WATCHLIST
export async function removerQueroVer(id) {
  try {
    const response = await axios({
      method: "delete",
      url: `${BASE_URL}/quero-ver/${id}`,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao remover filme da lista quero ver:", error);
    throw error;
  }
}