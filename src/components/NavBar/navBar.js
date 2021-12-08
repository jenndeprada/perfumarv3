import Cart from '../CartWidget/cartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Brand</a>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/">Features</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/">Pricing</a>
                                </li>
                            </ul>
                            <span className="navbar-text">
                                < Cart />
                            </span>
                        </div>
                    </div>
            </nav>      
        </header>

    )
}

export default NavBar