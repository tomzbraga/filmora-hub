import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieDetails } from "../service/Service";
import MovieCardSobre from "../components/MovieCardSobre";
import Sinopse from "../components/Sinopse";
import Elenco from "../components/Elenco";
import Footer from "../components/Footer";
import Populares from "../components/Populares";
import HeaderHome from "../components/HeaderHome";

function MovieSobre() {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const dados = await getMovieDetails(movie_id);
        setMovie(dados);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovie();
  }, [movie_id]);

  if (!movie) {
    return (
      <div className="bg-[#09090B] min-h-screen flex items-center justify-center">
        <p className="text-white">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#09090B] min-h-screen pb-24">
      <div className="hidden md:block">
        <HeaderHome />
      </div>

      <MovieCardSobre movie={movie} />
      <Sinopse overview={movie.overview} />
      <Elenco cast={movie.credits?.cast} />
      <Populares />
      <Footer />
    </div>
  );
}

export default MovieSobre;