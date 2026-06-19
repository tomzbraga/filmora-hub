import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import Layout from "./layout/Layout";
import FilmesPopulares from "./pages/FilmesPopulares";
import MovieSobre from "./pages/MovieSobre";
import { useAuth } from "./contexts/AuthContext";

function AppRoutes() {
  const { logado } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={logado ? <Home /> : <Navigate to="/login" replace />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/populares" element={<FilmesPopulares />} />
        <Route path="/filme/:movie_id" element={<MovieSobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
