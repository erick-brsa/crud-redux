export const HomePage = () => {
    return (
        <>
            <h2 className="text-center my-5">
                Listado de Productos
            </h2>
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

                    </tbody>
                </table>
            </div>
        </>
    )
}
