export const EditProduct = () => {
    return (
		<div className="row justify-content-center mt-5">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
						</h2>
						<form>
							<div className="form-group">
								<label htmlFor="name">Nombre</label>
								<input 
									id="name"
									type="text" 
									className="form-control"
									placeholder="Nombre Producto"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="price">Precio</label>
								<input 
									id="price"
									type="number" 
									className="form-control"
									placeholder="Nombre Producto"
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
