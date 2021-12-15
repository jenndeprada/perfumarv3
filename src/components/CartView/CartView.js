import { useContext } from "react/cjs/react.development";
import { CartContext } from "../../context/CartContext";
import {BsFillTrashFill} from "react-icons/bs"
import { Link } from "react-router-dom";


export const CartView = () => {

    const {cart, vaciarCarrito, totalCompra, eliminarDelCarrito} = useContext(CartContext)

   console.log(cart)

    return (
        <div className="container">
            {   cart.length === 0
                ?   <div className="container-fluid"> 
                        <h2>Tu carrito esta vacio: </h2>
                        <Link to="/">Seguir comprando</Link>
                    </div>

                : <div className="container-fluid">
                        <h2>Cart View</h2>
                        <hr/>
                        {
                            cart.map( (el) => {
                                return (
                                    <div key={el.id}>
                                    <h3>Nombre: {el.nombre}</h3>
                                    <button className="btn btn-danger" onClick={() => eliminarDelCarrito(el.id)}><BsFillTrashFill/></button>
                                    </div>
                                )
            

                            })
                        }
                        <hr/>
            

                        <h4>Total: ${totalCompra()}</h4>

                        <button onClick={vaciarCarrito} className="btn btn-danger mx-3">Vaciar Carrito</button>
                        <Link to="/checkout" className="btn btn-success">Terminar Compra</Link>
                    </div>    
            }   
            
        </div>
    )
}