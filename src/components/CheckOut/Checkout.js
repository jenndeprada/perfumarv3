import { addDoc, collection, writeBatch, query, where, documentId, getDocs } from "firebase/firestore/lite";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config";

export const Checkout = () => {
    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: "",
        email: "",
        tel: ""
    })

    const {cart, totalCompra, vaciarCarrito} = useContext(CartContext);

    const generarOrden = (buyer) => {
        const order = {
                buyer: buyer,
                items: cart,
                total: totalCompra()
            }
    
        const batch = writeBatch(db)
        const productosRef = collection(db, "productos")
        const ordersRef = collection(db, "orders")
        const q = query(productosRef, where(documentId(), "in", cart.map(el => el.id)))
        console.log(documentId())

        const outOfStock = []

        getDocs(q)
            .then((res) => {
                res.docs.forEach((doc)=> {
                    const itemToUpdate = cart.find((prod) => prod.id === doc.id)
                    if(doc.data().stock >= itemToUpdate.cantidad){
                        batch.update(doc.ref, {stock: doc.data().stock - itemToUpdate.cantidad})
                    } else {
                        outOfStock.push(itemToUpdate)
                    }
                })
                if(outOfStock.length === 0){
                    batch.commit()

                    addDoc(ordersRef, order)
                    .then((res) => {
                        setOrderId(res.id)
                        vaciarCarrito()
                    })

                } else {
                    alert("Hay items sin stock")
                }
            })
    }


    const handleInputChange = (e) => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        generarOrden(values)
        console.log("submitted")
    }


    return(
        
        <div>
            {   orderId
            ? 
                <>
                    <h2>Gracias por comprar</h2>
                    <p>El id de la compra es: {orderId}</p>
                    <Link to="/" className="btn btn-primary"> Volver </Link>
                </>
            :   
                <>
                    <h2>Resumen de Compra</h2>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input className="form-control my-2" placeholder="nombre y apellido" type="text" value={values.nombre} onChange={handleInputChange} name="nombre"></input>
                        <input className="form-control my-2" placeholder="mail" type="email" value={values.email} onChange={handleInputChange} name="email"></input>
                        <input className="form-control my-2" placeholder="telefono" type="tel" value={values.tel} onChange={handleInputChange} name="tel"></input>
                        <button type="submit" className="btn btn-success">Send</button>
                    </form>
                    
                    
                </>
        }
          
        </div>
 
    )
 
} 