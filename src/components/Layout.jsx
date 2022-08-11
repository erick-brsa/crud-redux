import { Header } from './Header'
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
        <div>
            <Header />
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}
