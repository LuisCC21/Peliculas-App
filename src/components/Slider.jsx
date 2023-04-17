import { useState } from 'react';
import leftArrow from '../assets/left-arrow-backup-2-svgrepo-com.svg';
import rightArrow from '../assets/right-arrow-backup-2-svgrepo-com.svg';
import { Link, useNavigate } from 'react-router-dom';

export const Slider = ({ recomend }) => {
  const [imgActual, setImgActual] = useState(0);
  const navigate = useNavigate();
  const arrayFiltrado = recomend.filter((pelis) => pelis.poster_path);
  const cantidad = arrayFiltrado.length;

  const siguienteImg = () => {
    setImgActual(imgActual === cantidad - 1 ? 0 : imgActual + 1);
  };
  const anterirorImg = () => {
    setImgActual(imgActual === 0 ? cantidad - 1 : imgActual - 1);
  };

  if (!Array.isArray(recomend) || cantidad === 0) return;
  return (
    <div className='grid-slider'>
      <button className='conteiner-slider__btnL' onClick={anterirorImg}>
        <img src={leftArrow} alt='left arrow' width={30} />
      </button>
      <div className='conteiner-slider'>
        {arrayFiltrado.map((peli, index) => (
          <div
            className={
              imgActual === index
                ? 'conteiner-img-slider active'
                : `conteiner-img-slider`
            }
          >
            {imgActual === index && (
              <>
                <Link
                  to={`/pelicula/${peli.id}`}
                  className='conteiner-slider__link'
                >
                  {peli.original_title}
                </Link>
                <img
                  src={`https://image.tmdb.org/t/p/w200${peli.poster_path}`}
                  key={index}
                  alt={`Imagen ${peli.original_title}`}
                  className='conteiner-slider__img'
                  onClick={() => navigate(`/pelicula/${peli.id}`)}
                />
              </>
            )}
          </div>
        ))}
      </div>
      <button className='conteiner-slider__btnR' onClick={siguienteImg}>
        <img src={rightArrow} alt='right arrow' width={30} />
      </button>
    </div>
  );
};
