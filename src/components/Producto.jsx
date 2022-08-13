import { useNavigate } from "react-router-dom"
import Swat from "sweetalert2"

// Redux
import { useDispatch } from "react-redux"
import { borrarProductoAction, obtenerProductoEditar } from "../actions/productoActions"

export const Producto = ({ producto }) => {

    const { nombre, precio, id } = producto
    
	const dispatch = useDispatch()
    const navigate = useNavigate()

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

    // Función que redirige de forma programada
    const redireccionarEdicion = (producto) => {
        dispatch(obtenerProductoEditar(producto))
        navigate(`/productos/editar/${producto.id}`)
    }

	return (
		<tr>
			<td>{nombre}</td>
			<td>
				<span className="font-weight-bold">{`$ ${precio}`}</span>
			</td>
			<td>
				<button
                    type="button"
					className="btn btn-primary mr-2"
                    onClick={() => redireccionarEdicion(producto)}
				>
					Editar
				</button>
				<button type="button" className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}
                >
					Eliminar
				</button>
			</td>
		</tr>
	)
}
