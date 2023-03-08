
import { LayoutHeader } from "./components/LayoutHeader"
import { MostrarPelis } from "./components/MostrarPelis"

import { Spinner } from "./components/Spinner"

import { usePeliculas } from "./hooks/usePeliculas"



function App() {
  
  const {cargando,pelisByBusqueda,pelisByCategoria} = usePeliculas()


  return (
    <>
      <LayoutHeader/>
      { cargando ? <Spinner/>:<MostrarPelis/>} 
      
    </>

    
  )
}

export default App
