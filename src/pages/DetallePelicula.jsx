import { HeaderReview } from '../components/HeaderReview'
import { Slider } from '../components/Slider'
import axios from '../helpers/axiosHelper'
import { useLoaderData } from 'react-router-dom'

export const loader = async ({ params }) => {
  const { id } = params

  try {
    const peticionReview = axios(`/movie/${id}?language=es-ES`)
    const peticionRecomends = axios(`/movie/${id}/similar?language=es-ES`)

    const [{ data: dataReview }, { data: dataRecomends }] = await Promise.all([
      peticionReview,
      peticionRecomends,
    ])

    return [dataReview, dataRecomends]
  } catch (error) {
    console.log(error)
  }
}

export const DetallePelicula = () => {
  const [review, recomend] = useLoaderData()

  return (
    <>
      <HeaderReview title={review.title} />
      <main className='main-detalle'>
        <div className='contenedor-descripcion'>
          <p className='contenedor-descripcion__texto'>
            {review.overview || 'No hay Review'}
          </p>
          {review?.poster_path ? (
            <img
              className='card__img'
              src={`https://image.tmdb.org/t/p/w200${review.poster_path}`}
              alt={`imagen ${review.original_title}`}
            />
          ) : (
            <p className='card__img-text'>
              No hay <span className='card__img-span'>Imagen</span>{' '}
            </p>
          )}
        </div>
        <h2 className='heading-recomend'>Películas Recomendadas</h2>

        <div className='container-slider-component'>
          <Slider recomend={recomend.results} />
        </div>
      </main>
    </>
  )
}
