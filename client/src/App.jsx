import { useState } from 'react'
import './App.css'
import Login from './pages/login'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditCard from './pages/editCard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editCard" element={<EditCard />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
