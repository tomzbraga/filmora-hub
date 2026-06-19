import HeroBanner  from "../components/HeroBanner";
import HeaderHome from "../components/HeaderHome";
import SearchBar from "../components/SearchBar";
import Novidades from "../components/Novidades";
import Populares from "../components/Populares";

function Home() {
  return (
    <main className="bg-[#09090B] min-h-screen">
      <HeaderHome />
      <HeroBanner />
      <div className="md:hidden">
        <SearchBar />
      </div>
      <Novidades />
      <Populares />
    </main>
  );
}
export default Home;