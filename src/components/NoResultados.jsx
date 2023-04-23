import React from 'react'
import { usePeliculas } from '../hooks/usePeliculas'

export const NoResultados = () => {
  const { palabra } = usePeliculas()
  return (
    <div className='resultados'>
      <h2 className='resultados__heading'>
        No se encontraron resultados de{' '}
        <span className='resultados__span'>{palabra}</span>{' '}
      </h2>
    </div>
  )
}
