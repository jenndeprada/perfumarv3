import React from 'react' 

export const ItemCount = ( {increment, decrement, onAdd, counter} ) => {

    return (
        <div className="d-flex align-items-center bg-dark mx-5 rounded">
            <div className="d-flex align-items-center px-3">
                <div className="p-2">
                    <button className="btn btn-outline-light" onClick={decrement}>-</button>
                </div>
                <div className="px-3">
                    { <span className="text-white">{counter}</span> }
                </div>
                <div className="p-2">
                    <button className="btn btn-outline-light" onClick={increment}>+</button>
                </div>
            </div>
            <div className="px-3">
                
                    <button className="btn btn-outline-light" onClick={onAdd}>Agregar</button>
                
            </div>
        </div>

    )
} 

