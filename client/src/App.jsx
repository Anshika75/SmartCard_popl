import { useState } from 'react'
import './App.css'
import Login from './pages/login'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
