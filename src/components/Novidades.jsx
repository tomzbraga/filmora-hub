import { useEffect, useState } from "react";
import { getNovidades } from "../service/Service";

export default function Novidades() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function listaFilmes() {
      const dados = await getNovidades();
      setMovies(dados.results);
    }
    listaFilmes();
  }, []);

  console.log({ movies });

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}
