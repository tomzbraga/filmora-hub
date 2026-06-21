import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Trash2 } from "lucide-react";
import { getQueroVer, removerQueroVer } from "../service/queroVerService";
import HeaderHome from "../components/HeaderHome";

function QueroVerPage() {
  const [lista, setLista] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    carregarLista();
  }, []);

  async function carregarLista() {
    try {
      const dados = await getQueroVer();
      setLista(dados);
    } catch (err) {
      console.error("Erro ao carregar lista quero ver:", err);
    } finally {
      setCarregando(false);
    }
  }

  async function handleRemover(e, id) {
    e.stopPropagation();
    try {
      await removerQueroVer(id);
      setLista((listaAtual) => listaAtual.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Erro ao remover filme:", err);
    }
  }

  if (carregando) {
    return <p className="text-white text-center mt-10">Carregando...</p>;
  }

  return (
    <div className="px-4 py-6 md:max-w-6xl md:mx-auto">
      <HeaderHome/>
      <h1 className="text-white text-2xl font-bold mb-6">Quero Ver</h1>

      {lista.length === 0 ? (
        <p className="text-white/70">
          Você ainda não adicionou nenhum filme à lista.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {lista.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/filme/${item.id}`)}
              className="flex flex-col gap-2 rounded-xl overflow-hidden bg-neutral-900/60 border border-gray-700/30 p-3 cursor-pointer hover:border-gray-500/50 transition-colors relative"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.titulo}
                className="w-full h-auto rounded-md object-cover"
              />

              <button
                onClick={(e) => handleRemover(e, item.id)}
                className="absolute top-2 right-2 bg-black/60 hover:bg-red-600/80 transition-colors rounded-full p-1.5"
                title="Remover da lista"
              >
                <Trash2 size={14} className="text-white" />
              </button>

              <div>
                <h3 className="text-white font-semibold text-sm truncate">
                  {item.titulo}
                </h3>
                <span
                  className={`text-xs capitalize ${
                    item.prioridade === "alta"
                      ? "text-red-400"
                      : item.prioridade === "baixa"
                        ? "text-green-400"
                        : "text-yellow-400"
                  }`}
                >
                  Prioridade {item.prioridade}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QueroVerPage;
