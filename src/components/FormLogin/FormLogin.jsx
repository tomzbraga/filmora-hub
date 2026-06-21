import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import InputSenha from "./Inputs/InputSenha";
import InputSubmit from "./Inputs/InputSubmit";
import InputLogin from "./Inputs/InputLogin";

function FormLogin() {
  const [user, setUser] = useState("");
  const [userErro, setUserErro] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaErro, setSenhaErro] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const trataSubmit = (e) => {
    e.preventDefault();
    let valido = true;

    if (!user) {
      setUserErro("Login é obrigatório");
      valido = false;
    } else {
      setUserErro("");
    }

    if (!senha) {
      setSenhaErro("Senha é obrigatória");
      valido = false;
    } else if (senha.length < 6) {
      setSenhaErro("Senha deve ter no mínimo 6 caracteres");
      valido = false;
    } else {
      setSenhaErro("");
    }

    if (valido) {
      login({ user });
      navigate("/");
    }
  };

  return (
    <form onSubmit={trataSubmit} className="flex flex-col gap-5">
      <InputLogin
        user={login}
        erro={userErro}
        mudaValor={(e) => setUser(e.target.value)}
      />

      <InputSenha
        senha={senha}
        erro={senhaErro}
        mudaValor={(e) => setSenha(e.target.value)}
      />

      <InputSubmit texto="Entrar" onClick={trataSubmit} />
    </form>
  );
}

export default FormLogin;
