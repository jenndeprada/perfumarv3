import { createContext, useState } from "react";

export const CartContext = createContext();



export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(cart)
    const agregarCarrito = (item) => {
      setCart([...cart, item])
    }

    const estaEnCarrito = (id) => {
        return cart.some((elem)=> 
        elem.id === id
      )
    }
    const totalCantidad = () => {
        return cart.reduce((acum, el) => acum + el.cantidad, 0)
    }


    return(
        <CartContext.Provider value= { {
            cart, agregarCarrito, estaEnCarrito, totalCantidad
          }}>
              {children}
        </CartContext.Provider>
    )
}