import { createContext, useEffect, useState } from "react"
import axios from "../helpers/axiosHelper"

const PeliculaContext=createContext()

export const PeliculaProvider = ({children}) => {
    const [categorias, setCategorias] = useState([])
    const [pelisByCategoria, setPelisByCategoria] = useState([])
    const [pelisByBusqueda, setPelisByBusqueda] = useState([])
    const [cargando, setCargando] = useState(false)
    const [palabra, setPalabra] = useState('')

    const obtenerCategorias=async()=>{
        try {
            const {data} = await axios('/genre/movie/list?api_key=ee4354e774c2f8dff61104fdef5148fa&language=es-ES')
            setCategorias(data.genres)
         
            

            
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        obtenerCategorias()
    
    }, [])

    const obtenerPeliculasByCategoria= async(categoria)=>{
        setCargando(true)
        try {
            if(categoria==='') return setPelisByCategoria([]);
            const {data} = await axios(`/discover/movie?api_key=ee4354e774c2f8dff61104fdef5148fa&with_genres=${categoria}&language=es-ES`)
            setPelisByCategoria(data.results)   
            setPelisByBusqueda([])
            console.log(data.results)
           
            if(pelisByCategoria.length===0){
                setPalabra('')
             }
    
        } catch (error) {
            console.log(error)
            
        }finally{
            setCargando(false)
        }
       
       
    }
    
    const obtenerPeliculasByBusqueda=async(query)=>{
        setPalabra(query)
        setCargando(true)
        try {
            const {data} = await axios(`/search/movie?api_key=ee4354e774c2f8dff61104fdef5148fa&language=es-ES&page=1&include_adult=false&query=${query}`)
             setPelisByBusqueda(data.results)
             setPelisByCategoria([])
             console.log(data.results)
            
            
        } catch (error) {
            console.log(error)
            
        }finally{
            setCargando(false)
        }
    }
   
   
   
  return (
    <PeliculaContext.Provider value={{
       categorias,
       obtenerPeliculasByCategoria,
       pelisByCategoria,
       obtenerPeliculasByBusqueda,
       pelisByBusqueda,
       cargando,
       palabra
    }}>
            {children}
    </PeliculaContext.Provider>
  )
}

export default PeliculaContext
