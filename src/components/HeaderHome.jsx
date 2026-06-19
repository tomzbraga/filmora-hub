import { Link } from "react-router";
import logo from '../assets/fimora-logo.png'
import SearchBar from "./SearchBar";

function HeaderHome (){
    return (
        <header className="bg-[#09090B] border-b border-white/70">
            <div className="flex items-center justify-between pl-2 pr-6 max-w-full md:max-w-6xl md:mx-auto md:py-2">

                <div className="pl-0">
                    <img src={logo} alt="Filmora" className="h-20 w-60 md:h-16 md:w-48" />
                </div>

                <nav className="hidden md:flex items-center gap-8 text-white text-sm">
                    <Link to="/" className="underline hover:text-white/80">Início</Link>
                    <Link to="/populares" className="underline hover:text-white/80">Populares</Link>
                </nav>

                <div className="hidden md:block w-64">
                    <SearchBar />
                </div>

            </div>
        </header>
    )
}

export default HeaderHome;