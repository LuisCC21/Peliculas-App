import { usePeliculas } from "../hooks/usePeliculas"


export const ListCategorias = () => {
    const{categorias}=usePeliculas()
  return (
    categorias.map((categoria)=>(
        <option key={categoria.id} value={categoria.id}>{categoria.name}</option>
    ))
   
  )
}
