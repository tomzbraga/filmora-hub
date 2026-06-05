import { Outlet } from "react-router";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

function Layout() {
  const { logado } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!logado) {
      navigate("/login");
    }
  }, [logado, navigate]);

  return (
    <div>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
