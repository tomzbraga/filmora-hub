import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState({});
  const [logado, setLogado] = useState(false);
  const navigate = useNavigate();

  const login = (dados) => {
    setUsuario({ nome: "MudarParaNomeLogin" });
    setLogado(true);
  };

  const logout = () => {
    setUsuario({});
    setLogado(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
