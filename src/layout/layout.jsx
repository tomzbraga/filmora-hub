import { Outlet } from "react-router";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";

function Layout() {
  const { logado } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!logado) {
      navigate("/login");
    }
  }, [logado, navigate]);

  return (
    <div className="min-h-screen pb-24 bg-black text-white">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
