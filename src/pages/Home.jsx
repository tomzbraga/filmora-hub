import Section from '../components/Section';
import HeaderHome from '../components/HeaderHome';
import SearchBar from '../components/SearchBar';
function Home() {
    return (
        <main className="bg-[#09090B] min-h-screen">
            <HeaderHome />
         <Section />
         <SearchBar/>
        </main>
    );
}
export default Home;