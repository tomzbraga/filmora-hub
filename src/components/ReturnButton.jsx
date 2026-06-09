import { useNavigate } from "react-router";

function ReturnButton() {
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate("/");
    };

    return (
        <button
            type="button"
            onClick={handleReturn}
            className="bg-slate-700/90 hover:bg-slate-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md"
            aria-label="Voltar"
        >
            ←
        </button>
    );
}

export default ReturnButton;
