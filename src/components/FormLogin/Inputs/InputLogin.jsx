function InputLogin({ login, erro, mudaValor }) {
  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor="matricula"
        className="text-sm font-medium text-gray-700 mb-1 text-left"
      >
        Login
      </label>

      <input
        className="border rounded-lg w-full p-2"
        type="email"
        id="email"
        name="email"
        placeholder="Digite seu e-mail"
        value={login}
        onChange={mudaValor}
      />

      {erro && <p className="text-red-500 text-xs mt-1">{erro}</p>}
    </div>
  );
}

export default InputLogin;
