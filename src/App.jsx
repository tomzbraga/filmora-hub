import { BrowserRouter, Routes, Route, Link } from "react-router";
import "./App.css";
import Login from "./pages/login";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Erro404 />} />
    </Routes>
  );
}

export default AppRoutes;
