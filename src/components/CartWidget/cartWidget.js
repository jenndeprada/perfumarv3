import React, {useContext} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import "./../CartWidget/cartStyles.css"


const Cart= () => {
    const {totalCantidad} = useContext(CartContext)
    return (
        <div className="cart-widget d-flex align-items-center px-3">
            <FaShoppingCart/>
            <span className="px-3 mx-2 span-costum">{totalCantidad()}</span>
        </div>

    )
}

export default Cart