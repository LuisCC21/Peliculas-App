import React, { useState } from 'react'
import { usePeliculas } from '../hooks/usePeliculas'
import { ListCategorias } from './ListCategorias'

export const Formulario = () => {
  const { obtenerPeliculasByCategoria, obtenerPeliculasByBusqueda } =
    usePeliculas()
  const [busqueda, setBusqueda] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!busqueda) return

    obtenerPeliculasByBusqueda(busqueda)
  }
  return (
    <form className='header-form__grid' onSubmit={handleSubmit}>
      <div className='form-grid'>
        <div className='form__campo'>
          <label htmlFor='btncategoria' className='form__label'>
            Seleccione Categoria:{' '}
          </label>
          <select
            name=''
            id='btncategoria'
            className='form__select'
            onChange={(e) => {
              obtenerPeliculasByCategoria(e.target.value)
              setBusqueda('')
            }}
          >
            <option value=''>-- Categoria --</option>
            <ListCategorias />
          </select>
        </div>

        <div className='form__campo'>
          <label htmlFor='btnbuscar' className='form__label'>
            Buscar Aqui:{' '}
          </label>
          <input
            type='text'
            id='btnbuscar'
            placeholder={'Busca tus peliculas'}
            className='form__texto'
            onChange={(e) => setBusqueda(e.target.value)}
            value={busqueda}
          />
        </div>
      </div>

      <input type='submit' value={'Buscar'} className='header__submit' />
    </form>
  )
}
