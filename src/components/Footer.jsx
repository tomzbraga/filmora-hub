import { Home, Search, Heart, User } from "lucide-react";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 bg-slate-950/95 border-t border-white/10 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-md items-center justify-between px-6 text-white">
        <button className="flex flex-col items-center gap-1 text-xs text-white/70 hover:text-white">
          <Home size={20} />
          <span>Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-xs text-white/70 hover:text-white">
          <Search size={20} />
          <span>Buscar</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-xs text-white/70 hover:text-white">
          <Heart size={20} />
          <span>Favoritos</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-xs text-white/70 hover:text-white">
          <User size={20} />
          <span>Perfil</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
