import Cart from '../CartWidget/cartWidget';
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><Link to="/">Perfumar</Link></a>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/"><Link to="/">Inicio</Link></a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/detail"><Link to="/detail">Detalles</Link></a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/"><Link to="/category">Categorias</Link></a>
                                </li>
                            </ul>
                            <span className="navbar-text">
                                <Link to="/cart">< Cart /></Link>
                            </span>
                        </div>
                    </div>
            </nav>      
        </header>

    )
}

export default NavBar