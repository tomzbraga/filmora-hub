

import ReturnButton from './ReturnButton'
import SearchButton from './SearchButton'

function Header() {
    return (
        <header className="bg-black border-b-2 border-cyan-500 py-4">
            <div className="flex items-center justify-between px-6 max-w-full">
                <ReturnButton />

                <h1 className="text-white text-2xl font-bold text-center flex-1">
                    Favoritos
                </h1>

                <SearchButton />
            </div>
        </header>
    )
}

export default Header;


