import React from 'react'


export const CardPeliculas = ({peli}) => {
    

    const {id,original_title,video,overview,original_language,poster_path }=peli
  return (
    <>
        {overview ?
          <div className='card'>
          <h3 className='card__heading'>{original_title}</h3>
          <div className='card__grid'>
        
            <div className='card__box'>
              {poster_path?  <img className='card__img' src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`imagen ${original_title}`} /> : <p className='card__img-text'>No hay <span className='card__img-span'>Imagen</span> </p>}
            
            </div>
            <div className='card__box'>
              <p className='card__descripcion'>{overview || 'No hay Descripcion'}</p>
              <p className='card__idioma'>Lenguaje: <span className='card__idioma--spam'>{original_language}</span> </p>
              <a href="#" className='card__enlace'>Ver Mas...</a>
            </div>
          </div>
        
        
      </div>:
          <></>
    }
</>
   
  )
}
