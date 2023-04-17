import { Header } from '../components/Header';
import { MostrarPelis } from '../components/MostrarPelis';
import { Spinner } from '../components/Spinner';

import { usePeliculas } from '../hooks/usePeliculas';

function App() {
  const { cargando } = usePeliculas();

  return (
    <>
      <Header />
      {cargando ? <Spinner /> : <MostrarPelis />}
    </>
  );
}

export default App;
