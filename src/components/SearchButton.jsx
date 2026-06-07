import { useNavigate } from "react-router";

function SearchButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="bg-slate-700/90 hover:bg-slate-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md"
      aria-label="Voltar"
    >
      🔍
    </button>
  );
}

export default SearchButton;
