function Elenco({ cast = [] }) {
  if (cast.length === 0) return null;

  return (
    <section className="px-4 mt-6">
      <h2 className="text-white text-lg font-semibold mb-3">Elenco</h2>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {cast.slice(0, 6).map((actor) => (
          <div key={actor.id} className="flex flex-col items-center gap-2 min-w-[64px]">
            <div className="h-16 w-16 rounded-2xl bg-white overflow-hidden flex-shrink-0">
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                  alt={actor.name}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <span className="text-white text-xs text-center">{actor.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Elenco;