function InputLogin({ login, erro, mudaValor }) {
  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor="login"
        className="text-sm font-medium text-white/80 mb-1 text-left"
      >
        Login
      </label>

      <input
        className="border border-white/30 rounded-lg w-full p-2 bg-transparent text-white text-center placeholder-white/40 focus:outline-none focus:border-white/60 transition-colors"
        type="text"
        id="login"
        name="login"
        placeholder="Digite seu usuário"
        value={login}
        onChange={mudaValor}
      />

      {erro && <p className="text-red-400 text-xs mt-1">{erro}</p>}
    </div>
  );
}

export default InputLogin;
