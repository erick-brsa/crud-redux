// Actions de Redux
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { crearNuevoProductoAction } from '../actions/productoActions'

export const NewProduct = () => {	

	// State del componente
	const [ name, setName ] = useState('')
	const [ price, setPrice ] = useState(0)

	// Utilizar useDispatch y te crea una función
	const dispatch = useDispatch()

	// Mandar llamar el action de productoAction
	const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto))

	// Cuando el usuario haga submit 
	const handleSubmitNewProduct = (e) => {
		e.preventDefault()

		// Validar formulario
		if (name.trim() === '' || price <= 0) {
			return
		}

		// Si no hay errores
		

		// Crear nuevo producto
		agregarProducto({ name, price})
	}

	return (
		<div className="row justify-content-center mt-5">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">
							Agregar Nuevo Producto
						</h2>
						<form
							onSubmit={handleSubmitNewProduct}
						>
							<div className="form-group">
								<label htmlFor="name">Nombre</label>
								<input 
									id="name"
									type="text" 
									className="form-control"
									placeholder="Nombre Producto"
									value={name}
									onChange={e => setName(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="price">Precio</label>
								<input 
									id="price"
									type="number" 
									className="form-control"
									placeholder="Nombre Producto"
									value={price}
									onChange={e => setPrice(Number(e.target.value))}
								/>
							</div>
							<button className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
								Agregar Producto
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}