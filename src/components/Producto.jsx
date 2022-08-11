import { Link } from 'react-router-dom'

export const Producto = ({ producto }) => {
  return (
    <tr>
        <td>{producto.nombre}</td>
        <td><span className="font-weight-bold">{`$ ${producto.precio}`}</span></td>
        <td>
            <Link 
                to={`/productos/editar/${producto.id}`} 
                className="btn btn-primary mr-2"
            >
                Editar
            </Link>
            <button
                type="button"
                className="btn btn-danger"
            >
                Eliminar
            </button>
        </td>
    </tr>
  )
}
