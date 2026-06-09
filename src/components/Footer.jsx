import { Home, Heart } from "lucide-react";
import { useNavigate } from "react-router";

function Footer() {

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleRecomendados = () => {
    navigate("/recomendacao");
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 bg-slate-950/95 border-t border-white/10 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-md items-center justify-between px-6 text-white">

        <button 
          onClick={handleHome}
          className="flex flex-col items-center gap-1 text-xs text-white/70 hover:text-white"
        >
          <Home size={20} />
          <span>Início</span>
        </button>

        <button 
          onClick={handleRecomendados}
          className="flex flex-col items-center gap-1 text-xs text-white/70 hover:text-white"
        >
          <Heart size={20} />
          <span>Recomendados</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
