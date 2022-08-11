import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage, NewProduct, EditProduct } from "./views"
import { Layout } from "./components" 
// Redux
import { Provider } from "react-redux"
import store from "./store"

const App = () => {

	return (
		<BrowserRouter>
			<Provider store={store}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="/productos/nuevo" element={<NewProduct />} />
						<Route path="/productos/editar/:id" element={<EditProduct />} />
					</Route>
				</Routes>
			</Provider>
		</BrowserRouter>
	)
}

export default App
