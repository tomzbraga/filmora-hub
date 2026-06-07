import { Star } from "lucide-react";

function MovieCard({ movie }) {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="flex flex-col gap-2 rounded-xl overflow-hidden bg-neutral-900/60 border border-gray-700/30 p-3">
      <img
        src={posterUrl}
        alt={movie.title}
        className="w-full h-auto rounded-md object-cover"
      />
      <div>
        <h3 className="text-white font-semibold text-sm truncate">
          {movie.title}
        </h3>
        <div className="flex items-center gap-1">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <span className="text-yellow-400 text-sm">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}export default MovieCard;
