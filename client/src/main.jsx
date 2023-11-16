import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// This is a workaround for a bug in React 18 Alpha
Object.defineProperty(window, 'localStorage', {
  value: ()=>{}
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
