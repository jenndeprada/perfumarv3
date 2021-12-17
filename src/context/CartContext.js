import { createContext, useState } from "react";

export const CartContext = createContext();



export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(cart)
    const agregarCarrito = (item) => {
      setCart([...cart, item])
    }

    const eliminarDelCarrito = (id) => {
      setCart(cart.filter( (el) => el.id !== id) )
    }

    const estaEnCarrito = (id) => {
        return cart.some((elem)=> 
        elem.id === id
      )
    }
    const totalCantidad = () => {
        return cart.reduce((acum, el) => acum + el.cantidad, 0)
    }
    const totalCompra = () => {
      return cart.reduce((acc, el) => acc + el.cantidad * el.precio, 0)
      console.log(cart)
      
    }

    const vaciarCarrito = () => {
      setCart([])
    }


    return(
        <CartContext.Provider value= { {
            cart, agregarCarrito, estaEnCarrito, totalCantidad, vaciarCarrito, totalCompra, eliminarDelCarrito
          }}>
              {children}
        </CartContext.Provider>
    )
}