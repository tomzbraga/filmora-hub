import { useState, useEffect } from "react";
import { Heart, Star } from "lucide-react";
import ReturnButton from "./ReturnButton";
import SearchButton from "./SearchButton";
import {
  adicionarQueroVer,
  removerQueroVer,
  getQueroVer,
} from "../service/queroVerService";

function MovieCardSobre({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [prioridade, setPrioridade] = useState("média");
  const [carregando, setCarregando] = useState(false);

  if (!movie) return null;

  const {
    id,
    title,
    backdrop_path,
    release_date,
    runtime,
    genres = [],
    vote_average,
    overview,
  } = movie;

  const year = release_date ? release_date.slice(0, 4) : "";
  const hours = runtime ? Math.floor(runtime / 60) : 0;
  const minutes = runtime ? runtime % 60 : 0;

  // verifica se o filme já está na lista quando o componente carrega
  useEffect(() => {
    async function verificarLista() {
      try {
        const lista = await getQueroVer();
        const existe = lista.some((item) => item.id === id);
        setIsFavorite(existe);
      } catch (err) {
        console.error("Erro ao verificar lista quero ver:", err);
      }
    }
    verificarLista();
  }, [id]);

  async function handleQueroVer() {
    setCarregando(true);
    try {
      if (isFavorite) {
        await removerQueroVer(id);
        setIsFavorite(false);
      } else {
        await adicionarQueroVer(movie, prioridade);
        setIsFavorite(true);
      }
    } catch (err) {
      console.error("Erro ao atualizar lista quero ver:", err);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="relative w-full md:max-w-6xl md:mx-auto md:mt-6 md:px-6">
      <div className="md:flex md:items-start md:gap-10">
        <div className="relative h-72 w-full overflow-hidden rounded-b-3xl md:order-2 md:h-[420px] md:w-1/2 md:rounded-2xl">
          <img
            src={`https://image.tmdb.org/t/p/w780${backdrop_path}`}
            alt={title}
            className="h-full w-full object-cover"
          />

          <div className="absolute top-4 left-0 right-0 flex items-center justify-between px-4 md:hidden">
            <ReturnButton />
          </div>
        </div>

        <div className="mx-4 mt-8 rounded-2xl bg-slate-800/60 px-4 py-5 text-center text-white md:order-1 md:w-1/2 md:mx-0 md:mt-0 md:bg-transparent md:px-0 md:py-0 md:text-left">
          <h1 className="text-2xl font-bold md:text-5xl">{title}</h1>

          <p className="mt-1 text-sm text-white/70 md:mt-3 md:text-base">
            {year}
            {genres.length > 0 && ` | ${genres.map((g) => g.name).join(" - ")}`}
            {runtime
              ? ` | ${hours}h ${minutes < 10 ? "0" : ""}${minutes}min`
              : ""}
            {vote_average !== undefined && (
              <span className="text-yellow-400">
                {" "}
                <Star
                  size={14}
                  className="inline -mt-1 mr-1 fill-yellow-400 text-yellow-400"
                />
                {vote_average.toFixed(1)}
              </span>
            )}
          </p>

          {overview && (
            <p className="hidden md:block mt-6 text-sm text-white/80 leading-relaxed border-l-2 border-pink-500/70 pl-4">
              {overview}
            </p>
          )}

          <div className="mt-6 flex items-center gap-3 justify-center md:justify-start">
            {!isFavorite && (
              <select
                value={prioridade}
                onChange={(e) => setPrioridade(e.target.value)}
                className="bg-slate-900/60 text-white text-sm rounded-md px-2 py-1 border border-gray-700/40"
              >
                <option value="alta">Prioridade alta</option>
                <option value="média">Prioridade média</option>
                <option value="baixa">Prioridade baixa</option>
              </select>
            )}

            <button
              type="button"
              onClick={handleQueroVer}
              disabled={carregando}
              className="flex items-center gap-2 rounded-full px-4 py-2 bg-pink-600/80 hover:bg-pink-600 transition-colors text-sm font-medium disabled:opacity-50"
            >
              <Heart size={16} className={isFavorite ? "fill-white" : ""} />
              {isFavorite ? "Remover da lista" : "Quero ver"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCardSobre;
