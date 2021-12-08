import React, { useState } from 'react' 

export const ItemCount = ( {stock = 10, initial = 0} ) => {

    const [cantidad, setCantidad] = useState(initial) //funcion que contiene dos cosas que destructuro en cantidad y setCantidad

    const handleRestar = () => {
        cantidad > initial && setCantidad( cantidad - 1 ) 
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad( cantidad + 1)
    }

    return (
        <div className="container bg-dark">
            <div className="row p-2 text-center">
                <div className="col">
                    <button className="btn btn-outline-light" onClick={handleRestar}>-</button>
                </div>
                <div className="col">
                    { <span className="text-white" >{cantidad}</span> }
                </div>
                <div className="col">
                    <button className="btn btn-outline-light" onClick={handleSumar}>+</button>
                </div>
            </div>
            <div className="row p-2">
                <div className="col text-center">
                    <button className="btn btn-outline-light ">Agregar</button>
                </div>
            </div>
        </div>

    )
} 

