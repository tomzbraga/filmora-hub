import HeroBanner  from "../components/HeroBanner";
import HeaderHome from "../components/HeaderHome";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import Novidades from "../components/Novidades";
import Populares from "../components/Populares";

// A SearchBar é um componente que deve ser codificado separado, porém a sua chamada deve ser feita dentro do componente que irá listar os filmes

function Home() {
  return (
    <main className="bg-[#09090B] min-h-screen">
      <HeaderHome />
      <HeroBanner />
      <SearchBar />
      <Novidades />
      <Populares />
    </main>
  );
}
export default Home;
