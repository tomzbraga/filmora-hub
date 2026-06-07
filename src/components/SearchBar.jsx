function SearchBar() {
    return (
        <div className="relative w-full max-w-xs mx-auto">
            <input
                type="text"
                placeholder="Busque filmes, atores, gêneros...              🔍"
                className="w-full px-3 py-2 pr-10 text-sm text-gray-900 bg-white rounded-full focus:outline-none placeholder-gray-500"
            />
        </div>
    );
}

export default SearchBar;
