import { Link } from 'react-router-dom'

export const HeaderReview = ({ title }) => {
  return (
    <header className='header-detalle'>
      <Link to='/' className='header-detalle__link'>
        Inicio
      </Link>
      <h1 className='header-detalle__heading'>{title}</h1>
    </header>
  )
}
