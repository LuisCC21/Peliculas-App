import { Outlet } from 'react-router-dom'
import { Formulario } from './Formulario'

export const LayoutHeader = () => {

  return (
    <header className="header">
        <h1 className="header__heading">Busca tus Peliculas Preferidas</h1>
    
      <div className="contenedor">
        
            <Formulario/>
            <Outlet/>
          

       
      </div>
  

    </header>
  )
}
