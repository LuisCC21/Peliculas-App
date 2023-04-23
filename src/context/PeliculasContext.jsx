import { createContext, useEffect, useState } from 'react'
import axios from '../helpers/axiosHelper'

const PeliculaContext = createContext()

export const PeliculaProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([])
  const [pelisByCategoria, setPelisByCategoria] = useState([])
  const [pelisByBusqueda, setPelisByBusqueda] = useState([])
  const [cargando, setCargando] = useState(false)
  const [palabra, setPalabra] = useState('')

  const obtenerCategorias = async () => {
    try {
      const { data } = await axios('/genre/movie/list?language=es-ES')
      setCategorias(data.genres)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerCategorias()
  }, [])

  const obtenerPeliculasByCategoria = async (categoria) => {
    setCargando(true)
    try {
      if (categoria === '') return setPelisByCategoria([])
      const { data } = await axios(
        `/discover/movie?with_genres=${categoria}&language=es-ES`
      )
      setPelisByCategoria(data.results)
      setPelisByBusqueda([])

      if (pelisByCategoria.length === 0) {
        setPalabra('')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setCargando(false)
    }
  }

  const obtenerPeliculasByBusqueda = async (query) => {
    setPalabra(query)
    setCargando(true)
    try {
      const { data } = await axios(
        `/search/movie?language=es-ES&page=1&include_adult=false&query=${query}`
      )
      setPelisByBusqueda(data.results)
      setPelisByCategoria([])
    } catch (error) {
      console.log(error)
    } finally {
      setCargando(false)
    }
  }

  return (
    <PeliculaContext.Provider
      value={{
        categorias,
        obtenerPeliculasByCategoria,
        pelisByCategoria,
        obtenerPeliculasByBusqueda,
        pelisByBusqueda,
        cargando,
        palabra,
      }}
    >
      {children}
    </PeliculaContext.Provider>
  )
}

export default PeliculaContext
