import { useContext } from "react/cjs/react.development";
import { CartContext } from "../../context/CartContext";
import {BsFillTrashFill, BsPlusCircleFill} from "react-icons/bs"

import { Link } from "react-router-dom";
import { Item } from "../Item/Item";

export const CartView = () => {

    const {cart, vaciarCarrito, totalCompra, eliminarDelCarrito} = useContext(CartContext)

   console.log(cart)

    return (
        <div className="container">
            {   cart.length === 0
                ?   <div className="container-fluid text-center costum"> 
                        <h2>Tu carrito esta vacio </h2>
                        <Link to="/" className="btn btn-success">Seguir comprando</Link>
                        
                    </div>

                : <div className="container-fluid">
                        <h2>Cart View</h2>
                        <hr/>
                        {
                            cart.map( (el) => {
                                return (
                                    <div key={el.id} className="d-flex p-3">
                                    <ol className="list-group list-group-numbered">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">{el.nombre}
                                        </div>
                                        Descripcion del producto 
                                        </div>
                                        <span className="badge bg-primary rounded-pill">{el.cantidad}</span>
                                        
                                    </li>
                                    </ol>
                                    <div className="d-flex align-items-center p-4">
                                      <button className="btn btn-danger" onClick={() => eliminarDelCarrito(el.id)}><BsFillTrashFill/></button>
                                      <Link className="btn btn-success mx-3" to="/"><BsPlusCircleFill/></Link>
                            
                                    </div>
                                    
                                    
                                    
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