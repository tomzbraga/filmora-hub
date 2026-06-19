import { useEffect, useState } from "react";
import { getNovidades } from "../service/Service";
import MovieCard from "../components/MovieCard";
import HeaderRecomendados from "../components/Header-populares";
import Footer from "../components/Footer";

function FilmesPopulares() {
  const [movies, setMovies] = useState([]);
  const [showNoMoviesMessage, setShowNoMoviesMessage] = useState(false);

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

    const timer = setTimeout(() => {
      setShowNoMoviesMessage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full p-4 pb-24 bg-[#09090B] min-h-screen">
      <HeaderRecomendados />
      <p className="text-white text-sm mb-4 mt-4">Sua coleção de populares</p>

      {movies.length === 0 && showNoMoviesMessage ? (
        <p className="text-white text-center mt-8">Nenhum filme encontrado.</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default FilmesPopulares;