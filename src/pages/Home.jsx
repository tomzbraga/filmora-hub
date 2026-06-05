import Section from "../components/Section";
import HeaderHome from "../components/HeaderHome";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import Novidades from "../components/Novidades";

// A SearchBar é um componente que deve ser codificado separado, porém a sua chamada deve ser feita dentro do componente que irá listar os filmes

function Home() {
  return (
    <main className="bg-[#09090B] min-h-screen">
      <HeaderHome />
      <Section />
      <SearchBar />
      <Novidades />
    </main>
  );
}
export default Home;
