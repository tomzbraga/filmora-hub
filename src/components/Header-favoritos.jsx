import ReturnButton from './ReturnButton'
import SearchButton from './SearchButton'

function HeaderFavoritos() {
    return (
        <main>
            <header className="bg-[#09090B] border-b-2 border-white py-4">
                <div className="flex items-center justify-between px-6 max-w-full">
                    <ReturnButton />
                    <h1 className="text-white text-2xl font-bold text-center flex-1">
                        Recomendados
                    </h1>
                    <SearchButton />
                </div>
            </header>
        </main>
    )
}

export default HeaderFavoritos;


