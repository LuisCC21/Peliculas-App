import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { LayoutHeader } from './components/LayoutHeader'
import { MostrarPelis } from './components/MostrarPelis'
import { PeliculaProvider } from './context/PeliculasContext'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PeliculaProvider>

       <App />

    </PeliculaProvider>
  </React.StrictMode>,
)
