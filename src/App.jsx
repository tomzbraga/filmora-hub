import { BrowserRouter, Routes, Route, Link } from 'react-router'
import './App.css'
import Login from './pages/login'

function Home() {
  return (
    <main>
      <h1>Bem-vindo à sua aplicação!</h1>
    
    </main>
  )
}

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
