import { useState } from "react";
import { Heart, Star } from "lucide-react";
import ReturnButton from "./ReturnButton";
import SearchButton from "./SearchButton";

function MovieCardSobre({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  if (!movie) return null;

  const {
    title,
    backdrop_path,
    release_date,
    runtime,
    genres = [],
    vote_average,
  } = movie;

  const year = release_date ? release_date.slice(0, 4) : "";
  const hours = runtime ? Math.floor(runtime / 60) : 0;
  const minutes = runtime ? runtime % 60 : 0;

  return (
    <div className="relative w-full">
      {/* Imagem de fundo */}
      <div className="relative h-72 w-full overflow-hidden rounded-b-3xl">
        <img
          src={`https://image.tmdb.org/t/p/w780${backdrop_path}`}
          alt={title}
          className="h-full w-full object-cover"
        />

        {/* Botões sobre a imagem */}
        <div className="absolute top-4 left-0 right-0 flex items-center justify-between px-4">
          <ReturnButton />
     
        </div>

    
      </div>

      {/* Card de informações */}
      <div className="mx-4 mt-8 rounded-2xl bg-slate-800/60 px-4 py-5 text-center text-white">
        <h1 className="text-2xl font-bold">{title}</h1>

        <p className="mt-1 text-sm text-white/70">
          {year} {runtime ? `| ${hours}h ${minutes}min` : ""}
        </p>

        {genres.length > 0 && (
          <p className="mt-1 text-sm text-white/70">
            {genres.map((g) => g.name).join(" - ")}
          </p>
        )}

        {vote_average !== undefined && (
          <div className="mt-2 flex items-center justify-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{vote_average.toFixed(1)}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCardSobre;