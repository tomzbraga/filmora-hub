function Elenco({ cast = [] }) {
  if (cast.length === 0) return null;

  return (
    <section className="px-4 mt-6 md:max-w-6xl md:mx-auto md:mt-12 md:px-6">
      <h2 className="text-white text-lg font-semibold mb-3 md:text-2xl md:text-center md:mb-8">
        Elenco
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-2 md:justify-center md:gap-10 md:overflow-visible">
        {cast.slice(0, 6).map((actor) => (
          <div key={actor.id} className="flex flex-col items-center gap-2 min-w-[64px] md:min-w-0">
            <div className="h-16 w-16 rounded-2xl bg-white overflow-hidden flex-shrink-0 md:h-24 md:w-24">
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                  alt={actor.name}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <span className="text-white text-xs text-center md:text-sm">{actor.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Elenco;