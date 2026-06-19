import FormLogin from "../components/FormLogin/FormLogin";
import logo from "../assets/fimora-logo.png";

function Login() {
  return (
    <div className="min-h-screen bg-[#09090B] flex items-center justify-center p-4 md:p-8">
      <div className="relative w-full max-w-md md:max-w-lg bg-[#0c0c0e] border border-white/10 rounded-2xl overflow-hidden">
        
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-48 w-[140%] bg-purple-700/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 px-6 md:px-10 pt-12 pb-8">

          <div className="flex justify-center mb-6">
            <img src={logo} alt="Filmora Hub" className="h-16 md:h-20 w-auto" />
          </div>

          <h2 className="text-white text-xl md:text-2xl font-bold text-center mb-1">
            Seu catálogo de filmes e séries.
          </h2>
          <p className="text-white/50 text-sm md:text-base text-center mb-8">
            Explore o melhor do cinema.
          </p>

          <FormLogin />
        </div>

        <div className="relative z-10 border-t border-white/5 py-4 text-center">
          <p className="text-white/30 text-xs">
            © 2026 Filmora Hub. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;