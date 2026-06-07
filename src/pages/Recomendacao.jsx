import { useEffect, useState } from "react";
import { getNovidades } from "../service/Service";
import MovieCard from "../components/MovieCard";
import HeaderFavoritos from "../components/Header-favoritos";

function Recomendacao() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const dados = await getNovidades();
        setMovies(dados.results || []);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="w-full p-4 bg-black">
    <HeaderFavoritos />
      <p className="text-white text-sm mb-4 mt-4">Sua coleção de recomendados</p>

      {movies.length === 0 ? (
        <p className="text-white text-center mt-8">Nenhum filme encontrado.</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Recomendacao;