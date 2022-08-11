import { Link } from "react-router-dom"
import Swat from "sweetalert2"

// Redux
import { useDispatch } from "react-redux"
import { borrarProductoAction } from "../actions/productoActions"

export const Producto = ({ producto }) => {

    const { nombre, precio, id } = producto
    
	const dispatch = useDispatch()

    const confirmarEliminarProducto = id => {
        // Pregunar al usuario
        Swat.fire({
            title: '¿Estás seguro?',
            text: "Un producto eliminado no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'No, cancelar'
        }).then((result) => {
            if (result.value) {
                // Eliminar el producto
                dispatch(borrarProductoAction(id))
            }
        })
    }

	return (
		<tr>
			<td>{nombre}</td>
			<td>
				<span className="font-weight-bold">{`$ ${precio}`}</span>
			</td>
			<td>
				<Link
					to={`/productos/editar/${id}`}
					className="btn btn-primary mr-2"
				>
					Editar
				</Link>
				<button type="button" className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}
                >
					Eliminar
				</button>
			</td>
		</tr>
	)
}
