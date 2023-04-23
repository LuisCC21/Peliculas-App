import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PeliculaProvider } from './context/PeliculasContext'
import './index.css'
import {
  DetallePelicula,
  loader as peliculaLoader,
} from './pages/DetallePelicula'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'pelicula/:id',
    element: <DetallePelicula />,
    loader: peliculaLoader,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PeliculaProvider>
      <RouterProvider router={router} />
    </PeliculaProvider>
  </React.StrictMode>
)
