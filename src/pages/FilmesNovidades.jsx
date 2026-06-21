import { useEffect, useState } from "react";
import { getNovidades } from "../service/Service";
import MovieCard from "../components/MovieCard";
import HeaderPopulares from "../components/Header-populares";
import HeaderHome from "../components/HeaderHome";
import Footer from "../components/Footer";

function FilmesNovidades() {
  const [movies, setMovies] = useState([]);
  const [showNoMoviesMessage, setShowNoMoviesMessage] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const dados = await getPopulares();
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
    <div className="w-full p-4 md:p-0 pb-24 md:pb-12 bg-[#09090B] min-h-screen">
      <HeaderPopulares />

      <div className="hidden md:block">
        <HeaderHome />
      </div>

      <div className="md:max-w-6xl md:mx-auto md:px-6">
        <p className="text-white text-sm mb-4 mt-4 md:hidden">
          Sua coleção de populares
        </p>

        <h1 className="hidden md:block text-white text-5xl font-bold text-center mt-10 mb-10">
          Populares
        </h1>

        {movies.length === 0 && showNoMoviesMessage ? (
          <p className="text-white text-center mt-8">
            Nenhum filme encontrado.
          </p>
        ) : (
          <div className="grid grid-cols-4 gap-4 md:gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default FilmesPopulares;
