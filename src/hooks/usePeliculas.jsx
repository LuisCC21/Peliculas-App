import { useContext } from 'react'
import PeliculaContext from '../context/PeliculasContext'

export const usePeliculas = () => {
  return (
    useContext(PeliculaContext)
  )
}
