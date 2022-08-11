import { Link } from "react-router-dom"
export const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between text-white">
			<h1>
				<Link to="/" className="text-white style-none">
					CRUD REACT, REDUX, REST API & AXIOS
				</Link>
			</h1>
			<Link 
                to="/productos/nuevo"
                className="btn btn-success nuevo-post d-block d-md-inline-block"
            >
                Agregar Producto &#43;
            </Link>
		</nav>
	)
}
