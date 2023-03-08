import React from 'react'
import { CardPeliculas } from './CardPeliculas'
import { usePeliculas } from '../hooks/usePeliculas'
import { NoResultados } from './NoResultados'


export const MostrarPelis = () => {
    const {pelisByCategoria,pelisByBusqueda,palabra}= usePeliculas()
  return (
    <main className='peliculas'>

      {
        (pelisByBusqueda.length===0 && pelisByCategoria.length===0 && palabra.length) ? <NoResultados/>:
         (<div className=' peliculas__grid'>

              {(pelisByBusqueda.length ===0 ) ? (pelisByCategoria.map(peli=>(

                  <CardPeliculas key={peli.id} peli={peli}/>
              ))) : 
              (pelisByBusqueda.map(peli=>(

                <CardPeliculas key={peli.id} peli={peli}/>
            )))
              }
              
          </div>)
     
  
      }
     
       
     
        
    </main>
  )
}
