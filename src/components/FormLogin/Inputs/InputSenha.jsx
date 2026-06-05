function InputSenha({ senha, erro, mudaValor }) {
  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor="senha"
        className="text-sm font-medium text-gray-700 mb-1 text-left"
      >
        Senha
      </label>

      <input
        className="border rounded-lg w-full p-2"
        type="number"
        id="senha"
        name="senha"
        placeholder="Digite sua senha"
        value={senha}
        onChange={mudaValor}
      />

      {erro && <p className="text-red-500 text-xs mt-1">{erro}</p>}
    </div>
  );
}

export default InputSenha;
