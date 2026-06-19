function Sinopse({ overview }) {
  if (!overview) return null;

  return (
    <section className="px-4 mt-6 md:hidden">
      <h2 className="text-white text-lg font-semibold mb-2">Sinopse</h2>
      <p className="text-white/70 text-sm leading-relaxed">{overview}</p>
    </section>
  );
}

export default Sinopse;