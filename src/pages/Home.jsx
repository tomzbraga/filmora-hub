import HeroBanner from '../components/HeroBanner';
import HeaderHome from '../components/HeaderHome';
import SearchBar from '../components/SearchBar';
function Home() {
    return (
        <main className="bg-[#09090B] min-h-screen">
            <HeaderHome />
         <HeroBanner />
         <SearchBar/>
        </main>
    );
}
export default Home;