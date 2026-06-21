export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-7xl sm:text-8xl font-extrabold text-orange-500 tracking-tighter leading-none mb-2">
          404
        </p>
        <h1 className="text-xl font-semibold mb-3">
          Página não encontrada
        </h1>
        <p className="text-sm text-neutral-400 mb-7 leading-relaxed">
          O endereço que você tentou acessar não existe ou foi movido.
        </p>
        <a
          href="/"
          className="inline-block bg-orange-500 text-neutral-950 font-semibold px-7 py-3 rounded-md hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-50"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  );
}
