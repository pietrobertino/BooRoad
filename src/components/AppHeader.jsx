import { NavLink } from "react-router-dom"


export default function AppHeader() {


    return (


        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    BooRoad
                </NavLink>
            </div>
        </nav>
    )
}