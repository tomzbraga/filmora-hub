import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getNovidades } from "../service/Service";
import MovieCard from "./MovieCard";

export default function Populares() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function listaFilmes() {
      const dados = await getNovidades();
      setMovies(dados.results);
    }
    listaFilmes();
  }, []);

  return (
    <div className="w-full">
      <div className="border-t border-white pt-4 mt-2">
        <h2 className="text-white text-2xl font-bold mb-2">Populares</h2>
        <div className="grid grid-cols-4 gap-4">
          {movies.slice(0, 4).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <p
          className="mt-4 text-sm text-white/70 hover:text-white cursor-pointer text-right"
          onClick={() => navigate("/populares")}
        >
          ver mais
        </p>
      </div>
    </div>
  );
}
