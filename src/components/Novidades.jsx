import { useEffect } from "react";
import { getMovies } from "../service/Service";

export default function Novidades() {
  const [movies, setMovies] = useStade([]);

  useEffect(() => {
    async function listaFilmes() {
      const dados = await getMovies();
      setMovies(data.results);
    }
    listaFilmes();
  }, []);

  console.log({ movies });

  return <></>;
}
