import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import Layout from "./layout/Layout";
import FilmesPopulares from "./pages/FilmesPopulares";
import FilmesNovidades from "./pages/FilmesNovidades";
import MovieSobre from "./pages/MovieSobre";
import { useAuth } from "./contexts/AuthContext";

function AppRoutes() {
  const { logado } = useAuth();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={logado ? <Home /> : <Navigate to="/login" replace />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/populares" element={<FilmesPopulares />} />
        <Route path="/novidades" element={<FilmesNovidades />} />
        <Route path="/filme/:movie_id" element={<MovieSobre />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
