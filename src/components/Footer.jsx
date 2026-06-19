import { Home, Heart } from "lucide-react";
import { useNavigate } from "react-router";

function Footer() {

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handlePopulares = () => {
    navigate("/populares");
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 bg-slate-950/95 border-t border-white/10 py-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-center gap-16 px-6 text-white">

        <button 
          onClick={handleHome}
          className="flex flex-col items-center gap-1 text-xs text-white/70 hover:text-white"
        >
          <Home size={20} />
          <span>Início</span>
        </button>

        <button 
          onClick={handlePopulares}
          className="flex flex-col items-center gap-1 text-xs text-white/70 hover:text-white"
        >
          <Heart size={20} />
          <span>Populares</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;