import { BrowserRouter, Routes, Route, Link } from "react-router";
import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import Layout from "./layout/Layout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
