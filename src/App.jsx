import { useState } from 'react'
import './App.css'
import Login from './pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
    </>

  )
}

export default App
