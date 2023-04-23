import React from 'react'

import { Formulario } from './Formulario'

export const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__heading'>Busca tus Peliculas Preferidas</h1>

      <div className='contenedor'>
        <Formulario />
      </div>
    </header>
  )
}
