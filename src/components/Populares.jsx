import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router";
import { getPopulares } from "../service/Service";
import MovieCard from "./MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Populares() {
  const [movies, setMovies] = useState([]);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function listaFilmes() {
      const dados = await getPopulares();
      setMovies(dados.results);
    }
    listaFilmes();
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full md:max-w-6xl md:mx-auto">
      <div className="border-t border-white pt-4 mt-2 px-0 md:px-6">
        <Link
          to="/populares"
          className="inline-block text-white text-2xl font-bold mb-2 hover:underline"
        >
          Populares
        </Link>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-[-2.5rem] top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="grid grid-cols-4 gap-4 md:hidden">
            {movies.slice(0, 4).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          <div
            ref={scrollRef}
            className="hidden md:flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-2"
          >
            {movies.map((movie) => (
              <div key={movie.id} className="flex-shrink-0 w-[180px]">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-[-2.5rem] top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
          >
            <ChevronRight size={28} />
          </button>
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
