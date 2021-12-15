import { useNavigate } from "react-router"
import { ItemCount } from "../ItemCount/itemCount"
import {useCounter} from "../../hook/useCounter"
import { useContext } from "react/cjs/react.development"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export const ItemDetail = ( {idSelected} ) => {

    const {counter, increment, decrement} = useCounter(0,idSelected.stock, 0)

    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }

    const {agregarCarrito, estaEnCarrito} = useContext(CartContext)

    const handleAgregar = () =>{
        counter > 0 && agregarCarrito({
            id: idSelected.id,
            nombre: idSelected.nombre,
            cantidad: counter,
        })
    }

    return (
        <div className="row">
            <div className="col-6">
                <figure className="figure text-center">
                    <img src={`${idSelected.imagen}`} className="figure-img img-fluid rounded" alt="..."/>
                    <figcaption className="figure-caption">{idSelected.descripcion}</figcaption>
                </figure>
            </div>
            <div className="col-6 pt-4">
                <ul className="list-group">
                    <li className="list-group-item active bg-dark" aria-current="true">Nombre: {idSelected.nombre}</li>
                    <li className="list-group-item"> Marca: {idSelected.marca}</li>
                    <li className="list-group-item">Tipo: {idSelected.tipo}</li>
                    <li className="list-group-item">ID: {idSelected.id}</li>
                </ul> 
                <div className="d-flex py-3">   
                    <button className="btn btn-dark" onClick={goBack}>Volver</button>
                    {
                        !estaEnCarrito(idSelected.id)
                    ?  <ItemCount increment= {increment}
                            decrement={decrement}
                            onAdd={handleAgregar}
                            counter={counter}
                        />
                    :  <Link to="/cart"> <button className="btn btn-success mx-3">Terminar compra</button></Link>   
                    }
                </div>
                

            

               

                
            </div>

        </div>

    )
}