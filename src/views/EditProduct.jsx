import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { editarProductoAction } from "../actions/productoActions"
import { useNavigate } from 'react-router-dom';

export const EditProduct = () => {
	const [ producto, setProducto ] = useState({
		nombre: '',
		precio: ''
	})
	
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const productoeditar = useSelector(({ productos }) => productos.productoeditar)

	useEffect(() => {
		setProducto(productoeditar)
	}, [productoeditar])
	
	const handleOnChange = e => {
		setProducto({
			...producto,
			[e.target.name]: e.target.value
		})
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(editarProductoAction(producto))
		navigate('/')
	}

    return (
		<div className="row justify-content-center mt-5">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
						</h2>
						<form
							onSubmit={handleSubmit}
						>
							<div className="form-group">
								<label htmlFor="name">Nombre</label>
								<input 
									id="name"
									name='nombre'
									type="text" 
									className="form-control"
									placeholder="Nombre Producto"
									value={producto.nombre}
									onChange={handleOnChange}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="price">Precio</label>
								<input 
									id="price"
									name='precio'
									type="number" 
									className="form-control"
									placeholder="Nombre Producto"
									value={producto.precio}
									onChange={handleOnChange}
								/>
							</div>
							<button className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Guardar Cambios
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
