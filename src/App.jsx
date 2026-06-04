import { BrowserRouter, Routes, Route, Link } from 'react-router'
import './App.css'
import Login from './pages/login'
import Home from './pages/Home'
import Layout from './layout/layout'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
