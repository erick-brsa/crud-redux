import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { obtenerProductosAction } from "../actions/productoActions"
import { Producto } from "../components"

export const HomePage = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        // Consultar la API
        const cargarProductos = () => dispatch(obtenerProductosAction())    
        cargarProductos()
    } , [])

    // Obtener el state
    const productos = useSelector(({ productos }) => productos.productos)
    const error = useSelector(({ productos }) => productos.error)
    const cargando = useSelector(({ productos }) => productos.cargando)

    return (
        <>
            <h2 className="text-center my-5">
                Listado de Productos
            </h2>
            {error && <p className="alert alert-danger text-center">Hubo un error</p>}
            {cargando && <p className="text-center">Cargando...</p>}
            <div>
                <table className="table table-striped">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.length > 0 && (
                            productos.map(producto => (
                                <Producto 
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
